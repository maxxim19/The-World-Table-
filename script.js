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
  Germany: 'German', Japan: 'Japanese', Mexico: 'Mexican', Italy: 'Italian',
  Greece: 'Greek', France: 'French', Spain: 'Spanish', Argentina: 'Argentine', Custom: 'Custom'
};

const pairingText = {
  'Germany-France': 'Sauerbraten, red cabbage and spätzle with Burgundy Pinot Noir, followed by Black Forest cherry torte with Sauternes.',
  'Japan-Spain': 'A seasonal Japanese menu paired with crisp cava, mineral whites and a dry sherry selected course by course.',
  'Mexico-Argentina': 'Regional Mexican dishes with high-altitude Argentine reds, bright whites and a mezcal finish.',
  'Italy-France': 'Italian courses paired with Champagne, Burgundy and a final sweet wine chosen around dessert.',
};

const kitchen = document.getElementById('kitchen');
const cellar = document.getElementById('cellar');
const kitchenName = document.getElementById('kitchen-name');
const cellarName = document.getElementById('cellar-name');
const pairingCopy = document.getElementById('pairing-copy');

function updatePairing() {
  if (!kitchen || !cellar) return;
  kitchenName.textContent = adjective[kitchen.value] || kitchen.value;
  cellarName.textContent = adjective[cellar.value] || cellar.value;
  const key = `${kitchen.value}-${cellar.value}`;
  pairingCopy.textContent = pairingText[key] || `A custom ${adjective[kitchen.value] || kitchen.value} menu paired with ${adjective[cellar.value] || cellar.value} wines and spirits selected to work course by course.`;
}

kitchen?.addEventListener('change', updatePairing);
cellar?.addEventListener('change', updatePairing);
updatePairing();

document.getElementById('year').textContent = new Date().getFullYear();
