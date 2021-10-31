import {back_url} from "../vars";
import {IBlog} from "../models/IBlog";
import {IVideo} from "../models/IVideo";
import axios from "axios";

export default class BlogServices {
  static async getAll(): Promise<IBlog[]> {
    try {
      const blogs = await fetch(`${back_url}/blogs`).then(
        (res) => res.json()
      );
      return blogs;
    } catch (e) {
      console.log(e.message);
      return [];
    }
  }

  static async getOne(id: number | undefined): Promise<IBlog> {
    try {
      if (id === undefined) {
        return {} as IBlog;
      }
      const response = await axios.get(
        `${back_url}/blogs/${id}`
      );
      const blog = response.data;
      return blog;
    } catch (e) {
      console.log(e.message);
      return {} as IBlog;
    }
  }
}
