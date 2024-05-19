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
        checkbox.style.backgroundColor = checkbox.classList.contains("checked") ? '' : "green"; //SKAL ÆNDRES TIL var(--clt_main)

        // Ændrer om den er checked eller ej. Hvis den allerede er det fjernes den. Hvis ikke tilføjes den
        checkbox.classList.toggle("checked");
    });
});


/* -------BOOKING SIDE SKIFT ------- */
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

    // Funktion til at opdatere visningen baseret på den aktive booking-side
    function updateBookingPage(activePage) {
        // Først skjuler vi alle booking-siderne og alle dot-elementer
        bookingPages.forEach(page => {
            page.style.display = "none";
        });

        // Opdater dot-baggrundsfarver
        dots.forEach(dot => {
            dot.style.backgroundColor = "var(--clr_light)";
        });

        switch (activePage) {
            case 1:
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
            case 2:
                document.querySelector(".booking_2").style.display = "grid";
                document.querySelectorAll(".dot1, .dot2").forEach(dot => {
                    dot.style.backgroundColor = "var(--clr_dark)";
                });
                // Opdater visningen af elementerne
                document.querySelectorAll(".booking_info_white, .booking_pay_black, .booking_flag_black").forEach(element => {
                    element.style.display = "none";
                });
                document.querySelectorAll(".booking_info_black, .booking_pay_white, .booking_flag_white").forEach(element => {
                    element.style.display = "block";
                });
                break;
            case 3:
                document.querySelector(".booking_3").style.display = "grid";
                document.querySelectorAll(".dot1, .dot2, .dot3").forEach(dot => {
                    dot.style.backgroundColor = "var(--clr_dark)";
                });
                // Opdater visningen af elementerne
                document.querySelectorAll(".booking_info_white, .booking_pay_white, .booking_flag_black").forEach(element => {
                    element.style.display = "none";
                });
                document.querySelectorAll(".booking_info_black, .booking_pay_black, .booking_flag_white").forEach(element => {
                    element.style.display = "block";
                });

                // Marker den første .booking_check, hvis den ikke allerede er markeret
                const firstBookingCheck = document.querySelector(".booking_check");
                if (!firstBookingCheck.classList.contains("checked")) {
                    firstBookingCheck.click(); // Simulerer et klik for at markere den første checkbox
                }
                break;
            case 4:
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
                break;
        }
    }

    // Lyt efter klik på "NÆSTE" knapperne
    const nextButtons = document.querySelectorAll(".booking_next");
    nextButtons.forEach((button, index) => {
        button.addEventListener("click", function() {
            if (index === 1) { // Kun for booking_2 næste knap
                // Tjek om alle påkrævede inputfelter er udfyldt
                const requiredInputs = document.querySelectorAll(".booking_2 input[required]");
                let allInputsFilled = true;

                requiredInputs.forEach(input => {
                    if (!input.value.trim()) { // Tjek om inputværdien er tom eller kun whitespace
                        allInputsFilled = false;
                    }
                });

                // Hvis et påkrævet inputfelt er tomt, forhindrer det at gå videre og viser en advarsel
                if (!allInputsFilled) {
                    alert("Udfyld venligst alle påkrævede felter, før du fortsætter.");
                    return; // Stop yderligere udførelse
                }
            } else if (index === 2) { // Kun for booking_3 næste knap
                // Tjek om betingelserne er accepteret
                const termsCheckbox = document.querySelector(".booking_terms_check");
                
                // Hvis betingelserne ikke er accepteret, forhindres det at gå videre og viser en advarsel
                if (!termsCheckbox.checked) {
                    alert("Acceptér venligst betingelserne, før du fortsætter.");
                    return; // Stop yderligere udførelse
                }
            }
            updateBookingPage(index + 2); // Fordi index starter fra 0, så +2 for at matche sidenummeret
        });
    });
});
