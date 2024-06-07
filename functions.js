const projects = [                                                              //array van objecten
    { category: 'photoshop', imgPath: 'assets/PS_KaanKaanKaan.webp' },
    { category: 'photoshop', imgPath: 'assets/photoshop-22.jpeg' },
    { category: 'photoshop', imgPath: 'assets/PS_Billboard.webp' },
    { category: 'illustrator', imgPath: 'assets/AI_Dragonite.png' },
    { category: 'illustrator', imgPath: 'assets/AI_UnseenHand.png' },
    { category: 'illustrator', imgPath: 'assets/ai_3.png' },
    { category: 'logos', imgPath: 'assets/logo-1.png' },
    { category: 'logos', imgPath: 'assets/logo-2.png' },
    { category: 'logos', imgPath: 'assets/logo-3.png' },
];

const imageContainer = document.getElementById('imageContainer');       //imagecontainer linken met js
const categorySelect = document.getElementById('category');             //category linken met js

categorySelect.addEventListener('change', updateImages);                    //categorysleector of dropdownmenu geven een functie addeventlistener 'change' is built in,
//betekend er komt een verandering, wanneer de change gebeurd voert het de updateImages functie uit
function updateImages() {                                                        //functie updateImages wordt gecreëerd
    const selectedCategory = categorySelect.value;                               //nieuwe variable met categorySelect, we voegen er .value aan toe, geeft de value aan van de categoryselect, welke item selected is
    const filteredProjects = selectedCategory === 'all' ? projects : projects.filter(project => project.category === selectedCategory);         //we creëeren een nieuwe variable
    //het checkt of selectedCategory 'all' is, de vraagteken = wat de uitkomst is als selectedcategory all is, dan stopt het bij de :, maar als de category bevoorbeeld photosop is dan gaat het door een filter en creeert het een array met de projecten die photoshop categorie hebben
    renderImageCards(filteredProjects);                                          //we linken de variable filteredProjects met de functie die we hieronder maken; renderImageCards
}

function renderImageCards(projectsToRender) {                                     //we creeern een functie
    imageContainer.innerHTML = '';                                                //we starten van 0 met een lege innerhtml in imageContainer

    for (let i = 0; i < projectsToRender.length; i++) {                           //we creeren een forloop, als 'all' geselecteerd loopt het 9x door de length van 9, als het een specifieke category is dan loopt het 3 door de length van projects
        if (i % 3 === 0) {                                                        //we kijken of de i door 3 gedeeld kan worden en of er een overblijfsel is, de overblijfsel moet 0 zijn, want we willen 3 per row laten zien
            const row = document.createElement('div');                   //nieuwe variabele met naam row, we creeren een html element div
            row.className = 'image-row';                                          //de nieuwe div in de html krijgt een class genaamd image-row
            imageContainer.appendChild(row);                                      //we plaatsen de nieuwe html tag die we hebben gemaakt in onze imagecontainer
        }

        const img = document.createElement('img');                       //nieuwe variable img, we creeeren een nieuwe element img, dus foto element
        img.src = projectsToRender[i].imgPath;                                    //de fotos woorde  gerenderd met source de imgpath
        img.alt = projectsToRender[i].category;

        const currentRow = document.querySelector('.image-row:last-child');     //nieuwe variable currentrow, zoekt in de html voor tags die image-row zijn, de laatste image-row tag
        currentRow.appendChild(img);                                                     //voegt images toe aan de row
    }
}

updateImages();                                                                         //zorgt er voor dat het niet leeg is


