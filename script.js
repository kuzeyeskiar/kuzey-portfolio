/* Toggle Icon Navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    const icon = menuIcon.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
    navbar.classList.toggle('active');
};

/* Scroll Sections Active Link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* Sticky Navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove toggle icon and navbar when click navbar link (scroll) */
    const icon = menuIcon.querySelector('i');
    if (icon) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
    navbar.classList.remove('active');
};

/* Scroll Reveal Animation */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/* Custom Cursor */
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

/* Typed JS Configuration */
const typed = new Typed('.multiple-text', {
    strings: ['Motion Designer', '3D Artist', 'Visual Storyteller'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* Project Modal & Lightbox Functionality */
const projectData = {
    aurora: {
        slug: 'aurora',
        title: 'Aurora Creative',
        subtitle: 'Brand Identity Design',
        category: 'Brand Design',
        year: '2024',
        role: 'Lead Designer',
        duration: '4 weeks',
        tools: ['Illustrator', 'Photoshop', 'Blender', 'Figma'],

        // Case Study Content
        problem: 'Aurora Creative, a rising creative studio, needed a cohesive and modern brand identity that would stand out in the competitive design industry while reflecting their innovative approach.',

        goal: 'Create a complete visual identity system including logo, typography, color palette, stationery design, and brand guidelines that capture the essence of creativity and professionalism.',

        process: 'Started with extensive research and mood boards, then developed logo concepts focusing on geometric forms. Used Illustrator for vector work, Photoshop for mockups and presentations, and Blender for 3D product mockups showing stationery applications.',

        deliverables: [
            { type: 'image', src: 'projects/aurora/aurora_1.png', caption: 'Logo Design & Variations' },
            { type: 'image', src: 'projects/aurora/aurora_2.jpg', caption: 'Brand Stationery Set' },
            { type: 'image', src: 'projects/aurora/aurora_3.png', caption: 'Brand Guidelines' }
        ],

        outcome: 'Delivered a complete brand identity system that elevated Aurora Creative\'s market positioning. The modern, versatile design system proved highly adaptable across digital and print applications.',

        images: [
            'projects/aurora/aurora_1.png',
            'projects/aurora/aurora_2.jpg',
            'projects/aurora/aurora_3.png'
        ]
    },

    joysphere: {
        slug: 'joysphere',
        title: 'JoySphere Entertainment Park',
        subtitle: 'Complete Brand Identity',
        category: 'Brand Identity',
        year: '2024',
        role: 'Brand Designer',
        duration: '6 weeks',
        tools: ['Procreate', 'Illustrator', 'Photoshop', 'After Effects', 'Blender'],

        problem: 'JoySphere, a new entertainment center, needed a playful yet professional brand identity that would appeal to families while maintaining a premium feel.',

        goal: 'Design a complete brand system including logo, character mascots, signage system, promotional materials, and motion graphics for social media.',

        process: 'Started with character sketches in Procreate, then vectorized in Illustrator. Created the full icon set and pattern library. Used Photoshop for signage and packaging mockups, After Effects for motion posts, and Blender for 3D scene renders.',

        deliverables: [
            { type: 'image', src: 'projects/joysphere/joysphere_1.png', caption: 'Logo & Character Mascot' },
            { type: 'image', src: 'projects/joysphere/joysphere_2.png', caption: 'Signage System' },
            { type: 'image', src: 'projects/joysphere/joysphere_3.png', caption: 'Promotional Materials' }
        ],

        outcome: 'Created a vibrant, cohesive brand identity that brings joy to visitors from the moment they see the signage. The character mascots became instantly recognizable and the motion graphics increased social media engagement.',

        images: [
            'projects/joysphere/joysphere_1.png',
            'projects/joysphere/joysphere_2.png',
            'projects/joysphere/joysphere_3.png'
        ]
    },

    illustrations: {
        slug: 'illustrations',
        title: 'Abstract Illustrations',
        subtitle: 'Experimental Art Series',
        category: 'Illustration',
        year: '2023',
        role: 'Illustrator',
        duration: 'Ongoing',
        tools: ['Procreate', 'Photoshop', 'After Effects', 'Blender'],

        problem: 'Rather than communicating a specific message, this personal project explored capturing emotions through color and form.',

        goal: 'Create an experimental illustration series that explores different visual atmospheres—some fluid and organic, others sharp and fragmented—without constraining to a single visual language.',

        process: 'Embraced rapid experimentation and iteration. Each piece explored different compositions and color palettes, focusing on evoking distinct emotional responses rather than narrative content.',

        deliverables: [
            { type: 'image', src: 'projects/illustrations/illustration_1.jpg', caption: 'Fluid Forms Study' },
            { type: 'image', src: 'projects/illustrations/illustration_2.jpg', caption: 'Color & Emotion' },
            { type: 'image', src: 'projects/illustrations/illustration_3.jpg', caption: 'Abstract Composition' }
        ],

        outcome: 'Built a versatile visual library adaptable for social media, posters, and album covers. The series demonstrates range and experimental approach to visual design.',

        images: [
            'projects/illustrations/illustration_1.jpg',
            'projects/illustrations/illustration_2.jpg',
            'projects/illustrations/illustration_3.jpg'
        ]
    }
};

let currentProject = null;
let currentImages = [];
let currentLightboxIndex = 0;

function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const project = projectData[projectId];

    if (!project) return;

    currentProject = projectId;
    currentImages = project.images;

    // Populate Case Study Header
    document.getElementById('modalProjectTitle').textContent = project.title;
    document.getElementById('modalSubtitle').textContent = project.subtitle;
    document.getElementById('modalCategory').textContent = project.category;
    document.getElementById('modalYear').textContent = project.year;
    document.getElementById('modalDuration').textContent = project.duration;
    document.getElementById('modalRole').textContent = project.role;

    // Populate Tools
    const toolsContainer = document.getElementById('modalTools');
    toolsContainer.innerHTML = project.tools.map(tool =>
        `<span class="tool-tag">${tool}</span>`
    ).join('');

    // Populate Case Study Content
    document.getElementById('modalProblem').textContent = project.problem;
    document.getElementById('modalGoal').textContent = project.goal;
    document.getElementById('modalProcess').textContent = project.process;
    document.getElementById('modalOutcome').textContent = project.outcome;

    // Populate Gallery with Deliverables
    const gallery = document.getElementById('modalGallery');
    gallery.innerHTML = '';

    project.deliverables.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${item.src}" alt="${item.caption}" loading="lazy" onclick="openLightbox(${index})">
            <span class="gallery-caption">${item.caption}</span>
        `;
        gallery.appendChild(galleryItem);
    });

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openLightbox(imageIndex) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImage');
    const counter = document.getElementById('lightboxCounter');

    currentLightboxIndex = imageIndex;
    lightboxImg.src = currentImages[currentLightboxIndex];
    counter.textContent = `${currentLightboxIndex + 1} / ${currentImages.length}`;

    lightbox.style.display = 'block';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

function changeLightboxImage(direction) {
    currentLightboxIndex += direction;

    if (currentLightboxIndex < 0) {
        currentLightboxIndex = currentImages.length - 1;
    } else if (currentLightboxIndex >= currentImages.length) {
        currentLightboxIndex = 0;
    }

    const lightboxImg = document.getElementById('lightboxImage');
    const counter = document.getElementById('lightboxCounter');

    lightboxImg.src = currentImages[currentLightboxIndex];
    counter.textContent = `${currentLightboxIndex + 1} / ${currentImages.length}`;
}

window.onclick = function (event) {
    const modal = document.getElementById('projectModal');
    const lightbox = document.getElementById('lightbox');

    if (event.target === modal) {
        closeProjectModal();
    }
    if (event.target === lightbox) {
        closeLightbox();
    }
}

document.addEventListener('keydown', function (event) {
    const lightbox = document.getElementById('lightbox');
    const modal = document.getElementById('projectModal');

    if (event.key === 'Escape') {
        if (lightbox.style.display === 'block') {
            closeLightbox();
        } else if (modal.style.display === 'block') {
            closeProjectModal();
        }
    }

    if (lightbox.style.display === 'block') {
        if (event.key === 'ArrowLeft') {
            changeLightboxImage(-1);
        } else if (event.key === 'ArrowRight') {
            changeLightboxImage(1);
        }
    }
});


// ========== EK LOGO INTERACTIVE ==========

const ekLogo = document.getElementById('ekLogo');

if (ekLogo) {
    const container = ekLogo.parentElement;

    // Mouse move tracking with tilt effect
    document.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate distance from center
        const deltaX = (e.clientX - centerX) / rect.width;
        const deltaY = (e.clientY - centerY) / rect.height;

        // Tilt in opposite direction (reverse mouse movement)
        const tiltX = -deltaY * 5; // Max 5 degrees
        const tiltY = deltaX * 5;

        // Apply transform with smooth transition
        ekLogo.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });

    // Reset on mouse leave
    container.addEventListener('mouseleave', () => {
        ekLogo.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
}


// ========== CONTACT FORM FUNCTIONALITY ==========

// Copy Email to Clipboard
function copyEmail() {
    const email = 'hello@kuzeyeskiar.com.tr';
    navigator.clipboard.writeText(email).then(() => {
        const copyBtn = document.querySelector('.copy-btn');
        const icon = copyBtn.querySelector('i');

        // Visual feedback
        copyBtn.classList.add('copied');
        icon.classList.remove('fa-copy');
        icon.classList.add('fa-check');

        // Reset after 2 seconds
        setTimeout(() => {
            copyBtn.classList.remove('copied');
            icon.classList.remove('fa-check');
            icon.classList.add('fa-copy');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy email:', err);
    });
}

// Form Validation & Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Get form elements
        const nameInput = document.getElementById('contactName');
        const emailInput = document.getElementById('contactEmail');
        const messageInput = document.getElementById('contactMessage');
        const submitBtn = document.getElementById('submitBtn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');

        // Clear previous errors
        clearErrors();

        // Validate
        let isValid = true;

        if (!nameInput.value.trim()) {
            showError('nameError', 'Please enter your name');
            nameInput.classList.add('error');
            isValid = false;
        }

        if (!emailInput.value.trim()) {
            showError('emailError', 'Please enter your email');
            emailInput.classList.add('error');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            showError('emailError', 'Please enter a valid email');
            emailInput.classList.add('error');
            isValid = false;
        }

        if (!messageInput.value.trim()) {
            showError('messageError', 'Please enter your message');
            messageInput.classList.add('error');
            isValid = false;
        }

        if (!isValid) return;

        // Show loading state
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-flex';
        submitBtn.disabled = true;

        try {
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            const result = await response.json();

            if (response.ok) {
                // Success
                contactForm.style.display = 'none';
                document.getElementById('formSuccess').style.display = 'flex';
            } else {
                // Log the actual error
                console.error('Formspree error:', result);
                throw new Error(result.error || 'Form submission failed');
            }
        } catch (error) {
            console.error('Form error:', error);
            // Try native submit as fallback
            try {
                contactForm.removeEventListener('submit', arguments.callee);
                contactForm.submit();
            } catch (fallbackError) {
                contactForm.style.display = 'none';
                document.getElementById('formError').style.display = 'flex';
            }
        } finally {
            // Reset button
            btnText.style.display = 'inline-flex';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        }
    });

    // Remove error state on input
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', function () {
            this.classList.remove('error');
            const errorId = this.id.replace('contact', '').replace('Name', 'name').replace('Email', 'email').replace('Message', 'message') + 'Error';
            const errorSpan = document.getElementById(errorId);
            if (errorSpan) errorSpan.textContent = '';
        });
    });
}

function showError(elementId, message) {
    const errorSpan = document.getElementById(elementId);
    if (errorSpan) errorSpan.textContent = message;
}

function clearErrors() {
    const errorSpans = document.querySelectorAll('.error-message');
    errorSpans.forEach(span => span.textContent = '');

    const errorInputs = document.querySelectorAll('.error');
    errorInputs.forEach(input => input.classList.remove('error'));
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
