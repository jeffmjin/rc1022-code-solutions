function ExampleConstructor() {

}
console.log('prototype of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof prototype of ExampleConstructor:', typeof ExampleConstructor.prototype);

var newConstructor = new ExampleConstructor();
console.log('new ExampleConstructor:', newConstructor);

var instanceConstructor = newConstructor instanceof ExampleConstructor;
console.log('is newConstructor instanceof ExampleConstructor?:', instanceConstructor);
