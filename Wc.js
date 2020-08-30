const input=document.querySelector("input");
const kg=document.querySelector(".red");
const oUnce=document.querySelector(".green");
const gRams=document.querySelector(".blue");
const btn=document.querySelector("button");
console.log(btn);


btn.addEventListener("click",convert)


function convert() {
kg.textContent=input.value/2.2046 +" KG";
oUnce.textContent=input.value*16 +" Ounce";
gRams.textContent=input.value*454+" Grams ";

}
