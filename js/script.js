
/* =========================================
   1. PROJECT DATA
========================================= */

const projects = [
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
        title: "HyperPart-DL",
        description: "An intelligent deduplicated storage system that combines hypergraph-based data partitioning with deep learning-based access prediction to improve data distribution, load balancing, and storage efficiency. Implements SHA-256-based deduplication, workload-aware partitioning, and dynamic data rebalancing. Published at ICDCA 2026 and indexed in IEEE Xplore.",
        technologies: ["Python", "NetworkX", "NumPy", "Pandas", "Deep Learning", "Hypergraph Partitioning", "Data Deduplication", "SHA-256"],
        image: "assets/projects/hyperpart-dl/card.jpg",
        github: "https://github.com/Sivasubramani-velusamy/HyperPart-DL",
        demo: "",
        paper: "https://ieeexplore.ieee.org/document/11620556"
    },
    {
        title: "Ayurvedic Drug Recommendation System",
        description: "A web-based Ayurvedic drug recommendation application that provides personalized medicine discovery through symptom-based and disease-based searches. Users can enter their symptoms or specify a disease to explore relevant Ayurvedic medicines and access associated medicinal information.",
        technologies: ["HTML", "CSS", "JavaScript"],
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
    {
        title: "Introduction to Generative AI",
        issuer: "Google",
        date: "June 2024",
        category: "AI & Prompt Engineering",
        image: "assets/certificates/google-genai.jpg",
        link: ""
    },
    {
        title: "Introduction to Large Language Models",
        issuer: "Google",
        date: "August 2024",
        category: "AI & Prompt Engineering",
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
    },
    {
        title: "Cloud Architecting",
        issuer: "AWS Academy",
        date: "",
        category: "Cloud",
        image: "assets/certificates/aws-cloud-architecting.jpg",
        link: ""
    },
    {
        title: "Cloud Operations",
        issuer: "AWS Academy",
        date: "",
        category: "Cloud",
        image: "assets/certificates/aws-cloud-operations.jpg",
        link: ""
    },
    {
        title: "Generative AI Foundations",
        issuer: "AWS Academy",
        date: "",
        category: "AI & Prompt Engineering",
        image: "assets/certificates/aws-genai-foundations.jpg",
        link: ""
    },
    {
        title: "Prompt Design in Vertex AI",
        issuer: "Google Cloud",
        date: "",
        category: "AI & Prompt Engineering",
        image: "assets/certificates/vertex-ai-prompt-design.jpg",
        link: ""
    },
    {
        title: "Introduction to Cybersecurity",
        issuer: "Cisco Networking Academy",
        date: "",
        category: "Cybersecurity",
        image: "assets/certificates/cisco-intro-cybersecurity.jpg",
        link: ""
    },
    {
        title: "Java",
        issuer: "Infosys Springboard",
        date: "",
        category: "Programming & Data",
        image: "assets/certificates/infosys-java.jpg",
        link: ""
    },
    {
        title: "Python for Data Science",
        issuer: "Infosys Springboard",
        date: "",
        category: "Programming & Data",
        image: "assets/certificates/infosys-python-ds.jpg",
        link: ""
    },
    {
        title: "C Programming",
        issuer: "NPTEL",
        date: "",
        category: "Programming & Data",
        image: "assets/certificates/nptel-c.jpg",
        link: ""
    },
    {
        title: "UiPath Certification",
        issuer: "UiPath",
        date: "",
        category: "Programming & Data",
        image: "assets/certificates/uipath.jpg",
        link: ""
    },
    {
        title: "Advanced Software Engineering Simulation",
        issuer: "Walmart (Forage)",
        date: "",
        category: "Job Simulations",
        image: "assets/certificates/forage-walmart-swe.jpg",
        link: ""
    },
    {
        title: "Data Analytics Simulation",
        issuer: "Accenture (Forage)",
        date: "",
        category: "Job Simulations",
        image: "assets/certificates/forage-accenture-da.jpg",
        link: ""
    },
    {
        title: "Cybersecurity Analyst Simulation",
        issuer: "TCS (Forage)",
        date: "",
        category: "Job Simulations",
        image: "assets/certificates/forage-tcs-cyber.jpg",
        link: ""
    },
    {
        title: "Data Visualisation Simulation",
        issuer: "TCS (Forage)",
        date: "",
        category: "Job Simulations",
        image: "assets/certificates/forage-tcs-dataviz.jpg",
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

            ${project.image ? `
                <img class="project-image"
                     src="${project.image}"
                     alt="${project.title} project overview"
                     loading="lazy">
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

                ${cert.date ? `<p>${cert.date}</p>` : ""}

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

displayProjects();
displayFilters();
displayCertifications();
initializeScrollReveal();
