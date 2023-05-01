import Card from "react-bootstrap/Card";

const Ovitcard = (props) => {
    return (
        <Card style={{ minHeight: "64px" }}>
            <div className="row m-2">
                <div className="col-12 col-lg-2 d-flex justify-content-center align-items-center">
                    <img
                        alt="ovit_image"
                        src={props.image}
                        className="p-1"
                        maxWidth="52px"
                        width="48px"></img>
                </div>
                <div className="col-12 col-lg-10 d-flex justify-content-between align-items-center p-0">
                    {props.text}
                </div>
            </div>
        </Card>
    );
};

export default Ovitcard;
