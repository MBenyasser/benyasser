// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to change the site's content.
// Videos: put files in /media and set `src` (and optional `poster`).
// While `src` is empty, a placeholder box is shown instead.
// ─────────────────────────────────────────────────────────────

window.SITE = {
  email: "mbenyasser74@gmail.com",
  emailSubject: "Video editing project",

  // 16:9 showreel — mix your best long-form and short-form moments.
  showreel: { src: "", poster: "", label: "Showreel" },

  // Keep long + short between 4 and 8 in total (Hick's law).
  // Long-form (16:9): 2–3 videos. Use a 60–90s highlight cut, not the full video,
  // and add `link` to the full upload on YouTube if you like.
  long: [
    { title: "YouTube video — documentary edit", tag: "Long-form", src: "", poster: "", link: "" },
    { title: "YouTube video — talking-head edit", tag: "Long-form", src: "", poster: "", link: "" },
    { title: "YouTube video — explainer edit", tag: "Long-form", src: "", poster: "", link: "" }
  ],

  // Short-form (9:16): 3–5 videos.
  short: [
    { title: "Viral reel — before / after", tag: "Motion graphics", src: "", poster: "" },
    { title: "Split-screen explainer", tag: "Educational", src: "", poster: "" },
    { title: "Vox-style collage", tag: "Documentary", src: "", poster: "" },
    { title: "Cosmic motivational reel", tag: "Cinematic", src: "", poster: "" }
  ],

  // PLACEHOLDERS — replace with real client quotes before publishing.
  // Best quotes name a specific result (views, retention, time saved).
  testimonials: [
    { quote: "Replace with a real client quote that names a specific result.", name: "Client name", role: "Role, Company / @handle" },
    { quote: "Replace with a real client quote that names a specific result.", name: "Client name", role: "Role, Company / @handle" },
    { quote: "Replace with a real client quote that names a specific result.", name: "Client name", role: "Role, Company / @handle" }
  ],

  socials: [
    { label: "Instagram", url: "" },
    { label: "X", url: "" }
  ]
};
