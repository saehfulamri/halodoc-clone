import logoFooter from "./../assets/halodoc-footer-logo.webp";
import googlePlay from "./../assets/google-play-badge-us.webp";
import appleStore from "./../assets/app-store-badge-us-white.webp";
import iconLogo from "./../assets/hd-white-logo-icon.svg";
import logoTwitter from "./../assets/twitter-white.webp";
import logoFacebook from "./../assets/facebook-white.webp";
import logoInstagram from "./../assets/instagram-white.webp";
import logoYoutube from "./../assets/youtube-white.webp";

const Footersection = () => {
    return (
        <div>
            <div
                className="row m-0 d-flex justify-content-center p-4"
                style={{ backgroundColor: "#46568E", minHeight: "292px" }}>
                <div
                    style={{ color: "white", textAlign: "left" }}
                    className="col-lg-11 p-0">
                    <div className="row m-0">
                        <img
                            src={logoFooter}
                            className="p-0 mb-4"
                            style={{ height: "32px", width: "175px" }}
                            alt="logo-footer"
                        />
                    </div>
                    <div className="row m-0 d-flex gap-0 justify-content-between">
                        <div className="col-lg-4 m-0">
                            <div className="row p-0">
                                <h6 className="p-0">Site Map</h6>
                            </div>
                            <div className="row p-0">
                                <div className="col p-0 d-flex flex-column gap-2">
                                    <a
                                        href="#"
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}>
                                        FAQ
                                    </a>
                                    <a
                                        href="#"
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}>
                                        Blog
                                    </a>
                                    <a
                                        href="#"
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}>
                                        Syarat & Ketentuan
                                    </a>
                                    <a
                                        href="#"
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}>
                                        Kebijakan Privasi
                                    </a>
                                    <a
                                        href="#"
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}>
                                        Promo
                                    </a>
                                </div>
                                <div className="col d-flex flex-column gap-2">
                                    <a
                                        href="#"
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}>
                                        Karir
                                    </a>
                                    <a
                                        href="#"
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}>
                                        Security
                                    </a>
                                    <a
                                        href="#"
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}>
                                        Media
                                    </a>
                                    <a
                                        href="#"
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}>
                                        Corporate Partnership
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 m-0">
                            <div className="row">
                                <h6 className="p-0">
                                    Layanan Pengaduan Konsumen
                                </h6>
                            </div>
                            <div className="row p-0">
                                <strong className="p-0">
                                    PT Media Dokter Investama
                                </strong>
                                <p className="p-0">
                                    Jl. H.R. Rasuna Said Kav B32-33, Jakarta
                                    Selatan
                                    <br />
                                    <a
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}
                                        href="#">
                                        help@halodoc.com
                                    </a>
                                    <span> / </span>
                                    <a
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}
                                        href="#">
                                        021-5095-9900
                                    </a>
                                </p>
                                <p className="p-0">
                                    Direktorat Jenderal Perlindungan Konsumen
                                    dan Tertib Niaga <br /> Kementerian
                                    Perdagangan Republik Indonesia <br /> 0853
                                    1111 1010 (WhatsApp)
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 m-0">
                            <div className="row p-0">
                                <h6 className="p-0">Download App di</h6>
                            </div>
                            <div className="row p-0 d-flex gap-2">
                                <img
                                    className="p-0"
                                    style={{
                                        width: "100px",
                                        height: "32px",
                                    }}
                                    src={googlePlay}
                                />
                                <img
                                    className="p-0"
                                    style={{
                                        width: "100px",
                                        height: "32px",
                                    }}
                                    src={appleStore}
                                />
                            </div>

                            <div className="row p-0 mt-3">
                                <h6 className="p-0">Apakah kamu Dokter?</h6>
                            </div>

                            <div className="row p-0">
                                <a
                                    href="#"
                                    style={{ textDecoration: "none" }}
                                    className="p-0">
                                    <button
                                        style={{
                                            borderRadius: "4px",
                                            border: "none",
                                        }}
                                        className="col-lg-5 p-2 bg-danger d-flex gap-1 justify-content-center align-items-center">
                                        <img width="12em" src={iconLogo}></img>
                                        <strong style={{ color: "white" }}>
                                            DAFTAR
                                        </strong>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{ backgroundColor: "#35406B", minHeight: "60px" }}
                className="m-0 row p-3 d-flex gap-2 justify-content-evenly text-white align-items-center">
                <div className="col-lg-7 col-11 d-flex flex-start">
                    <span>©HALODOC, 2023. ALL RIGHTS RESERVED</span>
                </div>
                <div className="col-lg-3 col-11 d-flex justify-content-between align-items-center">
                    <span>Follow kami di:</span>
                    <img
                        style={{ height: "20px", width: "23px" }}
                        src={logoTwitter}></img>
                    <img
                        style={{ height: "20px", width: "12px" }}
                        src={logoFacebook}></img>
                    <img
                        style={{ height: "20px", width: "20px" }}
                        src={logoInstagram}></img>
                    <img
                        style={{ height: "20px", width: "27px" }}
                        src={logoYoutube}></img>
                </div>
            </div>
        </div>
    );
};

export default Footersection;
