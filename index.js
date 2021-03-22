for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {
            case "W":
                let audio = new Audio("a.mp3");
                audio.play();
                break;
            case "A":
                let audio1 = new Audio("b.mp3");
                audio1.play();
                break;
            case "S":
                let audio2 = new Audio("c.mp3");
                audio2.play();
                break;
            case "D":
                let audio3 = new Audio("d.mp3");
                audio3.play();
                break;
            case "M":
                let audio4 = new Audio("e.mp3");
                audio4.play();
                break;
            case "N":
                let audio5 = new Audio("f.mp3");
                audio5.play();
                break;
            case "O":
                let audio6 = new Audio("g.mp3");
                audio6.play();
                break;
            case "T":
                console.log("No input file for this button");
            default:
                console.log(buttonInnerHTML);
        }
    });

}

document.addEventListener("keypress", function(event){
    console.log(event);
});

function makeSound(key)
{
    
}