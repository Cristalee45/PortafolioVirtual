// EDITA AQUÍ tus proyectos. Las rutas se escriben desde la carpeta Portafolio.
// Puedes añadir capturas o videos a "medios". No se requiere base de datos.
const proyectos = [
  {id:'hiuk',titulo:'HIUK · Sitio web corporativo',categoria:'Desarrollo',tipo:'Sitio web empresarial · Estadías TSU',descripcion:'Diseño y desarrollo del sitio web corporativo de la marca HIUK para Vemequim durante mis estadías profesionales de TSU. Incluye inicio, catálogo filtrable por categorías, servicios, información de contacto y navegación adaptable.',etiquetas:['HTML5','Bootstrap','JavaScript','Diseño responsivo'],medios:[
    'assets/imagenes/proyectos-web/hiuk/inicio.png',
    'assets/imagenes/proyectos-web/hiuk/pie-pagina.png',
    'assets/imagenes/proyectos-web/hiuk/productos.png',
    'assets/imagenes/proyectos-web/hiuk/servicios.png',
    'assets/imagenes/proyectos-web/hiuk/contacto.png'
  ],enlace:'https://hiuk.mx/'},
  {id:'poster-investigacion',titulo:'Cartel de investigación · Primer lugar 2025',categoria:'Multimedia',tipo:'Diseño editorial · Reconocimiento',descripcion:'Diseño de cartel académico «Rescate de la lengua náhuatl y la tradición del temazcal en Tlaxcala», presentado en un concurso de carteles de investigación en 2025, donde obtuvo el primer lugar.',etiquetas:['Diseño editorial','Investigación','Primer lugar · 2025'],medios:[
    'assets/imagenes/proyectos-diseno/cartel-investigacion-2025.jpg'
  ]},
  { id:'study', titulo:'Study.DAI', categoria:'Desarrollo', tipo:'PWA · Aplicación móvil', descripcion:'Plataforma universitaria progresiva para estudiantes y docentes. Incluye paneles por rol, administración de materias y grupos, actividades, calificaciones y mensajería. Diseñada para su uso desde computadoras y dispositivos móviles.', etiquetas:['React','Supabase','JavaScript','CSS'], medios:[
    'assets/imagenes/proyectos-web/study/panel-estudiante.jpg',
    'assets/imagenes/proyectos-web/study/materias.jpg',
    'assets/imagenes/proyectos-web/study/grupos.jpg',
    'assets/imagenes/proyectos-web/study/panel-docente.jpg',
    'assets/imagenes/proyectos-web/study/mensajes.jpg'
  ]},
  {id:'ecommerce',titulo:'BITE ME',categoria:'Desarrollo',tipo:'E-commerce',descripcion:'Sitio de comercio electrónico para un negocio de comida rápida. Presenta un catálogo de productos, carrito de compras, formulario de contacto y panel administrativo para gestionar productos.',etiquetas:['Laravel','MySQL','XAMPP','JavaScript','CSS'],medios:[
    'assets/imagenes/proyectos-web/bite-me/menu.jpg',
    'assets/imagenes/proyectos-web/bite-me/carrito.jpg',
    'assets/imagenes/proyectos-web/bite-me/administracion.jpg',
    'assets/imagenes/proyectos-web/bite-me/contacto.jpg'
  ]},
  {id:'blender',titulo:'Modelados 3D con Blender',categoria:'Multimedia',tipo:'Modelado tridimensional',descripcion:'Galería de modelados 3D realizados en Blender: calavera, personajes, arquitectura, casa temática de Halloween y paisaje natural.',etiquetas:['Blender','Modelado 3D'],medios:[
    'assets/imagenes/proyectos-3d/blender/personaje-femenino.png',
    'assets/imagenes/proyectos-3d/blender/calavera.png',
    'assets/imagenes/proyectos-3d/blender/arquitectura.png',
    'assets/imagenes/proyectos-3d/blender/personaje-masculino.png',
    'assets/imagenes/proyectos-3d/blender/casa-halloween.png',
    'assets/imagenes/proyectos-3d/blender/paisaje-montana.png'
  ]},
  {id:'wynns',titulo:'Catálogo publicitario WYNN’S',categoria:'Multimedia',tipo:'Diseño gráfico · Catálogo',descripcion:'Diseño y elaboración de un catálogo publicitario para la marca WYNN’S en Adobe Photoshop, con composiciones gráficas para promocionar productos automotrices.',etiquetas:['Adobe Photoshop','Diseño gráfico','Catálogo'],medios:[
    'assets/imagenes/proyectos-diseno/catalogo-wynns-photoshop.png'
  ]},
  {id:'ar',titulo:'Realidad Aumentada',categoria:'Inmersivo',tipo:'Experiencias AR',descripcion:'Desarrollo de experiencias de realidad aumentada con Unity y Blender, integrando elementos tridimensionales con imágenes captadas por la cámara. Incluye escenas temáticas, personajes y recursos audiovisuales.',etiquetas:['Unity','Blender','Adobe Audition','Photoshop'],medios:[
    'assets/imagenes/proyectos-ar/realidad-aumentada/interfaz-inicial.jpg',
    'assets/imagenes/proyectos-ar/realidad-aumentada/escena-personaje.jpg',
    'assets/imagenes/proyectos-ar/realidad-aumentada/escena-navidad-1.jpg',
    'assets/imagenes/proyectos-ar/realidad-aumentada/escena-navidad-2.jpg',
    'assets/imagenes/proyectos-ar/realidad-aumentada/escena-halloween-1.jpg',
    'assets/imagenes/proyectos-ar/realidad-aumentada/escena-halloween-2.jpg'
  ]},
  {id:'maestria',titulo:'Sitio web para Maestría',categoria:'Desarrollo',tipo:'Sitio web institucional · Educación',descripcion:'Sitio web para la Maestría en Ingeniería para la Optimización de Procesos de Manufactura, con información académica, mapas curriculares, perfiles docentes, podcasts, casos de éxito y comentarios.',etiquetas:['Joomla','CSS'],medios:[
    'assets/imagenes/proyectos-web/Sitio Web de Maestria/1.jpeg',
    'assets/imagenes/proyectos-web/Sitio Web de Maestria/2.jpeg',
    'assets/imagenes/proyectos-web/Sitio Web de Maestria/3.jpeg',
    'assets/imagenes/proyectos-web/Sitio Web de Maestria/4.jpeg',
    'assets/imagenes/proyectos-web/Sitio Web de Maestria/5.jpeg',
    'assets/imagenes/proyectos-web/Sitio Web de Maestria/6.jpeg'
  ]},
  {id:'test-vocacional',titulo:'Test Vocacional',categoria:'Desarrollo',tipo:'Aplicación web · Orientación vocacional',descripcion:'Aplicación web de orientación vocacional con interfaz desarrollada con Bootstrap y lógica implementada en Python.',etiquetas:['Python','Bootstrap'],medios:[
    'assets/imagenes/proyectos-web/Test Vocacional/1.jpeg',
    'assets/imagenes/proyectos-web/Test Vocacional/2.jpeg',
    'assets/imagenes/proyectos-web/Test Vocacional/3.jpeg',
    'assets/imagenes/proyectos-web/Test Vocacional/4.jpeg',
    'assets/imagenes/proyectos-web/Test Vocacional/5.jpeg'
  ]},
  {id:'ediciones-photoshop',titulo:'Ediciones de Photoshop',categoria:'Multimedia',tipo:'Edición y retoque fotográfico',descripcion:'Galería de trabajos de edición fotográfica y composición visual realizados en Adobe Photoshop.',etiquetas:['Adobe Photoshop','Edición fotográfica','Retoque digital'],medios:[
    'assets/imagenes/proyectos-diseno/Ediciones de Photoshop/1.jpeg',
    'assets/imagenes/proyectos-diseno/Ediciones de Photoshop/2.jpeg',
    'assets/imagenes/proyectos-diseno/Ediciones de Photoshop/3.jpeg',
    'assets/imagenes/proyectos-diseno/Ediciones de Photoshop/4.jpeg',
    'assets/imagenes/proyectos-diseno/Ediciones de Photoshop/5.jpeg',
    'assets/imagenes/proyectos-diseno/Ediciones de Photoshop/6.jpeg',
    'assets/imagenes/proyectos-diseno/Ediciones de Photoshop/7.jpeg',
    'assets/imagenes/proyectos-diseno/Ediciones de Photoshop/8.jpeg',
    'assets/imagenes/proyectos-diseno/Ediciones de Photoshop/9.jpeg',
    'assets/imagenes/proyectos-diseno/Ediciones de Photoshop/10.jpeg',
    'assets/imagenes/proyectos-diseno/Ediciones de Photoshop/11.jpeg',
    'assets/imagenes/proyectos-diseno/Ediciones de Photoshop/12.jpeg',
    'assets/imagenes/proyectos-diseno/Ediciones de Photoshop/13.jpeg',
    'assets/imagenes/proyectos-diseno/Ediciones de Photoshop/14.jpeg',
    'assets/imagenes/proyectos-diseno/Ediciones de Photoshop/15.jpeg',
    'assets/imagenes/proyectos-diseno/Ediciones de Photoshop/16.jpeg',
    'assets/imagenes/proyectos-diseno/Ediciones de Photoshop/17.jpeg',
    'assets/imagenes/proyectos-diseno/Ediciones de Photoshop/18.jpeg'
  ]},
  {id:'vr',titulo:'Realidad Virtual',categoria:'Inmersivo',tipo:'Experiencia VR',descripcion:'Proyecto de realidad virtual desarrollado con Unity y Blender. Incluye un entorno tridimensional explorable, una interfaz de bienvenida y escenas con personajes y elementos visuales, presentados mediante capturas de la experiencia.',etiquetas:['Unity','Blender','Realidad virtual'],medios:[
    'assets/imagenes/proyectos-vr/realidad-virtual/menu-experiencia-vr.jpg',
    'assets/imagenes/proyectos-vr/realidad-virtual/recorrido-virtual.jpg',
    'assets/imagenes/proyectos-vr/realidad-virtual/entorno-personajes.jpg',
    'assets/imagenes/proyectos-vr/realidad-virtual/escenas-animadas.jpg'
  ]}
];

const $ = id => document.getElementById(id);
const filters = $('filters'), grid = $('projectsGrid');
const galleryModal = $('galleryModal'), mediaModal = $('mediaModal');
const galleryGrid = $('galleryGrid'), mediaStage = $('mediaStage');
const categories = ['Todos','Desarrollo','Inmersivo','Multimedia'];
const icons = {Desarrollo:'⌘',Inmersivo:'◉',Animación:'⬡',Multimedia:'✦',Marketing:'↗',Datos:'▦'};
let activeFilter='Todos', lastFocus=null, galleryTrigger=null, mediaTrigger=null;
const isVideo = path => /\.(mp4|webm|ogg)$/i.test(path);
const setOpen=(el,open)=>{el.classList.toggle('activo',open);el.setAttribute('aria-hidden',String(!open));document.body.classList.toggle('modal-abierto',galleryModal.classList.contains('activo')||mediaModal.classList.contains('activo'));};
const el=(tag,className,text)=>{const node=document.createElement(tag);if(className)node.className=className;if(text!==undefined)node.textContent=text;return node;};
function availableMedia(project){return Promise.all(project.medios.map(path=>new Promise(resolve=>{if(isVideo(path)){const v=document.createElement('video');v.preload='metadata';v.onloadedmetadata=()=>resolve(path);v.onerror=()=>resolve(null);v.src=path;}else{const img=new Image();img.onload=()=>resolve(path);img.onerror=()=>resolve(null);img.src=path;}}))).then(paths=>paths.filter(Boolean));}
function card(project){
 const button=el('button','project-card');button.type='button';button.setAttribute('aria-label',`Ver evidencias de ${project.titulo}`);
 const cover=el('div','project-cover');const symbol=el('span','project-symbol',icons[project.categoria]||'✦');cover.append(symbol);
 const coverImg=el('img','cover-img');coverImg.alt=`Vista previa de ${project.titulo}`;coverImg.loading='eager';cover.append(coverImg);
 const marker=el('span','cover-type',project.tipo);cover.append(marker);
 const info=el('div','project-info');info.append(el('span','project-category',project.categoria.toUpperCase()),el('h3','',project.titulo),el('p','',project.descripcion));
 const tags=el('div','project-tags');project.etiquetas.forEach(t=>tags.append(el('span','',t)));info.append(tags,el('span','view-hint','Ver evidencias ↗'));button.append(cover,info);
 const firstImage=project.medios.find(path=>!isVideo(path));if(firstImage){symbol.hidden=true;coverImg.src=firstImage;coverImg.onerror=()=>{coverImg.hidden=true;symbol.hidden=false;};}
 button.addEventListener('click',()=>openGallery(project,button));return button;
}
function render(){filters.replaceChildren();categories.forEach(cat=>{const b=el('button','filter'+(cat===activeFilter?' active':''),cat);b.type='button';b.setAttribute('aria-pressed',String(cat===activeFilter));b.addEventListener('click',()=>{activeFilter=cat;render();});filters.append(b);});grid.replaceChildren(...proyectos.filter(p=>activeFilter==='Todos'||p.categoria===activeFilter).map(card));}
async function openGallery(project,trigger){galleryTrigger=trigger;lastFocus=trigger;$('galleryTitle').textContent=project.titulo;$('galleryDescription').textContent=project.descripcion;const oldLink=$('projectExternalLink');if(oldLink)oldLink.remove();if(project.enlace){const a=el('a','project-external-link','Visitar sitio web ↗');a.id='projectExternalLink';a.href=project.enlace;a.target='_blank';a.rel='noopener noreferrer';$('galleryDescription').after(a);}galleryGrid.replaceChildren(el('p','empty-gallery','Cargando evidencias…'));setOpen(galleryModal,true);$('closeGallery').focus();const paths=await availableMedia(project);if(!galleryModal.classList.contains('activo')||$('galleryTitle').textContent!==project.titulo)return;galleryGrid.replaceChildren();if(!paths.length){galleryGrid.append(el('div','empty-gallery','Las evidencias de este proyecto aún no se han añadido. Puedes incorporarlas desde la carpeta assets.'));return;}
 paths.forEach((path,index)=>{const b=el('button','collage-item');b.type='button';b.setAttribute('aria-label',`Abrir evidencia ${index+1}`);if(isVideo(path)){const video=el('video');video.src=path;video.preload='metadata';video.muted=true;video.playsInline=true;b.append(video,el('span','video-indicator','▶ Ver video'));}else{const img=el('img');img.src=path;img.alt=`${project.titulo}, evidencia ${index+1}`;img.loading='lazy';b.append(img);}b.addEventListener('click',()=>openMedia(path,`${project.titulo}, evidencia ${index+1}`,b));galleryGrid.append(b);});}
function openMedia(path,alt,trigger){mediaTrigger=trigger;mediaStage.replaceChildren();if(isVideo(path)){const video=el('video');video.src=path;video.controls=true;video.autoplay=true;video.playsInline=true;mediaStage.append(video);video.play().catch(()=>{});}else{const img=el('img');img.src=path;img.alt=alt;mediaStage.append(img);}setOpen(mediaModal,true);$('closeMedia').focus();}
function closeMedia(){mediaStage.querySelector('video')?.pause();mediaStage.replaceChildren();setOpen(mediaModal,false);mediaTrigger?.focus();}
function closeGallery(){if(mediaModal.classList.contains('activo'))closeMedia();setOpen(galleryModal,false);galleryTrigger?.focus();}
$('closeMedia').addEventListener('click',closeMedia);$('closeGallery').addEventListener('click',closeGallery);
mediaModal.addEventListener('click',e=>{if(e.target===mediaModal)closeMedia();});galleryModal.addEventListener('click',e=>{if(e.target===galleryModal)closeGallery();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(mediaModal.classList.contains('activo'))closeMedia();else if(galleryModal.classList.contains('activo'))closeGallery();}if(e.key==='Tab'){const active=mediaModal.classList.contains('activo')?mediaModal:galleryModal.classList.contains('activo')?galleryModal:null;if(!active)return;const focusables=[...active.querySelectorAll('button:not([disabled]),a[href],video[controls]')];if(!focusables.length)return;const first=focusables[0],last=focusables[focusables.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});
const menuToggle=$('menuToggle'),navLinks=$('navLinks');menuToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'×':'☰';});navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰';}));
$('anio').textContent=new Date().getFullYear();render();
