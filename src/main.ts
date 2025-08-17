import "./style.css";

const search = document.querySelector(".search") as HTMLDivElement;
const btn = document.querySelector(".btn") as HTMLButtonElement;
const input = document.querySelector(".input") as HTMLDivElement;

btn?.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
