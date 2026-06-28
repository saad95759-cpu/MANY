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
    
    tlBirthDate: "01-08-2000 🎂",
    tlBirthText: "The Day An Angel Was Born",
    tlPubgDate: "14-10-2023 🎮",
    tlPubgText: "We Met in PUBG",
    tlMeet1Date: "05-04-2025 ❤️",
    tlMeet1Text: "First Day We Met",
    tlMeet2Date: "29-01-2026 🕊️",
    tlMeet2Text: "Second Time & Sweet Pigeon",
    tlMeet3Date: "23-03-2026 🌙",
    tlMeet3Text: "Third Time with the Most Beautiful Outfit & Eid Kahk",
    tlSeaDate: "27-06-2026 🌊",
    tlSeaText: "Gharzat El-Bahr Says Hello",

    typewriter: ["In every universe,", "I would still choose you 🤍"],
    finalMsg: "Happy Birthday Ammanyyyyyy ❤️",
    modalClose: "Close 🤍",
    langBtn: "AR",
    timerTitle: "Time Left Until Your Birthday Gift ✨",
    daysLabel: "Days",
    hoursLabel: "Hours",
    minutesLabel: "Minutes",
    secondsLabel: "Seconds",
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
    
    tlBirthDate: "٢٠٠٠/٠٨/٠١ 🎂",
    tlBirthText: "اليوم اللي ملاك اتولد فيه الأصلي",
    tlPubgDate: "٢٠٢٣/١٠/١٤ 🎮",
    tlPubgText: "اتعرفنا في ببجي",
    tlMeet1Date: "٢٠٢٥/٠٤/٠٥ ❤️",
    tlMeet1Text: "أول يوم اتقابلنا فيه",
    tlMeet2Date: "٢٠٢٦/٠١/٢٩ 🕊️",
    tlMeet2Text: "تاني مرة والحمام المسكر",
    tlMeet3Date: "٢٠٢٦/٠٣/٢٣ 🌙",
    tlMeet3Text: "تالت مرة بأجمل طقم وكحك العيد القمر",
    tlSeaDate: "٢٠٢٦/٠٦/٢٧ 🌊",
    tlSeaText: "عرزة البحر بتسلم عليكي",

    typewriter: ["في كل كون،", "كنت هختارك برضو 🤍"],
    finalMsg: "كل سنة وانتِ طيبة يا أمانييييي ❤️",
    modalClose: "إغلاق 🤍",
    langBtn: "EN",
    timerTitle: "الوقت المتبقي على يومنا المميز ✨",
    daysLabel: "أيام",
    hoursLabel: "ساعات",
    minutesLabel: "دقائق",
    secondsLabel: "ثواني",
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

  // Date Auth Logic
  const authContainer = $("#date-auth-container");
  const authDayInput = $("#auth-day");
  const authMonthInput = $("#auth-month");
  const authYearInput = $("#auth-year");
  const authDay2Input = $("#auth-day-2");
  const authMonth2Input = $("#auth-month-2");
  const authYear2Input = $("#auth-year-2");
  const authSubmit = $("#auth-submit-btn");
  const authError = $("#auth-error-msg");

  // Auto-focus progression helper
  function setupAutoFocus(currentEl, nextEl) {
    if (currentEl && nextEl) {
      currentEl.addEventListener("input", () => {
        // Keep only numbers
        currentEl.value = currentEl.value.replace(/\D/g, '');
        if (currentEl.value.length >= currentEl.maxLength) {
          nextEl.focus();
        }
      });
    }
  }

  setupAutoFocus(authDayInput, authMonthInput);
  setupAutoFocus(authMonthInput, authYearInput);
  setupAutoFocus(authYearInput, authDay2Input);
  setupAutoFocus(authDay2Input, authMonth2Input);
  setupAutoFocus(authMonth2Input, authYear2Input);

  if (authYear2Input) {
    authYear2Input.addEventListener("input", () => {
      authYear2Input.value = authYear2Input.value.replace(/\D/g, '');
    });
  }
  
  const questionContainer = $("#love-question-container");
  const yesBtn = $("#love-yes");
  const noBtn = $("#love-no");
  const feedback = $("#love-feedback-msg");
  const giftBtn = $("#gift-btn");

  authSubmit.addEventListener("click", () => {
    const day = parseInt(authDayInput.value, 10);
    const month = parseInt(authMonthInput.value, 10);
    const year = parseInt(authYearInput.value, 10);
    const day2 = parseInt(authDay2Input.value, 10);
    const month2 = parseInt(authMonth2Input.value, 10);
    const year2 = parseInt(authYear2Input.value, 10);

    if (day === 1 && month === 7 && year === 1999 && day2 === 27 && month2 === 7 && year2 === 2000) {
      authError.style.color = "#00ffcc";
      authError.textContent = "صح يا عمري! 🎉💖";
      authSubmit.style.pointerEvents = "none";
      
      setTimeout(() => {
        authContainer.style.display = "none";
        questionContainer.style.display = "block";
      }, 1500);
    } else {
      authError.style.color = "var(--neon-pink)";
      authError.textContent = currentLang === "ar" ? "احا مش فاتح يكلب" : "Wrong password, not opening! 😜";
    }
  });

  // Love Question Logic
  let noClickCount = 0;

  noBtn.addEventListener("click", () => {
    noClickCount++;
    if (noClickCount === 1) {
      feedback.textContent = "عيب اختاري اه احسلك 🤨";
    } else if (noClickCount === 2) {
      feedback.textContent = "طيزك انتي وهناء حمرة 🤫😂";
    } else if (noClickCount >= 3) {
      feedback.textContent = "مفيش منو هو اه 😂❤️";
      noBtn.textContent = "اه ❤️";
      noBtn.id = "love-yes-fake";
      noBtn.style.background = "linear-gradient(135deg, var(--neon-pink), #ff6b9d)";
      noBtn.style.boxShadow = "0 0 15px rgba(255, 45, 138, 0.4)";
      noBtn.addEventListener("click", handleYes);
    }
  });

  function handleYes() {
    feedback.textContent = "وانا بحب امك 😂❤️";
    yesBtn.style.pointerEvents = "none";
    if ($("#love-yes-fake")) $("#love-yes-fake").style.pointerEvents = "none";
    noBtn.style.pointerEvents = "none";

    setTimeout(() => {
      questionContainer.style.display = "none";
      const giftUnlockContainer = $("#gift-unlock-container");
      if (giftUnlockContainer) {
        giftUnlockContainer.style.display = "block";
      }
      initBirthdayTimer();
    }, 1800);
  }

  yesBtn.addEventListener("click", handleYes);

  giftBtn.addEventListener("click", () => {
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
  
  // Set HTML to preserve red heart emoji styling from linear gradient mask
  $(".hero-title").innerHTML = t.heroTitle.replace(" ❤️", " <span class=\"red-heart\">❤️</span>");
  
  $(".hero-subtitle").textContent = t.heroSub;
  $("#label-pubg").textContent = t.daysPubgLabel;
  $("#label-met").textContent = t.daysMetLabel;
  
  $('[data-i18n="timelineTitle"]').innerHTML = t.timelineTitle.replace(" ❤️", " <span class=\"red-heart\">❤️</span>");
  
  // Date Auth Title update (if container visible)
  const dateAuthTitle = $("#date-auth-container .love-question-title");
  if (dateAuthTitle) {
    dateAuthTitle.textContent = currentLang === "ar" ? "تفتكري إيه أحلى تاريخ في حياتي؟ 🤔" : "What is the most beautiful date in my life? 🤔";
  }

  const authPwdTitle = $("#auth-pwd-title");
  if (authPwdTitle) {
    authPwdTitle.textContent = currentLang === "ar" ? "اي تاريخ ميلادي الاصلي يولا ؟" : "What is my real birthday, kiddo? 😜";
  }

  // Timer label updates
  const timerTitle = $(".timer-title");
  if (timerTitle) timerTitle.textContent = t.timerTitle;
  
  const daysLbl = $("#cosmic-timer .timer-unit:nth-child(1) .timer-label");
  if (daysLbl) daysLbl.textContent = t.daysLabel;
  const hoursLbl = $("#cosmic-timer .timer-unit:nth-child(3) .timer-label");
  if (hoursLbl) hoursLbl.textContent = t.hoursLabel;
  const minsLbl = $("#cosmic-timer .timer-unit:nth-child(5) .timer-label");
  if (minsLbl) minsLbl.textContent = t.minutesLabel;
  const secsLbl = $("#cosmic-timer .timer-unit:nth-child(7) .timer-label");
  if (secsLbl) secsLbl.textContent = t.secondsLabel;

  const timerContinueBtn = $("#timer-continue-btn");
  if (timerContinueBtn) {
    timerContinueBtn.textContent = currentLang === "ar" ? "اكمل 🤍" : "Continue 🤍";
  }
  
  // Timeline items update
  $("#tl-date-birth").textContent = t.tlBirthDate;
  $("#tl-text-birth").textContent = t.tlBirthText;
  $("#tl-date-pubg").textContent = t.tlPubgDate;
  $("#tl-text-pubg").textContent = t.tlPubgText;
  $("#tl-date-meet1").textContent = t.tlMeet1Date;
  $("#tl-text-meet1").textContent = t.tlMeet1Text;
  $("#tl-date-meet2").textContent = t.tlMeet2Date;
  $("#tl-text-meet2").textContent = t.tlMeet2Text;
  $("#tl-date-meet3").textContent = t.tlMeet3Date;
  $("#tl-text-meet3").textContent = t.tlMeet3Text;
  $("#tl-date-sea").textContent = t.tlSeaDate;
  $("#tl-text-sea").textContent = t.tlSeaText;

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
      this.shape = ["circle", "heart", "star", "sparkle", "moon", "diamond", "ring", "flower", "pigeon"][Math.floor(Math.random() * 9)];
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.age++;
      if (this.age > this.life || this.y < -10) this.reset();
    }
    draw() {
      const fade = 1 - this.age / this.life;
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.fillStyle = `rgba(${this.color},${this.opacity * fade})`;

      if (this.shape === "circle") {
        ctx.beginPath();
        ctx.arc(0, 0, this.r, 0, Math.PI * 2);
        ctx.fill();
      } else if (this.shape === "heart") {
        ctx.beginPath();
        const size = this.r * 1.5;
        ctx.moveTo(0, -size / 4);
        ctx.bezierCurveTo(size / 2, -size, size, -size / 3, 0, size);
        ctx.bezierCurveTo(-size, -size / 3, -size / 2, -size, 0, -size / 4);
        ctx.fill();
      } else if (this.shape === "star") {
        ctx.beginPath();
        const spikes = 5;
        const outerRadius = this.r * 1.5;
        const innerRadius = this.r * 0.7;
        let rot = Math.PI / 2 * 3;
        let cx = 0;
        let cy = 0;
        let x = cx;
        let y = cy;
        const step = Math.PI / spikes;

        ctx.moveTo(cx, cy - outerRadius);
        for (let i = 0; i < spikes; i++) {
          x = cx + Math.cos(rot) * outerRadius;
          y = cy + Math.sin(rot) * outerRadius;
          ctx.lineTo(x, y);
          rot += step;

          x = cx + Math.cos(rot) * innerRadius;
          y = cy + Math.sin(rot) * innerRadius;
          ctx.lineTo(x, y);
          rot += step;
        }
        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
        ctx.fill();
      } else if (this.shape === "sparkle") {
        ctx.beginPath();
        const size = this.r * 1.8;
        ctx.moveTo(0, -size);
        ctx.quadraticCurveTo(0, 0, size, 0);
        ctx.quadraticCurveTo(0, 0, 0, size);
        ctx.quadraticCurveTo(0, 0, -size, 0);
        ctx.quadraticCurveTo(0, 0, 0, -size);
        ctx.closePath();
        ctx.fill();
      } else if (this.shape === "moon") {
        ctx.beginPath();
        const size = this.r * 1.5;
        ctx.arc(0, 0, size, -Math.PI / 2, Math.PI / 2, false);
        ctx.quadraticCurveTo(size * 0.4, size, size * 0.4, -size);
        ctx.closePath();
        ctx.fill();
      } else if (this.shape === "diamond") {
        ctx.beginPath();
        const size = this.r * 1.5;
        ctx.moveTo(0, -size);
        ctx.lineTo(size, 0);
        ctx.lineTo(0, size);
        ctx.lineTo(-size, 0);
        ctx.closePath();
        ctx.fill();
      } else if (this.shape === "ring") {
        ctx.beginPath();
        const outer = this.r * 1.5;
        const inner = this.r * 0.8;
        ctx.arc(0, 0, outer, 0, Math.PI * 2);
        ctx.arc(0, 0, inner, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.fillStyle = `rgba(255, 215, 0, ${this.opacity * fade})`;
        ctx.beginPath();
        ctx.moveTo(0, -outer - 2);
        ctx.lineTo(3, -outer - 5);
        ctx.lineTo(0, -outer - 8);
        ctx.lineTo(-3, -outer - 5);
        ctx.closePath();
        ctx.fill();
      } else if (this.shape === "flower") {
        ctx.beginPath();
        const size = this.r * 1.2;
        for (let i = 0; i < 5; i++) {
          const angle = (i * 2 * Math.PI) / 5;
          const px = Math.cos(angle) * size;
          const py = Math.sin(angle) * size;
          ctx.arc(px, py, size * 0.6, 0, Math.PI * 2);
        }
        ctx.fill();
      } else if (this.shape === "pigeon") {
        ctx.beginPath();
        const size = this.r * 1.5;
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(size * 0.8, -size * 0.8, size * 1.2, -size * 0.2);
        ctx.quadraticCurveTo(size * 0.4, 0, 0, size * 0.2);
        ctx.quadraticCurveTo(-size * 0.4, 0, -size * 1.2, -size * 0.2);
        ctx.quadraticCurveTo(-size * 0.8, -size * 0.8, 0, 0);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
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
    if(container) container.appendChild(el);
    setTimeout(() => el.remove(), 16000);
  }

  setInterval(spawn, 2500);
}

// ─── SPIRAL GALAXY (3D CANVAS) ───
function initSpiralGalaxy() {
  const canvas = $("#spiral-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width, height;
  let time = 0;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }
  window.addEventListener("resize", resize);
  resize();

  const particles = [];
  const arms = 5;
  const numParticles = 1500;
  
  for (let i = 0; i < numParticles; i++) {
    const armIndex = i % arms;
    const angleOffset = (Math.PI * 2 / arms) * armIndex;
    const distance = Math.random() * (width * 0.5);
    
    const baseAngle = distance * 0.005 + angleOffset;
    const scatterAngle = baseAngle + (Math.random() - 0.5) * 0.5;
    const scatterDist = distance + (Math.random() - 0.5) * 50;

    particles.push({
      dist: scatterDist,
      angle: scatterAngle,
      size: Math.random() * 2 + 0.5,
      speed: 0.0002 + Math.random() * 0.0005,
      color: `rgba(255, 45, 138, ${Math.random() * 0.8 + 0.2})`,
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    
    const centerX = width / 2;
    const centerY = height / 2;
    const tilt = 0.4;

    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 150);
    gradient.addColorStop(0, "rgba(0,0,0,1)");
    gradient.addColorStop(0.2, "rgba(0,0,0,0.8)");
    gradient.addColorStop(0.5, "rgba(255,45,138,0.3)");
    gradient.addColorStop(1, "transparent");
    ctx.fillStyle = gradient;
    ctx.fillRect(centerX - 150, centerY - 150, 300, 300);

    particles.forEach(p => {
      const currentAngle = p.angle - time * p.speed * 200;
      const x = Math.cos(currentAngle) * p.dist;
      const y = Math.sin(currentAngle) * p.dist * tilt;
      
      const z = Math.sin(currentAngle) * p.dist; 
      const scale = (800 + z) / 800;
      
      ctx.beginPath();
      ctx.arc(centerX + x, centerY + y, Math.max(0.1, p.size * scale), 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });

    time += 0.01;
    requestAnimationFrame(render);
  }
  
  render();
}

// ─── ORBIT SYSTEM ───
function initOrbit() {
  const system = $(".orbit-system");
  if (!system) return;

  const orbitTexts = [
    "بحبك ❤️",
    "انتي كل حياتي",
    "انتي نور عيني",
    "Ammanyyyyyy ❤️",
    "ربنا يديمك ليا نعمه",
    "يمزة 🎀",
    "يوتكة 🧸",
    "يبو توتة جمدة 🔥",
    "Happy Birthday",
    "كل سنة وانتِ طيبة",
    "05-04-2025"
  ];

  const orbitItems = [];
  const totalItems = orbitTexts.length + 4; // texts + 4 photos
  const step = (Math.PI * 2) / totalItems;

  // Create text elements
  orbitTexts.forEach((text, i) => {
    const el = document.createElement("span");
    el.className = "orbit-item";
    el.textContent = text;
    
    // Add click event for texts
    el.addEventListener("click", (e) => {
      if (hasDragged) return;
      e.stopPropagation();
      openLoveModal();
    });
    
    system.appendChild(el);

    orbitItems.push({
      el: el,
      angleOffset: i * step,
      radiusX: 42 // Outer orbit for texts
    });
  });

  // Create photo elements
  for (let i = 1; i <= 4; i++) {
    const frame = document.createElement("div");
    frame.className = "orbit-photo";
    frame.innerHTML = `<img src="images/${i}.jpg" alt="Memory ${i}" loading="lazy">`;
    
    // Add click event for photos
    frame.addEventListener("click", (e) => {
      if (hasDragged) return;
      e.stopPropagation();
      openLoveModal();
    });
    
    system.appendChild(frame);

    orbitItems.push({
      el: frame,
      angleOffset: (orbitTexts.length + i - 0.5) * step,
      radiusX: 34 // Inner orbit for photos so they don't overlap texts
    });
  }

  let rotationAngle = 0;
  let isDragging = false;
  let hasDragged = false;
  let startX = 0;
  let lastX = 0;
  let velocity = 0;
  let lastTime = 0;

  // Let the entire hero section be the drag target area
  const targetArea = $(".hero") || system;
  if (targetArea) {
    targetArea.style.cursor = "grab";
  }

  function handleStart(e) {
    if (e.target.closest("button, input, a, .music-player, .lang-switch, .lightbox, .modal-overlay")) {
      return;
    }
    isDragging = true;
    hasDragged = false;
    startX = e.clientX || (e.touches && e.touches[0].clientX);
    lastX = startX;
    velocity = 0;
    lastTime = performance.now();
  }

  function handleMove(e) {
    if (!isDragging) return;
    const currentX = e.clientX || (e.touches && e.touches[0].clientX);
    const deltaX = currentX - lastX;
    
    if (Math.abs(currentX - startX) > 8) {
      hasDragged = true;
    }

    // Scale dragging to rotation change yameen & shemal
    rotationAngle += deltaX * 0.005;

    const currentTime = performance.now();
    const timeDelta = currentTime - lastTime;
    if (timeDelta > 0) {
      velocity = (deltaX / timeDelta) * 0.05; // horizontal spin momentum
    }

    lastX = currentX;
    lastTime = currentTime;
  }

  function handleEnd() {
    isDragging = false;
  }

  if (targetArea) {
    targetArea.addEventListener("mousedown", (e) => {
      targetArea.style.cursor = "grabbing";
      handleStart(e);
    });
  }
  window.addEventListener("mousemove", handleMove);
  window.addEventListener("mouseup", () => {
    if (targetArea) targetArea.style.cursor = "grab";
    handleEnd();
  });

  if (targetArea) {
    targetArea.addEventListener("touchstart", handleStart, { passive: true });
  }
  window.addEventListener("touchmove", handleMove, { passive: true });
  window.addEventListener("touchend", handleEnd);

  function animate() {
    if (!isDragging) {
      // Apply momentum
      rotationAngle += velocity;
      velocity *= 0.95; // decay
      
      // Gentle constant auto-rotation when no momentum exists
      if (Math.abs(velocity) < 0.0005) {
        rotationAngle -= 0.0035;
      }
    }

    orbitItems.forEach(item => {
      const angle = item.angleOffset + rotationAngle;
      const tilt = 0.32; // ellipse flatten factor

      // Calculate relative coordinates in percentage (-50% to +50% from center)
      const x = Math.cos(angle) * item.radiusX;
      const y = Math.sin(angle) * item.radiusX * tilt;

      // Z depth (-1 to 1)
      const z = Math.sin(angle);

      // Position relative to center of parent
      item.el.style.left = `${50 + x}%`;
      item.el.style.top = `${50 + y}%`;

      // 3D scaling and opacity based on depth
      const scale = 0.75 + (z + 1) * 0.125; // range: 0.75 to 1.0
      const opacity = 0.45 + (z + 1) * 0.275; // range: 0.45 to 1.0

      item.el.style.transform = `translate(-50%, -50%) scale(${scale})`;
      item.el.style.opacity = opacity;

      // Z-depth layering relative to central heart (which is at z-index 10)
      if (z > 0.1) {
        item.el.style.zIndex = 12; // In front of heart
      } else {
        item.el.style.zIndex = 4; // Behind heart
      }
    });

    requestAnimationFrame(animate);
  }

  animate();

  // Glow ring around heart
  const ring = document.createElement("div");
  ring.className = "glow-ring";
  const fixedHeart = $("#fixed-heart-container");
  if (fixedHeart) fixedHeart.appendChild(ring);
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
  let isInitial = true;

  function calc() {
    const now = new Date();
    
    const diffPubg = Math.floor((now - startPubg) / (1000 * 60 * 60 * 24));
    const pubgEl = $("#counter-pubg");

    const diffMet = Math.floor((now - startMet) / (1000 * 60 * 60 * 24));
    const metEl = $("#counter-met");

    if (isInitial) {
      if (pubgEl) animateValue(pubgEl, 0, diffPubg, 2000);
      if (metEl) animateValue(metEl, 0, diffMet, 2000);
      isInitial = false;
    } else {
      if (pubgEl) pubgEl.textContent = diffPubg;
      if (metEl) metEl.textContent = diffMet;
    }
  }
  calc();
  setInterval(calc, 60000);
}

// ─── MUSIC PLAYER ───
let isMusicInitialized = false;

function initMusic() {
  if (isMusicInitialized) return;
  isMusicInitialized = true;

  const btn = $("#music-btn");
  const audio = $("#bg-music");
  const track = $("#music-track");
  const progress = $("#music-progress");
  const timeDisplay = $("#music-time");

  function playAudio() {
    audio.play().then(() => {
      btn.classList.add("playing");
      btn.textContent = "🎶";
      document.removeEventListener("click", playAudio);
      document.removeEventListener("touchstart", playAudio);
      document.removeEventListener("keydown", playAudio);
    }).catch((err) => {
      console.log("Auto-play blocked, waiting for interaction:", err);
    });
  }

  // Attempt play immediately
  playAudio();

  // Autoplay fallback: play on first click, touch, or keypress anywhere on the page
  document.addEventListener("click", playAudio);
  document.addEventListener("touchstart", playAudio);
  document.addEventListener("keydown", playAudio);

  let playing = !audio.paused;

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
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    playing = !audio.paused;
    if (playing) {
      audio.pause();
      btn.classList.remove("playing");
      btn.textContent = "🎵";
    } else {
      audio.play().catch(() => {});
      btn.classList.add("playing");
      btn.textContent = "🎶";
    }
  });

  // Update progress
  audio.addEventListener("timeupdate", updateTime);
  audio.addEventListener("loadedmetadata", updateTime);

  // Seek
  track.addEventListener("click", (e) => {
    e.stopPropagation();
    const rect = track.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / rect.width;
    if (audio.duration) {
      audio.currentTime = percent * audio.duration;
    }
  });

  // Tab switch visibility control (pause when tab hidden, resume when return)
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      if (!audio.paused) {
        audio.pause();
        btn.classList.remove("playing");
        btn.textContent = "🎵";
        audio.wasPlayingBeforeHide = true;
      }
    } else {
      if (audio.wasPlayingBeforeHide) {
        audio.play().then(() => {
          btn.classList.add("playing");
          btn.textContent = "🎶";
        }).catch(() => {});
        audio.wasPlayingBeforeHide = false;
      }
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
      this.shape = Math.random() < 0.9 ? "heart" : "rect"; // 90% heart confetti!
      this.swing = Math.random() * 2.5;
      this.swingSpeed = 0.01 + Math.random() * 0.02;
    }
    update() {
      this.x += this.vx + Math.sin(this.y * this.swingSpeed) * this.swing;
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
      
      if (this.shape === "rect") {
        ctx.fillRect(-this.w/2, -this.h/2, this.w, this.h);
      } else {
        ctx.beginPath();
        const size = this.w * 1.2;
        ctx.moveTo(0, -size / 4);
        ctx.bezierCurveTo(size / 2, -size, size, -size / 3, 0, size);
        ctx.bezierCurveTo(-size, -size / 3, -size / 2, -size, 0, -size / 4);
        ctx.fill();
      }
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
    const isHeart = Math.random() < 0.95; // 95% heart fireworks!
    const numParticles = isHeart ? 35 : 20;

    for (let i = 0; i < numParticles; i++) {
      const dot = document.createElement("div");
      dot.className = "firework-burst";
      dot.style.left = x + "%";
      dot.style.top = y + "%";
      dot.style.background = colors[Math.floor(Math.random() * colors.length)];
      
      let dx = 0, dy = 0;
      if (isHeart) {
        // Parametric heart formula
        const t = (Math.PI * 2 * i) / numParticles;
        const scale = 5 + Math.random() * 3; // randomized scaling factor
        dx = 16 * Math.pow(Math.sin(t), 3) * scale;
        dy = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t)) * scale;
      } else {
        const angle = (Math.PI * 2 * i) / numParticles;
        const dist = 40 + Math.random() * 60;
        dx = Math.cos(angle) * dist;
        dy = Math.sin(angle) * dist;
      }

      dot.style.setProperty("--fx", `${dx}px`);
      dot.style.setProperty("--fy", `${dy}px`);
      dot.style.animationDelay = `${Math.random() * 0.1}s`;
      container.appendChild(dot);
      setTimeout(() => dot.remove(), 800);
    }
  }

  setTimeout(fire, 2000);
  setTimeout(fire, 2500);
  setTimeout(fire, 3200);
  setInterval(() => {
    fire();
    setTimeout(fire, 300 + Math.random() * 500);
  }, 4000);
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
  const container = $(".fixed-heart-container");
  if (!container) return;
  container.addEventListener("click", (e) => {
    const rect = container.getBoundingClientRect();
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
    setTimeout(() => openLoveModal(), 400);
  });
}

// ─── MODAL ───
let loveMessageQueue = [];
let showingRestartMessage = false;

function openLoveModal() {
  const modal = $(".modal-overlay");
  const msgs = i18n[currentLang].loveMessages;

  if (loveMessageQueue.length === 0) {
    loveMessageQueue = [...msgs];
    loveMessageQueue.sort(() => Math.random() - 0.5);
  }
  
  showingRestartMessage = false;
  const currentMsg = loveMessageQueue.pop();
  $(".modal-message").textContent = currentMsg;

  const nextBtn = $("#modal-next-btn");
  nextBtn.textContent = currentLang === "ar" ? "بيقول إيه؟ 🤫" : "What else? 🤫";
  nextBtn.style.pointerEvents = "auto";
  nextBtn.style.opacity = "1";

  $(".modal-close").textContent = i18n[currentLang].modalClose;
  modal.classList.add("active");
}

function initModal() {
  const modal = $(".modal-overlay");
  const nextBtn = $("#modal-next-btn");

  nextBtn.addEventListener("click", () => {
    const msgs = i18n[currentLang].loveMessages;

    if (showingRestartMessage) {
      loveMessageQueue = [...msgs];
      loveMessageQueue.sort(() => Math.random() - 0.5);
      showingRestartMessage = false;
      const currentMsg = loveMessageQueue.pop();
      $(".modal-message").textContent = currentMsg;
      nextBtn.textContent = currentLang === "ar" ? "بيقول إيه؟ 🤫" : "What else? 🤫";
      return;
    }

    if (loveMessageQueue.length > 0) {
      const currentMsg = loveMessageQueue.pop();
      $(".modal-message").textContent = currentMsg;
    } else {
      // Last message shown. Now display the loop restart prompt
      $(".modal-message").textContent = currentLang === "ar" ? "بحبك بس الكلام مش مكفي نعيد تاني ؟" : "I love you, but words are not enough. Repeat? ❤️";
      nextBtn.textContent = currentLang === "ar" ? "نعيد تاني؟ ❤️" : "Repeat? ❤️";
      showingRestartMessage = true;
    }
  });

  modal.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("modal-overlay") ||
      e.target.classList.contains("modal-close")
    ) {
      modal.classList.remove("active");
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

// ─── SCROLL PERFORMANCE OPTIMIZATION ───
function initScrollPerformance() {
  const fixedHeart = $("#fixed-heart-container");
  if (!fixedHeart) return;
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      fixedHeart.classList.add("scrolled");
    } else {
      fixedHeart.classList.remove("scrolled");
    }
  }, { passive: true });
}

// ─── START EXPERIENCE ───
function startExperience() {
  const fixedHeart = $("#fixed-heart-container");
  if (fixedHeart) fixedHeart.classList.add("visible");

  initStars();
  initSpiralGalaxy();
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
  initConfetti();
  initFireworks();
  initBalloons();
  initScrollPerformance();
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
  initMusic();
});

// ─── BIRTHDAY COUNTDOWN TIMER ───
function initBirthdayTimer() {
  const targetDate = new Date(2026, 6, 1, 0, 0, 0); // July 1st, 2026
  const timerWrapper = $("#birthday-timer-wrapper");
  const specialMsg = $("#birthday-special-msg");
  const giftBtn = $("#gift-btn");
  let timerInterval;

  function update() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      if (timerWrapper) timerWrapper.style.display = "none";
      if (specialMsg) specialMsg.style.display = "block";
      if (giftBtn) {
        giftBtn.classList.remove("hidden");
        giftBtn.style.display = "inline-block";
      }
      if (timerInterval) clearInterval(timerInterval);
    } else {
      if (timerWrapper) timerWrapper.style.display = "block";
      if (specialMsg) specialMsg.style.display = "none";

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const daysEl = $("#timer-days");
      const hoursEl = $("#timer-hours");
      const minutesEl = $("#timer-minutes");
      const secondsEl = $("#timer-seconds");

      if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
      if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
      if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
      if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }
  }

  update();
  if (targetDate - new Date() > 0) {
    timerInterval = setInterval(update, 1000);
  }

  // Continue button click handler
  const timerContinueBtn = $("#timer-continue-btn");
  if (timerContinueBtn) {
    timerContinueBtn.addEventListener("click", () => {
      overlay.classList.add("hidden");
      $(".main-content").classList.add("visible");
      startExperience();
    });
  }

  // Hidden bypass: tap timer title 5 times to force unlock gift button
  let clicks = 0;
  if (timerWrapper) {
    const title = timerWrapper.querySelector(".timer-title");
    if (title) {
      title.addEventListener("click", () => {
        clicks++;
        if (clicks >= 5) {
          if (giftBtn) {
            giftBtn.classList.remove("hidden");
            giftBtn.style.display = "inline-block";
          }
          title.textContent = currentLang === "ar" ? "تم تخطي المؤقت للتجربة! 😉" : "Bypassed for testing! 😉";
        }
      });
    }
  }
}

// ─── UTILITY FOR ROLL UP COUNTERS ───
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      obj.textContent = end;
    }
  };
  window.requestAnimationFrame(step);
}
