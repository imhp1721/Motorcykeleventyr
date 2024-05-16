function expandMenu() {
    const subRejser = document.getElementById("sub_rejser")
    subRejser.classList.toggle("show");
}

document.getElementById("rejser").addEventListener("click", expandMenu);