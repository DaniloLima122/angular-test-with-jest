import { UserNotationPipe } from './user-notation.pipe';

let pipe : UserNotationPipe;

describe('UserNotationPipe', () => {
  it('create an instance', () => {
    pipe = new UserNotationPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform user to use user notation', () => {
    const user = "Dan@@@ilo";

    const userWithNotaion = pipe.transform(user);

    expect(userWithNotaion).toEqual('@danilo');

  })
});
