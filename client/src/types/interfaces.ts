/* eslint-disable import/prefer-default-export */

interface IAuthValue {
  email: string;
  password: string;
}

interface IFormValues extends IAuthValue {
  firstName: string;
  lastName: string;
  repeatPassword: string;
  age: number;
}

export type { IFormValues, IAuthValue };
