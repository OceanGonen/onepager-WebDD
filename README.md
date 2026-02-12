**Leerdoelen**
1. Backend: API Filteren & Architectuur
Competenties: Oriënteren en begrijpen | Prototypen en uitwerken

Doel: Ik breid mijn API-fetch (Directus) uit zodat ik alleen specifieke velden (zoals namen en foto's) ophaal en verwerk. Ik structureer deze data om te begrijpen hoe ik data efficiënter kan mappen naar mijn HTML-grid. Meetbaar resultaat: Een schone JSON-output in de console en dynamisch gevulde profielkaarten op de website.

2. Frontend: Closed loop carousel
Competenties: Prototypen en uitwerken | Samen ontwerpen

Doel: Ik optimaliseer de animatie logica van mijn carrousels door een 'infinite scroll' te realiseren zonder visuele haperingen. Ik gebruik hiervoor transform: translateX en stem de timing/threshold. Meetbaar resultaat: Een naadloze overloop van de items in de sectie en feedback van een docent.

3. Visual Storytelling via Scroll-interface
Competentie: Verbeelden en conceptualiseren

Doel: Het vertalen van een concept (de oceaan) naar een thematische gebruikerservaring waarbij de sfeer verandert naarmate de gebruiker dieper "duikt".

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

**Week 1:** (2 feb - 6 feb) Focus: Frontend structuur, Scroll-logica en API verbinding. 
In de eerste week lag de focus op het fundament voor de vibe van de website. Het hoofddoel was om een navigatie-flow te creëren die natuurlijk aanvoelt bij het afdalen naar de bodem van de oceaan. Technische Hoogtepunten: 
Viewport Detectie: Implementatie van getBoundingClientRect() om nauwkeurig te bepalen in welke 'waterlaag' de gebruiker zich bevindt. Dit vormt de basis voor de dynamische achtergronden en animaties. 
<img width="1148" height="293" alt="image" src="https://github.com/user-attachments/assets/80f3c0c2-648e-4816-9f01-1f224cedc802" />
Bronnen: https://stackoverflow.com/questions/44172651/difference-between-getboundingclientrect-top-and-offsettop?

Wiskundige Centering: Ontwikkeling om secties te centreren bij scrollen: scrollPos = section.offsetTop + (section.offsetHeight / 2) - (window.innerHeight / 2) Dit zorgde voor de gewenste "snap-to-center" interactie.
Bronnen: https://stackoverflow.com/questions/11529070/scroll-to-the-center-of-viewport?

Ambiance: Creatie van een interactief particle-system ('marine snow') en een cursor-glow die de gebruiker visuele feedback geven tijdens de interactie.
<img width="846" height="335" alt="image" src="https://github.com/user-attachments/assets/515b46a9-291b-432c-ac89-c0d565f357ad" />
Bronnen: 

Backend Koppeling: De eerste succesvolle verbinding met de Directus API. Ik heb geëxperimenteerd met URL-parameters om specifieke data op te halen.

Behaalde Doelen (Week 1):
Interactieve Flow: Een functionerend scroll-systeem met visuele feedback. 
API Verkenning: Succesvolle fetch-requests met basis filtering.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Maandag 9/2
Vandaag heb ik een sectie meer leven gegeven door de carrousels technisch te verfijnen. Ik heb de CSS animatie nog niet op een manier dat de tracks vloeiend en zonder haperingen doorlopen. Om het visueel interssanter te maken, heb ik voor de verschillende rijen een 'reverse' animatie toegevoegd, wat een dynamisch diepzee-effect geeft.
- Doel: De carrousels vloeiend gemaakt.
- Behaald: De CSS  animatie verbeterd voor de carrousel-track. Een 'reverse' animatie toegevoegd voor visuele afwisseling.

Dinsdag 10/2

Gisteren heb ik gewerkt aan de motion controls. Omdat mijn webpagina vol zit met zwevende wolken en zwemmende vissen, heb ik via de prefers-reduced-motion media query het optioneel gemaakt. Daarnaast heb ik de carrousels in de "Passie" sectie technisch verbeterd. Door de animatie-timing en de breedte van de tracks exact op elkaar af te stemmen, heb ik een 'loop' gecreëerd die oneindig doorgaat zonder dat de gebruiker ziet waar de lijst met afbeeldingen opnieuw begint. Dit maakt de ervaring een stuk professioneler en rustiger op het oog. 
- Doel: De website bruikbaar maken voor gebruikers met bewegingsgevoeligheid & de infinite carrousels een closed loop maken & de data van de medestudenten op de webpagina tonen.
- Behaald: De carrousels naar een 'infinite loop' en de externe data van medestudenten uit de API visueel tonen op de pagina.

Woensdag 11/2

Vandaag was een kortere dag omdat ik me helaas niet lekker voelde en eerder naar huis ben gegaan. Desondanks heb ik de tijd die ik had nuttig besteed aan den andere belangrijke kant van webdevelopment. Ik heb mijn README volledig compleet gemaakt, zodat mijn hele proces van de afgelopen anderhalve week nu duidelijk gedocumenteerd is voor anderen. Daarnaast heb ik de eerste stappen gezet in het toevoegen van ARIA-labels.

**Week 2: ** (9 feb - 10 feb)
Focus: Toegankelijkheid, responsiveness,  en Dynamische Data-visualisatie

De tweede week stond in het teken van de interacties en het toegankelijk maken van de website.

Technische Hoogtepunten:
Closed Loop Carousel: De transformatie van een haperende slide naar een naadloze 'infinite loop'. Door de track exact op 50% van de breedte te laten loopen met een linear timing-function.
<img width="669" height="216" alt="image" src="https://github.com/user-attachments/assets/5f69bd6c-d9a5-4075-b26e-f2699a0d93a1" />
Bronnen: Cyd Stumpel

Motion Sensitivity: Implementatie van de prefers-reduced-motion media query. Hiermee wordt de website inclusief: gebruikers die last hebben van bewegingsziekte kunnen de animaties (wolken, vissen, particles) nu automatisch uitschakelen via hun systeeminstellingen.

Van Data naar Visueel Object: De grootste doorbraak was het mappen van studentendata naar unieke vis-elementen. In plaats van een tekstlijst wordt de API-data (namen en foto's) nu gebruikt om dynamische vissen te genereren die door de sectioe zwemmen.
<img width="1904 / 2" height="899 / 2" alt="image" src="https://github.com/user-attachments/assets/500e3f97-4714-4d01-8b56-ba80ce049444" />

Behaalde Doelen (Week 2):
Infinite Scroll: Een technisch perfecte carrousel zonder visuele 'sprong'.

Toegankelijkheid: De website respecteert systeemvoorkeuren voor motoin.

Dynamische UI: API-data van medestudenten is visueel geïntegreerd in het thema van de website.

