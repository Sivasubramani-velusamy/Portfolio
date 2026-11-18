
/* =========================================
   1. PROJECT DATA
========================================= */

const projects = [
    {
        title: "HyperPart-DL",
        featured: true,
        description: "An intelligent deduplicated storage system that combines hypergraph-based data partitioning with deep learning-based access prediction to improve data distribution, load balancing, and storage efficiency. Implements SHA-256-based deduplication, workload-aware partitioning, and dynamic data rebalancing. Published at ICDCA 2026 and indexed in IEEE Xplore.",
        technologies: ["Python", "NetworkX", "NumPy", "Pandas", "Deep Learning", "Hypergraph Partitioning", "Data Deduplication", "SHA-256"],
        image: "assets/projects/hyperpart-dl/card.jpg",
        github: "https://github.com/Sivasubramani-velusamy/HyperPart-DL",
        demo: "",
        paper: "https://ieeexplore.ieee.org/document/11620556"
    },
    {
        title: "QuickLAN Share",
        description: "A local network file-sharing application that enables seamless file transfers between devices connected to the same LAN without consuming internet data. The Spring Boot backend handles device discovery and file transfers, while the React interface displays real-time transfer progress.",
        technologies: ["Java", "Spring Boot", "React.js", "LAN Networking", "REST APIs"],
        image: "assets/projects/quicklan-share/card.jpg",
        github: "https://github.com/Sivasubramani-velusamy/Quick-LAN-Share",
        demo: "",
        paper: ""
    },
    {
        title: "Ayurvedic Drug Recommendation System",
        description: "A web-based Ayurvedic drug recommendation application that provides personalized medicine discovery through symptom-based and disease-based searches. Users can enter their symptoms or specify a disease to explore relevant Ayurvedic medicines and access associated medicinal information.",
        technologies: ["SQL", "HTML", "CSS", "JavaScript"],
        image: "assets/projects/ayurvedic-drug-recommendation/card.jpg",
        github: "https://github.com/Sivasubramani-velusamy/Ayurvedic-Drug-Recommendation",
        demo: "",
        paper: ""
    }
];


/* =========================================
   2. CERTIFICATION DATA
========================================= */

const certifications = [
    { title: "AWS Academy Cloud Architecting", category: "Core Certifications" },
    { title: "AWS Academy Cloud Operations", category: "Core Certifications" },
    { title: "Introduction to Cybersecurity", category: "Core Certifications" },
    { title: "Problem Solving Through Programming in C", category: "Core Certifications" },
    { title: "UiPath Automation Implementation Methodology Fundamentals", category: "Core Certifications" },

    { title: "Java Foundation Certification", category: "Infosys Springboard" },
    { title: "Python for Data Science", category: "Infosys Springboard" },

    { title: "Data Analytics and Visualization Job Simulation", category: "Forage Job Simulations" },
    { title: "Cybersecurity Analyst Job Simulation", category: "Forage Job Simulations" },
    { title: "Data Visualisation: Empowering Business with Effective Insights", category: "Forage Job Simulations" },
    { title: "Advanced Software Engineering Job Simulation", category: "Forage Job Simulations" },

    { title: "Cybersecurity Certificate — Course One", category: "Google Cloud Cybersecurity" },
    { title: "Cybersecurity Certificate — Course Two", category: "Google Cloud Cybersecurity" },
    { title: "Cybersecurity Certificate — Course Three", category: "Google Cloud Cybersecurity" },
    { title: "Cybersecurity Certificate — Course Four", category: "Google Cloud Cybersecurity" },
    { title: "Cybersecurity Certificate — Course Five", category: "Google Cloud Cybersecurity" },

    { title: "Introduction to Generative AI", category: "Google Cloud AI/ML" },
    { title: "Introduction to Large Language Models", category: "Google Cloud AI/ML" },
    { title: "Introduction to Responsible AI", category: "Google Cloud AI/ML" },
    { title: "Applying AI Principles with Google Cloud", category: "Google Cloud AI/ML" },
    { title: "Prompt Design in Vertex AI (Introductory Skill Badge)", category: "Google Cloud AI/ML" },

    { title: "Introduction to Gemini for Google Workspace", category: "Google Workspace — Gemini" },
    { title: "Gemini in Google Docs", category: "Google Workspace — Gemini" },
    { title: "Gemini in Google Drive", category: "Google Workspace — Gemini" },
    { title: "Gemini in Gmail", category: "Google Workspace — Gemini" },
    { title: "Gemini in Google Meet", category: "Google Workspace — Gemini" },
    { title: "Gemini in Google Sheets", category: "Google Workspace — Gemini" },
    { title: "Gemini in Google Slides", category: "Google Workspace — Gemini" }
];


/* =========================================
   3. GENERATE PROJECT CARDS
========================================= */

const projectsContainer = document.getElementById("projects-container");

function displayProjects() {

    if (!projectsContainer) return;

    projectsContainer.innerHTML = projects.map(project => `

        <article class="project-card ${project.featured ? "project-card-featured" : ""}">

            ${project.featured ? `<div class="project-featured-label"><span>IEEE Xplore</span><span>Featured Research Project</span></div>` : ""}

            ${project.image ? `
                <button class="project-image-preview" type="button"
                        aria-label="View larger image: ${project.title}">
                    <img class="project-image"
                         src="${project.image}"
                         alt="${project.title} project overview"
                         loading="lazy">
                </button>
            ` : ""}

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

                ${project.paper ? `
                    <a href="${project.paper}"
                       target="_blank"
                       rel="noopener noreferrer">
                        IEEE Paper →
                    </a>
                ` : ""}

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
   4. CERTIFICATION DASHBOARD & LIBRARY
========================================= */

const credentialFeaturedGrid = document.getElementById("credential-featured-grid");
const credentialModal = document.getElementById("credential-library-modal");
const credentialTabs = document.getElementById("credential-library-tabs");
const credentialList = document.getElementById("credential-library-list");
const credentialOpen = document.getElementById("view-all-credentials");
const credentialClose = document.getElementById("credential-library-close");
const credentialSearch = document.getElementById("credential-library-search");
let activeCredentialCategory = "All";
let credentialSearchTerm = "";
let credentialPreviousFocus = null;

const credentialCategories = [
    "Core Certifications",
    "Infosys Springboard",
    "Forage Job Simulations",
    "Google Cloud Cybersecurity",
    "Google Cloud AI/ML",
    "Google Workspace — Gemini"
];

const featuredCredentials = [
    { title: "AWS Academy Cloud Architecting", label: "CLOUD ARCHITECTURE", symbol: "⌂" },
    { title: "AWS Academy Cloud Operations", label: "CLOUD OPERATIONS", symbol: "◈" },
    { title: "Java Foundation Certification", label: "SOFTWARE DEVELOPMENT", symbol: "☕" },
    { title: "Advanced Software Engineering Job Simulation", label: "SOFTWARE ENGINEERING", symbol: "⌘" },
    { title: "Google Cloud Cybersecurity Certificate Series", label: "CYBERSECURITY", symbol: "◇" },
    { title: "Introduction to Generative AI", label: "GENERATIVE AI", symbol: "✳" },
    { title: "Introduction to Large Language Models", label: "LARGE LANGUAGE MODELS", symbol: "◎" },
    { title: "Prompt Design in Vertex AI (Introductory Skill Badge)", label: "PROMPT ENGINEERING", symbol: "✦" }
];

function renderFeaturedCredentials() {
    if (!credentialFeaturedGrid) return;
    credentialFeaturedGrid.innerHTML = featuredCredentials.map((cert, index) => `
        <article class="credential-feature-card" style="--credential-index:${index}">
            <div class="credential-feature-card-top">
                <span class="credential-feature-symbol" aria-hidden="true">${cert.symbol}</span>
                <span class="credential-feature-number">${String(index + 1).padStart(2, "0")}</span>
            </div>
            <p class="credential-feature-label">${cert.label}</p>
            <h4>${cert.title}</h4>
            <span class="credential-feature-accent" aria-hidden="true"></span>
        </article>
    `).join("");
}

function renderCredentialTabs() {
    if (!credentialTabs) return;
    const categories = ["All Credentials", ...credentialCategories];
    credentialTabs.innerHTML = categories.map(category => {
        const count = category === "All Credentials"
            ? certifications.length
            : certifications.filter(cert => cert.category === category).length;
        const selected = category === "All Credentials"
            ? activeCredentialCategory === "All"
            : activeCredentialCategory === category;
        return `
            <button type="button"
                    class="credential-tab ${selected ? "active" : ""}"
                    data-credential-category="${category}"
                    aria-pressed="${selected}">
                ${category}<span>${count}</span>
            </button>
        `;
    }).join("");
}

function renderCredentialList() {
    if (!credentialList) return;
    const visible = certifications.filter(cert => {
        const categoryMatch = activeCredentialCategory === "All" || cert.category === activeCredentialCategory;
        const searchMatch = cert.title.toLowerCase().includes(credentialSearchTerm);
        return categoryMatch && searchMatch;
    });

    credentialList.innerHTML = visible.length
        ? visible.map((cert, index) => `
            <li class="credential-list-item">
                <span class="credential-list-number">${String(index + 1).padStart(2, "0")}</span>
                <span class="credential-list-name">${cert.title}</span>
                <span class="credential-list-check" aria-hidden="true">✓</span>
            </li>
        `).join("")
        : '<li class="credential-empty-state">No matching credentials. Try another search.</li>';

    const heading = document.getElementById("credential-library-heading");
    if (heading) heading.textContent = activeCredentialCategory === "All"
        ? "All credentials"
        : activeCredentialCategory;
    const resultCount = document.getElementById("credential-library-result-count");
    if (resultCount) resultCount.textContent = `${visible.length} shown`;
}

function selectCredentialCategory(category) {
    activeCredentialCategory = category === "All Credentials" ? "All" : category;
    renderCredentialTabs();
    renderCredentialList();
}

function openCredentialLibrary() {
    if (!credentialModal) return;
    credentialPreviousFocus = document.activeElement;
    credentialSearchTerm = "";
    if (credentialSearch) credentialSearch.value = "";
    selectCredentialCategory("All Credentials");
    credentialModal.classList.add("active");
    credentialModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    credentialClose?.focus();
}

function closeCredentialLibrary() {
    if (!credentialModal) return;
    credentialModal.classList.remove("active");
    credentialModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    credentialPreviousFocus?.focus();
}

credentialOpen?.addEventListener("click", openCredentialLibrary);
credentialClose?.addEventListener("click", closeCredentialLibrary);
credentialModal?.addEventListener("click", event => {
    if (event.target === credentialModal) closeCredentialLibrary();
});
credentialTabs?.addEventListener("click", event => {
    const tab = event.target.closest("[data-credential-category]");
    if (tab) selectCredentialCategory(tab.dataset.credentialCategory);
});
credentialSearch?.addEventListener("input", event => {
    credentialSearchTerm = event.target.value.trim().toLowerCase();
    renderCredentialList();
});
document.addEventListener("keydown", event => {
    if (event.key === "Escape" && credentialModal?.classList.contains("active")) {
        closeCredentialLibrary();
    }
});

renderFeaturedCredentials();
renderCredentialTabs();
renderCredentialList();


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
   8.5. SCROLL REVEAL ANIMATIONS
========================================= */
function initializeScrollReveal() {
    const revealElements = document.querySelectorAll(
        ".section-heading, .about-content, .skill-card, .project-card, .research-card, .education-card, .experience-card, .certification-card"
    );

    // Keep all content visible if the browser does not support the observer.
    if (!("IntersectionObserver" in window)) return;

    revealElements.forEach((element, index) => {
        element.classList.add("reveal-item");
        const delay = index % 4;
        if (delay > 0) {
            element.classList.add(`reveal-delay-${delay}`);
        }
    });

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                currentObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px"
    });

    revealElements.forEach(element => observer.observe(element));
}


/* =========================================
   9. INITIALIZE PORTFOLIO
========================================= */

// Project image lightbox: click an image to view it larger, not navigate away.
document.addEventListener("click", event => {
    const previewButton = event.target.closest(".project-image-preview");
    if (!previewButton) return;
    const image = previewButton.querySelector("img");
    const lightbox = document.getElementById("project-image-modal");
    const lightboxImage = document.getElementById("project-image-modal-img");
    if (!image || !lightbox || !lightboxImage) return;
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
});

function closeProjectImageModal() {
    const lightbox = document.getElementById("project-image-modal");
    const lightboxImage = document.getElementById("project-image-modal-img");
    if (!lightbox) return;
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    if (lightboxImage) lightboxImage.src = "";
    document.body.style.overflow = "";
}

document.getElementById("project-image-modal-close")?.addEventListener("click", closeProjectImageModal);
document.getElementById("project-image-modal")?.addEventListener("click", event => {
    if (event.target.id === "project-image-modal") closeProjectImageModal();
});
document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeProjectImageModal();
});

displayProjects();
initializeScrollReveal();
