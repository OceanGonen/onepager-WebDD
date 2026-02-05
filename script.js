const floatUpBtn = document.getElementById('float-up');
const sinkDownBtn = document.getElementById('sink-down');
const sections = document.querySelectorAll('section');

function getCurrentSection() {
    let currentSection = 0;

    //Source: https://stackoverflow.com/questions/44172651/difference-between-getboundingclientrect-top-and-offsettop?
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            currentSection = index;
        }
    });
    return currentSection;
}

function scrollToCenter(sectionIndex) {
    if (sectionIndex >= 0 && sectionIndex < sections.length) {
        const section = sections[sectionIndex];

        //Source:
        const top = section.offsetTop + (section.offsetHeight / 2) - (window.innerHeight / 2);

        window.scrollTo({ top: top, behavior: 'smooth' });
    }
}


function updateButtons() {
    const section = getCurrentSection();
    
    floatUpBtn.style.display = 'none';
    sinkDownBtn.style.display = 'none';
    // Toon de knoppen op de juiste secties
    if (section === 1 || section === 2) {
        floatUpBtn.style.display = 'block';
        sinkDownBtn.style.display = 'block';
    } else if (section === 3) {
        floatUpBtn.style.display = 'block';
    }
}


floatUpBtn.addEventListener('click', () => {
    const section = getCurrentSection();
    scrollToCenter(section - 1);
});

sinkDownBtn.addEventListener('click', () => {
    const section = getCurrentSection();
    scrollToCenter(section + 1);
});

window.addEventListener('scroll', updateButtons);
window.addEventListener('load', updateButtons);
updateButtons();


// View transitions
document.startViewTransition(() => {
    filterItems();
});

//Glowing cursor in deep
const waterSections = document.querySelectorAll('section:not(:first-of-type)');

waterSections.forEach((section, index) => {
    section.addEventListener('mousemove', e => {
        const rect = section.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate opacity: starts at 0.1 on section 2 and increases
        // index starts at 0 for the first 'water' section (which is actually section 2)
        const opacity = 0.1 + (index * 0.105); 

        section.style.setProperty('--cursorX', x + 'px');
        section.style.setProperty('--cursorY', y + 'px');
        section.style.setProperty('--glowOpacity', opacity);
    });
});



//Water particles
const particleContainer = document.getElementById('particle-container');
const particleCount = 50;

// 1. Create the particles
for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Randomize size, position, and animation delay
    const size = Math.random() * 4 + 1 + 'px';
    particle.style.width = size;
    particle.style.height = size;
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    
    particleContainer.appendChild(particle);
}

// 2. Update color based on depth
window.addEventListener('scroll', () => {
    const skyHeight = window.innerHeight * 0.8; // Match your 80% height for section 1
    const scrollY = window.scrollY;
    
    // Calculate scroll percentage relative to the total scrollable area
    const scrollPercent = scrollY / (document.documentElement.scrollHeight - window.innerHeight);

    // Update Particle Visibility
    const particles = document.querySelectorAll('.particle');
    particles.forEach(p => {
        if (scrollY < skyHeight) {
            // Invisible in the sky
            p.style.opacity = '0';
        } else {
            // Fade in and stay visible (around 0.4 opacity) in the water
            p.style.opacity = '0.4';
        }
    });

    // 2. Update color based on depth (only if we are below the sky)
    if (scrollY >= skyHeight) {
        const r = Math.floor(255 - (scrollPercent * (255 - 66)));
        const g = 255;
        const b = 255;
        const newColor = `rgb(${r}, ${g}, ${b})`;
        particleContainer.style.setProperty('--particle-color', newColor);
    }
});


