import Herocard from "./Herocard";
import image1 from "./../assets/image-1.png";
import image2 from "./../assets/image-2.png";
import image3 from "./../assets/image-3.png";
import image4 from "./../assets/image-4.png";
import image5 from "./../assets/image-5.png";
import home from "./../assets/home.svg";
import Asuransicard from "./Asuransicard";
import asuransi from "./../assets/asuransi.png";
import "remixicon/fonts/remixicon.css";
import penawaranMenarik1 from "./../assets/penawaranMenarik1.jpeg";
import penawaranMenarik2 from "./../assets/penawaranMenarik2.jpeg";
import penawaranMenarik3 from "./../assets/penawaranMenarik3.jpeg";
import Featurecard from "./Featurecard";
import layananBidan from "./../assets/layananBidan.png";
import Penawarancard from "./Penawarancard";
import covidTest from "./../assets/covid-19-test.png";
import diabetesCare from "./../assets/diabetes-care.png";
import heartCare from "./../assets/heart-care.png";
import vaccineCovid from "./../assets/vaccine_checker.png";
import kesehatanKulit from "./../assets/skin-health.png";
import kesehatanSeksual from "./../assets/sexual-health.png";
import kesehatanMental from "./../assets/mental-health-v2.png";
import kesehatanHewan from "./../assets/animal-health-v2.png";
import parenting from "./../assets/parenting.png";
import cekStres from "./../assets/stress-check-icon.png";
import kalenderMenstruasi from "./../assets/period-tracker-v2.png";
import kalkulatorBMI from "./../assets/bmi-calculator-v2.png";
import kalenderKehamilan from "./../assets/pregnancy-v2.png";
import risikoJantung from "./../assets/heart-risk-calculator.png";
import risikoDiabetes from "./../assets/diabetes-calculator.png";
import pengingatObat from "./../assets/medicine-reminder-v2.png";
import donasi from "./../assets/donation.png";
import tesDepresi from "./../assets/depresi.png";
import tesGangguanKecemasan from "./../assets/anxiety.png";
import PenawaranCarousel from "./PenawaranCarousel";
import Tabcomponent from "./Tab";
import obatPerawatan from "./../assets/obatVitamin1.png";
import vitaminSuplemen from "./../assets/obatVitamin2.png";
import ibuAnak from "./../assets/obatVitamin3.png";
import susu from "./../assets/obatVitamin4.png";
import ramadhan from "./../assets/obatVitamin5.png";
import Ovitcard from "./Ovitcard";
import Ovitcardsingle from "./Ovitcardsingle";

const Main = () => {
    return (
        <div>
            <div
                className="col-lg-12 py-5"
                style={{
                    backgroundColor: "#F6F8FC",
                    backgroundImage: `url(${home})`,
                    backgroundPosition: "bottom right",
                    backgroundRepeat: "no-repeat",
                }}>
                <div className="container">
                    <div className="row m-0">
                        <div
                            className="p-0 py-1 col-lg-6"
                            style={{ textAlign: "left" }}>
                            <h3>Solusi Kesehatan Terlengkap</h3>
                            <p style={{ color: "#666666" }}>
                                Chat dokter, kunjungi rumah sakit, beli obat,
                                cek lab dan update informasi seputar kesehatan,
                                semua bisa di Halodoc!
                            </p>
                        </div>
                    </div>
                    <div className="row m-0 d-flex gap-2">
                        <div className="p-0 col-md-4 col-sm-6 col-lg-2 col-4">
                            <Herocard
                                text="Chat dengan Dokter"
                                image={image1}
                            />
                        </div>
                        <div className="p-0 col-md-4 col-sm-6 col-lg-2 col-4">
                            <Herocard text="Toko Kesehatan" image={image2} />
                        </div>
                        <div className="p-0 col-md-4 col-sm-6 col-lg-2 col-4">
                            <Herocard text="Buat Janji RS" image={image3} />
                        </div>
                        <div className="p-0 col-md-4 col-sm-6 col-lg-2 col-4">
                            <Herocard text="Janji Medis" image={image4} />
                        </div>
                        <div className="p-0 col-md-4 col-sm-6 col-lg-2 col-4">
                            <Herocard text="Layanan Home Lab" image={image5} />
                        </div>
                    </div>
                    <div className="row mt-4 col-lg-4 col-md-6 col-sm-10 col-12 m-0 p-0">
                        <div className="p-0">
                            <Asuransicard
                                text="Dapatkan manfaat asuransi secara langsung untuk layanan Halodoc."
                                image={asuransi}
                                title="Sambungkan Asuransimu"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row pt-5 d-flex justify-content-center">
                    <div className="row px-0">
                        <div className="col-12">
                            <h2 style={{ textAlign: "left" }}>
                                Layanan Khusus
                            </h2>
                        </div>
                    </div>
                    <div
                        className="row p-lg-3 col-12"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                        <div className="col">
                            <Featurecard
                                image={layananBidan}
                                text="Layanan Bidan"
                            />
                        </div>
                        <div className="col">
                            <Featurecard
                                image={covidTest}
                                text="Tes COVID-19"
                            />
                        </div>
                        <div className="col">
                            <Featurecard
                                image={diabetesCare}
                                text="Perawatan Diabetes"
                            />
                        </div>
                        <div className="col">
                            <Featurecard
                                image={heartCare}
                                text="Kesehatan Jantung"
                            />
                        </div>
                        <div className="col">
                            <Featurecard
                                image={vaccineCovid}
                                text="Vaksinasi COVID-19"
                            />
                        </div>
                        <div className="col">
                            <Featurecard
                                image={kesehatanKulit}
                                text="Kesehatan Kulit"
                            />
                        </div>
                        <div className="col">
                            <Featurecard
                                image={kesehatanSeksual}
                                text="Kesehatan Seksual"
                            />
                        </div>
                        <div className="col">
                            <Featurecard
                                image={kesehatanMental}
                                text="Kesehatan Mental"
                            />
                        </div>
                        <div className="col">
                            <Featurecard
                                image={kesehatanHewan}
                                text="Kesehatan Hewan"
                            />
                        </div>
                        <div className="col">
                            <Featurecard image={parenting} text="Parenting" />
                        </div>
                    </div>
                </div>
                <div className="row pt-1 d-flex justify-content-center">
                    <div className="row px-0">
                        <div className="col-12">
                            <h2 style={{ textAlign: "left" }}>
                                Penunjang Kesehatan
                            </h2>
                        </div>
                    </div>
                    <div
                        className="row p-lg-3 col-xs-10"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                        <div className="col">
                            <Featurecard image={cekStres} text="Cek Stres" />
                        </div>
                        <div className="col">
                            <Featurecard
                                image={kalenderMenstruasi}
                                text="Kalender Menstruasi"
                            />
                        </div>
                        <div className="col">
                            <Featurecard
                                image={kalkulatorBMI}
                                text="Kalkulator BMI"
                            />
                        </div>
                        <div className="col">
                            <Featurecard
                                image={kalenderKehamilan}
                                text="Kalender Kehamilan"
                            />
                        </div>
                        <div className="col">
                            <Featurecard
                                image={risikoJantung}
                                text="Risiko Jantung"
                            />
                        </div>
                        <div className="col">
                            <Featurecard
                                image={risikoDiabetes}
                                text="Risiko Diabetes"
                            />
                        </div>
                        <div className="col">
                            <Featurecard
                                image={pengingatObat}
                                text="Pengingat Obat"
                            />
                        </div>
                        <div className="col">
                            <Featurecard image={donasi} text="Donasi" />
                        </div>
                        <div className="col">
                            <Featurecard
                                image={tesDepresi}
                                text="Tes Depresi"
                            />
                        </div>
                        <div className="col">
                            <Featurecard
                                image={tesGangguanKecemasan}
                                text="Tes Gangguan Kecemasan"
                            />
                        </div>
                    </div>
                </div>
                <div className="row pt-5 d-flex justify-content-center">
                    <div className="row px-0">
                        <div className="col-12">
                            <h2 style={{ textAlign: "left" }}>
                                Penawaran Menarik
                            </h2>
                        </div>
                    </div>
                    <div
                        className="row p-lg-3 p-1 col-lg-12"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                        <div className="col p-0">
                            <PenawaranCarousel />
                        </div>
                    </div>
                </div>
                <div className="row pt-5 d-flex justify-content-center align-items-center">
                    <div className="row px-0">
                        <div className="col-10">
                            <h2 style={{ textAlign: "left" }}>
                                Baca 100+ Artikel Baru
                            </h2>
                        </div>
                        <div className="col-2">
                            <p style={{ textAlign: "right" }}>
                                <a
                                    href="https://ppqita.com"
                                    style={{
                                        textDecoration: "none",
                                        color: "#DC0E4F",
                                    }}>
                                    Lihat Semua
                                </a>
                            </p>
                        </div>
                    </div>
                    <div
                        className="row px-lg-0 p-lg-3 p-1 col-lg-12"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                        <div className="col">
                            <Tabcomponent />
                        </div>
                    </div>
                </div>
                <div className="row pt-5 d-flex justify-content-center mb-5">
                    <div className="row px-0">
                        <div className="col-12">
                            <h2 style={{ textAlign: "left" }}>
                                Obat & Vitamin
                            </h2>
                            <p style={{ textAlign: "left" }}>
                                Dapatkan informasi seputar kandungan, aturan,
                                petunjuk penggunaan obat dan vitamin di sini
                            </p>
                        </div>
                    </div>
                    <div
                        className="row px-lg-0 p-lg-1 p-1 flex-wrap col-sm-12"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <div className="col">
                            <Ovitcard
                                text="Obat & Perawatan"
                                image={obatPerawatan}
                            />
                        </div>
                        <div className="col">
                            <Ovitcard
                                text="Vitamin & Suplemen"
                                image={vitaminSuplemen}
                            />
                        </div>
                        <div className="col">
                            <Ovitcard text="Ibu & Anak" image={ibuAnak} />
                        </div>
                    </div>
                    <div
                        className="row px-lg-0 p-lg-1 p-1 col-lg-12"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                        <div className="col">
                            <Ovitcard text="Susu" image={susu} />
                        </div>
                        <div className="col">
                            <Ovitcard text="Ramadhan" image={ramadhan} />
                        </div>
                        <div className="col">
                            <a
                                href="#"
                                style={{
                                    textDecoration: "none",
                                    color: "red",
                                }}>
                                <Ovitcardsingle text="LIHAT SEMUA" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
