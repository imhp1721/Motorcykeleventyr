//funkionalitet til NAVIGATION

//Funktion, der bruger parametre (menuId og arrowId) for at den kan virke til hvert menupunkt med hver deres undermenu
function toggleSubMenu(menuId, arrowId) {
    const arrow = document.getElementById(arrowId);
    const subMenu = document.getElementById(menuId);

    // Tjek om undermenuen er åben
    const isOpen = subMenu.classList.contains("show");

    // Konstant til alle undermenuer
    const allSubMenus = document.querySelectorAll(".sub_menu");

    // Luk alle undermenuer
    allSubMenus.forEach((menu) => {
        if (menu.id !== menuId) {
            menu.classList.remove("show");
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