let tagObject = document.getElementsByTagName('p');
let listObject = document.getElementsByClassName('tag');
let id_four = document.getElementById('four');

console.log(tagObject[0].style.color = "red");
console.log(tagObject[3].style.backgroundColor = "red");

for(i = 0;i < tagObject.length;i++){
    tagObject[i].style.fontSize = "30px";
}

for(i = 0;i < listObject.length;i++){
    listObject[i].style.backgroundColor = "green";
}

console.log(id_four.style.color = "green");