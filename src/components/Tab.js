import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Tabcard from "./Tabcard";
import tabCard1 from "./../assets/tabcard1.jpg";
import tabCard2 from "./../assets/tabcard2.jpg";
import tabCard3 from "./../assets/tabcard3.jpg";
import tabCard4 from "./../assets/tabcard4.jpeg";

const Tabcomponent = () => {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-2 border-0"
            style={{}}>
            <Tab eventKey="terbaru" title="Terbaru" active>
                <div className="row pt-2 pb-2" style={{ textAlign: "left" }}>
                    <div className="col-lg-3 mb-2">
                        <Tabcard
                            image={tabCard1}
                            title="5 Hal Perlu Diketahui Sebelum Lakukan Ablasi Jantung"
                            judulLink="Jantung"
                            link="#"
                            text="“Sebelum melakukan ablasi jantung, ketahui risiko dan manfaatnya terlebih dahulu. Dibutuhkan persiapan fisik dan mental sebelum ..."
                        />
                    </div>
                    <div className="col-lg-3 mb-2">
                        <Tabcard
                            image={tabCard2}
                            title="Pemanis Pengganti Gula, Ini 5 Fakta Erythritol"
                            judulLink="Diabetes"
                            link="#"
                            text="“Erythritol merupakan pemanis pengganti gula yang mengandung rendah kalori. Mengonsumsi erythritol aman untuk kesehatan gigi, ..."
                        />
                    </div>
                    <div className="col-lg-3 mb-2">
                        <Tabcard
                            image={tabCard3}
                            title="Peran Tes Hematologi Lengkap dalam Mendiagnosis Penyakit"
                            judulLink="Hematologi"
                            link="#"
                            text="Tes hematologi lengkap merupakan pemeriksaan darah lengkap yang meliputi banyak komponen. Mulai dari sel darah putih, sel darah merah, ..."
                        />
                    </div>
                    <div className="col-lg-3">
                        <Tabcard
                            image={tabCard4}
                            title="Uji Vaksin Sinovac Diklaim Efektif Hingga 80 Persen"
                            judulLink="Coronavirus"
                            link="#"
                            text="“Salah satu vaksin yang dapat digunakan untuk mencegah infeksi COVID-19 adalah vaksin Sinovac. Penting untuk tahu efektivitas dan risiko ..."
                        />
                    </div>
                </div>
            </Tab>
            <Tab eventKey="populer" title="Populer">
                <div className="row pt-2" style={{ textAlign: "left" }}>
                    <div className="col-lg-3">
                        <Tabcard
                            image={tabCard1}
                            title="5 Hal Perlu Diketahui Sebelum Lakukan Ablasi Jantung"
                            judulLink="Jantung"
                            link="#"
                            text="“Sebelum melakukan ablasi jantung, ketahui risiko dan manfaatnya terlebih dahulu. Dibutuhkan persiapan fisik dan mental sebelum ..."
                        />
                    </div>
                    <div className="col-lg-3">
                        <Tabcard
                            image={tabCard2}
                            title="Pemanis Pengganti Gula, Ini 5 Fakta Erythritol"
                            judulLink="Diabetes"
                            link="#"
                            text="“Erythritol merupakan pemanis pengganti gula yang mengandung rendah kalori. Mengonsumsi erythritol aman untuk kesehatan gigi, ..."
                        />
                    </div>
                    <div className="col-lg-3">
                        <Tabcard
                            image={tabCard3}
                            title="Peran Tes Hematologi Lengkap dalam Mendiagnosis Penyakit"
                            judulLink="Hematologi"
                            link="#"
                            text="Tes hematologi lengkap merupakan pemeriksaan darah lengkap yang meliputi banyak komponen. Mulai dari sel darah putih, sel darah merah, ..."
                        />
                    </div>
                    <div className="col-lg-3">
                        <Tabcard
                            image={tabCard4}
                            title="Uji Vaksin Sinovac Diklaim Efektif Hingga 80 Persen"
                            judulLink="Coronavirus"
                            link="#"
                            text="“Salah satu vaksin yang dapat digunakan untuk mencegah infeksi COVID-19 adalah vaksin Sinovac. Penting untuk tahu efektivitas dan risiko ..."
                        />
                    </div>
                </div>
            </Tab>
            <Tab eventKey="cacarMonyet" title="Cacar Monyet">
                <div className="row pt-2" style={{ textAlign: "left" }}>
                    <div className="col-lg-3">
                        <Tabcard
                            image={tabCard1}
                            title="5 Hal Perlu Diketahui Sebelum Lakukan Ablasi Jantung"
                            judulLink="Jantung"
                            link="#"
                            text="“Sebelum melakukan ablasi jantung, ketahui risiko dan manfaatnya terlebih dahulu. Dibutuhkan persiapan fisik dan mental sebelum ..."
                        />
                    </div>
                    <div className="col-lg-3">
                        <Tabcard
                            image={tabCard2}
                            title="Pemanis Pengganti Gula, Ini 5 Fakta Erythritol"
                            judulLink="Diabetes"
                            link="#"
                            text="“Erythritol merupakan pemanis pengganti gula yang mengandung rendah kalori. Mengonsumsi erythritol aman untuk kesehatan gigi, ..."
                        />
                    </div>
                    <div className="col-lg-3">
                        <Tabcard
                            image={tabCard3}
                            title="Peran Tes Hematologi Lengkap dalam Mendiagnosis Penyakit"
                            judulLink="Hematologi"
                            link="#"
                            text="Tes hematologi lengkap merupakan pemeriksaan darah lengkap yang meliputi banyak komponen. Mulai dari sel darah putih, sel darah merah, ..."
                        />
                    </div>
                    <div className="col-lg-3">
                        <Tabcard
                            image={tabCard4}
                            title="Uji Vaksin Sinovac Diklaim Efektif Hingga 80 Persen"
                            judulLink="Coronavirus"
                            link="#"
                            text="“Salah satu vaksin yang dapat digunakan untuk mencegah infeksi COVID-19 adalah vaksin Sinovac. Penting untuk tahu efektivitas dan risiko ..."
                        />
                    </div>
                </div>
            </Tab>
            <Tab eventKey="hepatitis" title="Hepatitis">
                <div className="row pt-2" style={{ textAlign: "left" }}>
                    <div className="col-lg-3">
                        <Tabcard
                            image={tabCard1}
                            title="5 Hal Perlu Diketahui Sebelum Lakukan Ablasi Jantung"
                            judulLink="Jantung"
                            link="#"
                            text="“Sebelum melakukan ablasi jantung, ketahui risiko dan manfaatnya terlebih dahulu. Dibutuhkan persiapan fisik dan mental sebelum ..."
                        />
                    </div>
                    <div className="col-lg-3">
                        <Tabcard
                            image={tabCard2}
                            title="Pemanis Pengganti Gula, Ini 5 Fakta Erythritol"
                            judulLink="Diabetes"
                            link="#"
                            text="“Erythritol merupakan pemanis pengganti gula yang mengandung rendah kalori. Mengonsumsi erythritol aman untuk kesehatan gigi, ..."
                        />
                    </div>
                    <div className="col-lg-3">
                        <Tabcard
                            image={tabCard3}
                            title="Peran Tes Hematologi Lengkap dalam Mendiagnosis Penyakit"
                            judulLink="Hematologi"
                            link="#"
                            text="Tes hematologi lengkap merupakan pemeriksaan darah lengkap yang meliputi banyak komponen. Mulai dari sel darah putih, sel darah merah, ..."
                        />
                    </div>
                    <div className="col-lg-3">
                        <Tabcard
                            image={tabCard4}
                            title="Uji Vaksin Sinovac Diklaim Efektif Hingga 80 Persen"
                            judulLink="Coronavirus"
                            link="#"
                            text="“Salah satu vaksin yang dapat digunakan untuk mencegah infeksi COVID-19 adalah vaksin Sinovac. Penting untuk tahu efektivitas dan risiko ..."
                        />
                    </div>
                </div>
            </Tab>
            <Tab eventKey="kehamilan" title="Kehamilan">
                <div className="row pt-1" style={{ textAlign: "left" }}>
                    <div className="col-lg-3">
                        <Tabcard
                            image={tabCard1}
                            title="5 Hal Perlu Diketahui Sebelum Lakukan Ablasi Jantung"
                            judulLink="Jantung"
                            link="#"
                            text="“Sebelum melakukan ablasi jantung, ketahui risiko dan manfaatnya terlebih dahulu. Dibutuhkan persiapan fisik dan mental sebelum ..."
                        />
                    </div>
                    <div className="col-lg-3">
                        <Tabcard
                            image={tabCard2}
                            title="Pemanis Pengganti Gula, Ini 5 Fakta Erythritol"
                            judulLink="Diabetes"
                            link="#"
                            text="“Erythritol merupakan pemanis pengganti gula yang mengandung rendah kalori. Mengonsumsi erythritol aman untuk kesehatan gigi, ..."
                        />
                    </div>
                    <div className="col-lg-3">
                        <Tabcard
                            image={tabCard3}
                            title="Peran Tes Hematologi Lengkap dalam Mendiagnosis Penyakit"
                            judulLink="Hematologi"
                            link="#"
                            text="Tes hematologi lengkap merupakan pemeriksaan darah lengkap yang meliputi banyak komponen. Mulai dari sel darah putih, sel darah merah, ..."
                        />
                    </div>
                    <div className="col-lg-3">
                        <Tabcard
                            image={tabCard4}
                            title="Uji Vaksin Sinovac Diklaim Efektif Hingga 80 Persen"
                            judulLink="Coronavirus"
                            link="#"
                            text="“Salah satu vaksin yang dapat digunakan untuk mencegah infeksi COVID-19 adalah vaksin Sinovac. Penting untuk tahu efektivitas dan risiko ..."
                        />
                    </div>
                </div>
            </Tab>
        </Tabs>
    );
};

export default Tabcomponent;
