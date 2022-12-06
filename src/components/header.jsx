import { ContactSimple } from "./contact-simple";
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
                  <div className='portfolio-item'>
                    <div className='hover-bg'>
                      {' '}
                      
                        <div className='hover-text'>
                          <h4>{props.data.title}</h4>
                        </div>
                        <img
                          src={props.data.smallImage}
                          className='img-responsive'
                          alt={props.data.title}
                        />{' '}

                        
                    
                    </div>
                  </div>

                </div>: 'Loading'}              

                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                {' '}                
                <ContactSimple></ContactSimple>

              </div>
             
              
            </div>            
          </div>
        </div>
      </div>
    </header>
  )
}
