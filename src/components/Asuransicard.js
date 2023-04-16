import Card from "react-bootstrap/Card";

const Asuransicard = (props) => {
    return (
        <Card className="p-2">
            <div className="row m-0 d-flex align-items-center">
                <div className="col-1 p-0">
                    <div className="row m-0">
                        <img src={props.image} className="p-0 m-1"></img>
                    </div>
                </div>
                <div className="col-10">
                    <Card.Body className="p-0" style={{ textAlign: "left" }}>
                        <Card.Title
                            style={{ fontSize: "90%" }}
                            className="pt-1">
                            {props.title}
                        </Card.Title>
                        <Card.Text style={{ fontSize: "80%" }}>
                            {props.text}
                        </Card.Text>
                    </Card.Body>
                </div>
                <div className="col-1 d-flex align-items-center justify-content-center">
                    <i class="ri-arrow-right-s-line"></i>
                </div>
            </div>
        </Card>
    );
};

export default Asuransicard;
