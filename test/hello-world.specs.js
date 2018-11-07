"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_world_1 = require("../lib/hello-world");
const chai = require("chai");
require("mocha");
const expect = chai.expect;
describe('Hello world', function () {
    it('greeting should be Hello World! when name is empty', function () {
        const target = new hello_world_1.HelloWorld();
        expect(target.greeting).equals('Hello World!');
    });
});
//# sourceMappingURL=hello-world.specs.js.map