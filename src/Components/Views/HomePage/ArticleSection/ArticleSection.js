import React from "react";
import "./ArticleSection.scss";

function ArticleSection() {
  return (
    <div>
      <div id="logo-container-article">
        <img
          src={require("../../../../static/logo2.jpg")}
          alt="logo"
          id="logo-article"
        />
      </div>

      <section id="about-us-article">
        <h1 id="header-article">Wie zijn wij...</h1>
        <a id="aboutus"></a>
        <div id="about-us-article-container">
          <div id="wendy-article">
            <div>
              <h2>Ik ben wendy</h2>

              <div style={{ display: "flex", marginTop: "-65px" }}>
                <img
                  src={require("../../../../static/Wendy_profile.png")}
                  alt="wendy-profile"
                  id="wendy-profilepic-article"
                />
              </div>
              <div
                style={{
                  backgroundColor: "#252023",
                  padding: "50px",
                  color: "white",
                  marginRight: "20px",
                  marginTop: "36px",
                }}
              >
                <p>
                  Mijn naam is Wendy Faust. Ik ben 39 jaar en woon in Termien.
                  Ik ben als verpleegkundige afgestudeerd in 2002 en ben dan ook
                  beginnen werken in het Ziekenhuis Oost Limburg.
                  <br />
                  <br /> Op verschillende afdelingen heb ik veel ervaring en
                  kennis opgedaan, waaronder orthopedie, neurologie, neus-keel
                  en oor. <br /> <br /> Ondertussen ben ik reeds 9 jaar werkzaam
                  in de thuiszorg. Dit is mijn passie! Waarom? Omdat ik het
                  belangrijk vind dat mensen thuis, in hun vertrouwde omgeving,
                  professioneel verzorgd kunnen worden.
                  <br />
                  <br />
                </p>
                <div>
                  <img
                    src={require("../../../../static/email_icon.svg")}
                    style={{
                      filter:
                        "invert(100%) sepia(0%) saturate(0%) hue-rotate(253deg) brightness(107%) contrast(104%)",
                      margin: "0 20px 0 0",
                    }}
                    alt="email-icon"
                  ></img>
                  <span className="email-article">
                    wf.thuisverpleging@gmail.com
                  </span>
                </div>
                <div>
                  <img
                    src={require("../../../../static/phone_icon.svg")}
                    style={{
                      filter:
                        "invert(100%) sepia(0%) saturate(0%) hue-rotate(253deg) brightness(107%) contrast(104%)",
                      margin: "20px 20px 0 0",
                    }}
                    alt="phone-icon"
                  ></img>
                  <span
                    style={{
                      display: "inline-block",
                      position: "relative",
                      top: "-7px",
                    }}
                  >
                    +32 478 715 108
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div id="daan-article">
            <div>
              <h2 id="daan-header">Ik ben daan</h2>
              <div style={{ display: "flex", marginTop: "-50px" }}>
                <img
                  src={require("../../../../static/Daan_profile.png")}
                  alt="daan-profile"
                  id="daan-profilepic-article"
                />
              </div>
              <div
                style={{
                  backgroundColor: "#252023",
                  padding: "50px",
                  color: "white",
                }}
              >
                <p>
                  Ik ben Daan Claes. Ik ben 21 jaar en woon in Boxbergheide. Ik
                  heb verpleegkunde gestudeerd aan hogeschool UCLL. <br />{" "}
                  <br /> Nadat ik afgestudeerd ben, heb ik een tijdje gewerkt
                  bij Het Wit-Gele Kruis waar ik eerder al werkte als student.
                  Hier heb ik veel ervaring opgedaan binnen de thuisverpleging.{" "}
                  <br /> <br /> Nu start ik samen met Wendy als zelfstandig
                  thuisverpleging. Ik heb voor deze job gekozen omdat ik graag
                  met mensen bezig ben en ik het belangrijk vind dat iedereen de
                  juiste zorg krijgt die hij verdient. <br />
                  <br />
                </p>
                <div>
                  <img
                    src={require("../../../../static/email_icon.svg")}
                    style={{
                      filter:
                        "invert(100%) sepia(0%) saturate(0%) hue-rotate(253deg) brightness(107%) contrast(104%)",
                      margin: "0 20px 0 0",
                    }}
                    alt="email-icon"
                  ></img>
                  <span className="email-article">
                    dc.thuisverpleging@gmail.com
                  </span>
                </div>
                <div>
                  <img
                    src={require("../../../../static/phone_icon.svg")}
                    style={{
                      filter:
                        "invert(100%) sepia(0%) saturate(0%) hue-rotate(253deg) brightness(107%) contrast(104%)",
                      margin: "20px 20px 0 0",
                    }}
                    alt="phone-icon"
                  ></img>
                  <span
                    style={{
                      display: "inline-block",
                      position: "relative",
                      top: "-7px",
                    }}
                  >
                    +32 470 543 705
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticleSection;
