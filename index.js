//Etch a sketch JS 

//Creating the Grid. // Moved function call to the bottom of page. 

let gridListener = () => {
    const gridColor = document.querySelectorAll('.grid-item')

    for (let i=0; i < gridColor.length; i++){
        gridColor[i].addEventListener('mouseover', function (){
            // document.querySelector('.grid-item').getElementsByClassName.backgroundColor = "black";
            gridColor[i].style.backgroundColor = "black"; 
            console.log("I'm working!");
        })
    }
}

gridListener();

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

// trying to figure out how to change the CSS properties of gridTemplateColumns, Rows
//look up setProperty
let gridSize = (divSize) => {
    document.getElementById('gridcontainer').style.setProperty('grid-template-columns', 'repeat(' + divSize +', 25px');
    document.getElementById('gridcontainer').style.setProperty('grid-template-rows','repeat(' + divSize +', 25px');
}

let x = 16;
makeGrid(x);

const gridColor = document.querySelectorAll('.grid-item'); //we need to use SelectorALl here because it querySelector will only return the first matching

    for (let i=0; i < gridColor.length; i++){
        gridColor[i].addEventListener('mouseover', function (){
            // document.querySelector('.grid-item').getElementsByClassName.backgroundColor = "black";
            // event.target - this is considered depracated, which means that it may no longer be supported. 
            gridColor[i].style.backgroundColor = "black"; 
            console.log("I'm working!");
        })
    }

//Reset function

let resetBtn = document.querySelector('#reset');
let demo = document.querySelector('#demo');


function promptUser(){
    x = prompt("Please, specify the grid size.");
    demo.innerText = x;
    // return x; //how do I get this outside of the function 
    // makeGrid(x); calls function again implementing the user prompt
    makeGrid(x);
}



resetBtn.addEventListener('click', function(){
    // location.reload(); //This cannot work because it will erase the settings.
    promptUser();
})




// var a = prompt("Enter your name");
// document.getElementById("myName").value = a;
// <input type="text" id="myName"></input>


// seeing if this function works when put at the bottom; 

// makeGrid(x);

// const gridColor = document.querySelectorAll('.grid-item'); //we need to use SelectorALl here because it querySelector will only return the first matching

// for (let i=0; i < gridColor.length; i++){
//     gridColor[i].addEventListener('mouseover', function (){
//         // document.querySelector('.grid-item').getElementsByClassName.backgroundColor = "black";
//         event.target.style.backgroundColor = "black"; //why does this need an event? and why does it cross it out 
//         console.log("I'm working!");
//     })
// }



