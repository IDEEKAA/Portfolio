let index = 0,
    interval = 1000;

const rand = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
    star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
    star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

    star.style.animation = "none";
    star.offsetHeight;
    star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
    setTimeout(() => {
        animate(star);

        setInterval(() => animate(star), 1000);
    }, index++ * (interval / 3))
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var tablinksbis = document.getElementsByClassName("tab-links-bis");
var tabcontentsbis = document.getElementsByClassName("tab-contents-bis");

function opentab2(tabnamebis){
    for(tablinkbis of tablinksbis){
        tablinkbis.classList.remove("active-link-bis")
    }
    for(tabcontentbis of tabcontentsbis){
        tabcontentbis.classList.remove("active-tab-bis")
    }
    event.currentTarget.classList.add("active-link-bis");
    document.getElementById(tabnamebis).classList.add("active-tab-bis");
}

var sidemenu = document.getElementById("sidemenu")

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}
