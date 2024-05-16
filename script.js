//funkionalitet til NAVIGATION

//hovedfunktion, der bruger parametre (menuId og arrowId) for at den kan virke til hvert menupunkt med hver deres undermenu
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

    // Tilføj class .show til den pågældende undermenu for at åbne den
    subMenu.classList.toggle("show");

    // Tilføj class .rotate til den tilhørende pil, når en undermenu åbnes
    arrow.classList.toggle("rotate", !isOpen);
}

// Eventlisteners; lyt efter klik på hvert menupunkt med en undermenu og igangsæt funktionen
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

// Luk undermenuer og fjern pilens rotation, når der klikkes udenfor den åbne undermenu
document.addEventListener("click", function(event) {
    const targetElement = event.target;

    // Tjek om der klikkes indenfor undermenuen
    if (!targetElement.closest(".menu_item")) {
        const allSubMenus = document.querySelectorAll(".sub_menu");
        allSubMenus.forEach((menu) => {
            menu.classList.remove("show");
        });

        const allArrows = document.querySelectorAll(".menu_arrow");
        allArrows.forEach((arrow) => {
            arrow.classList.remove("rotate");
        });
    }
});
