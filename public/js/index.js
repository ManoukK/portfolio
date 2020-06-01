console.log("hey")

const infoSection1 = document.querySelector(".about-info-1");
const infoSection2 = document.querySelector(".about-info-2");
const infoSection3 = document.querySelector(".about-info-3");

const button1 = document.getElementById("button-info-1");
const button2 = document.getElementById("button-info-2");
const button3 = document.getElementById("button-info-3");

button1.addEventListener("click", function(){
    infoSection1.classList.add("setIndex");

    infoSection2.classList.remove("setIndex");
    infoSection3.classList.remove("setIndex");
});

button2.addEventListener("click", function(){
    infoSection2.classList.add("setIndex");

    infoSection1.classList.remove("setIndex");
    infoSection3.classList.remove("setIndex");
});

button3.addEventListener("click", function(){
    infoSection3.classList.add("setIndex");

    infoSection1.classList.remove("setIndex");
    infoSection2.classList.remove("setIndex");
});
