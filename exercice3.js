let input = prompt("Entrez un nombre :");
let nombre = parseFloat(input);
 if (isNaN(nombre)) {
    alert("Ce n'est pas un nombre valide.");
} else {
    if (nombre < 0) {
        alert("Le nombre est négatif.");
    } else if (nombre<=10) {
        alert("Le nombre est petit.");
    } else if (nombre<=50) { 
        alert("Le nombre est Moyen.");
    }else if (nombre>50){
        alert("Le nombre est grand.");
    }else {
        alert("Le nombre est très grand.");
    }}