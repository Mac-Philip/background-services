const { StaticPool } = require('node-worker-threads-pool');

let numbersArray = [40, 23, 5, 35];

// static worker pool with 8 workers
const pool = new StaticPool({
    size: 5,
    task: './worker.js'
})

/*pool.exec({ num: num }).then( result => [
    console.log(`${result.num}th Fibonacci Number: ${result.fib}`)
]);*/

 numbersArray.map((numberArray) => {
    pool.exec({ num: numberArray }).then( result => [
         console.log(`${result.num}th Fibonacci Number: ${result.fib}`)
    ]);
 });

console.log("Execution in the parent thread complete");
