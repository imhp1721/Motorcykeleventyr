/* --- BOOKING --- */

/* BOOKING_1 + - KNAP */
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const number = document.querySelector(".number");

let answer = 1;

plus.addEventListener("click", () => {
    if(answer < 4) {
        answer++;
        updateNumber();
    }
});

minus.addEventListener("click", () => {
    if(answer>1) {
        answer--;
        updateNumber();
    }
});

function updateNumber() {
    number.innerHTML = (answer < 10) ? "0" + answer : answer; // For at tilføje 0 foran tal under 10. Ellers number.innerHTML = answer;
};


/* BOOKING_3 */

const bookingChecks = document.querySelectorAll(".booking_check"); //Vælger alle .booking_check


bookingChecks.forEach(checkbox => { //Kode gentages for alle checkbokse
    // Tilføj eventlistener så funktionen kører, når der klikkes
    checkbox.addEventListener("click", function() {
        // Fjerner bg farve, når den enkelte boks ikke er den nyeste klikket
        bookingChecks.forEach(cb => {
            cb.style.backgroundColor = '';
        });

        // Bg farve, når klikket
        checkbox.style.backgroundColor = checkbox.classList.contains("checked") ? '' : "var(--clr_main)";

        // Ændrer om den er checked eller ej. Hvis den allerede er det fjernes den. Hvis ikke tilføjes den
        checkbox.classList.toggle("checked");
    });
});


/* -------BOOKING SIDE SKIFT ------- */
//DOMContentLoaded: Funktion kører først, når al HTML er læst
document.addEventListener("DOMContentLoaded", function() {
    // Først skjuler vi alle booking-siderne og alle dot-elementer
    const bookingPages = document.querySelectorAll(".booking_1, .booking_2, .booking_3, .booking_4");
    bookingPages.forEach(page => {
        page.style.display = "none";
    });
    const dots = document.querySelectorAll(".dot");
    dots.forEach(dot => {
        dot.style.backgroundColor = "var(--clr_light)";
    });

    // Viser booking_1 når siden først indlæses
    document.querySelector(".booking_1").style.display = "grid";
    document.querySelectorAll(".dot1").forEach(dot => {
        dot.style.backgroundColor = "var(--clr_dark)";
    });

    // Funktion: Opdater visningen baseret på den aktive booking side
    function updateBookingPage(activePage) {
        
        // Skjul alle booking sider og alle dot-elementer
        bookingPages.forEach(page => {
            page.style.display = "none";
        });

        switch (activePage) { //switch som alternativ til "if" "else"
            case 1: //booking_1
                document.querySelector(".booking_1").style.display = "grid";
                document.querySelectorAll(".dot1").forEach(dot => {
                    dot.style.backgroundColor = "var(--clr_dark)";
                });
                // Skjul black elementer vis white elementer 
                document.querySelectorAll(".booking_info_black, .booking_pay_black, .booking_flag_black").forEach(element => {
                    element.style.display = "none";
                });
                document.querySelectorAll(".booking_info_white, .booking_pay_white, .booking_flag_white").forEach(element => {
                    element.style.display = "block";
                });
                break;
            case 2: //booking_2
                document.querySelector(".booking_2").style.display = "grid";
                document.querySelectorAll(".dot1, .dot2").forEach(dot => {
                    dot.style.backgroundColor = "var(--clr_dark)";
                });
                // Skjul/vis elementer
                document.querySelectorAll(".booking_info_white, .booking_pay_black, .booking_flag_black").forEach(element => {
                    element.style.display = "none";
                });
                document.querySelectorAll(".booking_info_black, .booking_pay_white, .booking_flag_white").forEach(element => {
                    element.style.display = "block";
                });
                break;
            case 3: //booking_3
                document.querySelector(".booking_3").style.display = "grid";
                document.querySelectorAll(".dot1, .dot2, .dot3").forEach(dot => {
                    dot.style.backgroundColor = "var(--clr_dark)";
                });
                // Skjul/vis elementer
                document.querySelectorAll(".booking_info_white, .booking_pay_white, .booking_flag_black").forEach(element => {
                    element.style.display = "none";
                });
                document.querySelectorAll(".booking_info_black, .booking_pay_black, .booking_flag_white").forEach(element => {
                    element.style.display = "block";
                });

                // Markér første .booking_check (betalingsmetode) hvis den ikke allerede er markeret
                const firstBookingCheck = document.querySelector(".booking_check");
                if (!firstBookingCheck.classList.contains("checked")) {
                    firstBookingCheck.click(); // Simulerer et klik for at markere den første checkbox
                }
                break;
            case 4: //booking_4
                document.querySelector(".booking_4").style.display = "grid";
                dots.forEach(dot => {
                    dot.style.backgroundColor = "black";
                });
                // Opdater visningen af elementerne
                document.querySelectorAll(".booking_info_white, .booking_pay_white, .booking_flag_white").forEach(element => {
                    element.style.display = "none";
                });
                document.querySelectorAll(".booking_info_black, .booking_pay_black, .booking_flag_black").forEach(element => {
                    element.style.display = "block";
                });
                break;
            default:
                Text = "Hov! Det ligner, at der er et problem med bookingsiden. Kontakt os venligst, og så finder vi frem til en løsning."
                break;
        }
    }

    // Lyt efter klik på "NÆSTE"
    const nextButtons = document.querySelectorAll(".booking_next");
    nextButtons.forEach((button, index) => {
        button.addEventListener("click", function() {
            if (index === 1) { // Kun for next knappen placeret [1] i ovenstående nodelist (så altså next på booking_2)
                // Tjek om alle påkrævede inputfelter er udfyldt
                const requiredInputs = document.querySelectorAll(".booking_2 input[required]");
                let allInputsFilled = true;

                requiredInputs.forEach(input => {
                    if (!input.value.trim()) { // Tjek om inputværdien er tom eller kun whitespace(det udfyldte består kun af mellemrum)
                        allInputsFilled = false;
                    }
                });

                // Hvis et påkrævet inputfelt er tomt, vis advarsel
                if (!allInputsFilled) {
                    alert("Udfyld venligst alle påkrævede felter, før du fortsætter.");
                    return; // Stop den igen
                }
            } else if (index === 2) { // .booking_3 næste knap
                // Tjek om betingelserne er accepteret
                const termsCheckbox = document.querySelector(".booking_terms_check");
                
                // Hvis betingelserne ikke er accepteret, vis advarsel
                if (!termsCheckbox.checked) {
                    alert("Acceptér venligst betingelserne, før du fortsætter.");
                    return; // Stop igen
                }
            }
            updateBookingPage(index + 2); // Opdater inhold, når next trykkes for sidene m placering 0-2 i switch listen
        });
    });
});