let titulo = document.getElementById("titulo");
let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");
let boton4 = document.getElementById("boton4");
let boton5 = document.getElementById("boton5");
let boton6 = document.getElementById("boton6");
let boton7 = document.getElementById("boton7");
let boton8 = document.getElementById("boton8");
let boton9 = document.getElementById("boton9");
let imagen1 = document.getElementById("imagen1");


function mostrar(){}

boton1.onclick = function(){
    boton1.style.display = "none";
    boton2.style.display = "block";
    titulo.innerHTML = "GREAT! NOW GO TO THE FURNACE";
    imagen1.src = "./xdd/PAPA1.png";
    
}
boton2.onclick = function(){
    boton2.style.display = "none";
    boton3.style.display = "block";
    titulo.innerHTML = "TURN ON THE FURNACE";
    imagen1.src = "./xdd/HORNO1.png";
  
}
boton3.onclick = function(){
    boton3.style.display = "none";
    boton4.style.display = "block";
    titulo.innerHTML = "PUT THE POTATO ON THE FURNACE";
    imagen1.src = "./xdd/HORNO2.png";
    
}
boton4.onclick = function(){
    boton4.style.display = "none";
    boton5.style.display = "block";
    titulo.innerHTML = "BAKE THE POTATO";
    imagen1.src = "./xdd/PAPA1.png";
   
}
boton5.onclick = function(){
    boton5.style.display = "none";
    boton6.style.display = "block";
    titulo.innerHTML = "BAKE AGAIN THE POTATO";
    imagen1.src = "./xdd/PAPA1.png";
    
}
boton6.onclick = function(){
    boton6.style.display = "none";
    boton7.style.display = "block";
    titulo.innerHTML = "NICE JOB, THE POTATO IS BAKED";
    imagen1.src = "./xdd/PAPA2.png";

}
boton7.onclick = function(){
    boton7.style.display = "none";
    boton8.style.display = "block";
    titulo.innerHTML = "SEAMS TO BE A LITLE BIT TOASTED";
    imagen1.src = "./xdd/PAPA3.png";
    
}
boton8.onclick = function(){
    boton8.style.display = "none";
    boton9.style.display = "block";
    titulo.innerHTML = "OH NO, YOU BURN THE POTATO!!";
    imagen1.src = "./xdd/FUEGO.png";
    
}
boton9.onclick = function(){
    boton9.style.display = "none";
    titulo.innerHTML = "ENJOY";
    imagen1.src = "./xdd/CARBON.png";
    
}


