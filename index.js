//***********************************************
const theme = document.querySelectorAll(".theme"); //on prend tout ce qu'il ya dans la classe theme

theme.forEach((item) => {
  //Pour chaqu'un de tes éléments thème tu as trois éléments on te créer un foreach et on met un événéement pour chaqu'un de tes 3 éléments
  item.addEventListener("click", (e) => {
    //on clique et il renvoie:
    document.body.classList.remove("darkTheme");
    document.body.classList.remove("yellowTheme");
    document.body.classList.remove("salmonTheme");
    document.body.classList.remove("whiteTheme");

    switch (e.target.id) {
      case "dark":
        document.body.classList.add("darkTheme");
        break;
      case "salmon":
        document.body.classList.add("salmonTheme");
        break;
      case "yellow":
        document.body.classList.add("yellowTheme");
        break;
      case "white":
        document.body.classList.add("whiteTheme");
        break;
      default:
        null;
    }
  });
});

('localStorage.getItem("themeColor");');
('localStorage.setItem("themeColor", "dark") ;');

const OuvrirFermer = document.querySelector("#OuvrirFermer"); //ID=ouvrir
const img = document.getElementById("img"); //ID=img


//Send Email Form JS
function sendMail(){
  var params = {
    name: document.getElementById("name").value,    name: document.getElementById("name").value,
    prenom: document.getElementById("prenom").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

const serviceID ="service_5v104qn";
const templateID="template_w7162pr";

emailjs
.send(serviceID, templateID, params) 
.then((res)=>{
    document.getElementById("name").value ="";
    document.getElementById("prenom").value ="";
    document.getElementById("email").value ="";
    document.getElementById("phone").value ="";
    document.getElementById("message").value ="";
    console.log(res);
    alert("your message sent successfully");
})
.catch((err) => console.log(err));

}