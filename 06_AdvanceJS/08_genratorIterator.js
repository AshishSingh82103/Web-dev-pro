function*  numberGenrator() {
    yield 1
    yield 2
    yield 3

}
 let gen = numberGenrator();
 let genTwo = numberGenrator();
 
//  console.log(gen); // Object [Generator] {}
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // undefined

console.log(genTwo.next().value); // 1
console.log(genTwo.next().value); // 2


 