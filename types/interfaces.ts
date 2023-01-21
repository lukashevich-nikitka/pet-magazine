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
  success: boolean,
  message: string,
}

interface IJWTObject {
  id: ObjectId,
  firstName: string,
  lastName: string,
  age: number,
  role: string,
}

interface IAuthAnswer {
  success: boolean,
  message: string,
  token: string,
}

interface IProfile {
  success: boolean,
  id: ObjectId,
  firstName: string,
  lastName: string,
  age: number,
  role: string,
}

export type { IUser, IRegistrationAnswer, IJWTObject, IAuthAnswer, IProfile }
