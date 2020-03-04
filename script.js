//Exercise 1 

ex1 =() =>{

    //Define Variables
    let clickChecker = document.getElementById("clickCheck");
    let clickLabel = document.getElementById("clickCheckLabel");
    
    //print statement for debugging
    // console.log(clickLabel);
    
    //function for when checkbox is clicked on
    changeLabel = (event) =>{
        clickLabel.innerText=`I TOLD YOU NOT TO CLICK THIS!!!`
    }
    clickChecker.addEventListener("click",changeLabel);
}

//Exercise 2 

ex2 = () =>{

    //Define Variables
    let postLabel = document.getElementById("postTextLabel"); // looks like you don't need this element, so delete it
    let postArea = document.getElementById("textPost");
    let postBtn = document.getElementById("typeBtn");
    let hiddenText = document.getElementById("startTyping");


    //A few debugging statements
    /*
    console.log(postLabel);
    console.log(postArea);
    console.log(postBtn); */


    //Removing hidden message when clicked and enabling text field
    postBtn.addEventListener("click",(event) =>{
        if(hiddenText.hasAttribute('hidden')){
            hiddenText.removeAttribute('hidden')
            postArea.removeAttribute('disabled');
            // button text should change
        }
        //Hiding message and disabling textfield
        else
        {
            hiddenText.setAttribute('hidden',true);
            postArea.setAttribute('disabled',true);
            // button text should change
        }
        //Stop it from refreshing
        event.preventDefault();
    })
}
ex3 =() =>{
    //Define Variables
    let countDown = document.getElementById("startCountdown");
    let countBtn = document.getElementById("counter");

    
}

main =() =>{
// ex1();
// ex2();
}

main();