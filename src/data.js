export const profile = {
  name: 'Cesar Enrique Uc Aguilar',
  role: 'Estudiante de Ingeniería en Tecnología de Software',
  school: 'Diseño Web · Facultad de Ingeniería, Universidad Autónoma de Campeche · 5.º semestre',
  city: 'Campeche, México',
  about:
    'Este portafolio reúne lo que construí en Diseño Web este semestre: de maquetar con HTML y CSS puros a consumir APIs con JavaScript y armar interfaces con Tailwind y React. Cada trabajo tiene una demo que puedes abrir.',
  github: '', // ej. https://github.com/tu-usuario
}

export const areas = ['Todos', 'HTML y CSS', 'JavaScript', 'APIs y AJAX', 'Frameworks']

// demo: enlace para abrir el trabajo · repo: enlace al código (opcional)
export const projects = [
  {
    title: 'Maqueta con dos layouts',
    area: 'HTML y CSS',
    stack: ['HTML', 'CSS', 'Flexbox'],
    text: 'Una sola página HTML con dos hojas de estilo externas: cambiar el enlace al CSS cambia por completo el diseño, con o sin barra lateral. Sin frameworks ni librerías de estilos.',
    demo: 'demos/maqueta/index.html',
  },
  {
    title: 'Mi red social',
    area: 'HTML y CSS',
    stack: ['HTML', 'CSS', 'Trabajo en equipo'],
    text: 'Sitio de varias páginas con publicaciones, perfil propio y perfiles de amigos, todo con una hoja de estilos compartida. Lo desarrollé con tres compañeros.',
    demo: 'demos/red-social/index.html'
  },
  {
    title: 'Escapa de Beyoncé',
    area: 'JavaScript',
    stack: ['JavaScript', 'DOM', 'Eventos', 'GitHub Pages'],
    text: 'Juego de navegador: mueves un cuadro con las flechas mientras un enemigo te persigue. Incluye detección de colisiones y un panel para ajustar velocidades, color de fondo, música y volumen.',
    demo: 'https://al067599-max.github.io/Ejercicio-Escapa-de-Beyonce/',
    repo: 'https://github.com/al067599-max/Ejercicio-Escapa-de-Beyonce',
  },
  {
    title: 'Pokédex',
    area: 'APIs y AJAX',
    stack: ['JavaScript', 'fetch', 'PokéAPI', 'Bootstrap', 'localStorage'],
    text: 'Parte del Poké Dashboard. Busca un Pokémon por nombre o número (con botón o Enter) y encadena tres consultas a PokéAPI para mostrar sprite, descripción en español, cadena evolutiva con ramas y Megaevoluciones. Guarda lo consultado en localStorage como caché, así no repite peticiones.',
    demo: 'demos/pokedex/index.html',
  },
  {
    title: 'Guía informativa con Tailwind',
    area: 'Frameworks',
    stack: ['Tailwind CSS', 'JavaScript', 'GitHub Pages'],
    text: 'Guía de referencia sobre un género musical, maquetada con Tailwind. Las tarjetas de bandas salen de un arreglo en JavaScript y se filtran por categoría; si una imagen no carga, se dibuja una portada de respaldo en SVG.',
    demo: 'demos/guia-informativa/index.html',
  },
  {
    title: 'Este portafolio',
    area: 'Frameworks',
    stack: ['React', 'Vite', 'CSS'],
    text: 'Una sola página hecha con componentes de React, con filtro por área y datos separados de la interfaz para actualizar los proyectos editando un solo archivo.',
  },
]

export const skills = [
  ['Estructura y estilo', 'HTML, CSS, Flexbox, layouts con hojas externas'],
  ['JavaScript', 'DOM, eventos, fetch, JSON, localStorage'],
  ['Frameworks', 'React, Tailwind CSS, Bootstrap'],
  ['Publicación', 'Git, GitHub, GitHub Pages y Vercel'],
]
