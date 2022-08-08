//Done for checking if js is connect well to the html file
//alert("Im working");

//Adding event listener for click event
//Using loop so that all the buttons get event listeners
for(var i=0;i<=6;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        //the callback func further calls 2 funcs
        //"this" here refers to html element that got the event
        var tp=this.innerHTML;
        makeSound(tp);
        //We pass the html element so that a new class can be added
        var target=this;
        changeAnimation(target);
    })
}
//adding event listener on entire document so that it listens for keypress
document.addEventListener("keypress", function(KeyboardEvent){
    var tp=KeyboardEvent.key;
    makeSound(tp);
})


function makeSound(keyValue){
     switch(keyValue){
        case "D":
        case "d":   
             var rAudio=new Audio("crash.mp3");
             rAudio.play();
             //alert("hi"+rAudio);
             break;   
        case "r": 
        case "R":
             var rAudio=new Audio("snare.mp3");
             rAudio.play();
             //alert("hi"+rAudio);
             break;   
        case "U":
        case "u":    
             var rAudio=new Audio("tom-1.mp3");
             rAudio.play();
             //alert("hi"+rAudio);
             break;    
        case "m":
        case "M":
            var rAudio=new Audio("kick-bass.mp3");
             rAudio.play();
             //alert("hi"+rAudio);
             break;
        case "k":            
        case "K":
             var rAudio=new Audio("tom-2.mp3");
             rAudio.play();
             //alert("hi"+rAudio);
             break;    
        case "I":
        case "i":
             var rAudio=new Audio("tom-3.mp3");
             rAudio.play();
             //alert("hi"+rAudio);
             break;   
        case "t":
        case "T":
             var rAudio=new Audio("crash.mp3");
             rAudio.play();
             //alert("hi"+rAudio);
             break;   
         default:
             alert("i got clicked");    
     }
}

function changeAnimation(target){
    target.classList.toggle("pressed");
}



