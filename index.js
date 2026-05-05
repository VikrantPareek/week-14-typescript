"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet() {
    console.log("It is just the begining");
}
function afterOne(fn) {
    setTimeout(fn, 5000);
}
afterOne(greet);
//# sourceMappingURL=index.js.map