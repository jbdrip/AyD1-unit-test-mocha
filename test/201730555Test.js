const assert = require('chai').assert;
const functions = require('../201730555');

var fibonacci = functions.fibonacci(5);
var par = functions.par(8);
var impar = functions.impar(15);
var potencia = functions.potencia(2, 3);
var factorial = functions.factorial(4);

describe('201730555', () => {
    describe('fibonacci()', () => {
        it('return type value number', () => {
            assert.typeOf(fibonacci, 'number');
        });
        it('return value should be above 0', function(){
            assert.isAbove(fibonacci, 0);
        });
    });

    describe('par()', () => {
        it('return type value boolean', () => {
            assert.typeOf(par, 'boolean');
        });
    });

    describe('impar()', () => {
        it('return type value boolean', () => {
            assert.typeOf(impar, 'boolean');
        });
    });

    describe('potencia()', () => {
        it('return type value number', () => {
            assert.typeOf(potencia, 'number');
        });
        it('return value should be above 0', () => {
            assert.isAbove(potencia, 1);
        });
    });

    describe('factorial()', () => {
        it('return type value number', () => {
            assert.typeOf(factorial, 'number');
        });
        it('return value should be above 0', () =>{
            assert.isAbove(factorial, 0);
        });
    });
});