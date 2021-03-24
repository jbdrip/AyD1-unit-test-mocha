const fibonacci = (n) => {
    if (n <= 1) {
        return 1;
    } else {
        return (fibonacci(n - 1) + fibonacci(n - 2));
    }
};

const par = (nump) => {
    if (nump == 0) {
        return true;
    }
    return (impar(nump - 1));
};

const impar = (numi) => {
    if (numi == 0) {
        return false;
    }
    return (par(numi - 1));
};

const potencia = (base, exp) => {
    if(exp == 0) {
        return 1;
    } else {
        return (base * potencia(base, exp - 1));
    }
};

const factorial = (n) => {
    if(n == 0) {
        return 1;
    } else {
        return (n * factorial(n - 1)); 
    }
};

module.exports.fibonacci    = fibonacci;
module.exports.par          = par;
module.exports.impar        = impar;
module.exports.potencia     = potencia;
module.exports.factorial    = factorial;