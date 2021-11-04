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
            <img src="https://images.unsplash.com/photo-1537886079430-486164575c54?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4c747db3353a34b312d05786f47930d3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60" alt="Portrait by Jessica Felicio"
                 className="gallery__image"/>
            <figcaption className="gallery__caption">Portrait by Jessica Felicio</figcaption>
          </figure>
        </a>

        <a href="https://unsplash.com/@oladimeg" target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img src="https://images.unsplash.com/photo-1537886079430-486164575c54?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4c747db3353a34b312d05786f47930d3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60" alt="Portrait by Oladimeji Odunsi"
                 className="gallery__image"/>
            <figcaption className="gallery__caption">Portrait by Oladimeji Odunsi</figcaption>
          </figure>
        </a>

        <a href="https://unsplash.com/@a2eorigins" target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img src="https://images.unsplash.com/photo-1537886079430-486164575c54?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4c747db3353a34b312d05786f47930d3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60" alt="Portrait by Alex Perez"
                 className="gallery__image" />
            <figcaption className="gallery__caption">Portrait by Alex Perez</figcaption>
          </figure>
        </a>
      </div>
      <div className="gallery__column">
        <a href="https://unsplash.com/@jeka_fe" target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img src="https://images.unsplash.com/photo-1537886079430-486164575c54?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4c747db3353a34b312d05786f47930d3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60" alt="Portrait by Jessica Felicio"
                 className="gallery__image"/>
            <figcaption className="gallery__caption">Portrait by Jessica Felicio</figcaption>
          </figure>
        </a>

        <a href="https://unsplash.com/@oladimeg" target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img src="https://images.unsplash.com/photo-1537886079430-486164575c54?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4c747db3353a34b312d05786f47930d3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60" alt="Portrait by Oladimeji Odunsi"
                 className="gallery__image"/>
            <figcaption className="gallery__caption">Portrait by Oladimeji Odunsi</figcaption>
          </figure>
        </a>

        <a href="https://unsplash.com/@a2eorigins" target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img src="https://images.unsplash.com/photo-1537886079430-486164575c54?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4c747db3353a34b312d05786f47930d3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60" alt="Portrait by Alex Perez"
                 className="gallery__image" />
            <figcaption className="gallery__caption">Portrait by Alex Perez</figcaption>
          </figure>
        </a>
      </div>
      <div className="gallery__column">
        <a href="https://unsplash.com/@jeka_fe" target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img src="https://images.unsplash.com/photo-1537886079430-486164575c54?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4c747db3353a34b312d05786f47930d3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60" alt="Portrait by Jessica Felicio"
                 className="gallery__image"/>
            <figcaption className="gallery__caption">Portrait by Jessica Felicio</figcaption>
          </figure>
        </a>

        <a href="https://unsplash.com/@oladimeg" target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img src="https://images.unsplash.com/photo-1537886079430-486164575c54?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4c747db3353a34b312d05786f47930d3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60" alt="Portrait by Oladimeji Odunsi"
                 className="gallery__image"/>
            <figcaption className="gallery__caption">Portrait by Oladimeji Odunsi</figcaption>
          </figure>
        </a>

        <a href="https://unsplash.com/@a2eorigins" target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img src="https://images.unsplash.com/photo-1537886079430-486164575c54?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4c747db3353a34b312d05786f47930d3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60" alt="Portrait by Alex Perez"
                 className="gallery__image" />
            <figcaption className="gallery__caption">Portrait by Alex Perez</figcaption>
          </figure>
        </a>
      </div>
      <div className="gallery__column">
        <a href="https://unsplash.com/@jeka_fe" target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img src="https://images.unsplash.com/photo-1537886079430-486164575c54?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4c747db3353a34b312d05786f47930d3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60" alt="Portrait by Jessica Felicio"
                 className="gallery__image"/>
            <figcaption className="gallery__caption">Portrait by Jessica Felicio</figcaption>
          </figure>
        </a>

        <a href="https://unsplash.com/@oladimeg" target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img src="https://images.unsplash.com/photo-1537886079430-486164575c54?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4c747db3353a34b312d05786f47930d3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60" alt="Portrait by Oladimeji Odunsi"
                 className="gallery__image"/>
            <figcaption className="gallery__caption">Portrait by Oladimeji Odunsi</figcaption>
          </figure>
        </a>

        <a href="https://unsplash.com/@a2eorigins" target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img src="https://images.unsplash.com/photo-1537886079430-486164575c54?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4c747db3353a34b312d05786f47930d3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60" alt="Portrait by Alex Perez"
                 className="gallery__image" />
            <figcaption className="gallery__caption">Portrait by Alex Perez</figcaption>
          </figure>
        </a>
      </div>

    </div>
  );
};

export default GallerySection;