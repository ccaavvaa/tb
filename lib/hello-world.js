"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HelloWorld {
    get greeting() {
        const name = this.name || 'World';
        return `Hello ${name} !`;
    }
}
exports.HelloWorld = HelloWorld;
//# sourceMappingURL=hello-world.js.map