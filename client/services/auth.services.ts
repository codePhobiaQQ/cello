import $api from "../http";
import axios, { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { back_url } from "../vars";

export default class AuthServices {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    const user = await axios.post<AuthResponse>(
      `${back_url}/auth/local`,
      { "identifier": email, password }
    );
    console.log(user.data);
    localStorage.setItem("token", user.data.jwt);
    return user;
  }

  static async registration(
    email: string,
    password: string,
    username: string
  ): Promise<AxiosResponse<AuthResponse>> {
    console.log(email, password, username);
    return $api.post<AuthResponse>("/auth/local/register", {
      email,
      password,
      username,
    });
  }
}
