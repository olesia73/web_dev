let list = ["Kyiv cake", "clouds", "Peter Pan", "princess", "cubes", "Game of Thrones", "flowers", "chess"];
let imageOrNot = [0, 0, 0, 0, 0, 0, 0, 0];

function openImage(index) {
   // console.log(index);
   if (imageOrNot[index]) {
      document.getElementById(String(index)).innerHTML = list[index];
      imageOrNot[index] = !imageOrNot[index];
   }
   else {
      document.getElementById(String(index)).innerHTML = `<img src="${list[index]}.jpeg" alt="Description of the image" />`;
      imageOrNot[index] = !imageOrNot[index];
   }
}

for (var i = 0; i < list.length; i++) {
   document.getElementById(String(i)).innerHTML = list[i];
   console.log(i);
   const kar = i;
   document.getElementById(String(i)).addEventListener("click", function() { openImage(kar) });
}