function setup() {
    var socket = io();

    var side = 30;

    var matrix = [];

    //! Getting DOM objects (HTML elements)
    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let MonsterCountElement = document.getElementById('MonsterCount');
    let FirstCharacterCountElement = document.getElementById('FirstCharacterCount');
    let SecondCharacterCountElement = document.getElementById('SecondCharacterCount');

    let grassWeatherElement = document.getElementById('grassWeather');
    let SecondCharacterWeatherElement = document.getElementById('SecondCharacterWeather');

    //! let grassEaterCountElement = document.getElementById('grassEaterCount');

    //! adding socket listener on "data" <-- name, after that fire 'drawCreatures' function 

    socket.on("data", drawCreatures);
    

    function drawCreatures(data) {
        //! after getting data pass it to matrix variable
        matrix = data.matrix;
        grassCountElement.innerText = data.grassCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;
        MonsterCountElement.innerText = data.MonsterCounter;
        FirstCharacterCountElement.innerText = data.FirstCharacterCounter;
        SecondCharacterCountElement.innerText = data.SecondCharacterCounter;
        season = data.s;
        //grassCountElement.innerText = data.grassHashiv;

        //! Every time it creates new Canvas woth new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side)
        //! clearing background by setting it to new grey color
        background('#acacac');
        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

        //! Drawing and coloring RECTs
        for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                if(season == "winter"){
                    fill("white");
                    grassWeatherElement.innerText = "ձմեռ";

                }
                else if(season == "spring"){
                    fill("#0FAE18");
                    grassWeatherElement.innerText = "գարուն";
                }
                else if(season == "autumn"){
                    fill("gray");
                    grassWeatherElement.innerText = "աշուն";
                }
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("#F3EF76");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#cccccc");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("#720EA8");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("#DD1313");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                if(season == "winter"){
                    fill("black");
                    SecondCharacterWeatherElement.innerText = "winter";
                }
                else if(season == "summer"){
                    fill("#061ECE");
                    SecondCharacterWeatherElement.innerText = "summer";
                }
                rect(x * side, y * side, side, side);
            }
        }
    }
    }
}

