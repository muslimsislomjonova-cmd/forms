const from = document.querySelector("myform");

from.addEventListener("submit");

const name = document.querySelector('input[placeholder="ismingiz"]').value;

const surname = document.querySelector('input[placeholder="familyangiz"]').value;

const password = document.querySelector('input[placeholder="parol"]').value;

const email = document.querySelector('input[placeholder="email"]').value;

if (! name || ! surname || !password || !email || !gender) {
    alert("bosh joy kormasn!");
} else {
    alert("tabriklayman royxatan otingiz.");
}