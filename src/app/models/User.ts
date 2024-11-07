import { Base } from "./Base";

export interface UserJson {
  id: string;
  name: string;
  gender: string;
  cpf: string;
  cardNumber: string;
  age: string;
  status: string;
  dateOfBirth: Date;
}

export class User extends Base {
  constructor(
    _id: string,
    private _name: string,
    private _gender: string,
    private _cpf: string,
    private _cardNumber: string,
    private _age: string,
    private _status: string,
    private _dateOfBirth: Date
  ) {
    super(_id);
  }

  public toJson(): UserJson {
    return {
      id: this._id,
      name: this._name,
      gender: this._gender,
      cpf: this._cpf,
      cardNumber: this._cardNumber,
      age: this._age,
      status: this._status,
      dateOfBirth: this._dateOfBirth,
    };
  }
}
