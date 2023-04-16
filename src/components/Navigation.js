import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Halodoclogo from "./../assets/halodoc-logo.png";

const Navigation = () => {
    return (
        <Navbar
            bg="white"
            expand="lg"
            style={{ borderBottom: "1px solid #B3B3B3" }}
            className="fixed-top">
            <Container>
                <Navbar.Brand
                    href="#"
                    className="p-0 d-flex align-items-center">
                    <img
                        src={Halodoclogo}
                        width="172px"
                        height="32px"
                        alt="halodoc-logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="navbarScroll"
                    className="border-0"
                />
                <Navbar.Collapse id="navbarScroll" className="col-10">
                    <Nav
                        className="me-auto my-lg-0 py-lg-2 gap-lg-5 gap-3 px-lg-4 d-flex justify-content-center align-items-center"
                        style={{ maxHeight: "100px" }}
                        navbarScroll>
                        <Nav.Link
                            className="p-0 my-1"
                            href="#action1"
                            style={{
                                color: "black",
                                fontWeight: "500",
                            }}>
                            Beranda
                        </Nav.Link>
                        <Nav.Link
                            className="p-0"
                            href="#action2"
                            style={{
                                color: "black",
                                fontWeight: "500",
                            }}>
                            Artikel
                        </Nav.Link>
                        <Nav.Link
                            className="p-0"
                            href="#action3"
                            style={{
                                color: "black",
                                fontWeight: "500",
                            }}>
                            Aplikasi
                        </Nav.Link>
                        <Nav.Link
                            className="p-0"
                            href="#action4"
                            style={{
                                color: "black",
                                fontWeight: "500",
                            }}>
                            Riwayat
                        </Nav.Link>
                    </Nav>
                    <Nav className="d-flex">
                        <Button
                            style={{
                                fontWeight: "600",
                            }}
                            variant="danger">
                            Login
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
