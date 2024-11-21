// Sample project data
const projects = [
    {
        title: "Music Soulmate",
        description: "Full-stack music taste-matching app using Spotify API and custom algorithm for friend recommendations",
        image: "/api/placeholder/300/200",  // Replace with your image
        tech: ["Next.js", "React", "MongoDB", "Python", "Spotify API"]
    },
    {
        title: "Manufacturing Process App",
        description: "Unified manufacturing app that cut load times by 97.4% and enabled live data access",
        image: "/api/placeholder/300/200",
        tech: ["TypeScript", "React", "Node.js", "AWS", "C#"]
    },
    {
        title: "Securities Trading Platform",
        description: "Exchange platform for tokenized securities with Angular and Oracle SQL",
        image: "/api/placeholder/300/200",
        tech: ["Angular", "Oracle SQL", "Solidity"]
    },
    {
        title: "Uber Insurance API",
        description: "REST API for Uber's driver insurance data using AWS services",
        image: "/api/placeholder/300/200",
        tech: ["AWS Lambda", "API Gateway", "Aurora"]
    },
    {
        title: "Data Aggregation API",
        description: "Java Spring Boot REST API aggregating 23 NYC data sources",
        image: "/api/placeholder/300/200",
        tech: ["Java Spring Boot", "Angular", "REST API"]
    },
    // Add more of your projects here
    {
        title: "Music Soulmate",
        description: "Full-stack music taste-matching app using Spotify API and custom algorithm for friend recommendations",
        image: "/api/placeholder/300/200",  // Replace with your image
        tech: ["Next.js", "React", "MongoDB", "Python", "Spotify API"]
    },
    {
        title: "Manufacturing Process App",
        description: "Unified manufacturing app that cut load times by 97.4% and enabled live data access",
        image: "/api/placeholder/300/200",
        tech: ["TypeScript", "React", "Node.js", "AWS", "C#"]
    },
    {
        title: "Securities Trading Platform",
        description: "Exchange platform for tokenized securities with Angular and Oracle SQL",
        image: "/api/placeholder/300/200",
        tech: ["Angular", "Oracle SQL", "Solidity"]
    },
    {
        title: "Uber Insurance API",
        description: "REST API for Uber's driver insurance data using AWS services",
        image: "/api/placeholder/300/200",
        tech: ["AWS Lambda", "API Gateway", "Aurora"]
    },
    {
        title: "Data Aggregation API",
        description: "Java Spring Boot REST API aggregating 23 NYC data sources",
        image: "/api/placeholder/300/200",
        tech: ["Java Spring Boot", "Angular", "REST API"]
    }
];

// Continue from the previous code...

const projectsGrid = document.getElementById('projectsGrid');
const showMoreBtn = document.getElementById('showMoreBtn');
let showingAll = false;

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card glass';

    card.innerHTML = `
        <div class="project-image" style="background-image: url('${project.image}')"></div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="tech-stack">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;

    return card;
}

function initializeProjects(showAll = false) {
    projectsGrid.innerHTML = '';
    const displayProjects = showAll ? projects : projects.slice(0, 6);

    displayProjects.forEach((project, index) => {
        const card = createProjectCard(project);
        projectsGrid.appendChild(card);
        // Add staggered animation delay
        setTimeout(() => card.classList.add('visible'), index * 100);
    });
}

showMoreBtn.addEventListener('click', () => {
    showingAll = !showingAll;
    initializeProjects(showingAll);
    showMoreBtn.textContent = showingAll ? 'Show Less' : 'Show All Projects';

    if (!showingAll) {
        window.scrollTo({
            top: projectsGrid.offsetTop - 100,
            behavior: 'smooth'
        });
    }
});

// Handle mouse movement for 3D effect
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${card.classList.contains('visible') ? '0' : '50px'})`;
    });
});

// Reset card transform when mouse leaves
document.addEventListener('mouseleave', () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.style.transform = card.classList.contains('visible') ?
            'translateY(0)' : 'translateY(50px)';
    });
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// Initialize the page
initializeProjects(false);

// Observe all project cards for scroll animations
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// Handle parallax effect for blur circles
document.addEventListener('mousemove', (e) => {
    const circles = document.querySelectorAll('.blur-circle');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    circles.forEach((circle, index) => {
        const speed = index + 1;
        const x = (mouseX - 0.5) * speed * 50;
        const y = (mouseY - 0.5) * speed * 50;
        circle.style.transform = `translate(${x}px, ${y}px)`;
    });
});