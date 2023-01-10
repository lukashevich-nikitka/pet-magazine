interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
}

interface IRegistrationAnswer {
  name: string,
  surname: string,
  registrationAnswer: string,
}

export type { IUser, IRegistrationAnswer }
