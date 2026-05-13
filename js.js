const userName= ["Raza","Taqy"];
const h1 = document.querySelector("h1")
const random = Math.trunc(Math.random()*100)
console.log(random);
if(random<50){
h1.textContent=userName[0]
}else{
h1.textContent=userName[1]
}
