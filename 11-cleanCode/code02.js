function countPrimes (num) {
  if(num === 1){return 0;}  // Prime number should be greater than 1

  let Primes_amount = 0;

    for(let counter_num = 2; counter_num  < num; counter_num++){
      if(counter_num  !== 2 && counter_num  % 2 == 0){
          continue;
      }
      if(isPrime(counter_num)){
        Primes_amount++;
      }

  }
  return Primes_amount;
  
  }

  //////////////////////////////// intelligible code /////////////////////////////////

  // function isPrime(num) {
  //     let sqrtNum = Math.floor(Math.sqrt(num));
  //     let prime = num != 1;
  //     for(let counter_num = 2; counter_num < sqrtNum + 1; counter_num++) { 
  //         if(num % counter_num == 0) {
  //             prime = false;
  //             break;
  //         }
  //     }
  //     return prime;
  // }

/////////////////////////////////////////unintelligible Code ////////////////////////////////

  function isPrime(num) {
    let prime = true;
    for (let counter_num = 2; counter_num * counter_num <= num; counter_num++) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }
    return prime
}

  
  

console.log(countPrimes(5))



  
  /*
    1 - countPrimes function Give number N, count the total number of prime numbers between 0 and N

    Clean code : 
    1 - remove isWhatWeLookingFor Var 
    2 - add isPrime function to check that a number is prime or not .
    3 - change i in loop with counter_num

  */