var character = document.getElementById("character");
var block = document.getElementById("block");
var score = 0;

function jump() {
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function() {
        character.classList.remove("animate");
    }, 500);
}

var checkIfLost = setInterval(function() {
    var TopOfCharacter = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var LeftOfBlock = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(LeftOfBlock < 20 && LeftOfBlock > 0 &&
        TopOfCharacter >= 230){
            block.style.animation = "none";
            block.style.display = "none";
          alert("You lost, Score = " +Math.floor(score/100));
          score = 0;
        }
        else{
            score++;
            document.getElementById("YourScore").innerHTML = Math.floor(score/100);
        }
}, 10);