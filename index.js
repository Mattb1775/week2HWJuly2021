let position = 0;

function previousImage() {
    //selecting the slider2 element using the getElementById and storing it in a var called slider 
    var slider3 = document.getElementById('slider2');
    //increment positon by 400
    if (position < 0) {
        //execute if true 
        position += 600;
    }
    //translate slider2 by the width (400px) of the image 
    slider3.style.transform = `translateX(${position}px)`;
}  

function nextImage() {
    //selecting the slider element using the getElementById and storing it in a var called slider 
    var slider3 = document.getElementById('slider2');
    //decrement positon by 400
    if (position > -1200) {
        //execute if true 
        position -= 600;
    }
    //translate slider by the width (-400px) of the image 
    slider3.style.transform = `translateX(${position}px)`;
}