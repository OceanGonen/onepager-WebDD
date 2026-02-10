**Leerdoelen**
1. Backend: API Filteren & Architectuur
Competenties: Oriënteren en begrijpen | Prototypen en uitwerken

Doel: Ik breid mijn API-fetch (Directus) uit zodat ik alleen specifieke velden (zoals namen en foto's) ophaal en verwerk. Ik structureer deze data om te begrijpen hoe ik data efficiënter kan mappen naar mijn HTML-grid. Meetbaar resultaat: Een schone JSON-output in de console en dynamisch gevulde profielkaarten op de website.

2. Frontend: Closed loop carousel
Competenties: Prototypen en uitwerken | Samen ontwerpen

Doel: Ik optimaliseer de JavaScript-logica van mijn carrousels door een 'infinite scroll' te realiseren zonder visuele haperingen. Ik gebruik hiervoor transform: translateX en stem de timing/threshold. Meetbaar resultaat: Een naadloze overloop van de items in de 'Abyss' sectie en gedocumenteerde feedback van een peer.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**Logboek:**

Maandag 2/2
Ik ben begonnen met het uitwerken van de basisstructuur van de website. Ik heb nagedacht over de opbouw van de pagina en hoe de gebruiker door verschillende secties moet scrollen. Hierbij heb ik de eerste JavaScript-logica opgezet om sections te detecteren tijdens het scrollen.
- Doel: De basisarchitectuur van de "Deep Dive" flow opzetten.
- Behaald: Basis HTML-structuur opgezet. Logica geschreven om de verschillende dieptes (sections) te definiëren.

Dinsdag 3/2
Deze dag heb ik me verdiept in scroll-gedrag in JavaScript. Ik heb gewerkt met getBoundingClientRect() om te bepalen welke section zichtbaar is in de viewport en onderzocht wat het verschil is met offsetTop. Dit hielp mij om beter te begrijpen hoe scroll-detectie technisch werkt. De focus lag op visuele details en animatie. Ik heb een floating-clouds effect gemaakt met CSS, waarbij ik gebruik heb gemaakt van pseudo-elementen en keyframe-animaties. Zo heb ik zonder afbeeldingen een speels en licht visueel effect aan de website toegevoegd.
- Doel: Visuele sfeer creëren en diepte meetbaar maken.
- Behaald: getBoundingClientRect() geïmplementeerd om de actieve sectie te bepalen. CSS clouds animaties gemaakt met pseudo-elementen (::before/::after) om HTTP-requests voor afbeeldingen te besparen.
Bronnen: MDN - getBoundingClientRect

Woensdag 4/2
Ik heb functionaliteit toegevoegd om automatisch naar een section te scrollen en deze te centreren in het scherm. Hiervoor moest ik een berekening gemaakt waarbij het midden van de section wordt uitgelijnd met het midden van de viewport. Daarnaast heb ik deze interactie getest en verfijnd.
- Doel: De gebruiker altijd perfect in het midden van een sectie laten landen.
- Behaald: berekening gemaakt: section.offsetTop + (section.offsetHeight / 2) - (window.innerHeight / 2). Dit zorgt voor een "snap" effect naar het midden van de content.
Bronnen: StackOverflow - Scroll to center

Donderdag 5/2
Vandaag heb ik gewerkt aan het verbeteren van de interactie van de website. Ik heb scroll-detectie toegevoegd om te bepalen welke section actief is en hierop navigatieknoppen afgestemd die de gebruiker vloeiend naar de volgende of vorige section laten scrollen. Daarnaast heb ik visuele effecten toegevoegd, zoals een interactieve glow die reageert op de muispositie en een particle-effect dat zichtbaar wordt bij het afdalen onder het wateroppervlak.
- Doel: Gebruiker feedback geven op acties (muis & scroll).
- Behaald: Interactieve 'cursor-glow' gemaakt via CSS Custom Properties (--cursorX). Een particle-system toegevoegd dat via JS reageert op de scrollPercent om 'marine snow' te simuleren in dieper water.

Vrijdag 6/2
Deze dag heb ik een async functie genaamd myData() geschreven om data op te halen uit de Directus API van de FDND. Het was een interessante puzzel om de juiste filters in de URL te verwerken, zodat ik niet de volledige database binnenkrijg, maar specifiek mijn eigen data. Door te experimenteren met deze query-parameters heb ik geleerd hoe ik alleen de noodzakelijke informatie kan opvragen.
- Doel: Beginnen met het ophalen van externe data uit de API.
- Behaald: Een async functie myData() geschreven om data op te halen. Geëxperimenteerd met filters in de URL om specifiek de juiste squad-data binnen te krijgen.
Bronnen: Directus API Documentation

Maandag 9/2
Vandaag heb ik een sectie meer leven gegeven door de carrousels technisch te verfijnen. Ik heb de CSS animatie nog niet op een manier dat de tracks vloeiend en zonder haperingen doorlopen. Om het visueel spannender te maken, heb ik voor de verschillende rijen een 'reverse' animatie toegevoegd, wat een dynamisch diepzee-effect geeft.
- Doel: De carrousels vloeiend gemaakt.
- Behaald: De CSS  animatie verbeterd voor de carrousel-track. Een 'reverse' animatie toegevoegd voor visuele afwisseling.

Dinsdag 10/2
