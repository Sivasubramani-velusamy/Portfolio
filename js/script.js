
/* =========================================
   1. PROJECT DATA
========================================= */

const projects = [
    {
        title: "QuickLAN Share",
        description: "A project for sharing files across devices on a local network.",
        technologies: ["Java", "Networking"],
        github: "https://github.com/Sivasubramani-velusamy",
        demo: ""
    },
    {
        title: "Ayurvedic Drug Recommendation System",
        description: "A recommendation-based project focused on Ayurvedic medicine information.",
        technologies: ["Python", "Machine Learning"],
        github: "https://github.com/Sivasubramani-velusamy",
        demo: ""
    }
];


/* =========================================
   2. CERTIFICATION DATA
========================================= */

const certifications = [
    {
        title: "Introduction to Generative AI",
        issuer: "Google",
        date: "June 2024",
        category: "AI",
        image: "assets/certificates/google-genai.jpg",
        link: ""
    },
    {
        title: "Introduction to Large Language Models",
        issuer: "Google",
        date: "August 2024",
        category: "AI",
        image: "assets/certificates/google-llm.jpg",
        link: ""
    },
    {
        title: "Google Cloud Cybersecurity",
        issuer: "Google",
        date: "September 2024",
        category: "Cybersecurity",
        image: "assets/certificates/google-cybersecurity.jpg",
        link: ""
    },
    {
        title: "Ethical Hacking",
        issuer: "Cisco Networking Academy",
        date: "July 2025",
        category: "Cybersecurity",
        image: "assets/certificates/ethical-hacking.jpg",
        link: ""
    }
];


/* =========================================
   3. GENERATE PROJECT CARDS
========================================= */

const projectsContainer = document.getElementById("projects-container");

function displayProjects() {

    if (!projectsContainer) return;

    projectsContainer.innerHTML = projects.map(project => `

        <article class="project-card">

            <h3>${project.title}</h3>

            <p>${project.description}</p>

            <div class="project-technologies">
                ${project.technologies.map(tech =>
                    `<span class="technology-tag">${tech}</span>`
                ).join("")}
            </div>

            <div class="project-links">

                <a href="${project.github}"
                   target="_blank"
                   rel="noopener noreferrer">
                    GitHub →
                </a>

                ${project.demo ? `
                    <a href="${project.demo}"
                       target="_blank"
                       rel="noopener noreferrer">
                        Live Demo →
                    </a>
                ` : ""}

            </div>

        </article>

    `).join("");

}


/* =========================================
   4. CERTIFICATION FILTERS
========================================= */

const certificationContainer =
    document.getElementById("certifications-container");

const filterContainer =
    document.getElementById("certification-filters");

function displayFilters() {

    if (!filterContainer) return;

    const categories = [
        "All",
        ...new Set(certifications.map(cert => cert.category))
    ];

    filterContainer.innerHTML = categories.map(category => `

        <button class="filter-btn ${category === "All" ? "active" : ""}"
                data-category="${category}">
            ${category}
        </button>

    `).join("");

    filterContainer.querySelectorAll(".filter-btn").forEach(button => {

        button.addEventListener("click", () => {

            filterContainer.querySelectorAll(".filter-btn")
                .forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            displayCertifications(button.dataset.category);

        });

    });

}


/* =========================================
   5. DISPLAY CERTIFICATION CARDS
========================================= */

function displayCertifications(category = "All") {

    if (!certificationContainer) return;

    const filteredCertifications = category === "All"
        ? certifications
        : certifications.filter(cert => cert.category === category);

    certificationContainer.innerHTML = filteredCertifications.map((cert, index) => `

        <article class="certification-card"
                 data-cert-index="${certifications.indexOf(cert)}"
                 tabindex="0"
                 role="button"
                 aria-label="View ${cert.title} certificate">

            <img class="certification-image"
                 src="${cert.image}"
                 alt="${cert.title}"
                 loading="lazy"
                 onerror="this.src='https://placehold.co/600x400/f1f3f5/555555?text=Certificate+Image'">

            <div class="certification-info">

                <h3>${cert.title}</h3>

                <p>${cert.issuer}</p>

                <p>${cert.date}</p>

                <span class="certification-category">
                    ${cert.category}
                </span>

            </div>

        </article>

    `).join("");

    certificationContainer.querySelectorAll(".certification-card")
        .forEach(card => {

            const open = () => {
                openCertificate(Number(card.dataset.certIndex));
            };

            card.addEventListener("click", open);

            card.addEventListener("keydown", event => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    open();
                }
            });

        });

}


/* =========================================
   6. CERTIFICATE IMAGE PREVIEW
========================================= */

const modal = document.getElementById("certificate-modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalVerify = document.getElementById("modal-verify");
const modalClose = document.getElementById("modal-close");

let previouslyFocusedElement = null;

function openCertificate(index) {

    const cert = certifications[index];

    if (!cert || !modal) return;

    previouslyFocusedElement = document.activeElement;

    modalImage.src = cert.image;
    modalImage.alt = cert.title;

    modalTitle.textContent =
        `${cert.title} - ${cert.issuer}`;

    modalVerify.href = cert.link || "#";
    modalVerify.style.display = cert.link ? "inline-block" : "none";

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    modalClose.focus();

}

function closeCertificate() {

    if (!modal) return;

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    if (previouslyFocusedElement) {
        previouslyFocusedElement.focus();
    }

}

if (modalClose) {
    modalClose.addEventListener("click", closeCertificate);
}

if (modal) {

    modal.addEventListener("click", event => {

        if (event.target === modal) {
            closeCertificate();
        }

    });

}

document.addEventListener("keydown", event => {

    if (event.key === "Escape" && modal?.classList.contains("active")) {
        closeCertificate();
    }

});


/* =========================================
   7. DARK / LIGHT MODE
========================================= */

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

function updateThemeIcon() {

    if (!themeToggle) return;

    const isDark = document.body.classList.contains("dark-mode");

    themeToggle.textContent = isDark ? "☾" : "☼";

    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );

}

updateThemeIcon();

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const theme = document.body.classList.contains("dark-mode")
            ? "dark"
            : "light";

        localStorage.setItem("portfolio-theme", theme);

        updateThemeIcon();

    });

}


/* =========================================
   8. FOOTER YEAR
========================================= */

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* =========================================
   9. INITIALIZE PORTFOLIO
========================================= */

displayProjects();
displayFilters();
displayCertifications();
