let article = document.querySelectorAll('.article');
let addition = document.querySelectorAll(".btnPlus");
let soustrait = document.querySelectorAll(".btn-moins");
let valeur = document.querySelectorAll(".quantite");
let sup = document.querySelectorAll(".btnsup");
let price = document.querySelectorAll(".prix");
let sum = document.querySelectorAll(".total");
let totalPrice = document.querySelectorAll(".totalPrix");


for(let i = 0; i < addition.length; i++){
   //--------------- INCREMENTATION ---------------
   addition[i].addEventListener('click' , function(){
           valeur[i].value ++ ;
           //------------ SOMME DES PRIX-------------------
           sum[i].value = parseInt(price[i].innerText) * valeur[i].value;
           totalPrice[i]   
       })
   //SUPPRIMER UN ELEMENT 
sup[i].addEventListener('click' , function(){
   article[i].remove();
})
//-------------DECREMENTATION--------------
soustrait[i].addEventListener('click' , function(){
       if(valeur[i].value > 0)
       {
           valeur[i].value --;
           //SOUSTRACTION DES PRIX
           sum[i].value = parseInt(price[i].innerText) * valeur[i].value;
       }
   })

   
 }










