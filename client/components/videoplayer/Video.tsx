import "./Video";
import ReactPlayer from "react-player";
// import { IVideo } from "../../models/IVideo";
import {back_url} from "../../vars";
import {log} from "util";

interface videoProps {
  video: any;
}

const Video = ({ video }: videoProps) => {
  const videoJsOptions = {
    autoPlay: true,
    controls: true,
    url: `${back_url}${video.video[0].url}`,
    light: `${back_url}${video.bigImage[0].url}`,
    sources: [
      {
        src: `${back_url}${video.video[0].url}`,
        type: "video/mp4",
      },
    ],
    youtube: {
      playerVars: { showinfo: 1 }
    }
  };
  return (
    <main className={"videoWrapper admin__main"}>
      <div className="videoWindowWrapper">
        <div className={"videoWindow"}>
          <ReactPlayer {...videoJsOptions} width={'100%'} height={'360px'} />
        </div>
        <div className="videoInfo">
          <div className="videoInfoHelp">
            {video.level?.level ? <span className="level">{video.level?.level}</span> : null}
            {video.time ? <span className="time">{video.time} min</span> : null}
          </div>
          <h3>{video.title}</h3>
          {video.price ?<div className="price">
            <span className="numbs">${video.price}</span>
            <span className="separator">/</span>
            <span className="letters">for this video</span>
          </div> : null}
          {video.description ? <p>{video.description}</p> : null}
          <div className="buyButton">
            Buy now
          </div>
        </div>
      </div>
    </main>
  );
};

export default Video;
