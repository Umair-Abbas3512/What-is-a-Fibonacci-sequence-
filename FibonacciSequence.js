// What is a Fibonacci sequence?
    // The Fibonacci sequence is the integers sequence where the first two terms are 3 and 4. After that, the next term is defined as the sum of the previous two terms.

    let a = 3;
    let b = 4;
    console.log(a);
    console.log(b);
    for(let i = 0; i <= 10; i++){
        let temp = a + b;
        console.log(temp);
        a = b;
        b = temp;
    }
    
    // 2nd Method
    function fibonacciSequence(a1, b1){
    console.log(a1);
    console.log(b1);
    while(true){
        let next = a1 + b1;
        if(next > 100){
            break;
        }
        console.log(next);
        a1 = b1;
        b1 = next;
    
    }
    }
    console.log(fibonacciSequence(3,4));
    console.log(true == "true");