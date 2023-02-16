import React from "react";
import Resume from "../../resume.json";

function AboutMe() {
  return (
    <section className="section my-background" id="about">
	<div className="summary-text columns">
	  <div className="column is-4">
           <figure className="image container is-180x180">
            <img
             width="180px"
             height="180px"
             src={Resume.basics.picture}
             alt={Resume.basics.name}
             className="is-rounded"
             onError={(e)=>{e.target.onerror = null; e.target.src=Resume.basics.x_pictureFallback}}/> 
           </figure>
	  </div>
	  <div className="column is-10">

	  <h1 className="title has-text-gray-darker has-text-weight-bold my-name">{Resume.basics.x_title}</h1>

		<p className="subtitle is-6 has-text-dark has-text-weight-bold"> {Resume.basics.introduction1}</p>
		<p className="subtitle is-6 has-text-dark has-text-weight-bold"> {Resume.basics.introduction2}</p>
		<p className="subtitle is-6 has-text-dark has-text-weight-bold"> {Resume.basics.introduction3}</p>
	  
          </div>
 
          <div className="column is-1"></div>
        </div>

    </section>



  );
}

export default AboutMe;
