import VideoServices from "./video.services";
import {LifeSearchDto} from "../dto/lifeSearch.dto";

export default class lifeSearchServices {
  static async findAllData(): Promise<any> {
    try {
      const videos = await VideoServices.getAll();
      return new LifeSearchDto([...videos]);
    } catch (e) {
      console.log(e);
    }
  }
}