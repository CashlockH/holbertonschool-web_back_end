// 3-correct-text.test.js
import handleProfileSignup from "./3-all";

test('handleProfileSignup returns the right text', async () => {
  // Mock console.log
  const spy = jest.spyOn(console, 'log').mockImplementation(() => {});

  // Call the function
  await handleProfileSignup();

  // Check that console.log was called with the expected output
  expect(spy).toBeCalledWith('photo-profile-1 Guillaume Salva');

  // Restore the original console.log
  spy.mockRestore();
});
