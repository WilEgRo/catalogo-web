/**
 * Catálogo 9º Aniversario La Martina
 * Main JavaScript Application (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // CONFIGURATION
  // ==========================================
  // Puedes colocar tu número de WhatsApp aquí con código de país (ejemplo Bolivia: '59170000000').
  // Si lo dejas vacío (''), WhatsApp abrirá para que el cliente elija el contacto o responderá a tu chat directamente.
  const WHATSAPP_PHONE = '59179801307';

  // ==========================================
  // STATE MANAGEMENT
  // ==========================================
  let activeCategory = 'todos';
  let searchQuery = '';
  let selectedIds = new Set();

  // Load cart from LocalStorage
  try {
    const saved = localStorage.getItem('la_martina_cart_anniversary');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        selectedIds = new Set(parsed);
      }
    }
  } catch (e) {
    console.error('Error loading cart from storage', e);
  }

  // ==========================================
  // DOM ELEMENTS
  // ==========================================
  const coursesGrid = document.getElementById('coursesGrid');
  const noResultsState = document.getElementById('noResultsState');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const categoriesBar = document.getElementById('categoriesBar');
  const resultsCountEl = document.getElementById('resultsCount');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');
  
  // Cart Nav & Floating
  const cartToggleBtn = document.getElementById('cartToggleBtn');
  const cartCountBadge = document.getElementById('cartCountBadge');
  const floatingCartBtn = document.getElementById('floatingCartBtn');
  const floatingCartBadge = document.getElementById('floatingCartBadge');

  // Drawer
  const cartDrawer = document.getElementById('cartDrawer');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const cartItemsList = document.getElementById('cartItemsList');
  const drawerEmptyState = document.getElementById('drawerEmptyState');
  const drawerFooter = document.getElementById('drawerFooter');
  const drawerBadge = document.getElementById('drawerBadge');
  const drawerTotalCount = document.getElementById('drawerTotalCount');
  const clearAllCartBtn = document.getElementById('clearAllCartBtn');
  const whatsappCheckoutBtn = document.getElementById('whatsappCheckoutBtn');
  const continueShoppingBtn = document.getElementById('continueShoppingBtn');

  // Lightbox
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCategory = document.getElementById('lightboxCategory');
  const lightboxAddBtn = document.getElementById('lightboxAddBtn');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');
  let activeLightboxCourse = null;

  // Toast
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  const toastIcon = document.getElementById('toastIcon');
  let toastTimer = null;

  // ==========================================
  // UTILITIES
  // ==========================================
  function normalizeText(text) {
    if (!text) return '';
    return text.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  function saveCart() {
    try {
      localStorage.setItem('la_martina_cart_anniversary', JSON.stringify(Array.from(selectedIds)));
    } catch (e) {
      console.error('Error saving cart', e);
    }
  }

  function showToast(message, type = 'success') {
    if (toastTimer) clearTimeout(toastTimer);
    toastMessage.textContent = message;
    if (type === 'success') {
      toastIcon.className = 'fa-solid fa-check';
      toastIcon.style.color = 'var(--color-whatsapp)';
    } else {
      toastIcon.className = 'fa-solid fa-trash-can';
      toastIcon.style.color = 'var(--color-danger)';
    }
    toastNotification.classList.add('show');
    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 2400);
  }

  // ==========================================
  // CART ACTIONS
  // ==========================================
  function toggleCourseSelection(courseId) {
    const course = COURSES_DATA.find(c => c.id === courseId);
    if (!course) return;

    if (selectedIds.has(courseId)) {
      selectedIds.delete(courseId);
      showToast(`Eliminado: ${course.title}`, 'danger');
    } else {
      selectedIds.add(courseId);
      showToast(`Añadido: ${course.title}`, 'success');
    }

    saveCart();
    updateCartUI();
    renderCourses();
    updateLightboxBtnState();
  }

  function removeCourseFromCart(courseId) {
    if (selectedIds.has(courseId)) {
      const course = COURSES_DATA.find(c => c.id === courseId);
      selectedIds.delete(courseId);
      saveCart();
      updateCartUI();
      renderCourses();
      updateLightboxBtnState();
      if (course) showToast(`Eliminado: ${course.title}`, 'danger');
    }
  }

  // Custom Confirm Dialog Elements
  const confirmModal = document.getElementById('confirmModal');
  const confirmCancelBtn = document.getElementById('confirmCancelBtn');
  const confirmAcceptBtn = document.getElementById('confirmAcceptBtn');

  function openConfirmDialog() {
    if (selectedIds.size === 0) return;
    confirmModal.classList.add('open');
  }

  function closeConfirmDialog() {
    confirmModal.classList.remove('open');
  }

  confirmCancelBtn.addEventListener('click', closeConfirmDialog);
  confirmModal.querySelector('.confirm-backdrop').addEventListener('click', closeConfirmDialog);

  confirmAcceptBtn.addEventListener('click', () => {
    selectedIds.clear();
    saveCart();
    updateCartUI();
    renderCourses();
    updateLightboxBtnState();
    closeConfirmDialog();
    showToast('Tu pedido ha sido vaciado', 'danger');
  });

  function clearCart() {
    openConfirmDialog();
  }

  function updateCartUI() {
    const count = selectedIds.size;
    cartCountBadge.textContent = count;
    floatingCartBadge.textContent = count;
    drawerBadge.textContent = `${count} curso${count === 1 ? '' : 's'}`;
    drawerTotalCount.textContent = `${count} curso${count === 1 ? '' : 's'}`;

    // Floating Button visibility
    if (count > 0) {
      floatingCartBtn.style.display = 'flex';
    } else {
      floatingCartBtn.style.display = 'flex';
    }

    // Render Drawer items
    if (count === 0) {
      cartItemsList.style.display = 'none';
      drawerFooter.style.display = 'none';
      drawerEmptyState.style.display = 'flex';
    } else {
      cartItemsList.style.display = 'flex';
      drawerFooter.style.display = 'block';
      drawerEmptyState.style.display = 'none';

      // Build cart list HTML
      const selectedCourses = COURSES_DATA.filter(c => selectedIds.has(c.id));
      cartItemsList.innerHTML = selectedCourses.map(course => `
        <div class="cart-item-card">
          <img src="${course.image}" alt="${course.title}" class="cart-item-thumb" loading="lazy">
          <div class="cart-item-details">
            <span class="cart-item-category">${course.category}</span>
            <h4 class="cart-item-title" title="${course.title}">${course.title}</h4>
          </div>
          <button class="cart-item-remove-btn" data-id="${course.id}" title="Eliminar del pedido">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `).join('');

      // Add remove listeners
      cartItemsList.querySelectorAll('.cart-item-remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = parseInt(btn.getAttribute('data-id'));
          removeCourseFromCart(id);
        });
      });
    }
  }

  // ==========================================
  // DRAWER OPEN / CLOSE
  // ==========================================
  function openDrawer() {
    cartDrawer.classList.add('open');
    cartBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    cartDrawer.classList.remove('open');
    cartBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  cartToggleBtn.addEventListener('click', openDrawer);
  floatingCartBtn.addEventListener('click', openDrawer);
  closeDrawerBtn.addEventListener('click', closeDrawer);
  cartBackdrop.addEventListener('click', closeDrawer);
  continueShoppingBtn.addEventListener('click', closeDrawer);

  // ==========================================
  // WHATSAPP LINK GENERATOR
  // ==========================================
  whatsappCheckoutBtn.addEventListener('click', () => {
    if (selectedIds.size === 0) {
      showToast('Selecciona al menos un curso para enviar tu pedido', 'danger');
      return;
    }

    const selectedCourses = COURSES_DATA.filter(c => selectedIds.has(c.id));
    
    // Group or list by numbers
    let message = `¡Hola La Martina! 🎉✨\n`;
    message += `Ya seleccioné los siguientes cursos de la promoción del *9º Aniversario*:\n\n`;

    selectedCourses.forEach((course, index) => {
      message += `${index + 1}. *${course.title}* (${course.category})\n`;
    });

    message += `\n📌 *Total seleccionado:* ${selectedCourses.length} curso(s)\n`;
    message += `Quiero adquirir estos cursos ¿Me envia el QR para realizar el pago por favor?\n`;
    message += `¡Muchas gracias!`;

    const encodedText = encodeURIComponent(message);
    let url = '';
    if (WHATSAPP_PHONE) {
      const cleanPhone = WHATSAPP_PHONE.replace(/[^0-9]/g, '');
      url = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodedText}`;
    } else {
      url = `https://api.whatsapp.com/send?text=${encodedText}`;
    }

    window.open(url, '_blank');
  });

  clearAllCartBtn.addEventListener('click', clearCart);

  // ==========================================
  // LIGHTBOX (Full Art Preview)
  // ==========================================
  function openLightbox(course) {
    activeLightboxCourse = course;
    lightboxImg.src = course.image;
    lightboxTitle.textContent = course.title;
    lightboxCategory.textContent = course.category;
    updateLightboxBtnState();
    lightboxModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('open');
    activeLightboxCourse = null;
    document.body.style.overflow = '';
  }

  function updateLightboxBtnState() {
    if (!activeLightboxCourse) return;
    const isSelected = selectedIds.has(activeLightboxCourse.id);
    if (isSelected) {
      lightboxAddBtn.innerHTML = '<i class="fa-solid fa-check"></i> En tu pedido (Quitar)';
      lightboxAddBtn.style.background = 'var(--color-danger)';
    } else {
      lightboxAddBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Añadir a mi pedido';
      lightboxAddBtn.style.background = 'var(--color-primary)';
    }
  }

  lightboxAddBtn.addEventListener('click', () => {
    if (activeLightboxCourse) {
      toggleCourseSelection(activeLightboxCourse.id);
    }
  });

  closeLightboxBtn.addEventListener('click', closeLightbox);
  lightboxModal.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeDrawer();
    }
  });

  // ==========================================
  // FILTERING & RENDERING
  // ==========================================
  function getFilteredCourses() {
    const normSearch = normalizeText(searchQuery);

    return COURSES_DATA.filter(course => {
      // Category check
      const matchesCategory = (activeCategory === 'todos') || (course.category === activeCategory);
      if (!matchesCategory) return false;

      // Search check
      if (normSearch) {
        const normTitle = normalizeText(course.title);
        const normCat = normalizeText(course.category);
        return normTitle.includes(normSearch) || normCat.includes(normSearch);
      }

      return true;
    });
  }

  function renderCourses() {
    const filtered = getFilteredCourses();

    resultsCountEl.textContent = `Mostrando ${filtered.length} de ${COURSES_DATA.length} cursos`;

    if (filtered.length === 0) {
      coursesGrid.innerHTML = '';
      noResultsState.style.display = 'block';
      return;
    }

    noResultsState.style.display = 'none';

    coursesGrid.innerHTML = filtered.map(course => {
      const isSelected = selectedIds.has(course.id);
      return `
        <article class="course-card ${isSelected ? 'is-selected' : ''}" data-id="${course.id}">
          <div class="card-media" title="Ver arte en tamaño completo">
            <span class="card-badge">${course.category}</span>
            <img src="${course.image}" alt="${course.title}" loading="lazy">
            <div class="card-zoom-overlay">
              <i class="fa-solid fa-expand"></i>
            </div>
          </div>
          <div class="card-body">
            <h3 class="card-title" title="${course.title}">${course.title}</h3>
            <button class="btn-toggle-cart" data-id="${course.id}" aria-label="${isSelected ? 'Quitar del pedido' : 'Añadir al pedido'}">
              <i class="${isSelected ? 'fa-solid fa-check' : 'fa-solid fa-plus'}"></i>
              <span>${isSelected ? 'En tu pedido' : 'Añadir al pedido'}</span>
            </button>
          </div>
        </article>
      `;
    }).join('');

    // Attach click events on newly rendered cards
    coursesGrid.querySelectorAll('.course-card').forEach(card => {
      const id = parseInt(card.getAttribute('data-id'));
      const course = COURSES_DATA.find(c => c.id === id);

      // Media click -> Open Lightbox
      card.querySelector('.card-media').addEventListener('click', () => {
        if (course) openLightbox(course);
      });

      // Button click -> Toggle cart
      card.querySelector('.btn-toggle-cart').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleCourseSelection(id);
      });
    });
  }

  // ==========================================
  // EVENT LISTENERS (Search & Category Pills)
  // ==========================================
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    clearSearchBtn.style.display = searchQuery ? 'flex' : 'none';
    renderCourses();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.style.display = 'none';
    searchInput.focus();
    renderCourses();
  });

  resetFiltersBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.style.display = 'none';
    activeCategory = 'todos';
    document.querySelectorAll('.cat-pill').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.cat-pill[data-category="todos"]').classList.add('active');
    renderCourses();
  });

  categoriesBar.querySelectorAll('.cat-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      categoriesBar.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');
      renderCourses();
    });
  });

  // ==========================================
  // INITIALIZATION
  // ==========================================
  updateCartUI();
  renderCourses();

});
