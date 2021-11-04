import {useRef} from "react";

interface ISlide {
  src: string;
}

const SliderNews = () => {
  const slides: ISlide[] = [
    {
      src: "https://images.unsplash.com/photo-1537886079430-486164575c54?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4c747db3353a34b312d05786f47930d3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1537886079430-486164575c54?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4c747db3353a34b312d05786f47930d3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1537886079430-486164575c54?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4c747db3353a34b312d05786f47930d3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1537886079430-486164575c54?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4c747db3353a34b312d05786f47930d3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1537886079430-486164575c54?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4c747db3353a34b312d05786f47930d3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60",
    },
  ]

  // const slides = useRef()
  return (
    <div className="w">
      <div className="ts">
        <input type="radio" id="c1" name="ts" checked={true}/>
        {slides.map((slide, index) => {

        })}
        <label className="t" htmlFor="c1">
          <img src="https://images.unsplash.com/photo-1537886079430-486164575c54?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4c747db3353a34b312d05786f47930d3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60"/>
        </label>
        <input type="radio" id="c2" name="ts"/>
        <label className="t" htmlFor="c2">
          <img src="https://images.unsplash.com/photo-1537886194634-e6b923f92ff1?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=9eb2726071e58c1b0a430a75b1047525&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60"/>
        </label>
        <input type="radio" id="c3" name="ts"/>
        <label className="t" htmlFor="c3">
          <img src="https://images.unsplash.com/photo-1537886243959-0b504cf58aa2?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=1171ce40e6e68e663c3399a67a915913&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60"/>
        </label>
        <input type="radio" id="c4" name="ts"/>
        <label className="t" htmlFor="c4">
          <img src="https://images.unsplash.com/photo-1537886492139-052c27acbfee?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=664282a4bd8b8a69cc860420214df3e7&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60"/>
        </label>
        <input type="radio" id="c5" name="ts"/>
        <label className="t" htmlFor="c5">
          <img src="https://images.unsplash.com/photo-1537886464786-8a0d500b0da6?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=49984d393482456ea5484c3482cc52a9&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60"/>
        </label>
      </div>
    </div>
  );
};

export default SliderNews;