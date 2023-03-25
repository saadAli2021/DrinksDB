import React from "react";
import errorgif from "./errorgif.gif";
const ErrorPage = () => {
  return (
    <section className="section shadow">
      <div className="heading">
        <h3>Oopss! Something Went wrong!</h3>
      </div>
      <article className="contentArticle center">
        <img
          className="errorimg"
          src={errorgif}
          alt="dancing"
          loading="lazy"
          loop
        />
        <button className="btn shadow">Back To Home</button>
      </article>
    </section>
  );
};

export default ErrorPage;
