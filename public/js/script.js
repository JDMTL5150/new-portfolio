/* =====================================================
   EDIT YOUR DETAILS HERE. Everything on the page
   fills in from this one object.
   ===================================================== */
const SITE = {
  name: "Jacob Dawes",
  role: "Computer Engineering Student",
  status: "Open to Networking & Opportunities",
  headline: "Low-Level && System's Developer",
  headlineAccent: "&&",          // this phrase is shown in green (leave "" for none)
  lede: "Passionate abount Low level Programmer & cybersecurity. Strong foundation in hardware and software development, seeking to contribute to innovative projects and expand my expertise in the field.",
  email: "jacobd2887@gmail.com",
  photo: "",                       // paste an image URL or data URI; blank shows your initial

  bio: [
    `I am a Computer Engineering student with experience in Web Development, Hardware Programming and
    Software Programming. I have a good fundamental understanding of low level languages and
    functionalities. I am a very versatile programmer although I particularly enjoy hardware Programming
    and Cybersecurity concepts. I enjoy running CTFs (Capture The Flag)
    to strengthen my cybersecurity knowledge. I love music, I have been playing the electric guitar for
    around 7 years and I love it! My favorite genres to listen to and play are mostly rock and metal.`
  ],
  facts: [
    { value: "1+", label: "Years of experience" },
    { value: "2", label: "Projects shipped" },
    { value: "1", label: "Happy clients" }
  ],

  projects: [
    { title: "Ghostly.", text: "Ai-assisted local PII redaction software using C++ and Qt Framework.", tags: ["Privacy", "AI", "C++", "Qt", "Software", "Redaction"], link: "#", image: "/public/Assets/images/Ghostly-Logo.png" },
    { title: "Studdy Buddy", text: "Local/External Ai-Assisted study guide generator software using C++ and Qt Framework.", tags: ["Study", "AI", "C++", "Qt", "Software"], link: "#", image: "/public/Assets/images/studybuddy.png" },
    { title: "WindeployQtGui", text: "A GUI for the windeployqt tool to make it easier to use.", tags: ["GUI", "C++", "Qt", "Software"], link: "#", image: "/public/Assets/images/windeployqtlogo.png" },
    { title: "Watchdog", text: "A small file sorting / cleaning application based on user defined rules.", tags: ["C++", "Qt", "Software", "File Sorting", "Disk Cleaner"], link: "#", image: "/public/Assets/images/watchdog_logo.png" },
    { title: "PDFTouch", text: "Small document reception programs to recieve documents from a scanner and place them in the correct place, made for Hawkesbury General Hospital's Material Management and Finance departments.", tags: ["C++", "Qt", "Software", "Document Reception", "Document Forwarding", "Domain Specific"], link: "#", image: "/public/Assets/images/pdftouch.png" }
  ],

  skills: [
    "C & C++",
    "Qt Framework",
    "Python",
    "Embedded Systems (Arduino/AVR, ESP32)",
    "Hardware Programming",
    "Reverse Engineering",
    "Penetration Testing & CTFs",
    "Secure Coding & Cryptography",
    "Network Security & Defense",
    "Backend Development"
  ],

  jobs: [
    {
      title: "IT Support Technician",
      place: "Hawkesbury General Hospital", when: "summer of 2026",
      text: "Provided technical support for hospital staff, troubleshooting hardware and software issues, and ensuring smooth operation of IT systems."
    },
    {
      title: "Landscaper",
      place: "Stone Landscaping - QC", when: "May 2020 to August 2020 and May 2025 to August 2025",
      text: "Placed stone and rolls of sod depending on the job site requirements. Utilized heavy machinery (SkidSteer, mini excavator, compacting equipment)."
    },
    {
      title: "Warehouse Worker/Forklift Operator",
      place: "FedEx Supply Chain-Saint-Clet, QC", when: "February 2023 to July 2024",
      text: `I worked sometimes as a general labourer but was mostly either driving a pacer with clamps attached
                    or forks, or I would drive a narrow aisle Reach Truck. My job was to either build pallets with
                    customer orders or bring recently built pallets from the receiving area into the warehouse to be
                    stored.`
    },
    {
      title: "Warehouse Worker",
      place: "Costco Wholesale-Vaudreuil-Dorion, QC", when: "October 2022 to September 2023",
      text: "Stocked the pallets, swept the floors when asked, moved certain pallets when needed using a pallet Jack."
    },
    {
      title: "Dental tool sterilizer",
      place: "Dr Bob Clark-Hudson, QC", when: "June 2021 to August 2021",
      text: "Sterilized dental equipment and repackaged it for its next use."
    },
    {
      title: "Bagger / shelf stocker at a grocery store",
      place: "IGA-Saint-Lazare, QC", when: "July 2020 to May 2021",
      text: "Packed bags at the cash, as well as brought the bags to the cars when asked. Stocked the shelves and rotated to adhere to FIFO."
    }
  ],

  education: [
    {
      program: "College diploma in Computer Engineering Technology",
      school: "Algonquin College - Ottawa, ON",
      when: "August 2024 to Present",
    },
    {
      program: "High School Diploma",
      school: "Westwood Highschool - Hudson, QC",
      when: "August 2017 to June 2021"
    }
  ],

  languages: [
    { label: "English", level: "Fluent", percentage: 100, summary: "Capable of technical conversations and documentation reading." },
    { label: "French", level: "Fluent", percentage: 100, summary: "Capable of technical conversations and documentation reading." },
    { label: "Spanish", level: "Beginner", percentage: 20, summary: "Capable of understanding some conversations and some reading." }
  ],

  certifications: [
    { label: "CPR Certification", issuer: "The Heart and Stroke Foundation", year: 2024, summary: "Certified in CPR and First Aid, demonstrating the ability to respond effectively in emergency situations." },
  ],

  contactTitle: "Let’s build something together.",
  contactText: "I’m taking on new projects regularly. Tell me what you’re working on and I’ll reply within two business days.",
  socials: [
    { label: "GitHub", url: "https://github.com/JDMTL5150/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/jacob-dawes-557bbb402/" }
  ]
};

/* ---------- Rendering & Theme Logic ---------- */

document.addEventListener('DOMContentLoaded', () => {
  // Helpers
  const $ = id => document.getElementById(id);
  const $$ = sel => document.querySelectorAll(sel);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const barColor = percentage => {
    if (percentage >= 80) return "var(--accent)";
    if (percentage >= 60) return "#c3ff00";
    if (percentage <= 40) return "#ffe100";
    return "var(--accent)";
  };

  function updateMousePositionProperties(event, targetElement = event.currentTarget) {
    const rect = targetElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    targetElement.style.setProperty('--mouse-x', `${x}px`);
    targetElement.style.setProperty('--mouse-y', `${y}px`);
  }

  function initTilt(target, options = {}) {
  const defaults = {
    maxTilt: 15,
    perspective: 1000,
    easing: 'ease-out',
    speed: 150,
  };

  const settings = { ...defaults, ...options };
  const elements = typeof target === 'string' 
    ? document.querySelectorAll(target) 
    : target instanceof NodeList 
      ? target 
      : [target];

  elements.forEach((el) => {
    // Ensure parent/element setup supports 3D transform rendering
    el.style.transformStyle = 'preserve-3d';
    el.style.willChange = 'transform';

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Distance from center (-0.5 to 0.5)
      const centerX = x / rect.width - 0.5;
      const centerY = y / rect.height - 0.5;

      const rotateX = -centerY * settings.maxTilt;
      const rotateY = centerX * settings.maxTilt;

      // Clear transition during mousemove for instant response
      el.style.transition = 'none';
      el.style.transform = `perspective(${settings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    el.addEventListener('mouseleave', () => {
      // Re-enable smooth transition only when returning to zero state
      el.style.transition = `transform ${settings.speed}ms ${settings.easing}`;
      el.style.transform = `perspective(${settings.perspective}px) rotateX(0deg) rotateY(0deg)`;
    });
  });
}

  // 1. Theme Controller Setup
  const themeSlider = $('theme-slider');
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  let currentTheme = savedTheme || (systemPrefersLight ? 'light' : 'dark');

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeSlider) {
      themeSlider.value = theme === 'light' ? '100' : '0';
    }
  }

  // Apply initial theme state
  applyTheme(currentTheme);

  // Attach Theme Slider Listener
  if (themeSlider) {
    themeSlider.addEventListener('input', (e) => {
      const newTheme = Number(e.target.value) >= 50 ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  // 2. Render Page Content
  document.title = SITE.name + " – " + SITE.role;
  if ($("logo")) $("logo").textContent = SITE.name;
  if ($("status")) $("status").textContent = SITE.status;
  if ($("lede")) $("lede").textContent = SITE.lede;

  const text = SITE.headline;
  const accent = SITE.headlineAccent || "";
  const accentStart = accent ? text.indexOf(accent) : -1;
  const accentEnd = accentStart + accent.length;

  let pos = 0;
  let index = 0;

  if ($("headline")) {
    $("headline").innerHTML = text.split(/(\s+)/).map(part => {
      const start = pos;
      pos += part.length;

      if (/^\s+$/.test(part)) return part;

      const chars = part.split("").map((ch, j) => {
        const abs = start + j;
        const isAccent = accentStart >= 0 && abs >= accentStart && abs < accentEnd;
        const c = esc(ch);
        return `<span class="headline-char" style="--char-index:${index++}">${isAccent ? `<em>${c}</em>` : c}</span>`;
      }).join("");

      return `<span class="headline-word">${chars}</span>`;
    }).join("");
  }

  if ($("heroEmail")) $("heroEmail").href = "#contact";
  if ($("mailBtn")) $("mailBtn").href = "mailto:" + SITE.email;

const portraitEl = $("portrait");

const svgMarkup = `<svg id="pick" fill="#3ee08f" width="5rem" height="5rem" viewBox="0 0 32 32" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink">
  <path d="M18.448,26.655c0.001,-0.001 0.001,-0.001 0.001,-0.002c2.407,-3.406 6.792,-9.888 8.717,-14.401c0.535,-1.252 0.882,-2.367 0.983,-3.246c0.088,-0.778 -0.016,-1.414 -0.263,-1.881c-0.359,-0.676 -1.158,-1.309 -2.339,-1.783c-2.201,-0.881 -5.872,-1.342 -9.545,-1.342c-3.673,-0 -7.344,0.461 -9.545,1.342c-1.181,0.474 -1.98,1.107 -2.338,1.783c-0.248,0.467 -0.352,1.103 -0.263,1.881c0.1,0.879 0.447,1.994 0.982,3.246c1.925,4.513 6.31,10.995 8.716,14.402c0.001,0 0.001,0.001 0.001,0.002c0.563,0.792 1.475,1.263 2.447,1.263c0.972,-0 1.884,-0.471 2.446,-1.264Zm-2.455,-17.699l-0.001,0.055l-0,4.601c-0.236,-0.066 -0.485,-0.101 -0.742,-0.101c-1.518,-0 -2.75,1.232 -2.75,2.75c-0,1.517 1.232,2.75 2.75,2.75c1.518,-0 2.75,-1.233 2.75,-2.75c-0,-0.073 -0.008,-4.835 -0.008,-4.835l1.301,1.301c0.39,0.39 1.024,0.39 1.414,-0c0.39,-0.391 0.39,-1.024 0,-1.414l-3.008,-3.009c-0.39,-0.39 -1.024,-0.39 -1.414,0c-0.182,0.181 -0.279,0.415 -0.292,0.652Z" />
</svg>`;

if (portraitEl) {
  portraitEl.innerHTML = SITE.photo
    ? '<img src="' + esc(SITE.photo) + '" alt="Portrait of ' + esc(SITE.name) + '">'
    : "<span>" + svgMarkup + "</span>";

  // 1. Mouse position tracker listener
  portraitEl.addEventListener('mousemove', e => {
    updateMousePositionProperties(e, portraitEl);
  });

  // 2. Initialize tilt ONCE (do not put this inside a mousemove listener)
  initTilt(portraitEl, { 
    maxTilt: 15, 
    perspective: 1000, 
    easing: 'ease-out', 
    speed: 150 
  });
}

  if ($("bio")) $("bio").innerHTML = SITE.bio.map(p => "<p>" + esc(p) + "</p>").join("");
  if ($("facts")) $("facts").innerHTML = SITE.facts.map(f => "<div><b>" + esc(f.value) + "</b><small>" + esc(f.label) + "</small></div>").join("");

  const art = '<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><circle cx="250" cy="40" r="90" fill="var(--accent)" opacity=".10"/><circle cx="60" cy="150" r="70" fill="var(--accent)" opacity=".07"/><rect x="36" y="44" width="120" height="10" rx="5" fill="var(--accent)" opacity=".55"/><rect x="36" y="66" width="190" height="8" rx="4" fill="var(--text)" opacity=".12"/><rect x="36" y="82" width="150" height="8" rx="4" fill="var(--text)" opacity=".12"/></svg>';

  if ($("projects")) {
    $("projects").innerHTML = SITE.projects.map(p =>
      '<a class="card" href="' + esc(p.link) + '"><div class="thumb">' +
      (p.image ? '<img src="' + esc(p.image) + '" alt="' + esc(p.title) + ' preview" loading="lazy">' : art) +
      '</div><div class="body"><h3>' + esc(p.title) + "</h3><p>" + esc(p.text) + '</p><div class="tags">' +
      p.tags.map(t => "<span>" + esc(t) + "</span>").join("") + "</div></div></a>"
    ).join("");

    $$(".card").forEach(item => {
      item.addEventListener('mousemove', e => {
        updateMousePositionProperties(e, item);
      });
    });
  }

  if ($("skillList")) {
    $("skillList").innerHTML = SITE.skills.map(s => "<span class='skill-item'>" + esc(s) + "</span>").join("");

    $$(".skill-item").forEach(item => {
      item.addEventListener('mousemove', e => {
        updateMousePositionProperties(e, item);
      });
    });
  }

  if ($("jobs")) {
    $("jobs").innerHTML = SITE.jobs.map(j =>
      "<li><h3>" + esc(j.title) + " at " + `<span style='color: var(--accent);'>${esc(j.place)}</span>` + '</h3><div class="when">' + esc(j.when) + "</div><p>" + esc(j.text) + "</p></li>"
    ).join("");
  }

  if ($("schools")) {
    $("schools").innerHTML = SITE.education.map(e =>
      "<li><h3>" + esc(e.program) + " at " + `<span style='color: var(--accent);'>${esc(e.school)}</span>` + '</h3><div class="when">' + esc(e.when) + "</div></li>"
    ).join("");
  }

  if ($("lang-list")) {
    $("lang-list").innerHTML = SITE.languages.map(l =>
      `<li class="skill-card">
        <h3>${l.label}</h3>
        <div class="meta">
          <span>${l.level}</span>
        </div>
        <div class="fluency-bar">
          <div class="level" style="width: ${l.percentage}%; background: ${barColor(l.percentage)};"></div>
        </div>
        <p>${l.summary}</p>
      </li>`
    ).join("");
  }

  if ($("cert-list")) {
    $("cert-list").innerHTML = SITE.certifications.map(c =>
      `<li class="skill-card">
        <h3>${c.label}</h3>
        <div class="meta">
          <p>${c.issuer}</p>
          <p>${c.summary}</p>
          <p>${c.year}</p>
        </div>
      </li>`
    ).join("");
  }

  if ($("contactTitle")) $("contactTitle").textContent = SITE.contactTitle;
  if ($("contactText")) $("contactText").textContent = SITE.contactText;
  if ($("socials")) $("socials").innerHTML = SITE.socials.map(s => '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.label) + "</a>").join("");
  if ($("footer")) $("footer").textContent = "© " + new Date().getFullYear() + " " + SITE.name;

  // open and close the mobile menu
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const menu = document.querySelector('.mobile-menu');
  const exitButton = document.querySelector('.close-menu');
  const navLinks = document.querySelectorAll('.mobile-menu a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
    });
  });

  hamburgerMenu.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  exitButton.addEventListener('click', () => {
    menu.classList.remove('open');
  });
});