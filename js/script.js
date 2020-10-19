
//Creare un array contenente dei cognomi in ordine casuale.
var cognomi_casuali =['Zozo', 'Belli'];
console.log(cognomi_casuali);

//Chiedere all'utente il suo cognome
var cognome_utente = 'Asia'
console.log(cognome_utente);

//e inserirlo nella lista dei cognomi.
cognomi_casuali.push(cognome_utente);
console.log(cognomi_casuali);

//Stampare la lista dei cognomi in ordine alfabeticoato.
cognomi_casuali.sort();
console.log(cognomi_casuali)

var posizione_cognome = cognomi_casuali.indexOf(cognome_utente);
console.log(posizione_cognome)

// e comunicare all'utente la posizione in cui si trova il suo cognome (dopo averlo riordinato).
document.getElementById('password').innerHTML= 'il tuo cognome si trova alla posizione ' + posizione_cognome;




