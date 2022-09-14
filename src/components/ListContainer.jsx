import { Row, Col, Container } from "react-bootstrap";
import { useState } from 'react'
import Data from "../Data/Account.json"
import List from "./List"

const ListContainer = () => {
  return (
    <Container className="my-5 overflow-hidden" style={{backgroundColor: ""}}>
      <Row className="d-flex flex-column">
      {Data.map((data, index) => (
        <Col >
          <List
            id={data.id}
            username={data.username}
            image={data.image}
            follower={data.follower}
            following={data.following}
          />
        </Col>
      ))}
      </Row>
    </Container>
    
  )
}

export default ListContainer