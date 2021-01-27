import React from "react";
import Button from "../elements/Button";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row footer-first">
          <div className="col-auto" style={{ width: 650 }}>
            <img
              src="https://cdn.arkademi.com/asset/img/20190819112923/Logo-Arkademi-PNG-Belajar-dan-Kursus-Online-162-40.png"
              alt="logo"
            />
            <p className="brand-tagline">
              Arkademi adalah massive open online course (MOOC) platform karya
              anak bangsa Indonesia. Pembelajaran di Arkademi dikhususkan untuk
              skill based learning atau pembelajaran berbasis keahlian yang
              diantarkan melalui kelas belajar dan kursus online melalui
              aplikasi Arkademi berbasis mobile app dan web. Di Arkademi setiap
              individu dan lembaga kursus dapat membuka dan mengkomersialkan
              kelas onlinenya dan menjangkau siswa dari seluruh Indonesia.
            </p>
            <h6>Akselerator</h6>
            <p className="brand-tagline">
              Arkademi adalah bagian program inkubasi dan akselerator dari
              perusahaan top-level dunia: SOSV MOX (Mobile Only Accelerator),
              Amazon Web Service (Edstart Program) dan Y Combinator (Startup
              School) yang dipilih dari tech startup edukasi terbaik dunia.
            </p>
            <img
              src="https://cdn.arkademi.com/asset/img/20200117152139/Arkademi-SOSV-MOX-AWS-Edstart-Program-Member-y-combinator-startup-school.png"
              className="footer-brand-logo"
              alt=""
            />
          </div>
          <div className="col-2 ml-auto">
            <h6 className="mt-2 ml-2">Alat</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/">
                  Kalkulator Pajak Karyawan
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/">
                  Kalkulator Nilai Usaha
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/">
                  Tes Teknik Kewirausahaan
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/">
                  Diagnosa Usaha
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/">
                  FAQ
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/">
                  Karier
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/">
                  Privacy Policy
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 ml-auto">
            <h6 className="mt-2">Arkademi Mobile App</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <img
                  style={{ width: 100 }}
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png?hl=id"
                />
              </li>
              <li className="list-group-item">
                <img
                  style={{ width: 100 }}
                  src="https://cdn.arkademi.com/asset/img/20200408062000/Aplikasi-Arkademi-ios-appstore-e35.png"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center footer-second">
            <h6>Metode Pembayaran</h6>
            <div className="row justify-content-center">
              <div className="col-1">
                <img
                  src="https://midtrans.com/assets/img/logo.svg?v=1608699083"
                  alt="logo"
                  className="logo-pay"
                />
              </div>
              <div className="col-1">
                <img
                  src="https://bankmandiri.co.id/image/layout_set_logo?img_id=31567&t=1605890315592"
                  alt="logo"
                  className="logo-pay"
                />
              </div>
              <div className="col-1">
                <img
                  src="https://www.bca.co.id/assets/images/logo-bca.gif;bcad93b5a3b4897622d"
                  alt="logo"
                  className="logo-pay"
                />
              </div>
              <div className="col-1">
                <img
                  src="https://lelogama.go-jek.com/service_icon_text/gopay.svg"
                  alt="logo"
                  className="logo-pay"
                />
              </div>
              <div className="col-1">
                <img
                  src="https://www.atmbersama.com/data/images/logo3x.png"
                  alt="logo"
                  className="logo-pay"
                />
              </div>
              <div className="col-1">
                <img
                  src="https://www.jaringanprima.co.id/bundle/default/img/Prima-Logo.png"
                  alt="logo"
                  className="logo-pay"
                />
              </div>
              <div className="col-1">
                <img
                  src="https://www.alto.co.id/images/alto-header-logo.png"
                  alt="logo"
                  className="logo-pay"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row footer-last">
          <div className="col-7">
            Copyright 2017-2020 PT Arkademi Daya Indonesia
          </div>
          <div className="col-auto ml-auto">
            <div>
              <a className="mr-4">Ketentuan Layanan</a>
              <a className="ml-4">Kontak</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
