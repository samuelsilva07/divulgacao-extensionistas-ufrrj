/* ==========================================================================
   UFRRJ — Vanilla JS (ES6+)
   - Toggle do menu mobile
   - Marcação do link ativo
   - FAQ (accordion) com delegação de eventos
   ========================================================================== */

(() => {
  'use strict';

  /** Marca o link ativo baseado no pathname atual. */
  const markActiveNav = () => {
    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    const current = path.endsWith('.html')
      ? path.split('/').pop()
      : 'index.html';

    document.querySelectorAll('.site-nav__link').forEach((link) => {
      const href = link.getAttribute('href');
      if (href === current) {
        link.classList.add('site-nav__link--active');
        link.setAttribute('aria-current', 'page');
      }
    });
  };

  /** Toggle do menu mobile. */
  const initMobileMenu = () => {
    const toggle = document.querySelector('[data-menu-toggle]');
    const menu = document.querySelector('[data-menu]');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('site-nav--open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Fecha ao clicar em qualquer link interno
    menu.addEventListener('click', (event) => {
      if (event.target.closest('.site-nav__link')) {
        menu.classList.remove('site-nav--open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  };

  /** FAQ via delegação de eventos. */
  const initFaq = () => {
    const faq = document.querySelector('[data-faq]');
    if (!faq) return;

    faq.addEventListener('click', (event) => {
      const trigger = event.target.closest('.faq__trigger');
      if (!trigger) return;

      const item = trigger.closest('.faq__item');
      if (!item) return;

      const willOpen = !item.classList.contains('faq__item--open');

      // Comportamento "single collapsible": fecha os demais
      faq.querySelectorAll('.faq__item--open').forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove('faq__item--open');
          const t = openItem.querySelector('.faq__trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('faq__item--open', willOpen);
      trigger.setAttribute('aria-expanded', String(willOpen));
    });
  };

  /** Atualiza ano no rodapé. */
  const updateFooterYear = () => {
    const el = document.querySelector('[data-year]');
    if (el) el.textContent = String(new Date().getFullYear());
  };

  document.addEventListener('DOMContentLoaded', () => {
    markActiveNav();
    initMobileMenu();
    initFaq();
    updateFooterYear();
  });
})();
