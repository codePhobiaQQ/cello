import {useState} from "react";
import Header from "../hoc/Header";
import Menu from "../components/Menu/Menu";
import {Container} from "reactstrap";
// @ts-ignore
import { Player } from "video-react";
import CustomVideo from "../components/videoplayer/CustomVideo";

export interface IVideo {
  src: string;
  preview: string;
  location?: string;
  title: string;
  description?: string;
}

const Videos = () => {
  const [authVisible, setAuthVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);


  const videos: IVideo[] = [
    {
      src: "https://www.youtube.com/watch?v=WQv5sDRJaqY",
      preview: "https://www.sainte-roseline.com/wp-content/uploads/2020/07/Violoncelle.jpg",
      title: "Concert on river Theme 1",
      location: "Moscow, Classic dvorez sporta",
      description: "Test of text in here important color ahah fdafjkaf akdfjaldfadf adf afadf asdf a" +
        "est of text in here important color ahah fdafjkaf akdfjaldfadf adf afadf asdf a"
    },
    {
      src: "https://www.youtube.com/watch?v=WQv5sDRJaqY",
      preview: "https://www.sainte-roseline.com/wp-content/uploads/2020/07/Violoncelle.jpg",
      title: "Concert on river Theme 2",
      location: "Moscow, Bolshoy concertniy zal",
    },
    {
      src: "https://www.youtube.com/watch?v=WQv5sDRJaqY",
      preview: "https://www.sainte-roseline.com/wp-content/uploads/2020/07/Violoncelle.jpg",
      title: "Concert on river Theme 3",
      location: "Moscow",
      description: "Test of text in here important color ahah fdafjkaf akdfjaldfadf adf afadf asdf a"
    },
    {
      src: "https://www.youtube.com/watch?v=WQv5sDRJaqY",
      preview: "https://www.sainte-roseline.com/wp-content/uploads/2020/07/Violoncelle.jpg",
      title: "Concert on river Theme 4",
      location: "Moscow",
      description: "Test of text in here important color ahah fdafjkaf akdfjaldfadf adf afadf asdf a"
    }
  ]

  return (
    <Header
      isMenuOpen={isMenuOpen}
      setMenuOpen={setMenuOpen}
    >
      <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <div className={isMenuOpen ? "sectionsWrapper active" : "sectionsWrapper"}>
        <section className="videoSection">
          <Container>
            <h2>Videos</h2>
            <div className="videos">
              {videos.map((video, index) => (
                <CustomVideo
                  index={index}
                  video={video}
                />
              ))}
            </div>
          </Container>
        </section>
      </div>
    </Header>
  );
};

export default Videos;