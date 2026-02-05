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