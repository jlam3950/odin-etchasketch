//Etch a sketch JS 



const gridContainer = document.querySelector("#gridcontainer");

//Creating the Grid, Adding the Event Listeners. 

let gridListener = () => {
    const gridColor = document.querySelectorAll('.grid-item')

    for (let i=0; i < gridColor.length; i++){
        gridColor[i].addEventListener('mouseover', function (){
            // document.querySelector('.grid-item').getElementsByClassName.backgroundColor = "black";
            gridColor[i].style.backgroundColor = "black"; 
            // console.log("I'm working!");
        })
    }
}

// gridListener();

let makeGrid = (divSize) => {
    gridSize(divSize);

    for (let i = 0; i < divSize; i++){
        let div = document.createElement('div');
        div.classList.add('grid-item');
        for (let j = 0; j < divSize; j++){
            let div = document.createElement('div');
            const gridContainer = document.querySelector("#gridcontainer");
            gridContainer.appendChild(div);
            div.classList.add('grid-item');      
        }
    } 
    gridListener();
}

//Erase function



//Applies grid template columns, rows to JS created divs
let gridSize = (divSize) => {
    document.getElementById('gridcontainer').style.setProperty('grid-template-columns', 'repeat(' + divSize +', 15px'); //look up setProperty
    document.getElementById('gridcontainer').style.setProperty('grid-template-rows','repeat(' + divSize +', 15px');
}

//Grid Start Size
let x = 32;
makeGrid(x);

//Adding initial event listeners 

const gridColor = document.querySelectorAll('.grid-item'); //we need to use SelectorAll here because it querySelector will only return the first matching

    for (let i=0; i < gridColor.length; i++){
        gridColor[i].addEventListener('mouseover', function (){
            // document.querySelector('.grid-item').getElementsByClassName.backgroundColor = "black";
            // event.target - this is considered depracated, which means that it may no longer be supported. 
            gridColor[i].style.backgroundColor = "black"; 
            console.log("I'm working!");
        })
    }



let resetBtn = document.querySelector('#reset');
let demo = document.querySelector('#demo');

//Reset function

function reset(){
    gridColor.forEach((e) => {gridContainer.removeChild(e)}); //Not sure why this only works once
}

function promptUser(){
    // reset(); - works only once
    x = prompt("Please, specify the grid size.");
    // demo.innerText = x; //testing value for prompt 
    makeGrid(x); //calls function again, takes the input from prompt 
}


resetBtn.addEventListener('click', function(){
    // location.reload(); //This cannot work because it will erase the settings.
    // reset(); same thing as line 77.
    // for (let i =0; i <gridColor.length; i++){
    //     gridColor[i].style.backgroundColor = "white";
        
    // }
    reset();
    promptUser();
})




// var a = prompt("Enter your name");
// document.getElementById("myName").value = a;
// <input type="text" id="myName"></input>




