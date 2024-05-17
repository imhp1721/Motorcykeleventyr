/* BOOKINGS FØRSTE SIDE + - KNAP */
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