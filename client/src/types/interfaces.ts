/* eslint-disable import/prefer-default-export */

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
  age: number;
}

interface IAuthValue {
  email: string;
  password: string;
}

export type { IFormValues, IAuthValue };
