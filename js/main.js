/*
var pardis = prompt("pari o dispari? Prego, digitare solo 'pari o 'dispari' in minuscolo.");
console.log(pardis);

if ((pardis == "pari") || (pardis == "dispari")) {

    function nums(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function somma(a, b, padi) {
        var s = a + b;

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
    
    var num = nums(1, 5);
    console.log(num);
    alert("Il numero uscito per l'utente e' " + num + ".");
    var numm = nums(1, 5);
    console.log(numm);
    
    if (somma(num, numm, pardis)) {
        alert("Hai vinto!");
    } else {
        alert("Hai perso. Il computer ha vinto.")
    }
    
} else {
    alert("Non hai digitato correttamente 'pari' o 'dispari'!");
}
*/

function verifica(p, a) {
    var array = [];

    for(i = a - 1; i >= 0; i--) {
        array[a - (i + 1)] = p[i];
    }

    for (i = 0; i < a; i++) {

        if (p[i] != array[i]) {
            return false;
        }

    }

    return true;
}

var parola = prompt("Inserisci una parola.").toLowerCase();

if (verifica(parola, parola.length)) {
    alert(parola + " e' palindroma.");
} else {
    alert(parola + " non e' palindroma.");
}