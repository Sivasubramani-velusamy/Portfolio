# Sivasubramani Velusamy | Personal Portfolio

Welcome to my personal portfolio repository!

This repository contains the source code for my personal developer portfolio, where I showcase my technical skills, projects, research contributions, certifications, education, and professional journey.

## About Me

I am a B.Tech Information Technology graduate interested in software engineering, enterprise technologies, and AI-driven solutions.

My technical interests include Java, Spring Boot, React.js, SQL, SAP technologies, and Generative AI.

I enjoy building practical solutions, exploring emerging technologies, and continuously improving my software development skills.

## Portfolio Sections

- **Home:** Introduction and professional overview.
- **About Me:** Background, interests, and career goals.
- **Technical Skills:** Programming languages, frameworks, databases, and tools.
- **Projects:** Selected software development and AI projects.
- **Research:** IEEE research publication and contributions.
- **Certifications & Badges:** Professional certifications and learning achievements.
- **Education & Experience:** Academic background and internship experience.
- **Contact:** Professional links and contact information.

## Technology Stack

- HTML5
- CSS3
- JavaScript
- Git & GitHub
- GitHub Pages

## Repository Structure

```text
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── profile/
    ├── certificates/
    ├── projects/
    └── resume/
```

## Updating the Portfolio

All content that changes often lives at the top of `js/script.js`.

**Add a certification**
1. Save the image in `assets/certificates/`.
2. Add an entry to the `certifications` array:
```js
{
    title: "Certification Name",
    issuer: "Issuer",
    date: "Month YYYY",          // optional, leave "" to hide
    category: "Cloud",           // a new category creates a new filter tab
    image: "assets/certificates/file-name.jpg",
    link: "https://verify-url"   // optional, leave "" to hide the button
}
```

**Add a project**
Add an entry to the `projects` array with `title`, `description`, `technologies`, `github` and `demo`.

**Replace the resume or photo**
Overwrite `assets/resume/Sivasubramani_V_Resume.pdf` or `assets/profile/PIC.jpg` with the same file name.

## Featured Research

**HyperPart-DL: An Intelligent Hypergraph Based Deduplicated Storage System Using DL**

Published at ICDCA 2026.

## Connect With Me

- LinkedIn: https://www.linkedin.com/in/sivasubramanivelusamy/
- GitHub: https://github.com/Sivasubramani-velusamy
- Email: sivasubramani17v@gmail.com

## License

This repository contains my personal portfolio. Please contact me before reusing any personal content, images, or project materials.

---

Built with HTML, CSS, and JavaScript.
