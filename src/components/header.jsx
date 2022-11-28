import { Image } from "./image";
export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-10 col-md-offset-1 intro-text'>
                
              {props.data ? 
              <div key='imageHeader' >
                  <Image title={props.data.title} largeImage={props.data.largeImage} smallImage={props.data.smallImage} />
                </div>: 'Loading'}

                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a href='#features'
                className='btn btn-custom btn-lg page-scroll'>
                  Aprende Más
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
