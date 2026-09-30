let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');

function showSequenceOne(){
    image1.src = "images/smell.jpg";
    image2.src = "images/meet.jpg";
    image3.src = "images/sleep.jpg";
}

function showSequenceTwo(){
    image3.src = "images/sleep.jpg";
    image1.src = "images/smell.jpg";
    image2.src = "images/meet.jpg";
}

let btn1 = document.getElementById('sequence-one');
btn1.addEventListener('click', showSequenceOne);

let btn2 = document.getElementById('sequence-two');
btn2.addEventListener('click', showSequenceTwo);
