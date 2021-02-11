// import db from '../../src/shared/database';
import { CreateUserService } from '../../src/modules/users/services';

// beforeAll(async () => {
//   // run the migrations and do any other setup here
//   await db.migrate.latest();
// });

describe('CreateUserService', () => {
  const name = 'user';
  const password = 'pwd';
  const email = 'email@gmail.com';

  it('should be able to create a new user', async () => {
    const user = await CreateUserService.execute(name, email, password);

    expect(user).not.toBeUndefined();
    expect(user.name).toBe(name);
    expect(user.email).toBe(email);
  });

  it('should not be able to create users with same email', async () => {
    expect(
      async () => await CreateUserService.execute('userA', email, password),
    ).not.toBeUndefined();
    expect(
      async () => await CreateUserService.execute('userB', email, password),
    ).toThrow();
  });
});
