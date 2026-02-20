function prime(value) {
    if (value <= 1) {
        console.log("Given value does not come under prime numbers: " + value);
        return;
    }

    let isPrime = true;

    // Check divisibility up to sqrt(value)
    for (let i = 2; i <= Math.sqrt(value); i++) {
        if (value % i === 0) {
            isPrime = false;
            break; // no need to check further
        }
    }

    if (isPrime) {
        console.log("Given number is a prime number: " + value);
    } else {
        console.log("Given number is not a prime number: " + value);
    }
}

prime(17);


