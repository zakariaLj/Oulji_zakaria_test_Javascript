// 2. le Booolean


// 3.L'array

let monArray = [1, 3, 4, 5, 5];
console.log(monArray);

//4. mon Objet

let monObjet = { nom: "guitare", taille: "100 cm" }
console.log(monObjet.nom);
console.log(monObjet.taille);



//5. le string

let tonString = "une culotte"
console.log(tonString);

//6 l'integer

let MonInt = parseInt(1);
console.log(MonInt);
let MonInt2 = parseFloat(prompt('entrez svp un chiffre'));
console.log(MonInt2);

//7. l'objet et sa méthode

class Exo7 {
    constructor(nom, prenom, classe) {
        this.nom = nom;
        this.prenom = prenom;
        this.classe = classe;
    }

    methode(parametre) {

    }
}

//8 la function

let functi = (a, b) => {
    let somme = a + b
    console.log(a + " + " + b + " = " + somme)
}

functi(MonInt, MonInt2);

//9 la condition

if (MonInt2 >= 8) {
    console.log("ton nombre est  plus grand que 8");


} else {
    console.log("ton nombre est plus petit que 8");

}


//10 la boucle
let compteur = 0;
for (let i = 0; i < 10; i++) {
    compteur++;

    console.log(compteur)

}

//11. l'objet date

function date() {
    var mois = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12");
    var date = new Date();
    var message = date.getDay()+ " ";   // numero du jour
    message = date.getDate() + "/";   // numero du jour
    message += mois[date.getMonth()]+ "/";   // mois
    message += date.getFullYear();
    return message;
}

console.log( date());

// 12. string to String

function majuscule(nom) {
    console.log(nom.toUpperCase());
    
}

let testNom =prompt('entrer un nom en minuscule pour que le changer en majuscule')
majuscule(testNom);

//13. string to String

//14. la longueur
//15. le chiffre aléatoire

let chiffreAleatoire = Math.floor(Math.random()*101)
console.log(chiffreAleatoire)


//16. le chiffre aléatoire p2

let monChiffre =  parseFloat(prompt("entrer chiffre 1 "));
let monChiffre2 = parseFloat(prompt("entrer chiffre 2 "));
let monArrayChiffre = [monChiffre,monChiffre2];

let choix = Math.floor(Math.random()*3)

if (choix == 1 ) {
    console.log("ton chiffre choisis par l'ordi est "+ monChiffre)
}else{
    console.log("ton chiffre choisis par l'ordi est "+ monChiffre2)
}

//17. le type

//18. les objet 1.1

class Objets {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    modeling(){


        console.log("bonjour "+ this.name+" tu as "+this.age)
    }
}

let moi = new Objets(prompt('entre ton nom'),parseInt('entre ton age')) ;