//funkionalitet til NAVIGATION

//Funktion, der bruger parametre (menuId og arrowId) for at den kan virke til hvert menupunkt og pil med hver deres undermenu
function toggleSubMenu(menuId, arrowId) {
    const arrow = document.getElementById(arrowId);
    const subMenu = document.getElementById(menuId);

    // Tjek om undermenuen er åben
    const isOpen = subMenu.classList.contains("show");

    // Konstanter til alle undermenuer og alle menu-pile
    const allSubMenus = document.querySelectorAll(".sub_menu");
    const allArrows = document.querySelectorAll(".menu_arrow");

    // Luk alle undermenuer
    allSubMenus.forEach((menu) => {
        if (menu.id !== menuId) {
            menu.classList.remove("show");
        }
    });

    // Fjern rotation på alle menu-pile
    allArrows.forEach((arrow) => {
      if (arrow.id !== arrowId) {
        arrow.classList.remove("rotate");
      }
    });

    //Luk søgefeltet, hvis det er synligt
    const searchBar = document.getElementById("search_bar");
    if (searchBar.classList.contains("show")) {
        searchBar.classList.remove("show");
    }

    // Tilføj class .show til den pågældende undermenu for at åbne den
    subMenu.classList.toggle("show");

    // Tilføj class .rotate til den tilhørende pil, når en undermenu åbnes
    arrow.classList.toggle("rotate", !isOpen);
}

//Funktion til søgefeltet
function toggleSearchBar() {
    const searchBar = document.getElementById("search_bar");

    // Tjek om søgefeltet allerede er synligt
    const isOpen = searchBar.classList.contains("show");

    //Luk alle undermenuer hvis søgefeltet åbnes
    const allSubMenus = document.querySelectorAll(".sub_menu");
    allSubMenus.forEach((menu) => {
        menu.classList.remove("show");
    });

    //Fjern eventuel rotation fra alle pile
    const allArrows = document.querySelectorAll(".menu_arrow");
    allArrows.forEach((arrow) => {
        arrow.classList.remove("rotate");
    });

    //Gør søgefelt synligt, hvis det ikke allerede er synligt
    searchBar.classList.toggle("show", !isOpen);
}

// EVENTLISTENERS:

//lyt efter klik på hvert menupunkt med en undermenu og igangsæt funktionen
//menupunktet "rejser" og dens tilhørende undermenu
document.getElementById("rejser").addEventListener("click", function() {
    toggleSubMenu("sub_rejser", "arrow_rejser");
});

//menupunktet "arrangementer" og dens tilhørende undermenu
document.getElementById("arrangementer").addEventListener("click", function() {
    toggleSubMenu("sub_arrangementer", "arrow_arrangementer");
});

//menupunktet "om os" og dens tilhørende undermenu
document.getElementById("om_os").addEventListener("click", function() {
    toggleSubMenu("sub_om_os", "arrow_om_os");
});

//lyt efter klik på søgeikonet og igangsæt funktionen
document.getElementById("search_btn").addEventListener("click", function() {
    toggleSearchBar();
});

// Luk undermenuer og søgefelt og fjern piles rotation, når der klikkes udenfor den åbne undermenu eller åbent søgefelt
document.addEventListener("click", function(event) {
    const targetElement = event.target;

    // Tjek om der klikkes indenfor undermenuen
    if (!targetElement.closest(".menu_item") && !targetElement.closest(".menu_icons")) {
        const allSubMenus = document.querySelectorAll(".sub_menu");
        allSubMenus.forEach((menu) => {
            menu.classList.remove("show");
        });

        const allArrows = document.querySelectorAll(".menu_arrow");
        allArrows.forEach((arrow) => {
            arrow.classList.remove("rotate");
        });

        const searchBar = document.getElementById("search_bar");
        searchBar.classList.remove("show");
    }
});

//Alert med servicebesked, hvis der klikkes på kurven
const cartBtn = document.getElementById("cart_btn");
cartBtn.addEventListener("click", function() {
    alert("Tak for din interresse i vores produkter. Shoppen er på vej, men er endnu ikke færdigudviklet.")
});

// funktionalitet til ANMELDELSESKARUSEL i index.html
// Karrusel: Flip Through Elements In A 3D Space - Carousel.js - link: https://www.cssscript.com/flip-element-carousel/

'use strict';

class Carousel {
  constructor(el) {
    this.el = el;
    this.carouselOptions = ['previous', 'next'];
    this.carouselData = [
      {
        'id': '1',
        'src': 'img/index/anmeld1.jpg',
      },
      {
        'id': '2',
        'src': 'img/index/anmeld2.jpg',
      },
      {
        'id': '3',
        'src': 'img/index/anmeld3.jpg',
      },
      {
        'id': '4',
        'src': 'img/index/anmeld4.jpg',
      },
      {
        'id': '5',
        'src': 'img/index/anmeld5.jpg',
      }
    ];
    this.carouselInView = [1, 2, 3, 4, 5];
    this.carouselContainer;
    this.carouselPlayState;
  }

  mounted() {
    this.setupCarousel();
  }

  // Build carousel html
  setupCarousel() {
    const container = document.createElement('div');
    const controls = document.createElement('div');

    // Add container for carousel items and controls
    this.el.append(container, controls);
    container.className = 'carousel-container';
    controls.className = 'carousel-controls';

    // Take dataset array and append items to container
    this.carouselData.forEach((item, index) => {
      const carouselItem = item.src ? document.createElement('img') : document.createElement('div');

      container.append(carouselItem);
      
      // Add item attributes
      carouselItem.className = `carousel-item carousel-item-${index + 1}`;
      carouselItem.src = item.src;
      carouselItem.setAttribute('loading', 'lazy');
      // Used to keep track of carousel items, infinite items possible in carousel however min 5 items required
      carouselItem.setAttribute('data-index', `${index + 1}`);
    });

    this.carouselOptions.forEach((option) => {
      const btn = document.createElement('button');
      const axSpan = document.createElement('span');

      // Add accessibilty spans to button
      axSpan.innerText = option;
      axSpan.className = 'ax-hidden';
      btn.append(axSpan);

      // Add button attributes
      btn.className = `carousel-control carousel-control-${option}`;
      btn.setAttribute('data-name', option);

      // Add carousel control options
      controls.append(btn);
    });

    // After rendering carousel to our DOM, setup carousel controls' event listeners
    this.setControls([...controls.children]);

    // Set container property
    this.carouselContainer = container;
  }

  setControls(controls) {
    controls.forEach(control => {
      control.onclick = (event) => {
        event.preventDefault();

        // Manage control actions, update our carousel data first then with a callback update our DOM
        this.controlManager(control.dataset.name);
      };
    });
  }

  controlManager(control) {
    if (control === 'previous') return this.previous();
    if (control === 'next') return this.next();

    return;
  }

  previous() {
    // Update order of items in data array to be shown in carousel
    this.carouselData.unshift(this.carouselData.pop());

    // Push the first item to the end of the array so that the previous item is front and center
    this.carouselInView.push(this.carouselInView.shift());

    // Update the css class for each carousel item in view
    this.carouselInView.forEach((item, index) => {
      this.carouselContainer.children[index].className = `carousel-item carousel-item-${item}`;
    });

    // Using the first 5 items in data array update content of carousel items in view
    this.carouselData.slice(0, 5).forEach((data, index) => {
      document.querySelector(`.carousel-item-${index + 1}`).src = data.src;
    });
  }

  next() {
    // Update order of items in data array to be shown in carousel
    this.carouselData.push(this.carouselData.shift());

    // Take the last item and add it to the beginning of the array so that the next item is front and center
    this.carouselInView.unshift(this.carouselInView.pop());

    // Update the css class for each carousel item in view
    this.carouselInView.forEach((item, index) => {
      this.carouselContainer.children[index].className = `carousel-item carousel-item-${item}`;
    });

    // Using the first 5 items in data array update content of carousel items in view
    this.carouselData.slice(0, 5).forEach((data, index) => {
      document.querySelector(`.carousel-item-${index + 1}`).src = data.src;
    });
  }

}

// Refers to the carousel root element you want to target, use specific class selectors if using multiple carousels
const el = document.querySelector('.carousel');
// Create a new carousel object
const exampleCarousel = new Carousel(el);
// Setup carousel and methods
exampleCarousel.mounted();