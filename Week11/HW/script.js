let list = ["Kyiv cake", "clouds", "Peter Pan", "princess", "cubes", "Game of Thrones", "flowers", "chess"];
// const button = document.getElementById(list[0]);

// function randomOne() {
//     alert("fdhjsk");
// }
// button.addEventListener("click", function() { randomOne() });

function printBtn() {
    // for (var i = 0; i < listBrand.length; i++) {
    //     var btn = document.createElement("button");
    //     var t = document.createTextNode(listBrand[i]);
    //     btn.appendChild(t);
    //     document.body.appendChild(btn);
    //  }
     for (var i = 0; i < list.length; i++) {
        const button = document.createElement("button");
        button.value = list[i];
        document.body.appendChild(button);
     }
}