
setInterval(promjeniCitat, 10000);
const citati= ["Tko rano rani 2 bureka grabi", "Tko nema u glavi ima u prekari", "2 bureka su bolja od jednoga", "Ne možeš svakoga usrećiti- Nisi burek"];
let index =0;
function promjeniCitat(){
    document.getElementById("citat").innerHTML=citati[index];
    index=index+1;
    console.log(index);
    let duljina= citati.length;
    console.log(duljina)
    if(index>((citati.length)-1)){index=0;}
   
}