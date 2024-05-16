// FUNKTIONER TIL NAVIGATION

//udfold undermenuen til "rejser"
function expandRejser() {

    //pil og undermenu som konstanter
    const arrow = document.getElementById("arrow_rejser");
    const subMenu = document.getElementById("sub_rejser");
    //konstant, der kontrollerer om menuen er synlig eller ej
    const isExpanded = subMenu.classList.contains("show");

    //hvis menuen er synlig, skal den lukkes - ellers skal den åbnes
    //class .rotate og .show styler elementerne når undermenuen er synlig
    if(isExpanded) {
        arrow.classList.remove("rotate");
        subMenu.classList.remove("show");
    } else {
        arrow.classList.add("rotate");
        subMenu.classList.add("show");
    }
}

//udfold undermenuen til "arrangementer"
function expandArrangementer() {

    //pil og undermenu som konstanter
    const arrow = document.getElementById("arrow_arrangementer");
    const subMenu = document.getElementById("sub_arrangementer");
    //konstant, der kontrollerer om menuen er synlig eller ej
    const isExpanded = subMenu.classList.contains("show");

    //hvis menuen er synlig, skal den lukkes - ellers skal den åbnes
    //class .rotate og .show styler elementerne når undermenuen er synlig
    if(isExpanded) {
        arrow.classList.remove("rotate");
        subMenu.classList.remove("show");
    } else {
        arrow.classList.add("rotate");
        subMenu.classList.add("show");
    }
}

//udfold undermenuen til "om os"
function expandOmOs() {

    //pil og undermenu som konstanter
    const arrow = document.getElementById("arrow_om_os");
    const subMenu = document.getElementById("sub_om_os");
    //konstant, der kontrollerer om menuen er synlig eller ej
    const isExpanded = subMenu.classList.contains("show");

    //hvis menuen er synlig, skal den lukkes - ellers skal den åbnes
    //class .rotate og .show styler elementerne når undermenuen er synlig
    if(isExpanded) {
        arrow.classList.remove("rotate");
        subMenu.classList.remove("show");
    } else {
        arrow.classList.add("rotate");
        subMenu.classList.add("show");
    }
}

//når der klikkes på et menupunkt skal den tilhørende funktion startes
document.getElementById("rejser").addEventListener("click", expandRejser);
document.getElementById("arrangementer").addEventListener("click", expandArrangementer);
document.getElementById("om_os").addEventListener("click", expandOmOs);