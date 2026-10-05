"use strict";

const WHATSAPP_NUMBER = "6281234567890";

const currency = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

const openWhatsApp = (message) => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];

const closeMenu = () => {
  if (!menuToggle || !nav) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Buka menu navigasi");
  nav.classList.remove("open");
  document.body.classList.remove("menu-open");
};

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Buka menu navigasi" : "Tutup menu navigasi",
  );
  nav?.classList.toggle("open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

window.addEventListener(
  "scroll",
  () => header?.classList.toggle("scrolled", window.scrollY > 18),
  { passive: true },
);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const sections = document.querySelectorAll("main section[id]");
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`,
          );
        });
      });
    },
    { rootMargin: "-35% 0px -58% 0px" },
  );
  sections.forEach((section) => sectionObserver.observe(section));
}

const orderForm = document.querySelector("[data-order-form]");
const productSelect = document.querySelector("[data-product]");
const totalOutput = document.querySelector("[data-total]");
const quantityOutput = document.querySelector("[data-quantity]");
const minusButton = document.querySelector("[data-qty-minus]");
const plusButton = document.querySelector("[data-qty-plus]");
let quantity = 1;

const selectedPrice = () => {
  const option = productSelect?.selectedOptions[0];
  return Number(option?.dataset.price || 0);
};

const updateTotal = () => {
  if (!totalOutput) return;
  totalOutput.textContent = currency.format(selectedPrice() * quantity);
};

const setQuantity = (nextQuantity) => {
  quantity = Math.max(1, Math.min(20, nextQuantity));
  if (quantityOutput) quantityOutput.textContent = String(quantity);
  updateTotal();
};

productSelect?.addEventListener("change", updateTotal);
minusButton?.addEventListener("click", () => setQuantity(quantity - 1));
plusButton?.addEventListener("click", () => setQuantity(quantity + 1));

document.querySelectorAll("[data-order]").forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.dataset.order;
    if (productSelect && productName) {
      const matchingOption = [...productSelect.options].find(
        (option) => option.value === productName,
      );
      if (matchingOption) {
        productSelect.value = productName;
        updateTotal();
        document.querySelector("#pesan")?.scrollIntoView({ behavior: "smooth" });
        window.setTimeout(() => productSelect.focus(), 650);
        return;
      }
    }

    openWhatsApp(
      `Halo EXO Tea, saya ingin memesan ${productName}. Apakah tersedia?`,
    );
  });
});

orderForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(orderForm);
  const product = formData.get("product");
  const sugar = formData.get("sugar");
  const ice = formData.get("ice");
  const note = String(formData.get("note") || "").trim();
  const total = currency.format(selectedPrice() * quantity);

  const message = [
    "Halo EXO Tea, saya ingin memesan:",
    "",
    `Minuman: ${product}`,
    `Jumlah: ${quantity} gelas`,
    `Gula: ${sugar}`,
    `Es: ${ice}`,
    note ? `Catatan: ${note}` : null,
    `Total perkiraan: ${total}`,
    "",
    "Apakah pesanan ini tersedia?",
  ]
    .filter(Boolean)
    .join("\n");

  openWhatsApp(message);
});

document.querySelectorAll(".accordion-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const wasOpen = button.getAttribute("aria-expanded") === "true";

    document.querySelectorAll(".accordion-item button").forEach((item) => {
      item.setAttribute("aria-expanded", "false");
    });

    if (!wasOpen) button.setAttribute("aria-expanded", "true");
  });
});

updateTotal();