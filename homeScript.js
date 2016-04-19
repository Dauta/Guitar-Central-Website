/**
 * Created by idaut on 04/17/16.
 */
var mainInterval;
function fade(direction)
{
    var step = direction * 5;
    var i;

    if(direction === 1)
        i = 0;
    else if(direction === -1)
        i = 100;

    var img = document.getElementById("mainImg");

    var fadeImg = setInterval(function()
    {
        i = i+step;
        var opacity = i/100;

        if(opacity < 0 || opacity > 1)
        {
            clearInterval(fadeImg);
            return;
        }
        img.style.opacity = opacity;
    }, 20);
}

function pick()
{
    var image1 = new Image();
    var image2 = new Image();
    var image3 = new Image();
    var image4 = new Image();
    var image5 = new Image();
    var image6 = new Image();

    image1.src = "images/asd- (1).jpg";
    image2.src = "images/asd- (2).jpg";
    image3.src = "images/asd- (3).jpg";
    image4.src = "images/asd- (4).jpg";
    image5.src = "images/asd- (5).jpg";
    image6.src = "images/asd- (6).jpg";


    var allImages = [image1,image2,image3,image4,image5, image6];
    var randImg = Math.floor(Math.random() * 5);

    var nextImage = new Image();
    nextImage.src = allImages[randImg].src;

    return nextImage;
}

function swap(nextImage, speed)
{
    if(speed === undefined || speed === null || isNaN(speed))
        speed = 5000;
    else if(speed < 1000)
        speed = 1000;

    var currentImage = document.getElementById("mainImg");
    while(currentImage.src === nextImage.src)
    {
        nextImage = pick();
    }

    mainInterval = setInterval(function() {
        fade(-1);
        setTimeout(function () {
            currentImage.src = nextImage.src;
            fade(1);

            while(nextImage.src === currentImage.src)
                nextImage = pick();
        }, 400);
    }, speed);
}

$(document).ready(function(){

    swap(pick(),3500);           //run the slideshow
});