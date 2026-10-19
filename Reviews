/**
 * قسم تقييمات الزوار — متوافق مع موقع حكايات كبدة وسجق
 * يعمل بدون سيرفر: يحفظ التقييمات محلياً ويعرضها في الصفحة،
 * مع خيار إرسال التقييم للمطعم عبر واتساب.
 */
(function () {
  const STORAGE_KEY = "hikayat-guest-reviews";
  const WHATSAPP = "966597301800";
  const MAX_REVIEWS = 50;

  function loadReviews() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const list = raw ? JSON.parse(raw) : [];
      return Array.isArray(list) ? list : [];
    } catch {
      return [];
    }
  }

  function saveReviews(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(0, MAX_REVIEWS)));
  }

  function starsText(n) {
    const full = Math.max(1, Math.min(5, Number(n) || 5));
    return "★".repeat(full) + "☆".repeat(5 - full);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatDate(iso) {
    try {
      const d = new Date(iso);
      return new Intl.DateTimeFormat("ar-SA", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(d);
    } catch {
      return "اليوم";
    }
  }

  function renderList() {
    const host = document.getElementById("guest-reviews-list");
    if (!host) return;

    const list = loadReviews();
    if (!list.length) {
      host.innerHTML =
        '<p class="muted guest-reviews-empty">كن أول من يشارك تجربته هنا.</p>';
      return;
    }

    host.innerHTML = list
      .map(
        (r) => `
      <figure class="review-card guest-review-card">
        <div class="stars" aria-label="تقييم ${r.rating} من 5">${starsText(r.rating)}</div>
        <blockquote>${escapeHtml(r.comment)}</blockquote>
        <figcaption class="review-meta">
          <strong>${escapeHtml(r.name)}</strong>
          <span>${formatDate(r.createdAt)}</span>
        </figcaption>
      </figure>`
      )
      .join("");
  }

  function setStarUI(value) {
    const wrap = document.getElementById("rating-stars");
    if (!wrap) return;
    const buttons = wrap.querySelectorAll("[data-star]");
    buttons.forEach((btn) => {
      const n = Number(btn.getAttribute("data-star"));
      const active = n <= value;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-checked", n === value ? "true" : "false");
      btn.textContent = active ? "★" : "☆";
    });
    const hidden = document.getElementById("review-rating");
    if (hidden) hidden.value = String(value);
  }

  function initStars() {
    const wrap = document.getElementById("rating-stars");
    if (!wrap) return;
    let current = 5;
    setStarUI(current);

    wrap.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-star]");
      if (!btn) return;
      current = Number(btn.getAttribute("data-star"));
      setStarUI(current);
    });

    wrap.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault();
        const dir = e.key === "ArrowLeft" ? 1 : -1; // RTL: يسار = أعلى
        current = Math.max(1, Math.min(5, current + dir));
        setStarUI(current);
      }
    });
  }

  function showMessage(text, isError) {
    const el = document.getElementById("review-form-msg");
    if (!el) return;
    el.hidden = false;
    el.textContent = text;
    el.classList.toggle("is-error", !!isError);
    el.classList.toggle("is-success", !isError);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = (form.querySelector("#review-name")?.value || "").trim();
    const comment = (form.querySelector("#review-comment")?.value || "").trim();
    const rating = Number(form.querySelector("#review-rating")?.value || 5);
    const sendWa = form.querySelector("#review-send-wa")?.checked;

    if (name.length < 2) {
      showMessage("اكتب اسمك (حرفين على الأقل).", true);
      return;
    }
    if (comment.length < 8) {
      showMessage("اكتب رأيك باختصار (٨ أحرف على الأقل).", true);
      return;
    }

    const entry = {
      id: Date.now().toString(36),
      name,
      comment,
      rating: Math.max(1, Math.min(5, rating)),
      createdAt: new Date().toISOString(),
    };

    const list = loadReviews();
    list.unshift(entry);
    saveReviews(list);
    renderList();

    form.reset();
    setStarUI(5);
    showMessage("شكراً لك — تم إضافة تقييمك على الصفحة.", false);

    if (sendWa) {
      const text =
        `تقييم جديد من موقع حكايات كبدة وسجق%0A%0A` +
        `الاسم: ${encodeURIComponent(name)}%0A` +
        `التقييم: ${entry.rating}/5%0A` +
        `الرأي: ${encodeURIComponent(comment)}`;
      window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank", "noopener");
    }
  }

  function init() {
    const form = document.getElementById("guest-review-form");
    if (!form) return;
    initStars();
    renderList();
    form.addEventListener("submit", handleSubmit);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
