
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Dialog } from 'primereact/dialog';


 
//import { Button } from 'primereact/button';

export const  MediaCard = ({ contact, title, summary, smallImage, html }) =>  {

  const [displayBasic, setDisplayBasic] = useState(false);
  const [position, setPosition] = useState('center');

    const dialogFuncMap = {
        'displayBasic': setDisplayBasic
    }

    const onClick = (name, position) => {
      dialogFuncMap[`${name}`](true);

      if (position) {
          setPosition(position);
        }
    }

    const onHide = (name) => {
      dialogFuncMap[`${name}`](false);
    }

  return (
  <div className='portfolio-item'>
    <div className='hover-bg'>
    <Card sx={{ maxWidth: 345, minHeight:305 }}>
      <CardMedia
        component="img"
        height="140"
        image={smallImage}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="h6" color="text.secondary">
        {summary}
        </Typography>
      </CardContent>
      <CardActions>
        {html?<div>
                <Dialog header="Descripción" visible={displayBasic} style={{ width: '50vw' }} onHide={() => onHide('displayBasic')}
                  breakpoints={{'960px': '75vw', '640px': '100vw'}}>
                    <div id='prog_pop_content_id'>
                      <div dangerouslySetInnerHTML={ { __html: html } }></div>

                    </div>
                            
                </Dialog>
                <Button variant="outlined" size="small" onClick={() => onClick('displayBasic')}  >Ver Mas</Button>
            </div>:
        ''}
        
       {contact?
        <div className='social'>
                <ul>
                  {contact.whatsapp?<li>
                    <a href={contact.whatsapp ? contact.whatsapp : '/'} target='_blank'>
                      <i className='fa fa-whatsapp'></i>
                    </a>
                  </li>:''}
                  
                </ul>
        </div>:
        ''}        
      </CardActions>
    </Card>
    </div>
  </div>    
  );
}