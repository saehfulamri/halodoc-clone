import Card from "react-bootstrap/Card";

const Herocard = (props) => {
    return (
        <Card style={{ minHeight: "90px" }}>
            <div className="row mx-4 mx-lg-5">
                <Card.Img
                    variant="top"
                    src={props.image}
                    className="p-0 mt-2"
                    style={{ minWidth: "60px" }}
                    // style={{ padding: "5% 25% 0% 25%" }}
                />
            </div>

            <Card.Body className="p-0">
                <p className="m-2" style={{ fontSize: ".90em" }}>
                    {props.text}
                </p>
            </Card.Body>
        </Card>
    );
};

export default Herocard;
