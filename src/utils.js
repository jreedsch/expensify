console.log("utils.js is running!");

//export const square = (x) => x * x;
const square = (x) => x * x;

// export const add = (a, b) => a + b;
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;
// export default subtract;
// export default (a, b) => a - b; //identical

export { square, add, subtract as default };  //named exports
