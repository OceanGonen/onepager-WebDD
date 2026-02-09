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

        //Source:https://stackoverflow.com/questions/11529070/scroll-to-the-center-of-viewport?
        const top = section.offsetTop + (section.offsetHeight / 2) - (window.innerHeight / 2);

        window.scrollTo({ top: top, behavior: 'smooth' });
    }
}


function updateButtons() {
    const section = getCurrentSection();
    
    floatUpBtn.style.display = 'none';
    sinkDownBtn.style.display = 'none';
    // Show buttons on the correct sections
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


//Glowing cursor in deep
const waterSections = document.querySelectorAll('section:not(:first-of-type):not(:last-of-type)');

waterSections.forEach((section, index) => {
    section.addEventListener('mousemove', e => {
        const rect = section.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate opacity: starts at 0.1 on section 2 and increases
        const opacity = 0.1 + (index * 0.105); 

        section.style.setProperty('--cursorX', x + 'px');
        section.style.setProperty('--cursorY', y + 'px');
        section.style.setProperty('--glowOpacity', opacity);
    });
});



//Water particles
const particleContainer = document.getElementById('particle-container');
const particleCount = 50;

// Create the particles
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

// Update color based on depth
window.addEventListener('scroll', () => {
    const pageHeight = window.innerHeight * 0.8;
    const scrollY = window.scrollY;
    
    const scrollPercent = scrollY / (document.documentElement.scrollHeight - window.innerHeight);

    // Update Particle Visibility
    const particles = document.querySelectorAll('.particle');
    particles.forEach(p => {
        if (scrollY < pageHeight) {
            p.style.opacity = '0';
        } else {
            p.style.opacity = '0.4';
        }
    });

    if (scrollY >= pageHeight) {
        const r = Math.floor(255 - (scrollPercent * (255 - 66)));
        const g = 255;
        const b = 255;
        const newColor = `rgb(${r}, ${g}, ${b})`;
        particleContainer.style.setProperty('--particle-color', newColor);
    }
});

//Section 1. denkwijze/////////////////////////////////////////////////////////////////////////////////
const bubbles = document.querySelectorAll('.bubble');

bubbles.forEach(bubble => {
  bubble.addEventListener('click', () => {
    bubbles.forEach(b => b !== bubble && b.classList.remove('active'));
    bubble.classList.toggle('active');
  });
});


//Section 2. Leerdoelen //////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.2 // Trigger when 20% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const cards = entry.target.querySelectorAll('.goal-card');
            
            if (entry.isIntersecting) {
                // When entering: Add the class
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('reveal');
                    }, index * 200); // Small stagger effect
                });
            } else {
                // When leaving: Remove the class
                cards.forEach(card => {
                    card.classList.remove('reveal');
                });
            }
        });
    }, observerOptions);

    // Target the specific section
    const leerdoelenSection = document.querySelector('#leerdoelen');
    if (leerdoelenSection) {
        observer.observe(leerdoelenSection);
    }
});
