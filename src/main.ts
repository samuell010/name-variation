import { getNumberOfChars, getFirstChar, getLastChar, getLower, getUpper } from "./variations";

const answer1 = document.querySelector("#answer1") as HTMLTableCellElement;
const answer2 = document.querySelector("#answer2") as HTMLTableCellElement;
const answer3 = document.querySelector("#answer3") as HTMLTableCellElement;
const answer4 = document.querySelector("#answer4") as HTMLTableCellElement;
const answer5 = document.querySelector("#answer5") as HTMLTableCellElement;

const nameInput = document.querySelector("#your-name") as HTMLInputElement;

nameInput.addEventListener("keyup", () => {
    const value = nameInput.value;
    answer1.textContent = getNumberOfChars(value).toString();
    answer2.textContent = getFirstChar(value);
    answer3.textContent = getLastChar(value);
    answer4.textContent = getLower(value);
    answer5.textContent = getUpper(value);
});
