const Prime = function (number){
    let isPrime = true;
    if (number === 1) {
        return true
    }
    else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }

        }

        }
        if (isPrime) {
            return true
        } else {
            return false
        }
}



const FindPrime = function (num){
 for (let i = 0 ; i < num ; i++){
    if (Prime(i)) console.log(i)
 }
}

FindPrime(20)