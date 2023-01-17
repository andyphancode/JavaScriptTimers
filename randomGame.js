// Random game function
function randomGame(){
    // Establish random number variable that can be reassigned, start at 0 so we can begin generating random numbers in if/else statement
    let randomnum = 0;
    // Establish counter variable that can be reassigned
    let counter = 0;
    // Use IIFE to execute setInterval function while also saving interval ID to clear when condition is met
    const intervalID = setInterval(function(){
        if(randomnum <= 0.75){
            randomnum = Math.random();
            console.log(randomnum);
            counter++;
        }else{
            clearInterval(intervalID);
            console.log(randomnum);
            console.log(counter+1);
        }
    },1000)
}

randomGame();

