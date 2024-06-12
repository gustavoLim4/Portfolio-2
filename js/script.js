window.onscroll = function () {
  let top = window.scrollY;
  if (top > 100) {
    document.getElementById("menufixo").classList.add("menufixo");
  } else {
    document.getElementById("menufixo").classList.remove("menufixo");
  }
};


document.addEventListener("DOMContentLoaded", function() {
  const burger = document.querySelector(".menu-burger");
  const navLinks = document.querySelector(".nav-links");

  burger.addEventListener("click", (event) => {
    navLinks.classList.toggle("active");
    burger.classList.toggle("toggle");
  });

 
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      burger.classList.remove("toggle");
    });
  });


  document.addEventListener("click", (event) => {
    const isClickInsideNav = navLinks.contains(event.target);
    const isClickInsideBurger = burger.contains(event.target);
    if (!isClickInsideNav && !isClickInsideBurger) {
      navLinks.classList.remove("active");
      burger.classList.remove("toggle");
    }
  });
});





