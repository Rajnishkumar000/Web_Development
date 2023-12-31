var numberOfDrum=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrum;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var btn=this.innerHTML;
        makeSound(btn);
        buttonAnimation(btn);
        
        // this.style.color="blue";
        
    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})


function makeSound(btn){
    switch(btn){
        case "R":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "A":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "J":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "N":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "I":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "S":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "H":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;


            default:
                console.log(btn);






               
    }

}


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 300);
  
  }


















// function handleclick(){
//     alert("i got clicked")
//     document.querySelector("button").addEventListener("click",handleclick)
// }

// var audio=new Audio("sounds/tom-1.mp3");
// audio.play();