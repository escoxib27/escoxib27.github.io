/*
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hellow World!";

document.querySelector("img").addEventListener("click",function(){
    alert("痛いメウ");
});
*/

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/cat.jpg"){
        myImage.setAttribute("src","images/blackCat.jpg");
    }else{
        myImage.setAttribute("src","images/cat.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    const myName = prompt("あなたの名前を入力してください。");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name",myName);
        myHeading.textContent = `ねこはかわいいよ${myName}さん`;    
    }
}

if(localStorage.getItem("name") === "null"){
    setUserName();
}else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `ねこはかわいいよ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}