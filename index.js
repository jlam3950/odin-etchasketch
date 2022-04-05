// let div = document.createElement('div');
// let grid = document.querySelector("#gridcontainer");
// div.classList.add('grid-item');
// grid.appendChild(div);
// div.appendChild(text);

let makeGrid = () => {
    for (let i = 0; i < 16; i++){
        let div = document.createElement('div');
        div.classList.add('grid-item');
        for (let j = 0; j < 16; j++){
            let div = document.createElement('div');
            const gridContainer = document.querySelector("#gridcontainer");
            gridContainer.appendChild(div);
            div.classList.add('grid-item');      
        }
    } 
}

makeGrid();


// document.querySelector(".grid-item").addEventListener("mouseover", function(){
//     document.querySelector(".grid-item").style.backgroundColor = "black";
// });


const gridColor = document.querySelectorAll('.grid-item'); //we need to use SelectorALl here because it querySelector will only return the first matching

for (let i=0; i < gridColor.length; i++){
    gridColor[i].addEventListener('mouseover', function (){
        // document.querySelector('.grid-item').getElementsByClassName.backgroundColor = "black";
        event.target.style.backgroundColor = "black"; //why does this need an event? and why does it cross it out 
        console.log("I'm working!");
    })
}


// gridColor.forEach(grid-item => {
//     grid-item.addEventListener('click', function turnBlack(event){
//         console.log('box clicked', event);
//         // document.querySelector(".grid-item").style.backgroundColor = "black";
//     });
// });

