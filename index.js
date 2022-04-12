//Etch a sketch JS 



const gridContainer = document.querySelector("#gridcontainer");
const resetBtn = document.querySelector('#reset');
const demo = document.querySelector('#demo');

//Creating the Grid, Adding the Event Listeners. 

let gridListener = () => {
    const gridColor = document.querySelectorAll('.grid-item')

    for (let i=0; i < gridColor.length; i++){
        gridColor[i].addEventListener('mouseover', function (){
            gridColor[i].style.backgroundColor = "black"; 
            // console.log("I'm working!");
        })
    }
}

let makeGrid = (divSize = 32) => { // = 32 sets as default, can be overwritten. 
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
    document.getElementById('gridcontainer').style.setProperty('grid-template-columns', 'repeat('+ divSize +', 15px'); //look up setProperty
    document.getElementById('gridcontainer').style.setProperty('grid-template-rows','repeat(' + divSize +', 15px');
}

//Placed make grid here, moved to line 90;

//Adding initial event listeners 
// gridListener(); why can't I call this here instead of typing out the function 
// const gridColor = document.querySelectorAll('.grid-item');
 //we need to use SelectorAll here because it querySelector will only return the first matching

    // for (let i=0; i < gridColor.length; i++){
    //     gridColor[i].addEventListener('mouseover', function (){
    //         // document.querySelector('.grid-item').getElementsByClassName.backgroundColor = "black";
    //         // event.target - this is considered depracated, which means that it may no longer be supported. 
    //         gridColor[i].style.backgroundColor = "black"; 
    //         console.log("I'm working!");
    //     })
    // }


//Reset function

function reset(){
    const gridColor = document.querySelectorAll('.grid-item');
    gridColor.forEach((e) => (gridContainer.removeChild(e))); 
}

function promptUser(){
 
    x = prompt("Please, specify the grid size.");
    // demo.innerText = x; //testing value for prompt 
    makeGrid(x); //calls function again, takes the input from prompt 
    
}

resetBtn.addEventListener('click', function(){
    // location.reload(); //This cannot work because it will erase the settings.
    // reset(); same thing as line 77.
    // for (let i =0; i <gridColor.length; i++){
    //     gridColor[i].style.backgroundColor = "white";
    reset();
    promptUser();
    // reset();
})



makeGrid();