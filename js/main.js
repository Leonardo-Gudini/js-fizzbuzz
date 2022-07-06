const containerBox = document.getElementById("container");


for (let boxNumber = 1; boxNumber <= 100; boxNumber++){
    containerBox.innerHTML += '<div id="box">' + boxNumber + '</div>';

    const box = document.getElementById("box")

    const modulo5 = (boxNumber % 5);
    const modulo3 = (boxNumber % 3);

    if ((modulo3 == 0) && (modulo5 == 0)){
        console.log(boxNumber + " DIVISIBILE per 3 e 5");
    }

    else if (modulo5 == 0){
        console.log(boxNumber + " divisibile per 5")
    }

    else if (modulo3 == 0){
        console.log(boxNumber + " divisibile per 3")
    }

    else{
        console.log(boxNumber + " NON divisibile per 3 e 5")
    }

}