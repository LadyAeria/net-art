const changeText1 = document.querySelector("#change-text1");

changeText1.addEventListener("click", function() {
    changeText1.textContent = "GO AWAY";
  })

//Click event on header changes background color
document.querySelector("h1#change-text1").onclick = function() {

    //console.log("Clicked header!");
    //var yuumi = document.getElementById("h1#change-text1")
    document.querySelector("header#header1").style.backgroundColor = '#ff0000';
    document.querySelector("h1#change-text1").style.backgroundColor = '#ff0000';
}

const changeText2 = document.querySelector("#change-text2");

changeText2.addEventListener("click", function() {
    changeText2.textContent = "Who even cares";
    document.querySelector("header#header2").style.backgroundColor = '#cd0000';
    document.querySelector("h1#change-text2").style.backgroundColor = '#cd0000';
  
  })
  
const changeText3 = document.querySelector("#change-text3");

changeText3.addEventListener("click", function() {
    document.querySelector("header#header3").style.backgroundColor = '#ad0000';
    changeText3.textContent = "I'M FUCKING PISSED!!";
  })

//Click event on header changes background color
document.querySelector("h1#change-text3").onclick = function() {
    //console.log("Clicked header!");
    document.querySelector("h1#change-text3").style.backgroundColor = '#ad0000';
}

const changeText4 = document.querySelector("#change-text4");

changeText4.addEventListener("click", function() {
    document.querySelector("header#header4").style.backgroundColor = '#7e0000';
    changeText4.textContent = "But they would never approved...";
  })

  document.querySelector("h1#change-text4").onclick = function() {
    //console.log("Clicked header!");
    document.querySelector("h1#change-text4").style.backgroundColor = '#7e0000';
}

const changeText5 = document.querySelector("#change-text5");

changeText5.addEventListener("click", function() {
    document.querySelector("header#header5").style.backgroundColor = '#570000';
    changeText5.textContent = "It really hurts";
  })

  document.querySelector("h1#change-text5").onclick = function() {
    //console.log("Clicked header!");
    document.querySelector("h1#change-text5").style.backgroundColor = '#570000';
    document.querySelector("#header5").style.color = "white";

}

const changeText6 = document.querySelector("#change-text6");

changeText6.addEventListener("click", function() {
    document.querySelector("header#header6").style.backgroundColor = '#3a0000';
    changeText6.textContent = "But how many more can I even take?";
  })

  document.querySelector("h1#change-text6").onclick = function() {
    //console.log("Clicked header!");
    document.querySelector("h1#change-text6").style.backgroundColor = '#3a0000';
    document.querySelector("#header6").style.color = "white";
}

const changeText7 = document.querySelector("#change-text7");

changeText7.addEventListener("click", function() {
    document.querySelector("header#header7").style.backgroundColor = '#200000';
    changeText7.textContent = "It's the worst fucking day of my life";
  })

  document.querySelector("h1#change-text7").onclick = function() {
    //console.log("Clicked header!");
    document.querySelector("h1#change-text7").style.backgroundColor = '#200000';
    document.querySelector("#header7").style.color = "white";

}

const changeText8 = document.querySelector("#change-text8");

changeText8.addEventListener("click", function() {
    document.querySelector("header#header8").style.backgroundColor = '#000000';
    changeText8.textContent = "I feel like giving up";
  })

  document.querySelector("h1#change-text8").onclick = function() {
    //console.log("Clicked header!");
    document.querySelector("h1#change-text8").style.backgroundColor = '#000000';
    document.querySelector("#header8").style.color = "white";
}

document.querySelector("#img-0").addEventListener("click", function(){
    document.querySelector("#img-0").style.visibility = "visible";
})

document.querySelector("#img-1").addEventListener("click", function(){
    document.querySelector("#img-1").style.visibility = "hidden";
})
