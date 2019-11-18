


function processData(input) {
    //Enter your code here
    let data = input.split("\n");
    
    //setting up known variables and initializing other variables for later use
    let costPerCut = parseInt(data[0]);
    let salePrice = parseInt(data[1]);
    let rod1 = parseInt(data[3]);
    let rod2 = parseInt(data[4]);
    let rod3 = parseInt(data[5]);
    let rods = [rod1, rod2, rod3];
    let totalCuts = 0;
    let largestRod = Math.max(...rods);
    let allPossibleProfitOutcomes = []
    
    
    //collecting all possible profit outcomes based on every possible saleLength
    rods.forEach( rod => {
        
        //set up containers to save all profit outcomes
        let profits = [];
        
        //based on the longest rod come up with the number of possible uniform rods based on saleLength
        //calculate total cuts which will be 1 less than the amount of rods you make
        //run the totalProfit formula and save this value to the profits array
        for( let salesLength = 1; salesLength < largestRod; salesLength++){
            let totalUniformRods = Math.floor(rod/salesLength);
            totalCuts = Math.ceil(rod/salesLength) - 1;
        
            profits.push((totalUniformRods*salesLength*salePrice) - (totalCuts * costPerCut));
        }
        //once you have all possible outcomes for a single rod save this to all possible outcomes of all rods
        allPossibleProfitOutcomes.push(profits)
    })
    
    
    //create a variable that will be overwritten everytime a new maximum is found
    let maxSum = 0;
    
    
    //for loop to iterate through the index of each rod's profits
    for(let i = 0; i < allPossibleProfitOutcomes[0].length; i++){
    
        //sum the profit for each rod at each possible saleLength
        let sum = allPossibleProfitOutcomes[0][i] + allPossibleProfitOutcomes[1][i] + allPossibleProfitOutcomes[2][i]
   
        //if the current sum is greater than the current maxSum overwrite maxSum
        if( sum > maxSum ){
            maxSum = sum;
        };
    };
    
    //print the final max sum
    console.log(maxSum)
} 