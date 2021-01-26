import React from "react";
import Button from "../elements/Button";

export default function Hero() {
  return (
    <section>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h2 className="display-4">Kursus dari Genggaman</h2>
          <p className="lead">
            Tingkatkan karier dan raih pekerjaan yang anda impikan dengan
            memiliki sertifikat
            <br />
            hard copy dari lembaga kursus yang kredibel dan belajar secara
            online
          </p>
          <Button
            className="btn btn-danger-custom"
            isExternal
            isLarge
            style={{ marginTop: 25 }}
          >
            Daftar Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
}
