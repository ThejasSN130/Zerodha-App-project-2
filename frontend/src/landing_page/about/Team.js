import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5  border-top mb-5">
        <h1 className=" text-center ">About Me</h1>
      </div>
      <div
        className="row p-3    text-muted "
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQGMy6cL-hEXvw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722349486501?e=1758153600&v=beta&t=KGlQJWPDIE2QXmXs1d-2zSqN1KkrO18OfHKg-Rf5wmg"
            style={{ borderRadius: "50%", width: "60%" }}
          />
          <h4 className="mt-5">Thejas SN</h4>
          <h6 className="">
            BCA Student at Amrita Vishwa Vidyapeetham (Mysuru)
          </h6>
        </div>
        <div className="col-6 p-3">
          <p>
            My name is Thejas SN, and I am currently pursuing a Bachelor of
            Computer Applications (BCA). I have a strong passion for technology
            and aspire to build a successful career in the tech field. With a
            keen interest in software development and emerging technologies, I
            am committed to continuously learning and enhancing my skills to
            contribute meaningfully to the digital world.
          </p>
          Connect on{" "}
          <a
            href="https://www.linkedin.com/in/thejas-sn-921706284/"
            style={{ textDecoration: "none" }}
          >
            Linkedin
          </a>{" "}
        </div>
      </div>
    </div>
  );
}

export default Team;
