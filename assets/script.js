// ===== Datos: comandos útiles =====
const COMMANDS = [
  {
    cmd: "openspec init",
    desc: "Inicializa la carpeta openspec/ y configura tu asistente de IA.",
    type: "cli",
  },
  {
    cmd: "openspec list",
    desc: "Lista los cambios activos del proyecto y su estado.",
    type: "cli",
  },
  {
    cmd: "openspec show <cambio>",
    desc: "Muestra el detalle de una propuesta o spec concreta.",
    type: "cli",
  },
  {
    cmd: "openspec status",
    desc: "Resumen del estado: cambios, specs y validaciones.",
    type: "cli",
  },
  {
    cmd: "openspec update",
    desc: "Regenera la configuración de IA tras cambiar el perfil o actualizar el CLI.",
    type: "cli",
  },
  {
    cmd: "openspec config profile",
    desc: "Cambia el perfil/flujo (habilita el workflow expandido).",
    type: "cli",
  },
  {
    cmd: "openspec list --json",
    desc: "Salida en JSON para integrar con agentes, scripts o CI.",
    type: "cli",
  },
  {
    cmd: "/opsx:explore",
    desc: "Refina requisitos y explora el problema antes de proponer.",
    type: "chat",
  },
  {
    cmd: "/opsx:propose",
    desc: "Crea una propuesta de cambio a partir de tu intención.",
    type: "chat",
  },
  {
    cmd: "/opsx:apply",
    desc: "Implementa el código siguiendo la propuesta aprobada.",
    type: "chat",
  },
  {
    cmd: "/opsx:sync",
    desc: "Reconcilia las specs con lo que realmente se construyó.",
    type: "chat",
  },
  {
    cmd: "/opsx:archive",
    desc: "Archiva el cambio y fija las specs como nuevo estado base.",
    type: "chat",
  },
  {
    cmd: "/opsx:continue",
    desc: "Crea artefactos de forma incremental (flujo expandido).",
    type: "chat",
  },
  {
    cmd: "/opsx:ff",
    desc: "Fast-forward cuando el alcance ya está claro (flujo expandido).",
    type: "chat",
  },
];

// ===== Datos: ejemplo paso a paso =====
const EXAMPLE = [
  {
    title: "Paso 1 · /opsx:propose",
    code: `<span class="c-prompt">›</span> /opsx:propose
<span class="c-muted"># En el chat de tu asistente de IA:</span>
"Añadir login con email y contraseña
 a la API, con hash de password y
 sesión por token."

<span class="c-ok">✔</span> Analizando specs en <span class="c-path">openspec/specs/</span>
<span class="c-ok">✔</span> Detectada spec afectada: <span class="c-tag">api-auth</span>
<span class="c-ok">✔</span> Creando propuesta <span class="c-tag">add-user-auth</span>…`,
    note: "Describes la intención en lenguaje natural. OpenSpec no escribe código todavía: primero identifica qué specs cambian.",
  },
  {
    title: "Paso 2 · Revisar la propuesta",
    code: `<span class="c-prompt">$</span> openspec show add-user-auth
<span class="c-muted"># openspec/changes/add-user-auth/proposal.md</span>

## Requisitos
<span class="c-ok">-</span> POST /auth/register (email, password)
<span class="c-ok">-</span> POST /auth/login → token de sesión
<span class="c-ok">-</span> Passwords hasheadas (bcrypt)

## Specs afectadas
<span class="c-tag">api-auth</span>  <span class="c-muted">(modificada)</span>
<span class="c-tag">api-users</span> <span class="c-muted">(nueva)</span>`,
    note: "Revisas la propuesta como un pull request. Aquí es donde discutes y corriges la intención antes de gastar un solo minuto en código.",
  },
  {
    title: "Paso 3 · /opsx:apply",
    code: `<span class="c-prompt">›</span> /opsx:apply add-user-auth

<span class="c-ok">✔</span> Fase 1/3 · modelo User + migración
<span class="c-ok">✔</span> Fase 2/3 · endpoints /register y /login
<span class="c-ok">✔</span> Fase 3/3 · middleware de sesión

<span class="c-muted">Archivos modificados:</span>
  src/models/user.ts
  src/routes/auth.ts
  src/middleware/session.ts`,
    note: "La IA implementa el código fase por fase, siempre contra la propuesta aprobada. Menos improvisación y menos alucinaciones.",
  },
  {
    title: "Paso 4 · sync + archive",
    code: `<span class="c-prompt">›</span> /opsx:sync add-user-auth
<span class="c-ok">✔</span> Specs actualizadas con lo construido

<span class="c-prompt">›</span> /opsx:archive add-user-auth
<span class="c-ok">✔</span> Cambio archivado en changes/archive/
<span class="c-ok">✔</span> <span class="c-tag">api-auth</span> es ahora el estado base

<span class="c-prompt">$</span> openspec status
<span class="c-ok">●</span> 0 cambios activos · specs al día`,
    note: "sync deja las specs alineadas con la realidad y archive las convierte en el nuevo punto de partida. La fuente de verdad queda intacta para el próximo cambio.",
  },
];

// ===== Render de comandos =====
const cmdList = document.getElementById("cmd-list");

function renderCommands(filter) {
  cmdList.innerHTML = "";
  COMMANDS.filter((c) => filter === "all" || c.type === filter).forEach((c) => {
    const row = document.createElement("div");
    row.className = "cmd";
    row.innerHTML = `
      <span class="cmd-code">${c.cmd}</span>
      <span class="cmd-desc">${c.desc}</span>
      <span class="cmd-badge ${c.type}">${
      c.type === "cli" ? "terminal" : "chat"
    }</span>`;
    cmdList.appendChild(row);
  });
}
renderCommands("all");

// Filtros (tabs)
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((t) => {
      t.classList.remove("is-active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");
    renderCommands(tab.dataset.filter);
  });
});

// ===== Ejemplo interactivo =====
const exTitle = document.getElementById("ex-title");
const exCode = document.getElementById("ex-code");
const exNote = document.getElementById("ex-note");
const exSteps = document.querySelectorAll(".ex-step");

function showStep(i) {
  const step = EXAMPLE[i];
  exTitle.textContent = step.title;
  exCode.innerHTML = step.code;
  exNote.textContent = step.note;
  exSteps.forEach((s, idx) => s.classList.toggle("is-active", idx === i));
}
exSteps.forEach((s) =>
  s.addEventListener("click", () => showStep(Number(s.dataset.step)))
);
showStep(0);

// ===== Tema claro/oscuro =====
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

function setTheme(theme) {
  root.classList.remove("theme-dark", "theme-light");
  root.classList.add(`theme-${theme}`);
  const color = theme === "dark" ? "#0b0f14" : "#f6f8fa";
  document.querySelector('meta[name="theme-color"]').setAttribute("content", color);
  try {
    localStorage.setItem("openspec-theme", theme);
  } catch (e) {}
}

(function initTheme() {
  let saved = null;
  try {
    saved = localStorage.getItem("openspec-theme");
  } catch (e) {}
  if (saved) setTheme(saved);
})();

themeToggle.addEventListener("click", () => {
  const isDark = root.classList.contains("theme-dark");
  setTheme(isDark ? "light" : "dark");
});

// ===== Menú móvil =====
const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");

menuToggle.addEventListener("click", () => {
  const open = !mobileNav.hidden;
  mobileNav.hidden = open;
  menuToggle.setAttribute("aria-expanded", String(!open));
});
mobileNav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    mobileNav.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
  })
);

// ===== Copiar comando de instalación =====
const copyBtn = document.getElementById("copy-cta");
copyBtn.addEventListener("click", async () => {
  const text = document.getElementById("cta-cmd").textContent;
  try {
    await navigator.clipboard.writeText(text);
    const original = copyBtn.textContent;
    copyBtn.textContent = "¡Copiado!";
    copyBtn.classList.add("copied");
    setTimeout(() => {
      copyBtn.textContent = original;
      copyBtn.classList.remove("copied");
    }, 1600);
  } catch (e) {
    copyBtn.textContent = "Copia manual";
  }
});
