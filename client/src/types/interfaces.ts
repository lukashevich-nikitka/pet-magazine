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

interface IProduct {
  id: string | null;
  name: string | null;
  size: string | null;
  price: string | null;
  chapter: string | null;
}

export type { IFormValues, IAuthValue, IProduct };
