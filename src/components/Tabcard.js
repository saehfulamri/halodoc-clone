import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Tabcard = (props) => {
    return (
        <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <h6>{props.title}</h6>
                <Button
                    variant="outline-danger"
                    style={{
                        padding: ".2rem .45rem .2rem .45rem",
                        fontSize: ".70rem",
                    }}
                    href={props.link}>
                    {props.judulLink}
                </Button>
                <Card.Text className="pt-2" style={{ fontSize: "10px" }}>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Tabcard;
