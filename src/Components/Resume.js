import React from "react";

function Resume() {
  return (
    <>
      <section className="about_main">
        <h2>Resume</h2>
        <div className="resume_main">
          <div className="resume_box">
            <div className="text">
              <img
                src="https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fedu-icon-2.png&w=48&q=75"
                alt="education"
              />
              <h3>Education</h3>
            </div>
            <div className="content_box">
              <div className="design bg_pink resume_content">
                <span>2022-2023</span>
                <h4>6th Month Training in Reactjs</h4>
                <span>Mohali,Punjab</span>
              </div>
            </div>
            <div className="content_box">
              <div className="design bg_catkrill resume_content">
                <span>2015-2017</span>
                <h4>Master's In Computer Application - KCL-IMT</h4>
                <span>Jalandhar,Punjab</span>
              </div>
            </div>
            <div className="content_box">
              <div className="design bg_pink resume_content">
                <span>2013-2015</span>
                <h4>Bachelor's In Computer Application -St. Soldier College</h4>
                <span>Jalandhar,Punjab</span>
              </div>
            </div>
          </div>
          <div className="resume_box">
            <div className="text">
              <img
                src="https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fedu-icon-2.png&w=48&q=75"
                alt="education"
              />
              <h3>Experience</h3>
            </div>
            <div className="content_box">
              <div className="design bg_catkrill resume_content"></div>
            </div>
            <div className="content_box">
              <div className="design bg_pink resume_content"></div>
            </div>
            <div className="content_box">
              <div className="design bg_catkrill resume_content"></div>
            </div>
          </div>
          <div className="resume_box">
            <div className="text">
              <img
                src="https://dlvkyia8i4zmz.cloudfront.net/FTA8xwtmSsaNUbtjBsvE_soft_skills.png"
                alt="Skills"
              />
              <h3>Skills</h3>
            </div>
            <div className="content_box">
              <div className="design bg_pink resume_content"></div>
            </div>
            <div className="content_box">
              <div className="design bg_catkrill resume_content"></div>
            </div>
            <div className="content_box">
              <div className="design bg_pink resume_content"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
