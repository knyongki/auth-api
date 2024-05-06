/* eslint-disable no-undef */
const PasswordHash = require('../PasswordHash');

describe('PasswordHash interface', () => {
  it('should throw error when invoke abstarct behavior', async () => {
    // Arrange
    const passwordHash = new PasswordHash();

    // Action & Assets
    await expect(passwordHash.hash('dummy_password')).rejects.toThrowError('PASSWORD_HASH.METHOD_NOT_IMPLEMENTED');
  });
});
