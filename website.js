var gray = document.getElementById("img1");
gray.addEventListener("mouseover", mouseOver);
gray.addEventListener("mouseout", mouseOut);

function mouseOver() {
 var name = document.getElementById("plus");
 name.style.opacity = "1";
}

function mouseOut() {
 var name = document.getElementById("plus");
 name.style.opacity = "0";
}

var yellow = document.getElementById("img2");
yellow.addEventListener("mouseover", mouseOver2);
yellow.addEventListener("mouseout", mouseOut2);

function mouseOver2() {
 var yellow = document.getElementById("plus2");
 yellow.style.opacity = "1";
}

function mouseOut2() {
 var yellow = document.getElementById("plus2");
 yellow.style.opacity = "0";
}

var green = document.getElementById("img3");
green.addEventListener("mouseover", mouseOver3);
green.addEventListener("mouseout", mouseOut3);

function mouseOver3() {
 var green = document.getElementById("plus3");
 green.style.opacity = "1";
}

function mouseOut3() {
 var green = document.getElementById("plus3");
 green.style.opacity = "0";
}

var blue = document.getElementById("img4");
blue.addEventListener("mouseover", mouseOver4);
blue.addEventListener("mouseout", mouseOut4);

function mouseOver4() {
 var blue = document.getElementById("plus4");
 blue.style.opacity = "1";
}

function mouseOut4() {
 var blue = document.getElementById("plus4");
 blue.style.opacity = "0";
}

var pink = document.getElementById("img5");
pink.addEventListener("mouseover", mouseOver5);
pink.addEventListener("mouseout", mouseOut5);

function mouseOver5() {
 var pink = document.getElementById("plus5");
 pink.style.opacity = "1";
}

function mouseOut5() {
 var pink = document.getElementById("plus5");
 pink.style.opacity = "0";
 }

var red = document.getElementById("img6");
red.addEventListener("mouseover", mouseOver6);
red.addEventListener("mouseout", mouseOut6);

function mouseOver6() {
 var red = document.getElementById("plus6");
 red.style.opacity = "1";
}

function mouseOut6() {
 var red = document.getElementById("plus6");
 red.style.opacity = "0";
 }

var home = document.getElementById("sticker");
home.addEventListener("mouseover", sticker);
home.addEventListener("mouseout", stickerOut);

function sticker() {
 var home = document.getElementById("home");
 home.style.opacity = "1";
}

function stickerOut() {
 var home = document.getElementById("home");
 home.style.opacity = "0";
 }

 