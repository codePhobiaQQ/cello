import $api from "../http";
import axios, { AxiosResponse } from "axios";
import { IVideo } from "../models/IVideo";
import {back_url} from "../vars";

export default class VideoServices {

  static async getAll(): Promise<IVideo[]> {
    try {
      const videos = await fetch(`${back_url}/videos`).then(
        (res) => res.json()
      );
      return videos;
    } catch (e) {
      console.log(e.message);
      return [];
    }
  }

  static async getOne(id: number | undefined): Promise<IVideo> {
    try {
      if (id === undefined) {
        return {} as IVideo;
      }
      const response = await axios.get(
        `${back_url}/videos/${id}`
      );
      const videos = response.data;
      return videos;
    } catch (e) {
      console.log(e.message);
      return {} as IVideo;
    }
  }
}
