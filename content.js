// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to change the site's content.
// Videos: put files in /media and set `src` (and optional `poster`).
// While `src` is empty, a placeholder box is shown instead.
// ─────────────────────────────────────────────────────────────

window.SITE = {
  email: "mbenyasser74@gmail.com",
  emailSubject: "Video editing project",

  // 16:9 showreel (built in After Effects: Showreel/AE/build_v05.jsx).
  // MUSIC IS UNLICENSED — swap to a licensed track before publishing.
  showreel: { src: "media/showreel.mp4", poster: "media/showreel.jpg", label: "Showreel" },

  // Keep long + short between 4 and 8 in total (Hick's law).
  // Long-form (16:9): 2–3 videos. Use a 60–90s highlight cut, not the full video,
  // and add `link` to the full upload on YouTube if you like.
  long: [
    { title: "7 mistakes small accounts make", tag: "YouTube · Creator education", badge: "Highlights", src: "media/long-small-account-mistakes.mp4", poster: "media/long-small-account-mistakes.jpg", link: "" },
    { title: "30 days of content in 60 minutes", tag: "YouTube · Creator education", badge: "Highlights", src: "media/long-30-days-of-content.mp4", poster: "media/long-30-days-of-content.jpg", link: "" },
    { title: "The man they tried to kill three times in one night", tag: "YouTube · Documentary (Arabic)", badge: "Documentary · Highlights", src: "media/long-rasputin-documentary.mp4", poster: "media/long-rasputin-documentary.jpg", link: "" }
  ],

  // Short-form (9:16): 3–5 videos.
  short: [
    { title: "Hyaluronic acid serums", tag: "DTC ad · Skincare", badge: "DTC ad", src: "media/ad-hyaluronic-serums.mp4", poster: "media/ad-hyaluronic-serums.jpg" },
    { title: "Retinol, explained", tag: "DTC ad · Skincare", badge: "DTC ad", src: "media/ad-retinol.mp4", poster: "media/ad-retinol.jpg" },
    { title: "Video-marketing agency reel", tag: "Viral editing · Promo", badge: "Viral editing", src: "media/viral-agency-promo.mp4", poster: "media/viral-agency-promo.jpg" },
    { title: "3 things from beginner to pro", tag: "Viral editing · Motion graphics", badge: "Viral editing", src: "media/viral-three-things.mp4", poster: "media/viral-three-things.jpg" }
  ],

  // Client-approved quotes. For a new one, add it with `approved: false` (shows a
  // "Draft — awaiting approval" marker) and flip to true once the client signs off.
  testimonials: [
    { quote: "Muhammad turned our AI tutorials into Shorts that actually hold attention. Fast cuts, clean motion graphics, and he understood the product without me having to explain it twice.", name: "Mo Junayed", role: "Ezra Ads", approved: true },
    { quote: "Every episode comes back with graphics that make the ideas easier to follow, not just prettier. He takes a script and turns it into something people watch to the end.", name: "Shep", role: "Blueprint for Creators", approved: true },
    { quote: "Reliable, quick turnarounds, and edits that feel premium. Muhammad brings ideas to the table instead of waiting to be told what to do.", name: "Syed", role: "Theventurebeyond", approved: true }
  ],

  socials: [
    { label: "Instagram", url: "" },
    { label: "X", url: "" }
  ]
};
