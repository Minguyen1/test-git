let content = document.getElementById('name').innerHTML;
let name = document.getElementById('phone').getAttribute('name');
let number = document.getElementById('phone').getAttribute('number');

document.getElementById('phone').setAttribute('number', 1000);
let newNumber = document.getElementById('phone').getAttribute('number');
console.log(newNumber);

document.getElementById('email').innerHTML = 'Địa chỉ email mới';

console.log(document.getElementById('email'))