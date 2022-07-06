const containerBox = document.getElementById("container");

const boxValue = parseInt(prompt("Inseisci un numero!"));

for (let boxNumber = 1; boxNumber <= boxValue; boxNumber++){

    let messaggio = boxNumber;
    let stile = "";

    const modulo5 = (boxNumber % 5);
    const modulo3 = (boxNumber % 3);

    if ((modulo3 == 0) && (modulo5 == 0)){
        // console.log(boxNumber + " DIVISIBILE per 3 e 5");
        messaggio = "fizzbuzz";
        stile = "color-gold"
    }

    else if (modulo5 == 0){
        // console.log(boxNumber + " divisibile per 5")
        messaggio = "buzz";
        stile = "color-red";
    }

    else if (modulo3 == 0){
        // console.log(boxNumber + " divisibile per 3")
        messaggio = "fizz";
        stile = "color-green"
    }

    containerBox.innerHTML += '<div class="boxes ' + stile + '">' + messaggio + '</div>';
}