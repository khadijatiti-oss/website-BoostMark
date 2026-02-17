document.addEventListener('alpine:init', () => {
  Alpine.data('testimonials', () => ({
    current: 0,
    testimonials: [
      { text: '"Site live en 7j, 1er client gagné semaine 2"', author: 'Graphiste, Casablanca' },
      { text: '"Portfolio pro + leads auto, ROI immédiat"', author: 'Dev Fullstack, Rabat' },
      { text: '"Support 24/7, qualité agence prix freelance"', author: 'Marketeuse, Marrakech' }
    ],
    next() { this.current = (this.current + 1) % this.testimonials.length; },
    prev() { this.current = (this.current - 1 + this.testimonials.length) % this.testimonials.length; }
  }))
  
  // CTA WhatsApp
  document.querySelectorAll('.cta').forEach(btn => {
    btn.addEventListener('click', () => {
      window.open('https://wa.me/212612345678?text=Bonjour%21%20Je%20veux%20mon%20site%20BoostMark', '_blank');
    });
  });
});
