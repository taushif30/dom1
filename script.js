let changeText= document.getElementsByClassName("change");

function changeMe(){
    changeText[0].innerHTML = "Hello World"
}


// ----------------------------------------------------------------------------------------

let changeButton = document.getElementsByClassName("change1");

function change2(){
    changeButton[0].innerHTML = "Welcome to Elevation academy";
}

// ----------------------------------------------------------------------------------------


let change3 = document.getElementsByClassName("heading");

change3[0].addEventListener('click', () =>{
    change3[0].style.color = "red"
})


// ----------------------------------------------------------------------------------------


let parent = document.querySelector('.parent');

function changeDirection(){

    parent.style.display = 'block';
}

// ----------------------------------------------------------------------------------------


let display = document.querySelectorAll('h4');
display[0].addEventListener('click', () =>{
    function startClock(){
        let time = new Date();

        let hrs = time.getHours();
        let mins = time.getMinutes();
        let secs = time.getSeconds();

        console.log(`Time : ${hrs} : ${mins} : ${secs}`)

        display[1].innerHTML = `${hrs} : ${mins} : ${secs}`
    }

    setInterval(() => {
        startClock();
        }, 1000)
    })

    
    
// ----------------------------------------------------------------------------------------

