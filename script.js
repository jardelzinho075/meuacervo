"use strict";
/* ==============================================================
   CONFIGURAÇÃO RÁPIDA — EDITE AQUI
   1. Substitua o número abaixo pelo WhatsApp verdadeiro (55+DDD+número).
      Deixe a string vazia até possuir o número real.
   2. Se tiver Instagram, cole a URL completa.
   3. Para mudar os kits: edite o array KITS abaixo.
   4. PREÇO: null = "Consulte o valor"; 250 = "R$ 250,00".
   5. Coloque fotos em images/kits/ e edite o caminho 'imagem'.
   6. Para mais fotos no modal, adicione caminhos em 'imagens'.
   ============================================================== */
const WHATSAPP_NUMBER = "558196667630";
const INSTAGRAM_URL = "https://www.instagram.com/meuacervo_donnaideia/";
// Os primeiros 3 kits ficam em destaque. Os outros só aparecem com pesquisa ou filtro.
// Para mudar os destaques, altere a ordem dos objetos abaixo.
const DESTAQUES_INICIAIS = 3;
const KITS = [
  {
    id: 1,
    nome: "Kit Sonic",
    categoria: "Infantil",
    preco: null,
    imagem: "images/kits/sonic.webp",
    descricao:
      "Decoração temática do Sonic, com cores vibrantes e detalhes inspirados no personagem.",
    imagens: ["images/kits/sonic.webp"],
  },
  {
    id: 2,
    nome: "Kit Fazendinha",
    categoria: "Infantil",
    preco: null,
    imagem: "images/kits/fazendinha.webp",
    descricao:
      "Um cenário acolhedor com elementos rústicos, casinha e detalhes de madeira.",
    imagens: ["images/kits/fazendinha.webp"],
  },
  {
    id: 3,
    nome: "Kit Bailarina",
    categoria: "Infantil",
    preco: null,
    imagem: "images/kits/bailarina.webp",
    descricao:
      "Uma decoração delicada em tons suaves, com bailarinas e piano decorativo.",
    imagens: ["images/kits/bailarina.webp"],
  },
  {
    id: 4,
    nome: "Kit Futebol",
    categoria: "Esportes",
    preco: null,
    imagem: "images/kits/futebol.webp",
    descricao:
      "Uma decoração especial para quem ama futebol, com elementos inspirados no universo esportivo.",
    imagens: ["images/kits/futebol.webp"],
  },
  {
    id: 5,
    nome: "Kit Sininho",
    categoria: "Infantil",
    preco: null,
    imagem: "images/kits/sininho.webp",
    descricao:
      "Um cenário encantador, com cores suaves e detalhes inspirados na magia das fadas.",
    imagens: ["images/kits/sininho.webp"],
  },
  {
    id: 6,
    nome: "Kit Hot Wheels",
    categoria: "Infantil",
    preco: null,
    imagem: "images/kits/hot-wheels.webp",
    descricao:
      "Uma decoração com clima de corrida e elementos inspirados em carrinhos.",
    imagens: ["images/kits/hot-wheels.webp"],
  },
  {
    id: 7,
    nome: "Kit Arco Delicado",
    categoria: "Outros Temas",
    preco: null,
    imagem: "images/kits/arco-delicado.webp",
    descricao:
      "Composição suave em branco e rosa com arco e elementos delicados.",
    imagens: ["images/kits/arco-delicado.webp"],
  },
  {
    id: 8,
    nome: "Kit Safari",
    categoria: "Infantil",
    preco: null,
    imagem: "images/kits/safari.webp",
    descricao:
      "Decoração com animais e elementos naturais inspirados no safári.",
    imagens: ["images/kits/safari.webp"],
  },
  {
    id: 9,
    nome: "Kit Mickey e Minnie",
    categoria: "Infantil",
    preco: null,
    imagem: "images/kits/mickey-minnie.webp",
    descricao: "Cenário colorido com os personagens Mickey e Minnie.",
    imagens: [
      "images/kits/mickey-minnie.webp",
      "images/kits/mickey-minnie-2.webp",
    ],
  },
  {
    id: 10,
    nome: "Kit Super-Heróis",
    categoria: "Infantil",
    preco: null,
    imagem: "images/kits/herois.webp",
    descricao: "Uma decoração para quem gosta de aventuras e super-heróis.",
    imagens: ["images/kits/herois.webp"],
  },
  {
    id: 11,
    nome: "Kit Minecraft",
    categoria: "Infantil",
    preco: null,
    imagem: "images/kits/minecraft.webp",
    descricao:
      "Decoração inspirada no universo de Minecraft, com painel temático.",
    imagens: ["images/kits/minecraft.webp"],
  },
  {
    id: 12,
    nome: "Kit Rústico de Madeira",
    categoria: "Outros Temas",
    preco: null,
    imagem: "images/kits/rustico-madeira.webp",
    descricao: "Composição com estruturas em madeira e detalhes naturais.",
    imagens: ["images/kits/rustico-madeira.webp"],
  },
  {
    id: 13,
    nome: "Kit Arco Neutro",
    categoria: "Outros Temas",
    preco: null,
    imagem: "images/kits/arco-neutro.webp",
    descricao:
      "Uma composição versátil com arcos claros e suportes transparentes.",
    imagens: ["images/kits/arco-neutro.webp"],
  },
];
/* ============================================================= */
const $ = (selector) => document.querySelector(selector);
const price = (value) =>
  value === null || value === undefined
    ? "Consulte o valor"
    : Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
function whatsappLink(text) {
  if (!/^\d{12,13}$/.test(cleanNumber)) return null;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}
function generalMessage() {
  return "Olá! Conheci o Meu Acervo Donna Ideia e gostaria de conhecer melhor os kits disponíveis.";
}
function kitMessage(kit) {
  return `Olá! Tudo bem? Estava visitando o Meu Acervo Donna Ideia e gostei do ${kit.nome}. ${kit.preco !== null ? `Vi o valor de ${price(kit.preco)}. ` : ""}Gostaria de saber mais informações e consultar a disponibilidade para minha festa.`;
}
function updateWhatsappAnchor(link, message) {
  const url = whatsappLink(message);
  if (url) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.removeAttribute("aria-disabled");
    link.removeAttribute("title");
  } else {
    link.href = "#contato";
    link.removeAttribute("target");
    link.setAttribute(
      "title",
      "Configure o número de WhatsApp no começo do arquivo script.js",
    );
    link.setAttribute("aria-disabled", "true");
  }
}
function wireWhatsapp() {
  document
    .querySelectorAll('[data-whatsapp="geral"]')
    .forEach((a) => updateWhatsappAnchor(a, generalMessage()));
  const instagram = $("#instagramLink");
  if (/^https:\/\//i.test(INSTAGRAM_URL)) {
    instagram.href = INSTAGRAM_URL;
    instagram.hidden = false;
  }
  $("#year").textContent = new Date().getFullYear();
}
let currentCategory = "Todos";
let currentQuery = "";
function createNode(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
function imageOrPlaceholder(kit, altPrefix = "Fotografia da decoração") {
  if (kit.imagem) {
    const img = createNode("img");
    img.src = kit.imagem;
    img.alt = `${altPrefix} ${kit.nome}`;
    img.loading = "lazy";
    img.decoding = "async";
    img.width = 675;
    img.height = 836;
    return img;
  }
  const placeholder = createNode("div", "image-placeholder");
  placeholder.append(
    createNode("span", "", "✳"),
    createNode("strong", "", kit.nome),
    createNode("small", "", "Fotografia em breve"),
  );
  return placeholder;
}
function createCard(kit) {
  const article = createNode("article", "kit-card");
  const media = createNode(
    "div",
    `kit-image${kit.imagem ? "" : " unavailable"}`,
  );
  media.append(imageOrPlaceholder(kit));
  media.append(createNode("span", "image-tag", kit.categoria));
  const body = createNode("div", "kit-content");
  body.append(
    createNode("h3", "", kit.nome),
    createNode("p", "kit-description", kit.descricao),
    createNode("p", "price-label", "VALOR DO KIT"),
    createNode(
      "div",
      `kit-price${kit.preco === null ? " consult" : ""}`,
      price(kit.preco),
    ),
  );
  const actions = createNode("div", "kit-actions");
  const detail = createNode("button", "button button-outline", "Ver detalhes");
  detail.type = "button";
  detail.addEventListener("click", () => openModal(kit));
  const contact = createNode("a", "button button-filled", "Tenho interesse ↗");
  updateWhatsappAnchor(contact, kitMessage(kit));
  actions.append(detail, contact);
  body.append(actions);
  article.append(media, body);
  return article;
}
function filteredKits() {
  return KITS.filter(
    (kit) =>
      (currentCategory === "Todos" || kit.categoria === currentCategory) &&
      `${kit.nome} ${kit.categoria} ${kit.descricao}`
        .toLocaleLowerCase("pt-BR")
        .includes(currentQuery),
  );
}
function renderKits() {
  const matches = filteredKits();
  // Sem pesquisa e com 'Todos' selecionado, mostre apenas os destaques.
  const isHighlightView = currentCategory === "Todos" && currentQuery === "";
  const visible = isHighlightView
    ? matches.slice(0, DESTAQUES_INICIAIS)
    : matches;
  $("#kitGrid").replaceChildren(...visible.map(createCard));
  $("#emptyState").hidden = matches.length > 0;
  $("#resultCount").textContent = isHighlightView
    ? `${visible.length} kits em destaque · Procure um tema ou escolha uma categoria para ver mais opções`
    : `${matches.length} ${matches.length === 1 ? "kit encontrado" : "kits encontrados"}`;
}
function renderCategories() {
  const categories = ["Todos", ...new Set(KITS.map((kit) => kit.categoria))];
  $("#categoryFilters").replaceChildren(
    ...categories.map((cat) => {
      const button = createNode("button", "filter-btn", cat);
      button.type = "button";
      button.setAttribute("aria-pressed", String(cat === currentCategory));
      button.addEventListener("click", () => {
        currentCategory = cat;
        renderCategories();
        renderKits();
      });
      return button;
    }),
  );
}
$("#kitSearch").addEventListener("input", (event) => {
  currentQuery = event.target.value.trim().toLocaleLowerCase("pt-BR");
  renderKits();
});
$("#clearFilters").addEventListener("click", () => {
  currentCategory = "Todos";
  currentQuery = "";
  $("#kitSearch").value = "";
  renderCategories();
  renderKits();
  $("#kitSearch").focus();
});
const modal = $("#kitModal"),
  panel = modal.querySelector(".modal-panel");
let previouslyFocused = null;
function showModalImage(src, kit) {
  const media = $("#modalMedia");
  media.replaceChildren();
  if (src) {
    const img = createNode("img");
    img.src = src;
    img.alt = `Detalhes do ${kit.nome}`;
    media.append(img);
  } else media.append(imageOrPlaceholder(kit));
}
function openModal(kit) {
  previouslyFocused = document.activeElement;
  $("#modalCategory").textContent = kit.categoria;
  $("#modalTitle").textContent = kit.nome;
  $("#modalDescription").textContent = kit.descricao;
  $("#modalPrice").textContent = price(kit.preco);
  const images = kit.imagens?.length
    ? kit.imagens
    : kit.imagem
      ? [kit.imagem]
      : [];
  showModalImage(images[0] || null, kit);
  const gallery = $("#modalGallery");
  gallery.replaceChildren();
  if (images.length > 1)
    images.forEach((src, index) => {
      const button = createNode("button");
      button.type = "button";
      button.setAttribute("aria-label", `Ver foto ${index + 1} do ${kit.nome}`);
      button.setAttribute("aria-pressed", String(index === 0));
      const img = createNode("img");
      img.src = src;
      img.alt = "";
      button.append(img);
      button.addEventListener("click", () => {
        showModalImage(src, kit);
        gallery
          .querySelectorAll("button")
          .forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
      });
      gallery.append(button);
    });
  updateWhatsappAnchor($("#modalWhatsapp"), kitMessage(kit));
  modal.hidden = false;
  document.body.classList.add("modal-open");
  panel.scrollTop = 0;
  $("#modalClose").focus();
}
function closeModal() {
  if (modal.hidden) return;
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  previouslyFocused?.focus();
}
$("#modalClose").addEventListener("click", closeModal);
modal.querySelector("[data-close-modal]").addEventListener("click", closeModal);
document.addEventListener("keydown", (event) => {
  if (modal.hidden) return;
  if (event.key === "Escape") {
    event.preventDefault();
    closeModal();
    return;
  }
  if (event.key === "Tab") {
    const focusable = [
      ...panel.querySelectorAll(
        'button:not([disabled]),a[href]:not([aria-disabled="true"])',
      ),
    ].filter((el) => el.getClientRects().length);
    if (!focusable.length) return;
    const first = focusable[0],
      last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
const menu = $("#menuToggle"),
  mobileNav = $("#mobileNav");
function toggleMenu(isOpen) {
  menu.setAttribute("aria-expanded", String(isOpen));
  menu.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  mobileNav.classList.toggle("is-open", isOpen);
  mobileNav.inert = !isOpen;
}
menu.addEventListener("click", () =>
  toggleMenu(menu.getAttribute("aria-expanded") !== "true"),
);
mobileNav
  .querySelectorAll("a")
  .forEach((a) => a.addEventListener("click", () => toggleMenu(false)));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
    toggleMenu(false);
    menu.focus();
  }
});
document.addEventListener("click", (e) => {
  if (
    menu.getAttribute("aria-expanded") === "true" &&
    !e.target.closest(".site-header")
  )
    toggleMenu(false);
});
wireWhatsapp();
renderCategories();
renderKits();
