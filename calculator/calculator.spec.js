const { add, multiply } = require('./calculator.js');

// test away!
describe('calculator.js', () => {
//test cast
it("should run tests without errors", () => {
    //arrange --> setup the world
    //act --> execute the code we're testing
    //assert --> check out assumptions
    expect(true).toBe(true);



    });

    describe(".add()", function() {
        it("should add two numbers", function() {
            const sum = add(2,2);

            expect(sum).toBe(4)
        });
        it("should return 0 if no arguments passed", function() {
            const sum = add();

            expect(sum).toBe(0)
        });
        it("should return the number if a single argument", function() {
            const sum = add(4);

            expect(sum).toBe(4)
        });
        it("should accept an array as a single argument", function() {
            expect(add([1,2,3])).toBe(6);
        });


    })

});