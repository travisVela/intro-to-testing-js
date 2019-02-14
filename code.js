// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
};

function sayHello(input) {
    if(input === undefined || typeof input === 'boolean' || input == null) {
        return 'Hello, world!'
    }
    return 'Hello, ' + input + '!';
}