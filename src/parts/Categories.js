import React from "react";

export default function Categories({ data }) {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          {data.map((item, index) => {
            return (
              <div key={`categoru-${index}`} className="card card-category">
                <img
                  src={item.iconUrl}
                  alt={item.name}
                  className="icon-category"
                />
                <span className="meta-wrapper-name">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
