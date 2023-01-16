import { ObjectId } from 'mongodb';

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
  role: string;
}

interface IRegistrationAnswer {
  firstName: string,
  lastName: string,
  registrationAnswer: string,
}

interface IJWTObject {
  id: ObjectId,
  firstName: string,
  lastName: string,
  age: number,
  role: string,
}

interface IAuthAnswer {
  firstName: string,
  lastName: string,
  token: string,
}

export type { IUser, IRegistrationAnswer, IJWTObject, IAuthAnswer }
