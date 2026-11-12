let message = document.getElementById("message");
let compteur = document.getElementById("compteur");
let envoyer = document.getElementById("envoyer");
message.addEventListener("input",()=>{
    compteur.textContent = message.value.length + "/ 50";
    if (message.value.trim().length > 50 ){
        compteur.classList.add("text-red-600")
    }else{
        compteur.classList.remove("text-red-600")
        compteur.classList.add("text-red")
    }
    if(message.value === "" || message.value.trim().length > 50){
        envoyer.disabled = true;
    }else{
        envoyer.disabled = false;
    }
})