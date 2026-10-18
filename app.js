const PHONE_DISPLAY = "059 730 1800";
const PHONE_TEL = "+966597301800";
const WHATSAPP = "966597301800";
const ADDRESS =
  "شارع الملك سلمان، تقاطع الشارع السابع، الخبر الشمالية، الخبر 31582";
const PLUS_CODE = "76Q5+4C الخبر";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("مطعم حكايات كبده وسجق الخبر شارع الملك سلمان");
const HOURS_LABEL = "٧:٣٠ ص – ٢:٠٠ ص";
const OFFER_KEY = "hikayat-offer";

const HOURS = [
  { id: "sat", label: "السبت" },
  { id: "sun", label: "الأحد" },
  { id: "mon", label: "الاثنين" },
  { id: "tue", label: "الثلاثاء" },
  { id: "wed", label: "الأربعاء" },
  { id: "thu", label: "الخميس" },
  { id: "fri", label: "الجمعة" },
];

const PLANS = [
  {
    id: "bite",
    name: "لقمة سريعة",
    range: "١–٢٠",
    blurb: "سندوتش واحد للطريق. تطلع وأنت شبعان من غير ما تتأخر.",
    items: ["ساندوتش كبدة إسكندراني", "مخلل أو طحينة وثوم", "من ٨ ر.س"],
    popular: false,
  },
  {
    id: "tale",
    name: "حكاية الخبر",
    range: "٢٠–٤٠",
    blurb: "اللي يختاره أغلب الزوار. وجبة شخص كاملة، والطعم يرجّعك لأيام زمان.",
    items: ["وجبة كبدة إسكندراني", "أو سندوتشين من المنيو", "إضافة سلطة"],
    popular: true,
  },
  {
    id: "feast",
    name: "سفرة العيلة",
    range: "٤٠–٦٠",
    blurb: "طبقين على الطاولة، عيش سخن، وتقعدون لين تخلص الحكاية.",
    items: ["وجبة كبدة ووجبة سجق", "كريب رول", "مقبلات للطاولة"],
    popular: false,
  },
];

const CATEGORIES = [
  { id: "all", label: "الكل" },
  { id: "liver", label: "كبدة" },
  { id: "sausage", label: "سجق" },
  { id: "hawawshi", label: "حواشي" },
  { id: "meals", label: "وجبات" },
  { id: "hikayat", label: "حكايات" },
  { id: "offal", label: "حلويات اللحوم" },
  { id: "pasta", label: "باستا" },
  { id: "crepe", label: "كريب" },
  { id: "sides", label: "إضافات" },
];

const DISHES = [
  { id: "liv-alex", category: "liver", name: "ساندوتش كبدة إسكندراني", note: "١٥٠ سعرة", price: 8 },
  { id: "liv-grill", category: "liver", name: "ساندوتش كبدة جريل", note: "١٥٠ سعرة", price: 10 },
  { id: "liv-radda", category: "liver", name: "ساندوتش كبدة ردة", note: "٢٠٠ سعرة", price: 10 },
  { id: "liv-roast", category: "liver", name: "ساندوتش كبدة مشوية", note: "١٥٠ سعرة", price: 10 },
  { id: "liv-lamb", category: "liver", name: "ساندوتش كبدة غنم", note: "١٨٠ سعرة", price: 10 },
  { id: "so-alex", category: "sausage", name: "ساندوتش سجق إسكندراني", note: "٢٠٠ سعرة", price: 12 },
  { id: "so-grill", category: "sausage", name: "ساندوتش سجق جريل", note: "٢٣٠ سعرة", price: 12 },
  { id: "so-roast", category: "sausage", name: "ساندوتش سجق مشوي", note: "٢١٠ سعرة", price: 15 },
  { id: "haw-baladi", category: "hawawshi", name: "حواشي بلدي", note: "٢٠٠ سعرة", price: 12 },
  { id: "haw-pizza", category: "hawawshi", name: "حواشي وش بيتزا", note: "٢٥٠ سعرة", price: 15 },
  { id: "haw-mix", category: "hawawshi", name: "حواشي مكس", note: "٣٠٠ سعرة", price: 18 },
  { id: "hik-pane", category: "hikayat", name: "ساندوتش دجاج بانيه", note: "٢٠٠ سعرة", price: 10 },
  { id: "hik-strips", category: "hikayat", name: "ساندوتش دجاج ستربس", note: "٢٠٠ سعرة", price: 10 },
  { id: "hik-zinger", category: "hikayat", name: "ساندوتش دجاج زنجر", note: "٢٠٠ سعرة", price: 10 },
  { id: "hik-shrimp-p", category: "hikayat", name: "ساندوتش جمبري بانيه", note: "٢٢٠ سعرة", price: 12 },
  { id: "hik-shrimp-g", category: "hikayat", name: "ساندوتش جمبري جريل", note: "٢٥٠ سعرة", price: 12 },
  { id: "hik-fries", category: "hikayat", name: "ساندوتش بطاطس فارم", note: "١٨٠ سعرة", price: 6 },
  { id: "hik-meat", category: "hikayat", name: "ساندوتش لحمة بالبصل", note: "٢٥٠ سعرة", price: 15 },
  { id: "hik-kofta", category: "hikayat", name: "ساندوتش كفتة بالبصل", note: "٢٥٠ سعرة", price: 12 },
  { id: "hik-shish", category: "hikayat", name: "ساندوتش شيش", note: "٢٣٠ سعرة", price: 10 },
  { id: "off-mix", category: "offal", name: "ساندوتش مُشكّل", note: "٣٠٠ سعرة", price: 10 },
  { id: "off-head", category: "offal", name: "ساندوتش لحمة راس", note: "٢٥٠ سعرة", price: 10 },
  { id: "off-spleen", category: "offal", name: "ساندوتش طحال", note: "٢٠٠ سعرة", price: 10 },
  { id: "off-tongue", category: "offal", name: "ساندوتش لسان", note: "٢١٠ سعرة", price: 10 },
  { id: "off-fasha", category: "offal", name: "ساندوتش فشة", note: "٢٥٠ سعرة", price: 10 },
  { id: "pas-liv", category: "pasta", name: "باستا كبدة", note: "٣٢٠ سعرة", price: 20 },
  { id: "pas-so", category: "pasta", name: "باستا سجق", note: "٣٥٠ سعرة", price: 25 },
  { id: "pas-mix", category: "pasta", name: "باستا ميكس كبدة وسجق", note: "٤٠٠ سعرة", price: 25 },
  { id: "pas-kofta", category: "pasta", name: "باستا كفتة", note: "٣٠٠ سعرة", price: 25 },
  { id: "pas-beef", category: "pasta", name: "باستا لحمة مفرومة", note: "٣٢٠ سعرة", price: 25 },
  { id: "pas-strips", category: "pasta", name: "باستا ستربس", note: "٣٥٠ سعرة", price: 25 },
  { id: "pas-shrimp", category: "pasta", name: "باستا جمبري", note: "٣٨٠ سعرة", price: 30 },
  { id: "pas-red", category: "pasta", name: "باستا صوص أحمر", note: "٢٥٠ سعرة", price: 10 },
  { id: "cr-pane", category: "crepe", name: "كريب رول دجاج بانيه", note: "٢٢٠ سعرة", price: 20 },
  { id: "cr-strips", category: "crepe", name: "كريب رول ستربس", note: "٢٢٠ سعرة", price: 20 },
  { id: "cr-zinger", category: "crepe", name: "كريب رول زنجر", note: "٢٣٠ سعرة", price: 20 },
  { id: "cr-sausage", category: "crepe", name: "كريب رول سوسيس", note: "٢٥٠ سعرة", price: 20 },
  { id: "cr-liver", category: "crepe", name: "كريب رول كبدة", note: "٢٥٠ سعرة", price: 20 },
  { id: "meal-alex", category: "meals", name: "وجبة كبدة إسكندراني", note: "٣٥٠ سعرة", price: 20 },
  { id: "meal-radda", category: "meals", name: "وجبة كبدة ردة", note: "٣٨٠ سعرة", price: 25 },
  { id: "meal-lamb", category: "meals", name: "وجبة كبدة غنم", note: "٣٨٠ سعرة", price: 30 },
  { id: "meal-roast", category: "meals", name: "وجبة كبدة مشوية", note: "٣٢٠ سعرة", price: 25 },
  { id: "meal-so", category: "meals", name: "وجبة سجق إسكندراني", note: "٣٨٠ سعرة", price: 28 },
  { id: "side-salad", category: "sides", name: "سلطة خضراء شرائح", note: "١٠٠ سعرة", price: 6 },
  { id: "side-tahini", category: "sides", name: "طحينة وثوم", note: "١٥٠ سعرة", price: 5 },
  { id: "side-pickle", category: "sides", name: "مخلل", note: "٥٠ سعرة", price: 4 },
  { id: "side-mayo", category: "sides", name: "مايونيز سلطة", note: "٢٠٠ سعرة", price: 3 },
  { id: "side-cheese", category: "sides", name: "جبنة", note: "١٠٠ سعرة", price: 3 },
];

const REVIEWS = [
  {
    name: "أبو سعد — الخبر",
    meta: "زائر دائم · قبل ٣ أشهر",
    quote:
      "صراحة ممتاز جداً. جودة الأكل والسعر، والموظفين محترمين جداً. خلاص بقى المطعم المفضل ليا.",
    reply: "نورتنا وشرفتنا يا فندم",
  },
  {
    name: "هيثم — مرشد محلي",
    meta: "قبل ٤ أشهر",
    quote:
      "الناس ذوق، والكاشير شريف استقباله حلو. ساندوتشات الفينو الكبدة والسجق رجّعتنا لأيام زمان.",
    reply: "نورتنا وشرفتنا يا فندم",
  },
  {
    name: "محمد — زائر منتظم",
    meta: "قبل ٥ أشهر",
    quote:
      "الأكل فوق الممتاز والطعم أصلي أصلي. الكبدة إسكندراني والسجق. اعتمد هذا المكان، والتعامل جميل.",
    reply: "نورتنا وشرفتنا يا فندم",
  },
];

const priceFormat = new Intl.NumberFormat("ar-SA");

function formatPrice(value) {
  return priceFormat.format(value);
}

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function planMessage(planId) {
  const plan = PLANS.find((p) => p.id === planId);
  return `السلام عليكم، أبي أطلب باقة «${plan?.name ?? "حكاية الخبر"}» من مطعم حكايات كبدة وسجق.`;
}

function riyadhParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Riyadh",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type) => parts.find((p) => p.type === type)?.value ?? "";
  const map = {
    Sat: "sat",
    Sun: "sun",
    Mon: "mon",
    Tue: "tue",
    Wed: "wed",
    Thu: "thu",
    Fri: "fri",
  };
  return {
    dayId: map[get("weekday")] ?? "sat",
    hour: Number(get("hour")),
    minute: Number(get("minute")),
  };
}

function isOpenNow(date = new Date()) {
  const { hour, minute } = riyadhParts(date);
  const mins = hour * 60 + minute;
  return mins >= 7 * 60 + 30 || mins < 2 * 60;
}

const state = {
  plan: "tale",
  category: "all",
  cart: {},
  menuOpen: false,
};

function renderTabs() {
  const el = document.getElementById("tabs");
  el.innerHTML = CATEGORIES.map(
    (c) =>
      `<button type="button" class="tab${state.category === c.id ? " active" : ""}" data-cat="${c.id}">${c.label}</button>`,
  ).join("");
}

function renderDishes() {
  const list = document.getElementById("dishes");
  const items =
    state.category === "all"
      ? DISHES
      : DISHES.filter((d) => d.category === state.category);
  list.innerHTML = items
    .map((dish) => {
      const qty = state.cart[dish.id] || 0;
      const controls =
        qty === 0
          ? `<button type="button" class="btn btn-ink" data-add="${dish.id}">أضف</button>`
          : `<div class="qty">
              <button type="button" class="qty-btn" data-remove="${dish.id}" aria-label="إنقاص">−</button>
              <span>${formatPrice(qty)}</span>
              <button type="button" class="qty-btn plus" data-add="${dish.id}" aria-label="زيادة">+</button>
            </div>`;
      return `<li class="dish">
        <div>
          <div class="dish-name">${dish.name}</div>
          <div class="dish-note">${dish.note}</div>
          <div class="dish-price">${formatPrice(dish.price)} ر.س</div>
        </div>
        ${controls}
      </li>`;
    })
    .join("");
}

function renderCart() {
  const bar = document.getElementById("cart-bar");
  const lines = DISHES.filter((d) => state.cart[d.id]).map((d) => ({
    dish: d,
    qty: state.cart[d.id],
  }));
  const count = lines.reduce((s, l) => s + l.qty, 0);
  const total = lines.reduce((s, l) => s + l.qty * l.dish.price, 0);
  if (!count) {
    bar.hidden = true;
    return;
  }
  bar.hidden = false;
  bar.innerHTML = `
    <div>
      <strong>${formatPrice(count)} في السلة · ${formatPrice(total)} ر.س</strong>
      <div class="muted" style="color:var(--parchment-deep);font-size:.875rem">المجموع تقريبي قبل التأكيد</div>
    </div>
    <button type="button" class="btn btn-chili" id="send-cart">أرسل الطلب على واتساب</button>
  `;
  document.getElementById("send-cart").onclick = () => {
    const msg = [
      "السلام عليكم، طلب من حكايات كبدة وسجق:",
      ...lines.map((l) => `• ${l.dish.name} × ${l.qty}`),
      `المجموع التقريبي: ${total} ر.س`,
      `الباقة: ${PLANS.find((p) => p.id === state.plan)?.name}`,
    ].join("\n");
    window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
  };
}

function renderPlans() {
  const el = document.getElementById("plans-grid");
  el.innerHTML = PLANS.map((p) => {
    const selected = state.plan === p.id;
    return `<article class="plan-card${p.popular ? " popular" : ""}${selected ? " selected" : ""}">
      <div class="plan-top">
        <h3>${p.name}</h3>
        ${p.popular ? '<span class="plan-badge">الأكثر طلباً</span>' : ""}
      </div>
      <div class="plan-price">${p.range}<span>ر.س</span></div>
      <p class="muted" style="margin-top:0.75rem">${p.blurb}</p>
      <ul class="plan-items">${p.items.map((i) => `<li>✓ ${i}</li>`).join("")}</ul>
      <button type="button" class="btn ${p.popular ? "btn-chili" : "btn-outline"}" data-plan="${p.id}" style="${p.popular ? "" : "background:var(--cream);color:var(--ink)"}">
        ${selected ? "الباقة مختارة" : "اختَر هالباقة"}
      </button>
    </article>`;
  }).join("");
}

function renderHours() {
  const list = document.getElementById("hours-list");
  const today = riyadhParts().dayId;
  list.innerHTML = HOURS.map(
    (d) =>
      `<li class="${d.id === today ? "today" : ""}"><span>${d.label}${d.id === today ? " · اليوم" : ""}</span><span>${HOURS_LABEL}</span></li>`,
  ).join("");
}

function updateOpenStatus() {
  const open = isOpenNow();
  document.querySelectorAll("[data-open-status]").forEach((el) => {
    el.textContent = open ? "مفتوح الآن" : "مغلق حالياً";
  });
}

function wireNav() {
  const toggle = document.getElementById("menu-toggle");
  const mobile = document.getElementById("nav-mobile");
  toggle.addEventListener("click", () => {
    state.menuOpen = !state.menuOpen;
    mobile.classList.toggle("open", state.menuOpen);
    toggle.setAttribute("aria-expanded", String(state.menuOpen));
    toggle.textContent = state.menuOpen ? "✕" : "☰";
  });
  mobile.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      state.menuOpen = false;
      mobile.classList.remove("open");
      toggle.textContent = "☰";
      toggle.setAttribute("aria-expanded", "false");
    }),
  );

  const sections = ["story", "gallery", "plans", "menu", "reviews", "visit"];
  const links = document.querySelectorAll(".nav-desktop a, .nav-mobile a");
  const observer = new IntersectionObserver(
    (entries) => {
      const vis = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!vis?.target.id) return;
      links.forEach((a) => {
        a.classList.toggle("active", a.getAttribute("href") === `#${vis.target.id}`);
      });
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: [0.15, 0.4] },
  );
  sections.forEach((id) => {
    const node = document.getElementById(id);
    if (node) observer.observe(node);
  });
}

function wireMenu() {
  document.getElementById("tabs").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cat]");
    if (!btn) return;
    state.category = btn.dataset.cat;
    renderTabs();
    renderDishes();
  });
  document.getElementById("dishes").addEventListener("click", (e) => {
    const add = e.target.closest("[data-add]");
    const remove = e.target.closest("[data-remove]");
    if (add) {
      const id = add.dataset.add;
      state.cart[id] = (state.cart[id] || 0) + 1;
      renderDishes();
      renderCart();
    }
    if (remove) {
      const id = remove.dataset.remove;
      const next = (state.cart[id] || 0) - 1;
      if (next <= 0) delete state.cart[id];
      else state.cart[id] = next;
      renderDishes();
      renderCart();
    }
  });
}

function wirePlans() {
  document.getElementById("plans-grid").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-plan]");
    if (!btn) return;
    state.plan = btn.dataset.plan;
    const select = document.getElementById("guest-plan");
    if (select) select.value = state.plan;
    renderPlans();
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  });
}

function wireGallery() {
  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  document.querySelectorAll("[data-zoom]").forEach((btn) => {
    btn.addEventListener("click", () => {
      img.src = btn.dataset.zoom;
      img.alt = btn.dataset.alt || "";
      box.classList.add("open");
    });
  });
  document.getElementById("lightbox-close").addEventListener("click", () => {
    box.classList.remove("open");
  });
  box.addEventListener("click", (e) => {
    if (e.target === box) box.classList.remove("open");
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") box.classList.remove("open");
  });
}

function wireSignup() {
  const form = document.getElementById("offer-form");
  const success = document.getElementById("offer-success");
  try {
    const saved = JSON.parse(localStorage.getItem(OFFER_KEY) || "null");
    if (saved?.email) {
      form.hidden = true;
      success.hidden = false;
      document.getElementById("success-email").textContent = saved.email;
      document.getElementById("success-plan").textContent =
        PLANS.find((p) => p.id === saved.plan)?.name || "";
      state.plan = saved.plan || state.plan;
    }
  } catch {}

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("guest-name").value.trim();
    const email = document.getElementById("guest-email").value.trim();
    const plan = document.getElementById("guest-plan").value;
    const err = document.getElementById("form-error");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      err.textContent = "اكتب بريداً صحيحاً عشان نرسل لك العروض.";
      return;
    }
    const next = { name, email, plan, at: new Date().toISOString() };
    localStorage.setItem(OFFER_KEY, JSON.stringify(next));
    state.plan = plan;
    err.textContent = "";
    form.hidden = true;
    success.hidden = false;
    document.getElementById("success-email").textContent = email;
    document.getElementById("success-plan").textContent =
      PLANS.find((p) => p.id === plan)?.name || "";
    renderPlans();
  });

  document.getElementById("edit-offer")?.addEventListener("click", () => {
    form.hidden = false;
    success.hidden = true;
  });

  document.getElementById("wa-plan")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(whatsappUrl(planMessage(state.plan)), "_blank", "noopener,noreferrer");
  });
}

function wireCopy() {
  document.getElementById("copy-address")?.addEventListener("click", async () => {
    const btn = document.getElementById("copy-address");
    try {
      await navigator.clipboard.writeText(`${ADDRESS} · ${PLUS_CODE}`);
      btn.textContent = "تم نسخ العنوان";
      setTimeout(() => {
        btn.textContent = "انسخ العنوان";
      }, 2000);
    } catch {}
  });
}

function initWhatsAppLinks() {
  document.querySelectorAll("[data-wa-plan]").forEach((a) => {
    a.href = whatsappUrl(planMessage(a.dataset.waPlan || "tale"));
  });
  document.querySelectorAll("[data-maps]").forEach((a) => {
    a.href = MAPS_URL;
  });
  document.querySelectorAll("[data-tel]").forEach((a) => {
    a.href = `tel:${PHONE_TEL}`;
    if (a.dataset.tel === "label") a.textContent = PHONE_DISPLAY;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderTabs();
  renderDishes();
  renderCart();
  renderPlans();
  renderHours();
  updateOpenStatus();
  setInterval(updateOpenStatus, 30000);
  wireNav();
  wireMenu();
  wirePlans();
  wireGallery();
  wireSignup();
  wireCopy();
  initWhatsAppLinks();

  const planSelect = document.getElementById("guest-plan");
  if (planSelect) {
    planSelect.innerHTML = PLANS.map(
      (p) => `<option value="${p.id}">${p.name} · ${p.range} ر.س</option>`,
    ).join("");
    planSelect.value = state.plan;
    planSelect.addEventListener("change", () => {
      state.plan = planSelect.value;
      renderPlans();
    });
  }
});
