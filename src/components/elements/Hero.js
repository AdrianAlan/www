import React from "react";
import NavBar from "./NavBar";
import Resume from "../../resume.json";

function Hero() {
  return (
    <section className="hero is-light is-fullheight has-background-light">
      <div className="hero-head">
        <NavBar />
      </div>
      <div className="hero-body">
        <div className="container">
          <p className="subtitle has-text-black">Hi, my name is</p>
          <h1 className="title">{Resume.basics.name}</h1>
          <h2 className="subtitle has-text-black has-text-weight-bold">
            {Resume.basics.summary} I am currently in {Resume.basics.location.region}, {Resume.basics.location.country}.
          </h2>
	  <p class="buttons">
	  <a href="files/Resume_Adrian_Alan_Pol.pdf" className="button has-text-weight-bold is-dark is-outlined has-text-black">Check My Résumé</a>
	  {Resume.basics.profiles.map((value, index) => {
            return (
                <a
                  href={value.url}
                  target="blank"
                  className="button is-dark is-outlined has-text-weight-bold"
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
        </div>
      </div>
    </section>
  );
}

export default Hero;
