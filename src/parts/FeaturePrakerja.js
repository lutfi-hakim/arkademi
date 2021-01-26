import React from "react";
import Button from "../elements/Button";
import userIcon from "assets/images/icons/user.png";
import starIcon from "assets/images/icons/star.png";
import glintIcon from "assets/images/icons/glints.png";

export default function FeaturePrakerja({ data }) {
  return (
    <section className="prakerja">
      <div className="container">
        <div className="row justify-content-center">
          <h5 className="mb-4">Kursus Prakerja</h5>
        </div>
        <div className="row mt-4">
          {data.map((item, index) => {
            return (
              <div key={`prakerja-${index}`} className="col-3">
                <div className="card card-featured">
                  <figure className="img-wrapper">
                    <img
                      className="img-cover"
                      src={item.imageUrl}
                      alt={item.name}
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <h4>{item.name}</h4>
                    <span>
                      <img src={starIcon} alt="icon image" className="icon" />{" "}
                      {item.score}
                    </span>
                    <span>
                      <img src={userIcon} alt="icon image" className="icon" />{" "}
                      {item.sold}
                    </span>
                    <div className="vendor">
                      <img src={glintIcon} alt="icon image" className="icon" />{" "}
                      {item.subName}
                    </div>
                    <div className="row justify-content-center">
                      <h6>
                        <strong>Rp {item.price}</strong>{" "}
                        <span
                          style={{
                            textDecoration: "line-through",
                            fontSize: 12,
                          }}
                        >
                          Rp 500.000
                        </span>
                      </h6>
                    </div>
                    <div className="row justify-content-center">
                      <Button
                        className="btn btn-danger-custom"
                        isExternal
                        isSmall
                      >
                        Ambil Kelas
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row justify-content-center mt-4 pt-3">
          <Button className="btn btn-outline-light" isExternal isSmall>
            Semua Kursus Prakerja
          </Button>
        </div>
      </div>
    </section>
  );
}
