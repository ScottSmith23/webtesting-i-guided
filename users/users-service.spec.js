const {validate} = require('./users-service.js');

describe("user-service.js", function (){

    describe(".validate()", function(){
        it("a use should have a username and password", function(){
            expect(validate({})).toBe(false);
        })
        it("return true if username and password exist", function(){
            expect(validate({username:"bob",password:"china"})).toBe(true);
        })




    });

});