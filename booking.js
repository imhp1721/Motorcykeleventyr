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
