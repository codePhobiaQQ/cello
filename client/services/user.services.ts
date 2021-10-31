import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { IUser } from "../models/IUser";

export default class UserServices {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>('/users');
  }

  static async logged(): Promise<any> {
    return $api.post('/user/logged');
  }

  static logout(): void {
    localStorage.removeItem('token');
  }
}
