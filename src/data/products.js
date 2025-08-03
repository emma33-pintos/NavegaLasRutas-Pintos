const PRODUCTS = [
  { id: "1", title: "El poder del ahora", price: 5000, image:"/img/elpodeldelahora.jpeg" , category: "autoayuda", description: "Un libro esencial para vivir el presente." },
  { id: "2", title: "Una inspiración para cada día", price: 7500, image: "/img/unainspiracionparacadadia.jpeg", category: "motivacion", description: "Frases y ejercicios para mantenerte motivado." },
  { id: "3", title: "Psicología positiva", price: 4200, image: "/img/psicologiapositiva.jpg", category: "psicologia", description: "Descubre cómo la psicología puede ayudarte a ser feliz." },
  { id: "4", title: "Ser la mejor versión", price: 11000, image: "/img/serlamejorversion.jpg", category: "autoayuda", description: "Herramientas para el crecimiento personal." },
  { id: "5", title: "Despertando al gigante interior", price: 8000, image: "/img/despertandoalgiganteinterior.jpg", category: "motivacion", description: "Motivación para alcanzar tus metas." },
  { id: "6", title: "Cambia tu mente, sana tu cuerpo", price: 10000, image: "/img/cambia tu mente sana tu cuerpo.jpg", category: "psicologia", description: "Claves para una mente saludable." },
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