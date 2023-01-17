// Function to produce countdown results
function countDown(num){
    // Establish a counting variable
    let count = num-1;
    // Utilize an IIFE to save the returned interval ID and run an anonymous function at the same time
    const intervalID = setInterval(function(){
        if(count > 0){
            console.log(count);
            count--;
        } else {
            console.log("DONE!");
            clearInterval(intervalID);
        }
    },1000);
}

// Test
countDown(4);
