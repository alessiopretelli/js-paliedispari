/*
//pari o dispari, correzione nome funzione da 'somma' a 'paridispari'
var pardis = prompt("Pari o dispari?").toLowerCase();

if ((pardis == "pari") || (pardis == "dispari")) {

    function nums(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function paridispari(s, padi) {
   
        if (padi == "pari") {
    
            if(s % 2 == 0) {
                return true;
            } else {
                return false;
            }   
    
        } else {
    
            if(s % 2 != 0) {
                return true;
            } else {
                return false;
            }
        
        }
    
    }
    
    console.log(pardis);
    var num = prompt("Inserisci un numero da 1 a 5") * 1;

    if ((num >= 1) && (num <= 5)) {
        console.log(num);
        var numm = nums(1, 5);
        console.log(numm);
        var plus = num + numm;
        console.log(plus);

        if (paridispari(plus, pardis)) {
            alert("Hai vinto!");
        } else {
            alert("Hai perso.")
        }
        
    } else {
        alert("Il valore numerico inserito non e' corretto.");
    }
    
} else {
    alert("Non hai digitato correttamente 'pari' o 'dispari'!");
}
*/

//palindromi, rimozione .parola_length da inserimento valori per funzione verifica().
function verifica(p) {

    for(i = p.length - 1; i >= 0; i--) {

        if (p[p.length - (i + 1)] != p[i]) {
            return false;
        }

    }

    return true;
}

var parola = prompt("Inserisci una parola.").toLowerCase();

if (verifica(parola)) {
    alert(parola + " e' palindroma.");
} else {
    alert(parola + " non e' palindroma.");
}