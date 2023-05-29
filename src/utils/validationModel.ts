import PasswordValidator from 'password-validator';
import z from 'zod';

export const UserSchema_Z = z.object({
  username: z.string().min(10),
  email: z.string().email(),
  password: z.string().min(10),
  isAdmin: z.boolean(),
});

export const passwordModel = new PasswordValidator();

passwordModel
  .is()
  .min(10)
  .is()
  .max(100)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits(2)
  .has()
  .not()
  .spaces();
