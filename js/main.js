const containerBox = document.getElementById("container");

for (let boxNumber = 1; boxNumber <= 100; boxNumber++){
    containerBox.innerHTML += '<div class="box">' + boxNumber + '</div>'
}