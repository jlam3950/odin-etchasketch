//Etch a sketch JS 

//Creating the Grid. // Moved function call to the bottom of page. 

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
}

// trying to figure out how to change the CSS properties of gridTemplateColumns, Rows
//look up setProperty
let gridSize = (divSize) => {
    document.getElementById('gridcontainer').style.setProperty('grid-template-columns', 'repeat(' + divSize +', 25px');
    document.getElementById('gridcontainer').style.setProperty('grid-template-rows','repeat(' + divSize +', 25px');
}

// Adding hover effect to Divs 

makeGrid(15);

const gridColor = document.querySelectorAll('.grid-item'); //we need to use SelectorALl here because it querySelector will only return the first matching

for (let i=0; i < gridColor.length; i++){
    gridColor[i].addEventListener('mouseover', function (){
        // document.querySelector('.grid-item').getElementsByClassName.backgroundColor = "black";
        event.target.style.backgroundColor = "black"; //why does this need an event? and why does it cross it out 
        console.log("I'm working!");
    })
}

//Reset function

let resetBtn = document.querySelector('#reset');
let demo = document.querySelector('#demo');





function promptUser(){
    // let x = parseInt(prompt("Entera Value", "0"), 1000);
    // return x;

    let x = prompt("Please, specify the grid size.");
    demo.innerText = x;
    return x; //how do I get this outside of the function 
}


resetBtn.addEventListener('click', function(){
    // location.reload(); //This cannot work because it will erase the settings.
    promptUser();
})




// var a = prompt("Enter your name");
// document.getElementById("myName").value = a;
// <input type="text" id="myName"></input>

