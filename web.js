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

var lev = document.getElementById("img2");
lev.addEventListener("mouseover", mouseOver2);
lev.addEventListener("mouseout", mouseOut2);

function mouseOver2() {
 var lev = document.getElementById("plus2");
lev.style.opacity = "1";
}

function mouseOut2() {
 var lev = document.getElementById("plus2");
 lev.style.opacity = "0";
}