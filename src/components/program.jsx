//import { Image } from "./image";
import { MediaCard } from "./media-card";

export const Program = (props) => { 

  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>PROGRAMAS</h2>
          <p>
            Programas Técnicos, Cursos y Diplomados
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>

         

            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <MediaCard contact={props.contact}  title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} summary={d.summary} html={d.html}/>
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}
