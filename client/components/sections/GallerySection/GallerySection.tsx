import { useEffect } from "react";
import { useState } from "react";

interface IImages {
  image: string;
  text: string;
}

const GallerySection = () => {
  const Images: IImages[] = [
    {
      image: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
      text: "Portrait by Jessica Felicio"
    },{
      image: "https://source.unsplash.com/AHBvAIVqk64/300x500",
      text: "Portrait by Oladimeji Odunsi"
    },{
      image: "https://source.unsplash.com/VLPLo-GtrIE/300x300",
      text: "Portrait by Alex Perez"
    },
    {
      image: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
      text: "Portrait by Jessica Felicio"
    },{
      image: "https://source.unsplash.com/AHBvAIVqk64/300x500",
      text: "Portrait by Oladimeji Odunsi"
    },{
      image: "https://source.unsplash.com/VLPLo-GtrIE/300x300",
      text: "Portrait by Alex Perez"
    },
    {
      image: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
      text: "Portrait by Jessica Felicio"
    },{
      image: "https://source.unsplash.com/AHBvAIVqk64/300x500",
      text: "Portrait by Oladimeji Odunsi"
    },{
      image: "https://source.unsplash.com/VLPLo-GtrIE/300x300",
      text: "Portrait by Alex Perez"
    },
    {
      image: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
      text: "Portrait by Jessica Felicio"
    },{
      image: "https://source.unsplash.com/AHBvAIVqk64/300x500",
      text: "Portrait by Oladimeji Odunsi"
    },{
      image: "https://source.unsplash.com/VLPLo-GtrIE/300x300",
      text: "Portrait by Alex Perez"
    },
    {
      image: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
      text: "Portrait by Jessica Felicio"
    },{
      image: "https://source.unsplash.com/AHBvAIVqk64/300x500",
      text: "Portrait by Oladimeji Odunsi"
    },{
      image: "https://source.unsplash.com/VLPLo-GtrIE/300x300",
      text: "Portrait by Alex Perez"
    },
    {
      image: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
      text: "Portrait by Jessica Felicio"
    },{
      image: "https://source.unsplash.com/AHBvAIVqk64/300x500",
      text: "Portrait by Oladimeji Odunsi"
    },{
      image: "https://source.unsplash.com/VLPLo-GtrIE/300x300",
      text: "Portrait by Alex Perez"
    }
  ];
  let result: IImages[][] = [];
  const arrToColumns = (size: number) => {
    for (let i = 0; i <Math.ceil(Images.length/size); i++){
      result[i] = Images.slice((i * size), (i * size) + size);
    }
  }
  const [columns, setColomns] = useState<number>(4);

  useEffect(() => {
    const width = window.innerWidth;
    if (width <= 1200) {
      setColomns(3);
    } else if (width <= 768) {
      setColomns(2);
    }
    arrToColumns(columns);
  },[result]);

  return (
    <div className="gallery">

      {/*{ result.map((column, index) => (*/}
      {/*  <div key={index + "gallery__column"} className="gallery__column">*/}
      {/*    <div className="gallery__link">*/}
      {/*      { column.map((photo, index) => (*/}
      {/*        <figure className="gallery__thumb">*/}
      {/*          <img src={photo.image} alt={photo.text}*/}
      {/*               className="gallery__image"/>*/}
      {/*          <figcaption className="gallery__caption">{photo.text}</figcaption>*/}
      {/*        </figure>*/}
      {/*        )*/}
      {/*      )}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*)) }*/}

      <div className="gallery__column">
        <a href="https://unsplash.com/@jeka_fe" target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img src="https://source.unsplash.com/_cvwXhGqG-o/300x300" alt="Portrait by Jessica Felicio"
                 className="gallery__image"/>
            <figcaption className="gallery__caption">Portrait by Jessica Felicio</figcaption>
          </figure>
        </a>

        <a href="https://unsplash.com/@oladimeg" target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="Portrait by Oladimeji Odunsi"
                 className="gallery__image"/>
            <figcaption className="gallery__caption">Portrait by Oladimeji Odunsi</figcaption>
          </figure>
        </a>

        <a href="https://unsplash.com/@a2eorigins" target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img src="https://source.unsplash.com/VLPLo-GtrIE/300x300" alt="Portrait by Alex Perez"
                 className="gallery__image" />
            <figcaption className="gallery__caption">Portrait by Alex Perez</figcaption>
          </figure>
        </a>
      </div>
      <div className="gallery__column">
        <a href="https://unsplash.com/@noahbuscher" target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img src="https://source.unsplash.com/AR7aumwKr2s/300x300" alt="Portrait by Noah Buscher"
                 className="gallery__image" />
            <figcaption className="gallery__caption">Portrait by Noah Buscher</figcaption>
          </figure>
        </a>

        <a href="https://unsplash.com/@von_co" target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img src="https://source.unsplash.com/dnL6ZIpht2s/300x300" alt="Portrait by Ivana Cajina"
                 className="gallery__image"/>
            <figcaption className="gallery__caption">Portrait by Ivana Cajina</figcaption>
          </figure>
        </a>

        <a href="https://unsplash.com/@samburriss" target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img src="https://source.unsplash.com/tV_1sC603zA/300x500" alt="Portrait by Sam Burriss"
                 className="gallery__image"/>
            <figcaption className="gallery__caption">Portrait by Sam Burriss</figcaption>
          </figure>
        </a>
      </div>
      <div className="gallery__column">
        <a href="https://unsplash.com/@marilezhava" target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img src="https://source.unsplash.com/Xm9-vA_bhm0/300x500" alt="Portrait by Mari Lezhava"
                 className="gallery__image"/>
            <figcaption className="gallery__caption">Portrait by Mari Lezhava</figcaption>
          </figure>
        </a>

        <a href="https://unsplash.com/@ethanhaddox" target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img src="https://source.unsplash.com/NTjSR3zYpsY/300x300" alt="Portrait by Ethan Haddox"
                 className="gallery__image"/>
            <figcaption className="gallery__caption">Portrait by Ethan Haddox</figcaption>
          </figure>
        </a>

        <a href="https://unsplash.com/@mr_geshani" target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img src="https://source.unsplash.com/2JH8d3ChNec/300x300" alt="Portrait by Amir Geshani"
                 className="gallery__image"/>
            <figcaption className="gallery__caption">Portrait by Amir Geshani</figcaption>
          </figure>
        </a>
      </div>
      <div className="gallery__column">
        <a href="https://unsplash.com/@frxgui" target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img src="https://source.unsplash.com/FQhLLehm4dk/300x300" alt="Portrait by Guilian Fremaux"
                 className="gallery__image"/>
            <figcaption className="gallery__caption">Portrait by Guilian Fremaux</figcaption>
          </figure>
        </a>

        <a href="https://unsplash.com/@majestical_jasmin" target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img src="https://source.unsplash.com/OQd9zONSx7s/300x300" alt="Portrait by Jasmin Chew"
                 className="gallery__image"/>
            <figcaption className="gallery__caption">Portrait by Jasmin Chew</figcaption>
          </figure>
        </a>

        <a href="https://unsplash.com/@dimadallacqua" target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img src="https://source.unsplash.com/XZkEhowjx8k/300x500" alt="Portrait by Dima DallAcqua"
                 className="gallery__image"/>
            <figcaption className="gallery__caption">Portrait by Dima DallAcqua</figcaption>
          </figure>
        </a>
      </div>

    </div>
  );
};

export default GallerySection;