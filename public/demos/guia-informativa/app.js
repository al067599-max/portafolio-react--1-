function getFallbackArtSVG(title, subtitle, styleType) {
  if (styleType === "blade") {
    return `<svg viewBox="0 0 600 260" class="w-full h-full object-cover bg-[#09090b]" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="260" fill="#09090b"/><line x1="60" y1="130" x2="540" y2="130" stroke="#3f3f46" stroke-width="1"/><text x="300" y="138" text-anchor="middle" fill="#f4f4f5" font-family="'UnifrakturMaguntia', serif" font-size="48" letter-spacing="2">${title}</text><text x="300" y="172" text-anchor="middle" fill="#a1a1aa" font-family="'IBM Plex Mono', monospace" font-size="11" letter-spacing="4">${subtitle}</text></svg>`;
  }
  if (styleType === "decalius") {
    return `<svg viewBox="0 0 600 260" class="w-full h-full object-cover bg-[#0c0c0e]" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="260" fill="#0c0c0e"/><rect x="24" y="24" width="552" height="212" fill="none" stroke="#27272a" stroke-width="1"/><text x="300" y="135" text-anchor="middle" fill="#f4f4f5" font-family="'Cormorant Garamond', serif" font-weight="700" font-size="46" letter-spacing="14">${title.toUpperCase()}</text><text x="300" y="178" text-anchor="middle" fill="#a1a1aa" font-family="'IBM Plex Mono', monospace" font-size="11" letter-spacing="3">${subtitle}</text></svg>`;
  }
  return `<svg viewBox="0 0 600 260" class="w-full h-full object-cover bg-[#08080a]" xmlns="http://www.w3.org/2000/svg"><circle cx="300" cy="130" r="88" fill="none" stroke="#27272a" stroke-width="1.5"/><text x="300" y="140" text-anchor="middle" fill="#f4f4f5" font-family="'UnifrakturMaguntia', serif" font-size="52" letter-spacing="3">${title}</text><text x="300" y="175" text-anchor="middle" fill="#a1a1aa" font-family="'IBM Plex Mono', monospace" font-size="11" letter-spacing="4">${subtitle}</text></svg>`;
}

function renderBandVisual(imagePath, title, subtitle, styleType) {
  const encodedSvg = encodeURIComponent(getFallbackArtSVG(title, subtitle, styleType));
  return `<img src="./${imagePath}?v=2" alt="${title}" onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,${encodedSvg}';" class="w-full h-full object-cover photo-raw" />`;
}

const bands = {
  blade: {
    name: "Blade and Bath",
    image: "img/blade.jpg",
    origin: "Ucrania / Europa del Este",
    members: "Proyecto solista (One-man band)",
    artType: "blade",
    artSubtitle: "EUPHORIA OF SELF-DESTRUCTION",
    summary: "Uno de los proyectos clave de la nueva generación europea. Equilibra la frialdad del Black Metal del este con arpegios limpios muy cuidados.",
    soundNotes: "Introducciones limpias bañadas en reverb y chorus, seguidas de trémolos melódicos sobre una batería pausada.",
    curiosity: "Sus temas suelen estructurarse como piezas instrumentales extendidas donde la melodía de guitarra lleva todo el peso narrativo.",
    tracks: [
      { name: "Euphoria of Self-Destruction", note: "Álbum esencial para entrar en su sonido." },
      { name: "Rotten", note: "Contraste marcado entre pasajes limpios y distorsión." },
      { name: "Cold Concrete & Fade", note: "Corte minimalista de corte nocturno." }
    ],
    metrics: [{ k: "Atmósfera", v: "95%" }, { k: "Melodía", v: "94%" }, { k: "Accesibilidad", v: "90%" }, { k: "Crudeza Lo-Fi", v: "65%" }]
  },
  decalius: {
    name: "Decalius",
    image: "img/decalius.jpg",
    origin: "Brasil",
    members: "Proyecto solista (One-man band)",
    artType: "decalius",
    artSubtitle: "DEHUMANIZING LONELINESS",
    summary: "Proyecto unipersonal brasileño que conectó el DSBM con el grunge y el rock alternativo de los 90.",
    soundNotes: "Acordes abiertos, rasgueos limpios estilo grunge, solos de guitarra expresivos y voz cruda al frente.",
    curiosity: "Popularizó los solos de guitarra melódicos estilo rock alternativo dentro del DSBM contemporáneo.",
    tracks: [
      { name: "Dehumanizing Loneliness", note: "Referencia indispensable del DSBM actual." },
      { name: "Hated by Life Itself", note: "Destaca por sus solos de guitarra emotivos." },
      { name: "Excluded from Humanity", note: "Faceta más cruda y lo-fi del proyecto." }
    ],
    metrics: [{ k: "Atmósfera", v: "84%" }, { k: "Melodía", v: "98%" }, { k: "Accesibilidad", v: "96%" }, { k: "Crudeza Lo-Fi", v: "78%" }]
  },
  sukkubys: {
    name: "Sukkubys",
    image: "img/sukkubys.jpg",
    origin: "Escena Underground Internacional",
    members: "Proyecto independiente",
    artType: "sukkubys",
    artSubtitle: "ETERNAL SOLITUDE",
    summary: "Representa el lado más nocturno e hipnótico de esta tríada, con muros de sonido envolventes y estética gótica.",
    soundNotes: "Voces sumergidas dentro de la mezcla con reverberación larga y progresiones circulares.",
    curiosity: "Su mezcla prioriza el ambiente general sobre los instrumentos individuales, cercano al shoegaze oscuro.",
    tracks: [
      { name: "Eternal Solitude", note: "Define su firma sonora y ambiental." },
      { name: "Fading Memories", note: "Equilibrio entre melancolía ambiental y riffing." },
      { name: "Nocturnal Reflections", note: "Enfoque inmersivo sin cortes bruscos." }
    ],
    metrics: [{ k: "Atmósfera", v: "97%" }, { k: "Melodía", v: "88%" }, { k: "Accesibilidad", v: "82%" }, { k: "Crudeza Lo-Fi", v: "80%" }]
  }
};

const directoryBands = [
  { name: "Blade and Bath", country: "Ucrania", category: "nueva-ola", tag: "Nueva Ola", album: "Euphoria of Self-Destruction", desc: "Melancolía invernal con arpegios limpios y producción atmosférica." },
  { name: "Decalius", country: "Brasil", category: "nueva-ola", tag: "Nueva Ola", album: "Dehumanizing Loneliness", desc: "Fusión de DSBM con acordes grunge de los 90 y solos expresivos." },
  { name: "Sukkubys", country: "Internacional", category: "nueva-ola", tag: "Nueva Ola", album: "Eternal Solitude", desc: "Sonido nocturno sumergido en reverb y estética gótica." },
  { name: "Lifelover", country: "Suecia", category: "post-dsbm", tag: "Post-DSBM", album: "Pulver (2006)", desc: "Pioneros en mezclar post-punk sueco, piano y melancolía urbana." },
  { name: "Psychonaut 4", country: "Georgia", category: "post-dsbm", tag: "Post-DSBM", album: "Dipsomania (2015)", desc: "Dinámicas intensas, líneas de bajo marcadas y gran carga emocional." },
  { name: "Apati", country: "Suecia", category: "post-dsbm", tag: "Post-DSBM", album: "Eufori (2009)", desc: "Enfoque minimalista y nostálgico con influencia de rock depresivo." },
  { name: "Xasthur", country: "Estados Unidos", category: "clasico", tag: "Clásico", album: "Telepathic with the Deceased", desc: "Proyecto solista de Scott Conner; referente del DSBM ambiental." },
  { name: "Thy Light", country: "Brasil", category: "clasico", tag: "Clásico", album: "Suici.De.pression (2007)", desc: "Combina piano clásico melancólico con guitarras atmosféricas extensas." },
  { name: "Austere", country: "Australia", category: "clasico", tag: "Clásico", album: "To Lay Like Old Ashes (2009)", desc: "DSBM atmosférico de gran escala con voces agudas y pasajes épicos." }
];

function initCardArts() {
  document.getElementById("card-art-blade").innerHTML = renderBandVisual("img/blade.jpg", "Blade and Bath", "UCRANIA // MELODIC DSBM", "blade");
  document.getElementById("card-art-decalius").innerHTML = renderBandVisual("img/decalius.jpg", "DECALIUS", "BRASIL // GRUNGE-DSBM", "decalius");
  document.getElementById("card-art-sukkubys").innerHTML = renderBandVisual("img/sukkubys.jpg", "Sukkubys", "NOCTURNAL ATMOSPHERIC", "sukkubys");
}

function setBand(key) {
  ["blade", "decalius", "sukkubys"].forEach((id) => {
    const el = document.getElementById(`tab-${id}`);
    el.className = id === key
      ? "photo-box text-left border border-zinc-300 bg-zinc-900/80 p-4 transition cursor-pointer"
      : "photo-box text-left border border-zinc-800 bg-zinc-950 hover:border-zinc-600 p-4 transition cursor-pointer";
  });

  const b = bands[key];
  const panel = document.getElementById("band-panel");
  const visualHtml = renderBandVisual(b.image, b.name, b.artSubtitle, b.artType);

  panel.innerHTML = `
    <div class="grid lg:grid-cols-12">
      <div class="lg:col-span-5 relative min-h-[250px] border-b lg:border-b-0 lg:border-r border-zinc-800 bg-black flex flex-col justify-between">
        <div class="h-56 lg:h-full w-full overflow-hidden">${visualHtml}</div>
        <div class="p-4 border-t border-zinc-800 bg-zinc-950 font-mono text-[11px] text-zinc-400 flex justify-between">
          <span>${b.origin}</span><span>${b.members}</span>
        </div>
      </div>
      <div class="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pb-6 mb-6 border-b border-zinc-800 font-mono text-xs">
            ${b.metrics.map((m) => `<div><span class="text-zinc-500 block text-[11px]">${m.k}</span><span class="text-zinc-100 font-semibold">${m.v}</span></div>`).join("")}
          </div>
          <p class="text-sm text-zinc-300 leading-relaxed">${b.summary}</p>
          <p class="text-sm text-zinc-400 leading-relaxed mt-3"><strong class="text-zinc-200 font-medium">Firma sonora:</strong> ${b.soundNotes}</p>
          <p class="text-xs font-mono text-zinc-400 mt-4 p-3 border border-zinc-800 bg-zinc-950">Dato clave: ${b.curiosity}</p>
          <div class="mt-6 pt-5 border-t border-zinc-800">
            <div class="font-mono text-xs text-zinc-500 mb-3">OBRAS RECOMENDADAS</div>
            <div class="space-y-2">
              ${b.tracks.map((t) => `<div class="flex flex-col sm:flex-row sm:items-center justify-between text-xs py-1.5 border-b border-zinc-900"><span class="font-mono text-zinc-100 font-medium">${t.name}</span><span class="text-zinc-500">${t.note}</span></div>`).join("")}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function filterDirectory(category) {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.className = btn.dataset.filter === category
      ? "filter-btn px-3 py-1.5 bg-zinc-100 text-black font-medium cursor-pointer"
      : "filter-btn px-3 py-1.5 border border-zinc-800 text-zinc-400 hover:text-white cursor-pointer";
  });

  const filtered = category === "all" ? directoryBands : directoryBands.filter((item) => item.category === category);
  document.getElementById("directory-grid").innerHTML = filtered.map((band) => `
    <div class="border border-zinc-800 bg-zinc-950/70 p-5 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between font-mono text-[11px] text-zinc-500 mb-2">
          <span>${band.country}</span><span class="border border-zinc-800 px-2 py-0.5 text-zinc-300">${band.tag}</span>
        </div>
        <h3 class="font-serif text-2xl font-bold text-zinc-100">${band.name}</h3>
        <p class="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">${band.desc}</p>
      </div>
      <div class="mt-4 pt-3 border-t border-zinc-800/80 font-mono text-xs text-zinc-300">Disco: <span class="text-zinc-400">${band.album}</span></div>
    </div>
  `).join("");
}

function updateFonts(val) {
  const txt = val.trim() || "dsbm";
  document.getElementById("f-1").textContent = txt;
  document.getElementById("f-2").textContent = txt;
  document.getElementById("f-3").textContent = txt;
  document.getElementById("f-4").textContent = txt.toLowerCase();
}

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      document.getElementById("mobile-nav").classList.toggle("hidden");
    });
  }
  initCardArts();
  setBand("blade");
  filterDirectory("all");
});
