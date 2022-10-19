function dodaj_clana(){
    alert("Jesi ti je**** normalan, vidi koliko nas ima!");
}

function provjeri(){
    const korisnik1={ime:"Marija", lozinka:"marija"};
    const korisnik2={ime:"Andrej", lozinka:"andrej"};
    const korisnici=[];
    korisnici.push(korisnik1, korisnik2);
    let trenutno_ime= document.getElementById('korisnicko_ime');
    let trenutna_lozinka= document.getElementById('lozinka');
    const ime=trenutno_ime.value;
    const lozinka=trenutna_lozinka.value;
    korisnici.forEach(function(korisnik){
        if(korisnik.ime===ime){
            if(korisnik.lozinka===lozinka)
            {
                window.location.href='index.html';
                }
        }
       
        
    });
   

}