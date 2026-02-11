window.addEventListener('load', () => {
    myData();


    async function myData() {
        const url = 'https://fdnd.directus.app/items/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526&fields=name,avatar,fav_color';

        try {
            console.log("Vissen vangen...");
            let response = await fetch(url);
            let result = await response.json();
            let students = result.data;

            console.log("Gevangen studenten:", students); 
            createFish(students);
        } catch (error) {
            console.error("Net gebroken:", error);
        }
    }

    function createFish(students) {
        const container = document.getElementById('fish-container');
        if (!container) {
            console.error("Container niet gevonden! Check je HTML id.");
            return;
        }

        students.forEach((student) => {
    if (student.avatar) {
        const fish = document.createElement('div');
        fish.className = 'student-fish';

        const imgUrl = `${student.avatar}`;

        fish.innerHTML = `
            <div class="fish-body">
                <img src="${imgUrl}" alt="${student.name}" onerror="this.src='https://placehold.co/100x100?text=Vis'">
                <div class="fish-tail"></div>
            </div>
            <span class="fish-name">${student.name}</span>
        `;
        
        const fishColor = student.fav_color || '#42f5f5';
        fish.style.setProperty('--fish-glow', fishColor);

        fish.style.top = Math.floor(Math.random() * 80) + "vh"; 
        fish.style.animationDuration = (Math.random() * 10 + 10) + "s";

        container.appendChild(fish);
    }
});
    }


});