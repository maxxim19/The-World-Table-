const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

const adjective = {
  Germany: 'German',
  Japan: 'Japanese',
  Mexico: 'Mexican',
  Italy: 'Italian',
  Greece: 'Greek',
  France: 'French',
  Spain: 'Spanish',
  Argentina: 'Argentine',
  Custom: 'Custom'
};

// Each combination gets its own concise menu-and-cellar idea so the selector
// feels like a real preview instead of a generic sentence.
const pairingText = {
  'Germany-France': 'Sauerbraten, red cabbage and spätzle with Burgundy Pinot Noir, followed by Black Forest cherry torte with Sauternes.',
  'Germany-Germany': 'A deeply German table of braised beef, spätzle and seasonal sides with dry Riesling, Silvaner and German Pinot Noir.',
  'Germany-Spain': 'Rich German classics balanced by bright Cava, Rioja and a dry sherry — a warmer, more playful take on the traditional table.',
  'Germany-Italy': 'Braised meats, spätzle and roasted vegetables paired with Alto Adige whites, Barbera and a restrained Italian digestif.',
  'Germany-Argentina': 'Comforting German dishes with high-altitude Malbec, Cabernet Franc and crisp Argentine whites to cut through the richness.',

  'Japan-France': 'Delicate Japanese courses paired with Champagne, Chablis and Burgundy — elegant, mineral and built around subtle flavors.',
  'Japan-Germany': 'Japanese seafood, rice and seasonal vegetables with dry Riesling, Silvaner and light German Pinot Noir.',
  'Japan-Spain': 'A seasonal Japanese menu with crisp Cava, mineral Spanish whites and a dry sherry selected course by course.',
  'Japan-Italy': 'Clean Japanese flavors paired with Franciacorta, alpine Italian whites and lighter reds chosen to stay precise and food-forward.',
  'Japan-Argentina': 'Japanese courses meet high-altitude Argentine whites, delicate Pinot Noir and a restrained sparkling pour for the opening courses.',

  'Mexico-France': 'Mexican flavors — citrus, chile, char and slow-cooked meats — paired with Champagne, Rhône reds and a bright French dessert wine.',
  'Mexico-Germany': 'Bright Mexican courses with dry Riesling, German Pinot Noir and crisp aromatic whites that handle chile, citrus and smoke beautifully.',
  'Mexico-Spain': 'A natural match of vibrant Mexican dishes with Cava, Rioja and sherry, moving from bright and crisp to smoky and savory.',
  'Mexico-Italy': 'Regional Mexican dishes paired with Franciacorta, mineral Italian whites and juicy northern reds chosen around spice and char.',
  'Mexico-Argentina': 'Regional Mexican dishes with high-altitude Argentine reds, bright whites and a mezcal finish built around smoke and spice.',

  'Italy-France': 'Italian courses paired with Champagne, Burgundy and a final sweet wine — classic European flavors with a polished French cellar.',
  'Italy-Germany': 'A seasonal Italian menu with dry Riesling, German Pinot Noir and aromatic whites that keep the table bright and precise.',
  'Italy-Spain': 'Italian antipasti, pasta and roasted mains paired with Cava, Rioja and sherry for a lively Mediterranean progression.',
  'Italy-Italy': 'A fully Italian table: regional pasta, roasted mains and dessert matched with sparkling wine, native whites and elegant regional reds.',
  'Italy-Argentina': 'Italian comfort and technique paired with Argentine Malbec, Cabernet Franc and high-altitude whites for a generous, modern table.',

  'Greece-France': 'Greek mezze, herbs, grilled seafood and lamb paired with Champagne, mineral French whites and a supple Rhône red.',
  'Greece-Germany': 'Fresh Greek herbs, lemon, seafood and grilled meats with dry Riesling and German Pinot Noir for a crisp, aromatic pairing.',
  'Greece-Spain': 'A Mediterranean table of mezze and grilled dishes with Cava, Albariño, Rioja and a savory sherry accent.',
  'Greece-Italy': 'Greek olive oil, herbs, seafood and grilled meats paired with Italian sparkling wine, mineral whites and lighter regional reds.',
  'Greece-Argentina': 'Greek grilled dishes and bright mezze paired with high-altitude Argentine whites and fresh, savory reds that suit herbs and smoke.'
};

const kitchen = document.getElementById('kitchen');
const cellar = document.getElementById('cellar');
const kitchenName = document.getElementById('kitchen-name');
const cellarName = document.getElementById('cellar-name');
const pairingCopy = document.getElementById('pairing-copy');
const planPairing = document.getElementById('plan-pairing');
const foodInput = document.getElementById('food-input');
const wineInput = document.getElementById('wine-input');
const detailsInput = document.getElementById('details-input');
const inquirySection = document.getElementById('inquire');

function customPairingText(kitchenValue, cellarValue) {
  if (kitchenValue === 'Custom' && cellarValue === 'Custom') {
    return 'Tell us the places, flavors or memories you want at the table and we’ll build both the menu and cellar around them.';
  }

  if (kitchenValue === 'Custom') {
    return `Bring us the food or place you have in mind and we’ll build the menu around it, then match it with a ${adjective[cellarValue]} cellar course by course.`;
  }

  if (cellarValue === 'Custom') {
    return `We’ll start with a ${adjective[kitchenValue]} menu, then build a completely custom wine and spirits program around the dishes, guests and mood.`;
  }

  return `A custom ${adjective[kitchenValue]} menu paired with ${adjective[cellarValue]} wines and spirits selected to work course by course.`;
}

function pairingLabel() {
  if (!kitchen || !cellar) return '';
  const kitchenLabel = kitchen.value === 'Custom' ? 'Custom kitchen' : `${adjective[kitchen.value]} kitchen`;
  const cellarLabel = cellar.value === 'Custom' ? 'Custom cellar' : `${adjective[cellar.value]} cellar`;
  return `${kitchenLabel} · ${cellarLabel}`;
}

function updatePairing() {
  if (!kitchen || !cellar || !kitchenName || !cellarName || !pairingCopy) return;

  kitchenName.textContent = adjective[kitchen.value] || kitchen.value;
  cellarName.textContent = adjective[cellar.value] || cellar.value;

  const key = `${kitchen.value}-${cellar.value}`;
  pairingCopy.textContent = pairingText[key] || customPairingText(kitchen.value, cellar.value);

  if (planPairing) {
    planPairing.setAttribute('aria-label', `Plan the ${pairingLabel()} pairing`);
  }
}

kitchen?.addEventListener('change', updatePairing);
cellar?.addEventListener('change', updatePairing);
updatePairing();

planPairing?.addEventListener('click', () => {
  const label = pairingLabel();

  const kitchenLabel = kitchen?.value === 'Custom' ? 'Custom kitchen' : `${adjective[kitchen?.value] || kitchen?.value} kitchen`;
  const cellarLabel = cellar?.value === 'Custom' ? 'Custom cellar' : `${adjective[cellar?.value] || cellar?.value} cellar`;

  if (foodInput) {
    foodInput.value = kitchenLabel;
    foodInput.classList.add('prefilled');
    window.setTimeout(() => foodInput.classList.remove('prefilled'), 1400);
  }
  if (wineInput) {
    wineInput.value = cellarLabel;
    wineInput.classList.add('prefilled');
    window.setTimeout(() => wineInput.classList.remove('prefilled'), 1400);
  }

  // Keep the event-details field completely separate from the pairing description.
  // The guest can use it only for venue, occasion, dietary needs, or other notes.
  inquirySection?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  window.setTimeout(() => {
    foodInput?.focus({ preventScroll: true });
  }, 650);
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();


// Premium, restrained motion. Everything still works if JavaScript is disabled.
requestAnimationFrame(() => document.body.classList.add('is-ready'));

const revealTargets = [
  ...document.querySelectorAll('.intro > *, .section-heading > *, .experience-card, .pairing-copy > *, .pairing-card, .format-card, .occasion-list article, .story-image, .story-copy > *, .process-grid article, .inquire-copy > *, .inquiry-form')
];

revealTargets.forEach((element, index) => {
  element.classList.add('reveal-item');
  if (element.matches('.story-image, .inquire-copy')) element.classList.add('reveal-left');
  if (element.matches('.story-copy > *, .inquiry-form')) element.classList.add('reveal-right');
  if (element.matches('.experience-card:nth-child(2), .format-card:nth-child(2)')) element.classList.add('reveal-delay-1');
  if (element.matches('.experience-card:nth-child(3)')) element.classList.add('reveal-delay-2');
});

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -4% 0px' });
  revealTargets.forEach((element) => revealObserver.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add('is-visible'));
}

// Very light parallax only on larger pointers/screens; mobile keeps the original composition.
const heroMedia = document.querySelector('.hero-media');
const atmosphereMedia = document.querySelector('.atmosphere-media');
const atmosphereSection = document.querySelector('.atmosphere');
const canParallax = window.matchMedia('(min-width: 921px) and (pointer: fine)');

function applyParallax() {
  if (!canParallax.matches) return;
  const y = window.scrollY;
  if (heroMedia && y < window.innerHeight * 1.25) {
    heroMedia.style.translate = `0 ${Math.min(y * 0.10, 70)}px`;
  }
  if (atmosphereMedia && atmosphereSection) {
    const rect = atmosphereSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      atmosphereMedia.style.translate = `0 ${(progress - .5) * 46}px`;
    }
  }
}
window.addEventListener('scroll', applyParallax, { passive: true });
applyParallax();

// Country cards now act as an elegant entry point into the pairing configurator.
document.querySelectorAll('.card-explore[data-kitchen]').forEach((button) => {
  button.addEventListener('click', () => {
    if (!kitchen) return;
    const requestedKitchen = button.dataset.kitchen;
    if ([...kitchen.options].some((option) => option.value === requestedKitchen)) {
      kitchen.value = requestedKitchen;
      updatePairing();
      document.getElementById('pairings')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      window.setTimeout(() => kitchen.focus({ preventScroll: true }), 650);
    }
  });
});

// Animate the result itself when a pairing changes, instead of snapping instantly.
const pairingResult = document.querySelector('.pairing-result');
const pairingCard = document.querySelector('.pairing-card');
function animatePairingUpdate() {
  if (!pairingResult) return;
  pairingResult.classList.add('is-changing');
  pairingCard?.classList.remove('pairing-active');
  window.setTimeout(() => {
    updatePairing();
    pairingResult.classList.remove('is-changing');
    pairingCard?.classList.add('pairing-active');
  }, 180);
}

// Replace the earlier direct listeners so changes use the premium transition.
if (kitchen && cellar) {
  kitchen.removeEventListener('change', updatePairing);
  cellar.removeEventListener('change', updatePairing);
  kitchen.addEventListener('change', animatePairingUpdate);
  cellar.addEventListener('change', animatePairingUpdate);
  pairingCard?.classList.add('pairing-active');
}
