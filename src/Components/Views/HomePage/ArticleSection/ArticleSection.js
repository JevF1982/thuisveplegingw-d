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
        <div id="about-us-article-container">
          <div id="wendy-article">
            <div>
              <h2>Ik ben wendy</h2>

              <div style={{ display: "flex" }}>
                <img
                  src={require("../../../../static/Wendy_profile.png")}
                  alt="wendy-profile"
                  id="wendy-profilepic-article"
                />
              </div>
              <p
                style={{
                  backgroundColor: "#252023",
                  padding: "50px",
                  color: "white",
                  marginRight: "20px",
                  marginTop: "36px",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                pariatur quidem ipsa. Quaerat perferendis illum aperiam. Rem
                nobis illum cupiditate, doloribus iusto similique dolorem
                voluptate aut eligendi fuga vitae ex!
              </p>
            </div>
          </div>
          <div id="daan-article">
            <div>
              <h2>Ik ben daan</h2>
              <div style={{ display: "flex" }}>
                <img
                  src={require("../../../../static/Daan_profile.png")}
                  alt="daan-profile"
                  id="daan-profilepic-article"
                />
              </div>
              <p
                style={{
                  backgroundColor: "#252023",
                  padding: "50px",
                  color: "white",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                facilis voluptatem numquam distinctio non soluta deleniti ex
                unde accusamus quisquam? Voluptatum adipisci saepe maxime vel,
                distinctio quae repellendus animi deserunt!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticleSection;
