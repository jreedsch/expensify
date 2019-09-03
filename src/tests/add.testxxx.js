const add = (a,b) => a + b;
const generateGreeting = (name = 'anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const input_a = 4;
  const input_b = 3;
  const result = add(input_a,input_b);
  expect(result).toBe(7);
  //if (result !== 7) {
  //  throw new Error(`add ${input_a} and ${input_b}, result was ${result}, should have been 7`);
  //}
});

test('should generate greeting to input name', () => {
  const result = generateGreeting('Mike');
  expect(result).toBe('Hello Mike!');
});

test('should generate greeting for no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello anonymous!');
});
