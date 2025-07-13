const PRODUCTS = [
  { id: "1", title: "El poder del ahora", price: 1000, image: "https://picsum.photos/200", category: "autoayuda", description: "Un libro esencial para vivir el presente." },
  { id: "2", title: "Motívate cada día", price: 1200, image: "https://picsum.photos/200", category: "motivacion", description: "Frases y ejercicios para mantenerte motivado." },
  { id: "3", title: "Psicología positiva", price: 1500, image: "https://picsum.photos/200", category: "psicologia", description: "Descubre cómo la psicología puede ayudarte a ser feliz." },
  { id: "4", title: "Sé tu mejor versión", price: 1100, image: "https://picsum.photos/200", category: "autoayuda", description: "Herramientas para el crecimiento personal." },
  { id: "5", title: "Despierta tu gigante interior", price: 1300, image: "https://picsum.photos/200", category: "motivacion", description: "Motivación para alcanzar tus metas." },
  { id: "6", title: "Mente sana", price: 1400, image: "https://picsum.photos/200", category: "psicologia", description: "Claves para una mente saludable." },
];

export function getProducts(category) {
  return new Promise(resolve => {
    setTimeout(() => {
      if (category) {
        resolve(PRODUCTS.filter(p => p.category === category));
      } else {
        resolve(PRODUCTS);
      }
    }, 500);
  });
}

export function getProductById(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(PRODUCTS.find(p => p.id === id));
    }, 500);
  });
}