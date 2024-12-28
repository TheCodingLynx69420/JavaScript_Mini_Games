//lets go!;  

//first lets set up variables for rows, columns, tiles;  
let rows = 3;
let columns = 3;

let currTile;
let otherTile; //this is gonna be the blank tile area;  

//variable for turns and image order;  
let turns = 0;

// this below image order is our default one (use this incase you have skill issue of not being able to solve the puzzle);

//let imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

//random image order below (you can change it in any way to make it more challenging or easier);  
let imgOrder = ["5", "7", "2", "4", "8", "9", "6", "1", "3"] //remember "3" is the blank img!;  

//adding game logic;  
window.onload = function () {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            //the line below will create image tag in the "<div id =board> tag;"  
            let tile = document.createElement("img");
            //this line of code below will change the id of the img (e.g 0-0 for the first one (counting starts from top left image) in the board, 0-1 for the second one and so on, so we can easily know the location of each tile);  
            tile.id = r.toString() + "-" + c.toString();

            //shift() will pop an image from the array to the board and then adds jpg format in them (like: 1.jpg 2.jpg etc);  
            tile.src = imgOrder.shift() + ".jpg";

            //finally, this will insert images in the board. (you can ultimately add images using html but it would be very hectic because of lots of copy pasting, so we are using Javascript for more cleaner look! + we are using the powers of JS XD);  

            //adding dragging functions (what they do is explained after them);  
            tile.addEventListener("dragstart", dragStart); //click image to drag it;  
            tile.addEventListener("drop", drop); // dropped the image on another tile; 
            tile.addEventListener("dragover", allowDrop); // allows the image to be dropped on the tile; 

            document.getElementById("board").append(tile);
        }
    }
}

//adding the drag functions;  
function dragStart() {
    currTile = this; //"this" refers to the image tile being dragged;  
}

function allowDrop(e) {
    e.preventDefault(); // allows the image to be dropped on the tile;
}

function drop(e) {
    e.preventDefault();
    otherTile = this; //"this" refers to the image tile being dropped on;

    if (!otherTile.src.includes("3.jpg")) {
        return //this will allow swaps to empty tile only (which is 3.jpg). which will make the game more challenging. comment out this piece if you feel like it!;
    }

    //to prevent user from swapping tile which is not adjacent to each other;
    let currCoords = currTile.id.split("-"); //ex: 0-0 ==> ["0", "0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveRight = r == r2 && c2 == c - 1;
    let moveLeft = r == r2 && c2 == c + 1;

    let moveUP = c == c2 && r2 == r - 1;
    let moveDown = c == c2 && r2 == r + 1;

    let isAdjacent = moveLeft || moveRight || moveUP || moveDown;


    if (isAdjacent) {
        // Swaps the tile images which are adjacent to each other;  
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;
        //adding turns functionality for score based gameplay;
        turns += 1;
        document.getElementById("turns").innerText = turns;
    }
}
