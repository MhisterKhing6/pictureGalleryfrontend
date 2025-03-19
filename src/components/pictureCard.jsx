

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import ListGroup from 'react-bootstrap/ListGroup';
import { Config } from '../config/Config';



const PictureCard =  ({src, id, setPictures})=> {
  const deletePic = async (key, setPictures)  => {
    try {
      let response = await fetch(`${Config.getBaseUrl()}/api/files/images?key=${key}`, {
        method: "DELETE",
      })
      if(response.ok){
        setPictures(pics => {
          let newPics = pics.filter(pic => pic.key != key);
          return newPics;
        })
      }
      else{
        alert("could't delete Image")
      }
    } catch (ex) {
      console.log(ex)
      alert("couldn't reach server")
    }
  }
  
  
  const popover = (
      <Popover id="popover-basic">
        <Popover.Body className='m-0 p-0'>
        <ListGroup>
          <ListGroup.Item><Button onClick={()=> deletePic(id, setPictures)} variant='danger'>Delete </Button></ListGroup.Item>
      </ListGroup>
  
        </Popover.Body>
      </Popover>
    );
    
    return (
        <div className="col-12 col-md-6 col-lg-4 fade-in" data-animate-effect="fadeInUp">
       
			<Button variant='link'  href={src} className="d-block picture-card" data-caption="Photography" data-fancybox="gallery"> 
            <img src={src} alt=""  className="fixed-size-img img-fluid"/>
            <OverlayTrigger
      placement="right"
      trigger={"click"}
      delay={{ show: 250, hide:  6000}}
      overlay={popover}
    >
      <div variant={'dark'} onClick={(e) => e.preventDefault()} className='delete-btn me-2'>:::</div>
    </OverlayTrigger>
            </Button>
		</div> 
        )
    
}
export default PictureCard