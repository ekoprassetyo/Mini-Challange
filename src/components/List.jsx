import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const List= ({id, username, image, follower, following}) => {

  return (
  <Container className="d-flex justify-content-center">  
    <ListGroup as={Link} to={`/${id}`} className="text-decoration-none" style={{width:"20%"}}>
      <ListGroup.Item className="d-flex flex-column justify-content-center align-items-center my-1">
        <div className="d-flex justify-content-center align-items-center" style={{width:"100%"}}>
            <div>
                <p>
                  <img src={image} width="50px" height="50px" className='rounded-circle me-3'/>
                </p>
            </div>
            <div>
                <div>
                    @{username}
                </div>
                <div>
                    Followers: {follower}
                </div>
            </div>
        </div>
     </ListGroup.Item>
    </ListGroup>
  </Container>
  )
}

export default List