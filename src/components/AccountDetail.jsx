import { Card, Button } from "react-bootstrap"
import { useParams, Navigate, useNavigate  } from "react-router-dom"
import Data from "../Data/Account.json"

const AccountDetail = () => {
    const navigate = useNavigate()
    const params = useParams()

    const dataDetail = Data[params.id - 1]

  return (
    <div className="d-flex justify-content-center">
        <Card className="d-flex justify-content-center align-items-center" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={dataDetail.image} />
        <Card.Body>
            <div className="d-flex justify-content-center align-items-center">
                <Card.Title>@{dataDetail.username}</Card.Title>
            </div>
        <div className="d-flex justify-content-center flex-column-center">
            <div className="me-5">
                <div>
                    <Card.Text> Followers</Card.Text>
                </div>
                <div>
                    <Card.Text className="me-1"> {dataDetail.follower}</Card.Text>
                </div>
            </div>
            <div>
                <div>
                    <Card.Text className="me-1"> Following </Card.Text>
                </div>
                <div>
                    <Card.Text>{dataDetail.following} </Card.Text>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-center">
            <Button variant="primary" onClick={() => navigate("/")}>🔙</Button>
        </div>
        </Card.Body>
        </Card>
    </div>
  )
}

export default AccountDetail