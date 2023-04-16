import Card from "react-bootstrap/Card";

const Featurecard = (props) => {
    return (
        <Card className="border-radius-0 border-0 d-flex justify-content-center align-items-center">
            <img
                alt="img-feature"
                className="p-0 mb-2"
                style={{ maxWidth: "48px", width: "48px" }}
                variant="top"
                src={props.image}
            />

            <Card.Text style={{ fontSize: "75%" }}>{props.text}</Card.Text>
        </Card>
    );
};

export default Featurecard;
