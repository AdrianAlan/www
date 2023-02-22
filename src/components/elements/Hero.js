import React from "react";
import Resume from "../../resume.json";
import parse from "html-react-parser";

function Hero() {
  return (
    <section className="hero-body is-light is-fullheight">
      <div className="summary-text columns">
        <div className="hero-body column is-12">
          <div className="container">
            <p className="title">{Resume.basics.name}</p>
            <p class="buttons">
              <a href="files/Resume_Adrian_Alan_Pol.pdf" className="button is-dark is-outlined has-text-black">Résumé</a>
              {Resume.basics.profiles.map((value, index) => {
                return (
                  <a
                    href={value.url}
                    target="blank"
                    className="button is-dark is-outlined"
                    title={value.network}
                  >
                    <span className="icon is-medium">
                      <i className={value.x_icon} > </i>
                    </span>
                    <span className="has-text-black">{value.network}</span>
                  </a>
                );
              })}
            </p>
            <p className="subtitle is-5 has-text-dark"> {parse(Resume.basics.introduction1)}</p>
            <p className="subtitle is-5 has-text-dark"> {parse(Resume.basics.introduction2)}</p>
            <p className="subtitle is-5 has-text-dark"> {parse(Resume.basics.introduction3)}</p>
            <p className="subtitle is-5 has-text-dark"> {parse(Resume.basics.introduction4)}</p>
            <p className="subtitle is-5 has-text-dark"> {parse(Resume.basics.introduction5)}</p>
          </div>
        </div>
      </div>
      <div className="summary-text columns">
        <div className="column is-12">
          <figure className="image container is-180x180">
            <img
              width="180px"
              height="180px"
              src={Resume.basics.picture}
              alt={Resume.basics.name}
              className="is-rounded"
              onError={(e) => { e.target.onerror = null; e.target.src = Resume.basics.x_pictureFallback }} />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;
