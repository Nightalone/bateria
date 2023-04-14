let drumNumber = document.querySelectorAll('.drum').length

for(let i = 0; i < drumNumber; i++){
    
    document.querySelectorAll("button")[i].addEventListener('click', () => { 
        let audio = new Audio("./sounds/tom-1.mp3");
        audio.play(); 
    });
}




