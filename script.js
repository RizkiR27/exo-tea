/**
 * EXO TEA - Official Interactive Script
 * Pure Vanilla JavaScript (ES6+)
 * 
 * Pengaturan nomor WhatsApp dan data produk dapat diubah dengan mudah di bawah.
 */

// ==========================================
// 1. GLOBAL CONFIGURATION (KONFIGURASI UTAMA)
// ==========================================
const EXO_CONFIG = {
  // Nomor WhatsApp admin/gerai (format: kode negara 62 + nomor tanpa awalan 0)
  whatsappNumber: '6281234567890',
  
  // Tanggal berakhir promo (dapat disesuaikan)
  // Format: YYYY-MM-DDTHH:mm:ss
  promoEndDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000),

  // Nama Brand
  brandName: 'EXO Tea'
};

// ==========================================
// 2. DATA PRODUK (PRODUCT CATALOG)
// ==========================================
const PRODUCTS_DATA = [
  {
    id: 'p1',
    name: 'Original Tea',
    category: 'tea-series',
    categoryLabel: 'Tea Series',
    description: 'Teh melati seduh segar dengan aroma harum dan rasa sepet-manis autentik.',
    longDescription: 'Diracik langsung dari daun teh melati asli pilihan nusantara. Memiliki karakter aroma wangi bunga melati alami dengan cita rasa sepet-manis khas teh Indonesia yang menyejukkan dahaga.',
    price: 8000,
    largeSizePrice: 10000,
    image: './assets/images/tea_brewing_leaves_1791182189628.jpg',
    rating: 4.8,
    badge: 'Tradisional',
    isBestSeller: false
  },
  {
    id: 'p2',
    name: 'Lemon Tea',
    category: 'fruit-tea',
    categoryLabel: 'Fruit Tea',
    description: 'Perasan lemon asli segar dipadukan dengan racikan teh hitam pilihan.',
    longDescription: 'Perasan jeruk lemon kuning segar asli yang dipadukan secara seimbang dengan seduhan teh hitam pilihan. Memberikan sensasi kesegaran asam-manis yang membangkitkan semangat seketika.',
    price: 10000,
    largeSizePrice: 13000,
    image: './assets/images/fruit_tea_lemon_lychee_1791182142092.jpg',
    rating: 4.9,
    badge: 'Best Seller',
    isBestSeller: true
  },
  {
    id: 'p3',
    name: 'Lychee Tea',
    category: 'fruit-tea',
    categoryLabel: 'Fruit Tea',
    description: 'Sensasi manis lembut buah leci tropis dipadukan dengan kesegaran teh dingin.',
    longDescription: 'Kombinasi harum buah leci manis dengan aroma teh berkualitas yang disajikan dengan es batu dingin melimpah. Sangat cocok menemani momen istirahat dan berkumpul santai.',
    price: 12000,
    largeSizePrice: 15000,
    image: './assets/images/hero_tea_showcase_1791182129153.jpg',
    rating: 4.9,
    badge: 'Best Seller',
    isBestSeller: true
  },
  {
    id: 'p4',
    name: 'Peach Tea',
    category: 'fruit-tea',
    categoryLabel: 'Fruit Tea',
    description: 'Teh buah persik aromatik dengan rasa segar manis asam yang seimbang.',
    longDescription: 'Ekstrak buah persik juicy dengan aroma fruity yang wangi semerbak, berpadu lembut dengan racikan teh dingin. Pilihan elegan untuk menaikkan mood harianmu.',
    price: 12000,
    largeSizePrice: 15000,
    image: './assets/images/peach_mango_tea_1791182172146.jpg',
    rating: 4.8,
    badge: 'Populer',
    isBestSeller: false
  },
  {
    id: 'p5',
    name: 'Mango Tea',
    category: 'fruit-tea',
    categoryLabel: 'Fruit Tea',
    description: 'Paduan ekstrak mangga harum manis dengan teh seduh dingin menyegarkan.',
    longDescription: 'Kelezatan buah mangga tropis harum manis yang menyatu dengan kesegaran seduhan teh dingin. Sensasi rasa buah yang tebal dan sangat nikmat diminum dingin.',
    price: 11000,
    largeSizePrice: 14000,
    image: './assets/images/peach_mango_tea_1791182172146.jpg',
    rating: 4.7,
    badge: '',
    isBestSeller: false
  },
  {
    id: 'p6',
    name: 'Strawberry Tea',
    category: 'fruit-tea',
    categoryLabel: 'Fruit Tea',
    description: 'Kesegaran stroberi manis asam yang dipadukan dengan teh melati dingin.',
    longDescription: 'Karakter buah stroberi segar dengan rasa manis-asam memikat, dipadukan dengan base teh melati dingin untuk sensasi buah yang ceria di setiap tegukan.',
    price: 11000,
    largeSizePrice: 14000,
    image: './assets/images/fruit_tea_lemon_lychee_1791182142092.jpg',
    rating: 4.8,
    badge: '',
    isBestSeller: false
  },
  {
    id: 'p7',
    name: 'Milk Tea Gula Aren',
    category: 'milk-tea',
    categoryLabel: 'Milk Tea',
    description: 'Perpaduan teh susu creamy dengan manis gurih gula aren murni Indonesia.',
    longDescription: 'Signature milk tea EXO Tea! Diracik dari daun teh pekat pilihan dicampur susu segar creamy dan lelehan gula aren murni khas nusantara. Manisnya pas, gurih, dan tidak membuat enek.',
    price: 13000,
    largeSizePrice: 16000,
    image: './assets/images/milk_tea_gula_aren_1791182158332.jpg',
    rating: 5.0,
    badge: 'Best Seller',
    isBestSeller: true
  },
  {
    id: 'p8',
    name: 'Thai Tea Creamy',
    category: 'milk-tea',
    categoryLabel: 'Milk Tea',
    description: 'Racikan daun teh Thailand autentik dengan susu kental manis lembut.',
    longDescription: 'Daun teh Thailand berkualitas tinggi yang diseduh pekat dengan aroma rempah khas, disatukan dengan susu kental manis dan susu evaporasi untuk kelembutan rasa autentik.',
    price: 12000,
    largeSizePrice: 15000,
    image: './assets/images/milk_tea_gula_aren_1791182158332.jpg',
    rating: 4.8,
    badge: 'Favorit',
    isBestSeller: false
  }
];

// Helper: Format Rupiah
function formatRupiah(number) {
  return 'Rp' + number.toLocaleString('id-ID');
}

// ==========================================
// 3. APPLICATION INITIALIZATION (DOM READY)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initNavbar();
  initStatsCounter();
  initProductsMenu();
  initProductModal();
  initPromoCountdown();
  initTestimonialCarousel();
  initGalleryLightbox();
  initFaqAccordion();
  initContactForm();
  initBackToTop();
});

// ==========================================
// 4. PRELOADER
// ==========================================
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('fade-out');
    }, 400);
  });

  // Fallback timeout in case window load event already fired
  setTimeout(() => {
    if (!preloader.classList.contains('fade-out')) {
      preloader.classList.add('fade-out');
    }
  }, 1200);
}

// ==========================================
// 5. NAVBAR, SCROLL SPY & MOBILE MENU
// ==========================================
function initNavbar() {
  const header = document.getElementById('header');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const siteNav = document.getElementById('site-nav');
  const navBackdrop = document.getElementById('nav-backdrop');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll header styling
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Scroll Spy active link detection
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentSectionId = section.getAttribute('id') || '';
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile menu toggle
  const toggleMobileNav = (open) => {
    const shouldOpen = open !== undefined ? open : !siteNav?.classList.contains('open');
    if (shouldOpen) {
      siteNav?.classList.add('open');
      hamburgerBtn?.classList.add('is-active');
      hamburgerBtn?.setAttribute('aria-expanded', 'true');
      navBackdrop?.classList.add('show');
      document.body.classList.add('modal-open');
    } else {
      siteNav?.classList.remove('open');
      hamburgerBtn?.classList.remove('is-active');
      hamburgerBtn?.setAttribute('aria-expanded', 'false');
      navBackdrop?.classList.remove('show');
      document.body.classList.remove('modal-open');
    }
  };

  hamburgerBtn?.addEventListener('click', () => toggleMobileNav());
  navBackdrop?.addEventListener('click', () => toggleMobileNav(false));

  // Close mobile nav on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMobileNav(false);
    });
  });
}

// ==========================================
// 6. ANIMATED STATS COUNTER
// ==========================================
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  let hasAnimated = false;

  const animateCounters = () => {
    statNumbers.forEach(el => {
      const target = parseFloat(el.getAttribute('data-target') || '0');
      const suffix = el.getAttribute('data-suffix') || '';
      const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      const duration = 1600; // ms
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = easeOut * target;

        if (decimals > 0) {
          el.textContent = currentVal.toFixed(decimals) + suffix;
        } else {
          el.textContent = Math.floor(currentVal).toLocaleString('id-ID') + suffix;
        }

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          if (decimals > 0) {
            el.textContent = target.toFixed(decimals) + suffix;
          } else {
            el.textContent = target.toLocaleString('id-ID') + suffix;
          }
        }
      };

      requestAnimationFrame(updateCount);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('statistik');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

// ==========================================
// 7. MENU & CATEGORY FILTER
// ==========================================
let currentActiveCategory = 'all';

function initProductsMenu() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const productsGrid = document.getElementById('products-grid');

  if (!productsGrid) return;

  // Render initial products
  renderProducts('all');

  // Filter tab clicks
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const category = tab.getAttribute('data-category') || 'all';
      currentActiveCategory = category;
      renderProducts(category);
    });
  });
}

function renderProducts(category) {
  const productsGrid = document.getElementById('products-grid');
  if (!productsGrid) return;

  let filtered = PRODUCTS_DATA;
  if (category === 'best-seller') {
    filtered = PRODUCTS_DATA.filter(p => p.isBestSeller);
  } else if (category !== 'all') {
    filtered = PRODUCTS_DATA.filter(p => p.category === category);
  }

  productsGrid.innerHTML = '';

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--color-text-muted);">
        <p>Belum ada produk untuk kategori ini.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(product => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('data-id', product.id);

    const badgeHtml = product.badge
      ? `<span class="product-badge">${escapeHtml(product.badge)}</span>`
      : '';

    card.innerHTML = `
      <div class="product-media">
        ${badgeHtml}
        <img 
          src="${product.image}" 
          alt="Segelas minuman ${escapeHtml(product.name)} dari EXO Tea" 
          loading="lazy" 
          width="400" 
          height="300"
        >
      </div>
      <div class="product-content">
        <div class="product-category-row">
          <span class="product-category">${escapeHtml(product.categoryLabel)}</span>
          <span class="product-rating">★ ${product.rating.toFixed(1)}</span>
        </div>
        <h3 class="product-title">${escapeHtml(product.name)}</h3>
        <p class="product-desc">${escapeHtml(product.description)}</p>
        <div class="product-footer">
          <div class="product-price-box">
            <span class="price-kicker">Mulai dari</span>
            <span class="product-price">${formatRupiah(product.price)}</span>
          </div>
          <div class="card-actions">
            <button type="button" class="btn btn-outline btn-sm view-detail-btn" data-id="${product.id}" aria-label="Lihat detail rasa dan pilihan ukuran ${escapeHtml(product.name)}">
              Detail
            </button>
            <button type="button" class="btn btn-primary btn-sm quick-order-btn" data-id="${product.id}" aria-label="Pesan ${escapeHtml(product.name)} sekarang">
              Pesan
            </button>
          </div>
        </div>
      </div>
    `;

    productsGrid.appendChild(card);
  });

  // Attach click listeners to cards
  productsGrid.querySelectorAll('.view-detail-btn, .quick-order-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const productId = btn.getAttribute('data-id');
      if (productId) {
        openProductModal(productId);
      }
    });
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, function(m) {
    switch (m) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&#39;';
      default: return m;
    }
  });
}

// ==========================================
// 8. MODAL DETAIL PRODUK & WHATSAPP GENERATOR
// ==========================================
let activeModalProduct = null;
let currentQuantity = 1;

function initProductModal() {
  const modal = document.getElementById('product-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const form = document.getElementById('product-order-form');
  const qtyDecrease = document.getElementById('qty-decrease');
  const qtyIncrease = document.getElementById('qty-increase');
  const qtyInput = document.getElementById('order-quantity');
  const submitWaBtn = document.getElementById('modal-submit-wa');

  if (!modal) return;

  // Close handlers
  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    activeModalProduct = null;
  };

  closeBtn?.addEventListener('click', closeModal);

  // Close when clicking modal backdrop
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // Stepper handlers
  qtyDecrease?.addEventListener('click', () => {
    if (currentQuantity > 1) {
      currentQuantity--;
      if (qtyInput) qtyInput.value = currentQuantity.toString();
      updateModalTotal();
    }
  });

  qtyIncrease?.addEventListener('click', () => {
    if (currentQuantity < 50) {
      currentQuantity++;
      if (qtyInput) qtyInput.value = currentQuantity.toString();
      updateModalTotal();
    }
  });

  // Size radio change
  form?.querySelectorAll('input[name="product-size"]').forEach(radio => {
    radio.addEventListener('change', () => {
      updateModalTotal();
    });
  });

  // Submit via WhatsApp
  submitWaBtn?.addEventListener('click', () => {
    if (!activeModalProduct) return;

    const sizeInput = form?.querySelector('input[name="product-size"]:checked');
    const sugarInput = form?.querySelector('input[name="sugar-level"]:checked');
    const iceInput = form?.querySelector('input[name="ice-level"]:checked');
    const notesInput = document.getElementById('order-notes');

    const isLarge = sizeInput?.value === 'large';
    const sizeLabel = isLarge ? 'Besar (22 oz)' : 'Reguler (16 oz)';
    const unitPrice = isLarge ? activeModalProduct.largeSizePrice : activeModalProduct.price;
    const totalPrice = unitPrice * currentQuantity;

    const sugarText = sugarInput?.value || 'Normal';
    const iceText = iceInput?.value || 'Es Normal';
    const notesText = notesInput?.value?.trim() || 'Tidak ada catatan';

    // Construct clear, structured Indonesian WhatsApp message
    const waText = 
`Halo ${EXO_CONFIG.brandName}, saya ingin memesan minuman segar:

*Detail Pesanan:*
• Produk: *${activeModalProduct.name}*
• Ukuran: ${sizeLabel}
• Tingkat Gula: ${sugarText}
• Pilihan Es: ${iceText}
• Jumlah: *${currentQuantity} cup*
• Catatan: _${notesText}_

*Total Pesanan:* ${formatRupiah(totalPrice)}

Mohon konfirmasi ketersediaan dan informasi pembayaran/alamat pengantaran. Terima kasih!`;

    const waUrl = `https://wa.me/${EXO_CONFIG.whatsappNumber}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  });
}

function openProductModal(productId) {
  const modal = document.getElementById('product-modal');
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!modal || !product) return;

  activeModalProduct = product;
  currentQuantity = 1;

  // Set Modal Elements
  const modalImg = document.getElementById('modal-product-image');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-product-title');
  const modalRatingScore = document.getElementById('modal-rating-score');
  const modalDesc = document.getElementById('modal-description');
  const modalPriceReg = document.getElementById('modal-price-regular');
  const modalPriceLarge = document.getElementById('modal-price-large');
  const qtyInput = document.getElementById('order-quantity');
  const notesInput = document.getElementById('order-notes');
  const badgeContainer = document.getElementById('modal-badge-container');

  if (modalImg) {
    modalImg.src = product.image;
    modalImg.alt = product.name;
  }
  if (modalCategory) modalCategory.textContent = product.categoryLabel;
  if (modalTitle) modalTitle.textContent = product.name;
  if (modalRatingScore) modalRatingScore.textContent = `${product.rating.toFixed(1)} / 5.0`;
  if (modalDesc) modalDesc.textContent = product.longDescription || product.description;
  if (modalPriceReg) modalPriceReg.textContent = formatRupiah(product.price);
  if (modalPriceLarge) modalPriceLarge.textContent = formatRupiah(product.largeSizePrice);
  if (qtyInput) qtyInput.value = '1';
  if (notesInput) notesInput.value = '';

  if (badgeContainer) {
    badgeContainer.innerHTML = product.badge
      ? `<span class="product-badge" style="top: 14px; left: 14px;">${escapeHtml(product.badge)}</span>`
      : '';
  }

  // Reset default radio selections
  const regRadio = document.querySelector('input[name="product-size"][value="regular"]');
  if (regRadio) regRadio.checked = true;

  const normalSugar = document.querySelector('input[name="sugar-level"][value="Gula Normal (100%)"]');
  if (normalSugar) normalSugar.checked = true;

  const normalIce = document.querySelector('input[name="ice-level"][value="Es Normal"]');
  if (normalIce) normalIce.checked = true;

  updateModalTotal();

  // Show Modal
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function updateModalTotal() {
  if (!activeModalProduct) return;

  const sizeInput = document.querySelector('input[name="product-size"]:checked');
  const isLarge = sizeInput?.value === 'large';
  const unitPrice = isLarge ? activeModalProduct.largeSizePrice : activeModalProduct.price;
  const total = unitPrice * currentQuantity;

  const totalEl = document.getElementById('modal-total-price');
  if (totalEl) {
    totalEl.textContent = formatRupiah(total);
  }
}

// ==========================================
// 9. PROMO COUNTDOWN TIMER
// ==========================================
function initPromoCountdown() {
  const daysEl = document.getElementById('countdown-days');
  const hoursEl = document.getElementById('countdown-hours');
  const minutesEl = document.getElementById('countdown-minutes');
  const secondsEl = document.getElementById('countdown-seconds');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const updateCountdown = () => {
    const now = new Date().getTime();
    const target = EXO_CONFIG.promoEndDate.getTime();
    const distance = target - now;

    if (distance <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// ==========================================
// 10. TESTIMONIALS CAROUSEL
// ==========================================
function initTestimonialCarousel() {
  const track = document.getElementById('testimonial-track');
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');
  const dotsContainer = document.getElementById('carousel-dots');

  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoplayTimer = null;

  // Create dot indicators
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Buka ulasan ke-${idx + 1}`);
      dot.addEventListener('click', () => {
        goToSlide(idx);
        restartAutoplay();
      });
      dotsContainer.appendChild(dot);
    });
  }

  const updateSlidePosition = () => {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update active classes on slides
    slides.forEach((slide, idx) => {
      if (idx === currentIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // Update dots
    const dots = dotsContainer?.querySelectorAll('.carousel-dot');
    dots?.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  };

  const goToSlide = (index) => {
    currentIndex = (index + totalSlides) % totalSlides;
    updateSlidePosition();
  };

  prevBtn?.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
    restartAutoplay();
  });

  nextBtn?.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
    restartAutoplay();
  });

  // Autoplay
  const startAutoplay = () => {
    autoplayTimer = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 5500);
  };

  const stopAutoplay = () => {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  };

  const restartAutoplay = () => {
    stopAutoplay();
    startAutoplay();
  };

  // Pause on hover
  track.addEventListener('mouseenter', stopAutoplay);
  track.addEventListener('mouseleave', startAutoplay);

  // Touch Swipe Support
  let startX = 0;
  let endX = 0;

  track.addEventListener('touchstart', (e) => {
    stopAutoplay();
    startX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        goToSlide(currentIndex + 1);
      } else {
        goToSlide(currentIndex - 1);
      }
    }
    startAutoplay();
  }, { passive: true });

  startAutoplay();
}

// ==========================================
// 11. GALLERY LIGHTBOX
// ==========================================
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (!lightbox || !galleryItems.length) return;

  let currentGalleryIndex = 0;
  const galleryData = Array.from(galleryItems).map(item => {
    const img = item.querySelector('img');
    const caption = item.getAttribute('data-caption') || img?.alt || '';
    return {
      src: img?.src || '',
      caption: caption
    };
  });

  const showLightboxImage = (index) => {
    currentGalleryIndex = (index + galleryData.length) % galleryData.length;
    const item = galleryData[currentGalleryIndex];
    if (lightboxImg) lightboxImg.src = item.src;
    if (lightboxCaption) lightboxCaption.textContent = item.caption;
  };

  const openLightbox = (index) => {
    showLightboxImage(index);
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  galleryItems.forEach((item, idx) => {
    item.addEventListener('click', () => openLightbox(idx));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(idx);
      }
    });
  });

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', () => showLightboxImage(currentGalleryIndex - 1));
  nextBtn?.addEventListener('click', () => showLightboxImage(currentGalleryIndex + 1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showLightboxImage(currentGalleryIndex - 1);
    if (e.key === 'ArrowRight') showLightboxImage(currentGalleryIndex + 1);
  });
}

// ==========================================
// 12. FAQ ACCORDION
// ==========================================
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');

    trigger?.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all other accordion items (accordion discipline)
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherTrigger = otherItem.querySelector('.faq-trigger');
          const otherPanel = otherItem.querySelector('.faq-panel');
          otherTrigger?.setAttribute('aria-expanded', 'false');
          if (otherPanel) otherPanel.style.maxHeight = '0px';
        }
      });

      // Toggle clicked item
      if (isOpen) {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
        if (panel) panel.style.maxHeight = '0px';
      } else {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        if (panel) panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
}

// ==========================================
// 13. CONTACT FORM VALIDATION & WHATSAPP
// ==========================================
function initContactForm() {
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const phoneInput = document.getElementById('contact-phone');
  const topicInput = document.getElementById('contact-topic');
  const messageInput = document.getElementById('contact-message');

  const nameError = document.getElementById('name-error');
  const phoneError = document.getElementById('phone-error');
  const topicError = document.getElementById('topic-error');
  const messageError = document.getElementById('message-error');
  const successBanner = document.getElementById('form-success-banner');

  if (!form) return;

  const validatePhone = (phone) => {
    // Clean string from spaces, dashes
    const cleaned = phone.replace(/[\s-]/g, '');
    // Indonesian phone regex: starts with 08, 628, +628, min 9 digits, max 15 digits
    return /^(?:\+62|62|0)8[1-9][0-9]{6,11}$/.test(cleaned);
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset errors
    [nameError, phoneError, topicError, messageError].forEach(el => {
      if (el) el.textContent = '';
    });
    [nameInput, phoneInput, topicInput, messageInput].forEach(el => {
      el?.classList.remove('has-error');
    });

    // Name Validation
    const nameVal = nameInput?.value.trim() || '';
    if (!nameVal || nameVal.length < 3) {
      if (nameError) nameError.textContent = 'Silakan masukkan nama lengkap minimal 3 karakter.';
      nameInput?.classList.add('has-error');
      isValid = false;
    }

    // Phone Validation
    const phoneVal = phoneInput?.value.trim() || '';
    if (!phoneVal) {
      if (phoneError) phoneError.textContent = 'Nomor WhatsApp wajib diisi.';
      phoneInput?.classList.add('has-error');
      isValid = false;
    } else if (!validatePhone(phoneVal)) {
      if (phoneError) phoneError.textContent = 'Format nomor tidak valid (contoh: 081234567890).';
      phoneInput?.classList.add('has-error');
      isValid = false;
    }

    // Topic Validation
    const topicVal = topicInput?.value || '';
    if (!topicVal) {
      if (topicError) topicError.textContent = 'Silakan pilih salah satu topik.';
      topicInput?.classList.add('has-error');
      isValid = false;
    }

    // Message Validation
    const msgVal = messageInput?.value.trim() || '';
    if (!msgVal || msgVal.length < 5) {
      if (messageError) messageError.textContent = 'Pesan wajib diisi minimal 5 karakter.';
      messageInput?.classList.add('has-error');
      isValid = false;
    }

    if (!isValid) return;

    // Format auto WhatsApp message
    const formattedMessage = 
`Halo ${EXO_CONFIG.brandName}, saya telah mengisi formulir kontak di website:

*Nama:* ${nameVal}
*No. WhatsApp:* ${phoneVal}
*Topik:* ${topicVal}

*Pesan:*
"${msgVal}"

Mohon respon dan informasinya. Terima kasih!`;

    if (successBanner) {
      successBanner.style.display = 'block';
    }

    setTimeout(() => {
      const waUrl = `https://wa.me/${EXO_CONFIG.whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      form.reset();
      if (successBanner) {
        setTimeout(() => {
          successBanner.style.display = 'none';
        }, 5000);
      }
    }, 700);
  });
}

// ==========================================
// 14. BACK TO TOP BUTTON
// ==========================================
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
