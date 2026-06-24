/* ═══════════════════════════════════════════
   Happy Birthday Ammanyyyyyy ❤️
   Cinematic Galaxy Experience
   ═══════════════════════════════════════════ */

// ─── i18n ───
const i18n = {
  en: {
    giftBtn: "Tap To Open Your Gift 🤍",
    heroTitle: "Happy Birthday Ammanyyyyyy ❤️",
    heroSub: "My Universe, My Everything",
    daysPubgLabel: "Days Since PUBG ❤️",
    daysMetLabel: "Days Since We Met ❤️",
    timelineTitle: "Our Story ❤️",
    tl1Date: "05-04-2025 ❤️",
    tl1Text: "The Day We Met",
    tl2Date: "01-07-1999 🎂",
    tl2Text: "The Day An Angel Was Born",

    typewriter: ["In every universe,", "I would still choose you 🤍"],
    finalMsg: "Happy Birthday Ammanyyyyyy ❤️",
    modalClose: "Close 🤍",
    langBtn: "AR",
    loveMessages: [
      "You are my favorite place ❤️",
      "Every day with you is beautiful.",
      "You are my universe.",
      "I love you more than words can say.",
      "You make my world complete ❤️",
      "My heart beats only for you.",
      "You are my everything.",
      "Forever and always ❤️",
      "لو لفيت عمري كلو مش هلاقي زيك بحبك يااجمل انسه ف الكون يست وست الكل ربنا يديمك نعمه ليا",
      "You are the best thing that ever happened to me.",
      "A million times over, I will always choose you.",
      "You are my sunshine on a rainy day.",
    ],
  },
  ar: {
    giftBtn: "اضغط لفتح هديتك 🤍",
    heroTitle: "كل سنة وانتِ طيبة يا أمانييييي ❤️",
    heroSub: "كوني، كل حاجة",
    daysPubgLabel: "يوم من أول مرة اتكلمنا على ببجي ❤️",
    daysMetLabel: "يوم من أول مرة اتقابلنا ❤️",
    timelineTitle: "قصتنا ❤️",
    tl1Date: "٢٠٢٥/٠٤/٠٥ ❤️",
    tl1Text: "اليوم اللي اتقابلنا فيه",
    tl2Date: "١٩٩٩/٠٧/٠١ 🎂",
    tl2Text: "اليوم اللي ملاك اتولد فيه",

    typewriter: ["في كل كون،", "كنت هختارك برضو 🤍"],
    finalMsg: "كل سنة وانتِ طيبة يا أمانييييي ❤️",
    modalClose: "إغلاق 🤍",
    langBtn: "EN",
    loveMessages: [
      "وجودك أجمل حاجة حصلتلي.",
      "أنتِ عالمي كله ❤️",
      "كل يوم معاكِ أحلى من اللي قبله.",
      "بحبك أكتر من أي كلام.",
      "أنتِ كل حاجة حلوة في حياتي ❤️",
      "قلبي بينبض بس ليكِ.",
      "أنتِ كل حاجتي.",
      "للأبد وأكتر ❤️",
      "لو لفيت عمري كلو مش هلاقي زيك بحبك يااجمل انسه ف الكون يست وست الكل ربنا يديمك نعمه ليا",
      "أنتِ النور اللي منور دنيتي.",
      "بحبك قد النجوم وأكتر.",
      "ربنا يخليكي ليا يا أغلى حاجة في دنيتي.",
    ],
  },
};

let currentLang = "en";

// ─── DOM REFS ───
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

// ─── OVERLAY ───
function initOverlay() {
  const overlay = $("#overlay");
  const starsContainer = overlay.querySelector(".stars-bg");

  // Generate overlay stars
  for (let i = 0; i < 80; i++) {
    const star = document.createElement("span");
    const size = Math.random() * 3 + 1;
    star.style.cssText = `
      width:${size}px;height:${size}px;
      top:${Math.random() * 100}%;left:${Math.random() * 100}%;
      animation-delay:${Math.random() * 2}s;animation-duration:${1.5 + Math.random() * 2}s;
    `;
    starsContainer.appendChild(star);
  }

  $(".gift-btn").addEventListener("click", () => {
    overlay.classList.add("hidden");
    $(".main-content").classList.add("visible");
    startExperience();
  });
}

// ─── LANGUAGE ───
function switchLang() {
  currentLang = currentLang === "en" ? "ar" : "en";
  const t = i18n[currentLang];
  document.body.dir = currentLang === "ar" ? "rtl" : "ltr";

  $(".gift-btn").textContent = t.giftBtn;
  $(".lang-switch").textContent = t.langBtn;
  $(".hero-title").textContent = t.heroTitle;
  $(".hero-subtitle").textContent = t.heroSub;
  $("#label-pubg").textContent = t.daysPubgLabel;
  $("#label-met").textContent = t.daysMetLabel;
  $('[data-i18n="timelineTitle"]').textContent = t.timelineTitle;
  $('[data-i18n="tl1Date"]').textContent = t.tl1Date;
  $('[data-i18n="tl1Text"]').textContent = t.tl1Text;
  $('[data-i18n="tl2Date"]').textContent = t.tl2Date;
  $('[data-i18n="tl2Text"]').textContent = t.tl2Text;

  $(".final-message").textContent = t.finalMsg;
}

// ─── STARS BACKGROUND ───
function initStars() {
  const canvas = document.createElement("canvas");
  canvas.classList.add("stars-canvas");
  $(".galaxy-bg").appendChild(canvas);
  const ctx = canvas.getContext("2d");
  let stars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.3,
        speed: Math.random() * 0.3 + 0.05,
        opacity: Math.random(),
        phase: Math.random() * Math.PI * 2,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const time = Date.now() * 0.001;
    stars.forEach((s) => {
      const opacity = 0.3 + 0.7 * Math.abs(Math.sin(time * s.speed + s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${opacity})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize);
}

// ─── PARTICLE SYSTEM ───
function initParticles() {
  const canvas = $("#particles-canvas");
  const ctx = canvas.getContext("2d");
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = -Math.random() * 0.5 - 0.1;
      this.r = Math.random() * 2 + 0.5;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.color = ["255,45,138", "196,167,231", "123,47,190", "255,215,0"][
        Math.floor(Math.random() * 4)
      ];
      this.life = Math.random() * 200 + 100;
      this.age = 0;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.age++;
      if (this.age > this.life || this.y < -10) this.reset();
    }
    draw() {
      const fade = 1 - this.age / this.life;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color},${this.opacity * fade})`;
      ctx.fill();
    }
  }

  function init() {
    resize();
    particles = [];
    for (let i = 0; i < 60; i++) particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  init();
  animate();
  window.addEventListener("resize", resize);
}

// ─── SHOOTING STARS ───
function spawnShootingStar() {
  const star = document.createElement("div");
  star.className = "shooting-star";
  star.style.top = Math.random() * 50 + "%";
  star.style.left = Math.random() * 50 + "%";
  star.style.transform = `rotate(${30 + Math.random() * 20}deg)`;
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 1500);
}

function initShootingStars() {
  setInterval(spawnShootingStar, 4000 + Math.random() * 4000);
}

// ─── FLOATING HEARTS ───
function initFloatingHearts() {
  const container = $(".floating-hearts");
  const hearts = ["❤️", "💕", "🌹", "💗", "✨", "🤍"];

  function spawn() {
    const el = document.createElement("span");
    el.className = "float-heart";
    el.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    el.style.left = Math.random() * 100 + "%";
    el.style.animationDuration = 8 + Math.random() * 8 + "s";
    el.style.fontSize = 0.8 + Math.random() * 0.8 + "rem";
    container.appendChild(el);
    setTimeout(() => el.remove(), 16000);
  }

  setInterval(spawn, 2500);
}

// ─── ORBIT SYSTEM ───
function initOrbit() {
  const system = $(".orbit-system");
  const orbitTexts = [
    "Ammanyyyyyy ❤️",
    "Happy Birthday",
    "My Universe",
    "Forever",
    "Te Amo",
    "My Everything",
    "05-04-2025",
    "01-07-1999",
  ];

  // Dynamic radius based on container size
  const systemSize = system.getBoundingClientRect().width || 400;
  const textRadius = systemSize * 0.42;
  const photoRadius = systemSize * 0.36;

  orbitTexts.forEach((text, i) => {
    const angle = (360 / orbitTexts.length) * i;
    const el = document.createElement("span");
    el.className = "orbit-item";
    el.textContent = text;
    el.style.transform = `translate(-50%,-50%) rotateY(${angle}deg) translateZ(${textRadius}px)`;
    el.style.animationDelay = `${i * 0.5}s`;
    system.appendChild(el);
  });

  // Orbit photos
  for (let i = 1; i <= 4; i++) {
    const angle = 90 * i + 45;
    const frame = document.createElement("div");
    frame.className = "orbit-photo";
    frame.innerHTML = `<img src="images/${i}.jpg" alt="Memory ${i}" loading="lazy">`;
    frame.style.transform = `translate(-50%,-50%) rotateY(${angle}deg) translateZ(${photoRadius}px)`;
    system.appendChild(frame);
  }

  // Glow ring around heart
  const ring = document.createElement("div");
  ring.className = "glow-ring";
  $(".heart-container").appendChild(ring);
}

// ─── CAROUSEL ───
function initCarousel() {
  const track = $(".carousel-track");
  const dotsContainer = $(".carousel-dots");
  let current = 0;
  
  // List of all images in the folder
  const images = [];
  for (let i = 1; i <= 10; i++) images.push(`images/${i}.jpg`);
  for (let i = 11; i <= 41; i++) images.push(`images/${i}.jpeg`);
  
  const total = images.length;

  // Create slides
  images.forEach((src, index) => {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";
    slide.innerHTML = `<img src="${src}" alt="Photo ${index + 1}" loading="lazy">`;
    track.appendChild(slide);
  });

  // Create dots
  for (let i = 0; i < total; i++) {
    const dot = document.createElement("button");
    dot.className = "carousel-dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => goTo(i));
    dotsContainer.appendChild(dot);
  }

  function goTo(n) {
    current = n;
    track.style.transform = `translateX(-${current * 100}%)`;
    const dots = $$(".carousel-dot");
    dots.forEach((d, i) => {
      if (i === current) {
        d.classList.add("active");
        // Scroll the active dot horizontally within the container without jumping the page
        dotsContainer.scrollTo({
          left: d.offsetLeft - dotsContainer.clientWidth / 2 + d.clientWidth / 2,
          behavior: 'smooth'
        });
      } else {
        d.classList.remove("active");
      }
    });
  }

  $(".carousel-prev").addEventListener("click", () =>
    goTo((current - 1 + total) % total)
  );
  $(".carousel-next").addEventListener("click", () =>
    goTo((current + 1) % total)
  );

  // Auto-play
  setInterval(() => goTo((current + 1) % total), 5000);
}

// ─── DAYS COUNTERS ───
function initCounter() {
  const startPubg = new Date(2023, 9, 14); // Oct 14, 2023
  const startMet = new Date(2025, 3, 5); // April 5, 2025

  function calc() {
    const now = new Date();
    
    const diffPubg = Math.floor((now - startPubg) / (1000 * 60 * 60 * 24));
    const pubgEl = $("#counter-pubg");
    if (pubgEl) pubgEl.textContent = diffPubg;

    const diffMet = Math.floor((now - startMet) / (1000 * 60 * 60 * 24));
    const metEl = $("#counter-met");
    if (metEl) metEl.textContent = diffMet;
  }
  calc();
  setInterval(calc, 60000);
}

// ─── MUSIC PLAYER ───
function initMusic() {
  const btn = $("#music-btn");
  const audio = $("#bg-music");
  const track = $("#music-track");
  const progress = $("#music-progress");
  const timeDisplay = $("#music-time");
  let playing = false;

  function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  function updateTime() {
    const current = audio.currentTime;
    const total = audio.duration;
    if (total) {
      const percent = (current / total) * 100;
      progress.style.width = percent + "%";
      timeDisplay.textContent = `${formatTime(current)} / ${formatTime(total)}`;
    }
  }

  // Play/Pause
  btn.addEventListener("click", () => {
    if (playing) {
      audio.pause();
      btn.classList.remove("playing");
      btn.textContent = "🎵";
    } else {
      audio.play().catch(() => {});
      btn.classList.add("playing");
      btn.textContent = "🎶";
    }
    playing = !playing;
  });

  // Update progress
  audio.addEventListener("timeupdate", updateTime);
  audio.addEventListener("loadedmetadata", updateTime);

  // Seek
  track.addEventListener("click", (e) => {
    const rect = track.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / rect.width;
    if (audio.duration) {
      audio.currentTime = percent * audio.duration;
    }
  });
}

// ─── CONFETTI ───
function initConfetti() {
  const canvas = $("#confetti-canvas");
  const ctx = canvas.getContext("2d");
  let confetti = [];
  let active = false;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  class Piece {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = -10 - Math.random() * 40;
      this.w = 6 + Math.random() * 6;
      this.h = 4 + Math.random() * 4;
      this.vx = (Math.random() - 0.5) * 3;
      this.vy = 1.5 + Math.random() * 3;
      this.rot = Math.random() * 360;
      this.rotSpeed = (Math.random() - 0.5) * 8;
      this.color = ["#ff2d8a","#ffd700","#c4a7e7","#7b2fbe","#ff6b9d","#ffffff"][Math.floor(Math.random()*6)];
      this.opacity = 1;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.rot += this.rotSpeed;
      this.vy += 0.02;
      if (this.y > canvas.height + 20) this.opacity = 0;
    }
    draw() {
      if (this.opacity <= 0) return;
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rot * Math.PI) / 180);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.fillRect(-this.w/2, -this.h/2, this.w, this.h);
      ctx.restore();
    }
  }

  function burst() {
    for (let i = 0; i < 80; i++) confetti.push(new Piece());
    if (!active) { active = true; animate(); }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti = confetti.filter(c => c.opacity > 0);
    confetti.forEach(c => { c.update(); c.draw(); });
    if (confetti.length > 0) requestAnimationFrame(animate);
    else active = false;
  }

  // Burst on open and periodically
  setTimeout(burst, 1500);
  setInterval(burst, 15000);
}

// ─── FIREWORKS ───
function initFireworks() {
  const container = $("#fireworks-container");
  const colors = ["#ff2d8a","#ffd700","#c4a7e7","#7b2fbe","#ff6b9d"];

  function fire() {
    const x = 10 + Math.random() * 80;
    const y = 10 + Math.random() * 40;
    for (let i = 0; i < 20; i++) {
      const dot = document.createElement("div");
      dot.className = "firework-burst";
      const angle = (Math.PI * 2 * i) / 20;
      const dist = 40 + Math.random() * 60;
      dot.style.left = x + "%";
      dot.style.top = y + "%";
      dot.style.background = colors[Math.floor(Math.random() * colors.length)];
      dot.style.setProperty("--fx", `${Math.cos(angle) * dist}px`);
      dot.style.setProperty("--fy", `${Math.sin(angle) * dist}px`);
      dot.style.animationDelay = `${Math.random() * 0.15}s`;
      container.appendChild(dot);
      setTimeout(() => dot.remove(), 800);
    }
  }

  setTimeout(fire, 2000);
  setTimeout(fire, 2500);
  setTimeout(fire, 3200);
  setInterval(() => {
    fire();
    setTimeout(fire, 400 + Math.random() * 600);
  }, 12000);
}

// ─── BALLOONS ───
function initBalloons() {
  const balloons = ["🎈","🎈","🎈","🎁","🎂","🎉","🎊","🪅"];

  function spawn() {
    const el = document.createElement("span");
    el.className = "balloon";
    el.textContent = balloons[Math.floor(Math.random() * balloons.length)];
    el.style.left = 5 + Math.random() * 90 + "%";
    el.style.animationDuration = 6 + Math.random() * 6 + "s";
    el.style.fontSize = 1.5 + Math.random() * 1.5 + "rem";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 12000);
  }

  // Initial burst
  for (let i = 0; i < 6; i++) setTimeout(spawn, 1000 + i * 400);
  setInterval(spawn, 5000);
}

// ─── LIGHTBOX ───
function openLightbox(src) {
  const lb = $(".lightbox");
  lb.querySelector("img").src = src;
  lb.classList.add("active");
}

function initLightbox() {
  const lb = $(".lightbox");
  lb.addEventListener("click", (e) => {
    if (e.target === lb || e.target.classList.contains("lightbox-close")) {
      lb.classList.remove("active");
    }
  });
  $(".lightbox-close").addEventListener("click", () =>
    lb.classList.remove("active")
  );
}

// ─── HEART CLICK ───
function initHeartClick() {
  $(".heart-container").addEventListener("click", (e) => {
    const rect = $(".heart-container").getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    // Massive Explosion particles
    const emojis = ["❤️", "💕", "✨", "💗", "🌹", "💖", "⭐", "🤍", "😍", "🥰", "💍", "👑"];
    for (let i = 0; i < 40; i++) {
      const p = document.createElement("span");
      p.className = "explosion-particle";
      p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      p.style.fontSize = Math.random() * 1.5 + 1 + "rem";
      const angle = (Math.PI * 2 * i) / 40 + (Math.random() * 0.2);
      const dist = 80 + Math.random() * 150;
      p.style.left = cx + "px";
      p.style.top = cy + "px";
      p.style.setProperty("--ex", `${Math.cos(angle) * dist}px`);
      p.style.setProperty("--ey", `${Math.sin(angle) * dist}px`);
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 1200);
    }

    // Love message
    const msgs = i18n[currentLang].loveMessages;
    const msg = document.createElement("span");
    msg.className = "love-float";
    msg.textContent = msgs[Math.floor(Math.random() * msgs.length)];
    msg.style.left = cx - 80 + "px";
    msg.style.top = cy - 40 + "px";
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 2500);

    // Screen shake
    document.body.classList.add("shaking");
    setTimeout(() => document.body.classList.remove("shaking"), 300);

    // Open modal
    setTimeout(() => openModal(), 400);
  });
}

// ─── MODAL ───
function openModal() {
  const modal = $(".modal-overlay");
  const msgs = i18n[currentLang].loveMessages;
  $(".modal-message").textContent =
    msgs[Math.floor(Math.random() * msgs.length)];
  $(".modal-close").textContent = i18n[currentLang].modalClose;
  modal.classList.add("active");
}

function initModal() {
  $(".modal-overlay").addEventListener("click", (e) => {
    if (
      e.target.classList.contains("modal-overlay") ||
      e.target.classList.contains("modal-close")
    ) {
      $(".modal-overlay").classList.remove("active");
    }
  });
}

// ─── TOUCH / MOUSE EFFECTS ───
function initTouchEffects() {
  const emojis = ["❤️", "✨", "💕", "⭐", "🤍", "💗"];
  let lastSpawn = 0;

  function spawn(x, y) {
    const now = Date.now();
    if (now - lastSpawn < 100) return;
    lastSpawn = now;

    const el = document.createElement("span");
    el.className = "touch-particle";
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = x + "px";
    el.style.top = y + "px";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1500);
  }

  document.addEventListener("mousemove", (e) => spawn(e.clientX, e.clientY));
  document.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    spawn(t.clientX, t.clientY);
  });
}

// ─── PARALLAX ───
function initParallax() {
  let mx = 0,
    my = 0;

  document.addEventListener("mousemove", (e) => {
    mx = (e.clientX / window.innerWidth - 0.5) * 20;
    my = (e.clientY / window.innerHeight - 0.5) * 20;
  });

  document.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    mx = (t.clientX / window.innerWidth - 0.5) * 20;
    my = (t.clientY / window.innerHeight - 0.5) * 20;
  });

  function update() {
    const nebulas = $$(".nebula");
    nebulas.forEach((n, i) => {
      const factor = (i + 1) * 0.4;
      n.style.transform = `translate(${mx * factor}px, ${my * factor}px)`;
    });
    requestAnimationFrame(update);
  }
  update();
}

// ─── SCROLL REVEAL ───
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  $$(".reveal, .timeline-item").forEach((el) =>
    observer.observe(el)
  );
}

// ─── TYPEWRITER ───
function initTypewriter() {
  const el = $(".typewriter-text");
  let observed = false;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !observed) {
        observed = true;
        el.classList.add("visible");
        typeLines();
      }
    },
    { threshold: 0.3 }
  );
  observer.observe(el);

  function typeLines() {
    const lines = i18n[currentLang].typewriter;
    let lineIdx = 0,
      charIdx = 0;
    el.textContent = "";

    function type() {
      if (lineIdx >= lines.length) {
        // Show final heart + message
        setTimeout(() => {
          $(".final-heart").classList.add("visible");
          $(".final-message").classList.add("visible");
          // Birthday sparkle burst at finale
          spawnBirthdaySparkles();
        }, 500);
        return;
      }
      if (charIdx <= lines[lineIdx].length) {
        el.textContent =
          lines
            .slice(0, lineIdx)
            .join("\n")
            .concat(lineIdx > 0 ? "\n" : "") + lines[lineIdx].slice(0, charIdx);
        charIdx++;
        setTimeout(type, 60);
      } else {
        lineIdx++;
        charIdx = 0;
        setTimeout(type, 400);
      }
    }
    type();
  }
}

// ─── BIRTHDAY SPARKLES ───
function spawnBirthdaySparkles() {
  const texts = ["🎉","🎂","🥳","Happy Birthday!","🎊","❤️","✨"];
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      const el = document.createElement("span");
      el.className = "sparkle-text";
      el.textContent = texts[Math.floor(Math.random() * texts.length)];
      el.style.left = 10 + Math.random() * 80 + "%";
      el.style.top = 30 + Math.random() * 50 + "%";
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 2000);
    }, i * 200);
  }
}

// ─── START EXPERIENCE ───
function startExperience() {
  initStars();
  initParticles();
  initShootingStars();
  initFloatingHearts();
  initOrbit();
  initCarousel();
  initCounter();
  initLightbox();
  initHeartClick();
  initModal();
  initTouchEffects();
  initParallax();
  initScrollReveal();
  initTypewriter();
  initMusic();
  initConfetti();
  initFireworks();
  initBalloons();
}

// ─── ANTI-INSPECT & COPY ───
function initProtection() {
  document.addEventListener("contextmenu", (e) => e.preventDefault());
  document.addEventListener("selectstart", (e) => e.preventDefault());
  document.addEventListener("dragstart", (e) => e.preventDefault());
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
      (e.ctrlKey && e.key === "U")
    ) {
      e.preventDefault();
    }
  });
}

// ─── INIT ───
document.addEventListener("DOMContentLoaded", () => {
  initOverlay();
  $(".lang-switch").addEventListener("click", switchLang);
  initProtection();
});
