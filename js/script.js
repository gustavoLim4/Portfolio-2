
//    Efeito dos numeros da porcentagem chegarem onde estevem chegar  

document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll('.progress');
  const percentagens = document.querySelectorAll('.percentage');

  progressBars.forEach((bar, index) => {
    const targetWidth = bar.getAttribute('data-target');
    const targetPercentage = percentagens[index].getAttribute('data-target');
    var width = 0;
    const interval = setInterval(() => {
      if (width >= targetWidth) {
        clearInterval(interval);
      } else {
        width++;
        bar.style.width = width + '%';
        percentagens[index].textContent = width + '%';
      }
    }, 30);
  });
});


//                    Menu Fixo 

window.onscroll = function () {
  let top = window.scrollY;
  if (top > 100) {
    document.getElementById("menufixo").classList.add("menufixo");
  } else {
    document.getElementById("menufixo").classList.remove("menufixo");
  }
};

//                    Menu Fixo 

//      Efeito dos numeros da porcentagem chegarem onde estevem chegar  




//                         Menu-Burgue

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

//                            Menu-Burgue




//              Mascara de telefone (11) 99999-9999

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

//              Mascara de telefone (11) 99999-9999




//           Função de não poder colocar numeros no nome 

const CaixaDeNome = document.querySelector("#nome");

CaixaDeNome.addEventListener("keypress", function (e) {
  const keyCode = e.keyCode ? e.keyCode : e.wich;

  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});

//           Função de não poder colocar numeros no nome 



//             Manda a mensagem do form para o email 

document.getElementById('emailForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const mail = document.getElementById('email').value;
  const message = document.getElementById('mensagem').value;
  const name = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;


  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "gustavo111222lll@gmail.com",
    Password: "BB8F6893B36B93EBA872EC31DA2B741A19F8",
    To: 'gustavo111222lll@gmail.com',
    From: "gustavo111222lll@gmail.com",
    Subject: "Email para Gustavo Lima (Portfólio)",
    Body: `Nome: ${name} <br> Email: ${mail} <br> Telefone: ${telefone} <br> Mensagem: ${message}`,
  }).then(
    message => {
      alert("Mensagem enviada com sucesso");
      document.getElementById('emailForm').reset()
    }
  ).catch(
    error => {
      alert("A mensagem não foi enviada" + error);
    }
  );
});

//          Manda a mensagem do form para o email 

// Efeito do scroll

new WOW().init();




