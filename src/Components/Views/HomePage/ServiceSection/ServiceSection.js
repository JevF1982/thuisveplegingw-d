import React from "react";
import { ServiceData } from "./ServiceData";
import { useMediaQuery } from "../../../Utils/useMediaQuery";

function ServiceSection() {
  const isRowBased = useMediaQuery("(max-width: 950px)");

  const style = {
    divstyle: (isRowBased) => ({
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      flexGrow: 1,
      border: "1px solid black",
      boxShadow: "1px 1px #000000",
      width: "400px",

      color: "#252023",
      margin: "10px",
      height: "auto",
      alignSelf: isRowBased ? "" : "stretch",
      textAlign: "center",
    }),
    containerstyle: (isRowBased) => ({
      flexDirection: isRowBased ? "column" : "row",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      marginTop: "90px",
    }),
    iconstyle: { width: "90px", margin: "90px 0 60px 0", color: "#252023" },
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <h1 style={{ color: "#32adaf" }}>Service</h1>
      </div>
      <div style={style.containerstyle(isRowBased)}>
        {ServiceData.map((data, index) => (
          <div key={index} style={style.divstyle(isRowBased)}>
            <img
              src={data.icon}
              alt={`icon-${index}`}
              style={style.iconstyle}
            />
            <h2 style={{ color: "#252023" }}>{data.header}</h2>

            <p style={{ padding: "40px", letterSpacing: "1px" }}>
              {data.paragraph1}
            </p>
            <p
              style={{
                padding: "40px",
                letterSpacing: "1px",
                marginTop: "-10px",
              }}
            >
              {data.paragraph2}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceSection;
