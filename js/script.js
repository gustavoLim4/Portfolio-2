window.onscroll = function () {
  let top = window.scrollY;
  if (top > 100) {
    document.getElementById("menufixo").classList.add("menufixo");
  } else {
    document.getElementById("menufixo").classList.remove("menufixo");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".menu-burger");
  const navLinks = document.querySelector(".nav-links");

  burger.addEventListener("click", (event) => {
    navLinks.classList.toggle("active");
    burger.classList.toggle("toggle");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      burger.classList.remove("toggle");
    });
  });

  document.addEventListener("click", (event) => {
    const clickNavBar = navLinks.contains(event.target);
    const clickBurguer = burger.contains(event.target);
    if (!clickNavBar && !clickBurguer) {
      navLinks.classList.remove("active");
      burger.classList.remove("toggle");
    }
  });
});

const maximoDG = (event) => {
  let input = event.target;
  input.value = mascaratelefone(input.value);
};

const mascaratelefone = (value) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
};

const CaixaDeNome = document.querySelector("#nome");

CaixaDeNome.addEventListener("keypress", function (e) {
  const keyCode = e.keyCode ? e.keyCode : e.wich;

  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});

document
  .querySelector(".linguagens")
  .addEventListener("mouseleave", function () {
    this.querySelectorAll("li").forEach(function (li) {
      li.style.opacity = "0";
      li.style.animation = "none";
      setTimeout(() => {
        li.style.animation = "";
      }, 10);
    });
  });
  new WOW().init();
