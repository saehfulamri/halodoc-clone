import Card from "react-bootstrap/Card";

const Ovitcardsingle = (props) => {
    return (
        <Card
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "64px" }}>
            <div className="row m-2">
                <div className="col-12 d-flex justify-content-center align-items-center p-2">
                    {props.text}
                </div>
            </div>
        </Card>
    );
};

export default Ovitcardsingle;
