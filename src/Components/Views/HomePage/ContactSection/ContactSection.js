import React, { useState } from "react";
import { useMediaQuery } from "../../../Utils/useMediaQuery";

function ContactSection() {
  const isRowBased = useMediaQuery("(max-width: 850px)");

  const contactStyle = {
    container: (isRowBased) => ({
      width: "100%",
      backgroundColor: "#252023",
      color: "white",
      marginTop: "50px",
      display: "flex",
      flexDirection: isRowBased ? "column" : "row",
    }),
    header: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
    formContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: "60px",
    },
    inputContainer: {
      display: "flex",
      justifyContent: "center",
      margin: "20px 60px 30px 0",
      alignItems: "center",
      width: "100%",
      fontFamily: "Poppins,sans-seriff",
    },
    label: {},
    input: {
      display: "block",
      borderRadius: "20px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "50%",
      textAlign: "center",
    },
    buttonContainer: {
      width: "100%",
      margin: "40px 0 40px 0",
    },
    button: {
      color: "#252023",
      backgroundColor: "white",
      fontFamily: "Poppins,sans-seriff",
      fontSize: "17px",
      borderRadius: "10px",
      width: "150px",
      height: "40px",
    },
  };

  const [FormValues, setFormValues] = useState({
    name: "",
    email: "",
    gsm: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  const handleChange = (e) => {
    setFormValues({ ...FormValues, [e.target.name]: e.target.value });
    console.log(FormValues);
  };

  return (
    <div style={contactStyle.container(isRowBased)}>
      <div style={contactStyle.header}>
        <h1>Neem contact op</h1>
        <h4
          style={{
            color: "#32adaf",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          We laten zo spoedig mogelijk iets terug weten
        </h4>
        <div style={{ marginTop: "50px" }}>
          <img src={require("../../../../static/logo2.jpg")} alt="" />
        </div>
      </div>
      <div style={contactStyle.formContainer}>
        <form onSubmit={handleSubmit} style={contactStyle.form}>
          <div style={contactStyle.inputContainer}>
            <label style={contactStyle.label}>
              Naam:
              <input
                type="text"
                value={FormValues.name || ""}
                name="name"
                onChange={handleChange}
                style={contactStyle.input}
                required
              />
            </label>
          </div>
          <div style={contactStyle.inputContainer}>
            <label>
              E-mail:
              <input
                type="email"
                name="email"
                value={FormValues.email || ""}
                onChange={handleChange}
                style={contactStyle.input}
                required
              />
            </label>
          </div>

          <div style={contactStyle.inputContainer}>
            <label>
              GSM:
              <input
                type="tel"
                value={FormValues.gsm || ""}
                name="gsm"
                onChange={handleChange}
                style={contactStyle.input}
                required
              />
            </label>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <div>
              <label>Bericht aan :</label>
            </div>
            <div>
              <select style={{ borderRadius: "20px" }}>
                <option selected name="Wendy" value="Wendy">
                  Wendy
                </option>
                <option name="Daan" value="Daan">
                  Daan
                </option>
              </select>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <label>Bericht:</label>
            </div>

            <div style={contactStyle.inputContainer}>
              <textarea
                value={FormValues.message || ""}
                name="message"
                onChange={handleChange}
                style={{
                  height: "200px",
                  width: "150px",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
          <div style={contactStyle.buttonContainer}>
            <button type="submit" value="Verstuur" style={contactStyle.button}>
              Verstuur
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;
