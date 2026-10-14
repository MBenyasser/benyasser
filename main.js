(function () {
  const S = window.SITE;
  const mailto = `mailto:${S.email}?subject=${encodeURIComponent(S.emailSubject)}`;
  document.querySelectorAll("[data-email]").forEach(a => (a.href = mailto));
  document.getElementById("year").textContent = new Date().getFullYear();

  // Renders a video, or a placeholder box while `src` is empty.
  function media(item, { autoplay = false, ratio = "9:16" } = {}) {
    if (!item.src) {
      const ph = document.createElement("div");
      ph.className = "placeholder";
      ph.innerHTML = `<span class="play">▶</span><span>${item.label || item.title}</span><small>${ratio} video placeholder</small>`;
      return ph;
    }
    const v = document.createElement("video");
    v.src = item.src;
    if (item.poster) v.poster = item.poster;
    v.playsInline = true;
    v.loop = true;
    if (autoplay) {
      v.muted = true;
      v.autoplay = true;
      v.preload = "auto";
    } else {
      v.preload = "none";
      v.controls = true;
    }
    return v;
  }

  // Hero showreel
  const hero = document.querySelector('[data-video="showreel"]');
  hero.appendChild(media(S.showreel, { autoplay: true, ratio: "16:9" }));
  if (S.showreel.src) {
    const btn = document.createElement("button");
    btn.className = "sound";
    btn.textContent = "Sound on";
    btn.onclick = () => {
      const v = hero.querySelector("video");
      v.muted = !v.muted;
      btn.textContent = v.muted ? "Sound on" : "Sound off";
    };
    hero.appendChild(btn);
  }

  function card(item, ratio) {
    const el = document.createElement("article");
    el.className = "card";
    const frame = document.createElement("div");
    frame.className = ratio === "16:9" ? "frame wide" : "frame";
    frame.appendChild(media(item, { ratio }));
    el.appendChild(frame);
    const link = item.link ? ` · <a href="${item.link}" target="_blank" rel="noopener">Watch full video ↗</a>` : "";
    el.insertAdjacentHTML("beforeend", `<h3>${item.title}</h3><p class="tag">${item.tag}${link}</p>`);
    return el;
  }

  // Long-form grid
  const long = document.getElementById("long");
  S.long.forEach(item => long.appendChild(card(item, "16:9")));

  // Short-form carousel
  const track = document.getElementById("carousel");
  S.short.forEach(item => track.appendChild(card(item, "9:16")));

  // Only one video plays at a time
  document.addEventListener("play", e => {
    document.querySelectorAll("video").forEach(v => {
      if (v !== e.target && !v.muted) v.pause();
    });
  }, true);

  document.querySelectorAll(".arrow").forEach(b => {
    b.onclick = () => {
      const step = track.querySelector(".card").offsetWidth + 20;
      track.scrollBy({ left: step * Number(b.dataset.dir), behavior: "smooth" });
    };
  });

  // Testimonials
  const quotes = document.getElementById("quotes");
  S.testimonials.forEach(t => {
    quotes.insertAdjacentHTML("beforeend",
      `<figure class="quote"><blockquote>“${t.quote}”</blockquote><figcaption><strong>${t.name}</strong><span>${t.role}</span></figcaption></figure>`);
  });

  // Socials (hidden until a URL is set)
  const socials = document.getElementById("socials");
  S.socials.filter(s => s.url).forEach(s => {
    socials.insertAdjacentHTML("beforeend", `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`);
  });
})();
