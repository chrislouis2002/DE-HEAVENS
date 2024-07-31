import React from "react";
import Heading from "../common/Heading";
import { about } from "../data/Data";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">
                About Us
              </h6>
              <h1 className="mb-4">
                Welcome to{" "}
                <span className="text-primary text-uppercase">DE HEAVENS</span>
              </h1>
              <p className="mb-4">
              Nestled in the heart of Awka, Nigeria, DE HEAVENS is more than just a place to stay – it’s a retreat that embodies comfort, elegance, and unparalleled hospitality.

Our hotel offers a harmonious blend of modern luxury and traditional warmth, creating a unique environment where every guest feels at home. From our beautifully appointed rooms to our exquisite dining options, every detail has been thoughtfully designed to ensure a memorable experience.

At DE HEAVENS, we pride ourselves on delivering exceptional service with a personal touch. Our dedicated team is committed to making your stay as enjoyable and stress-free as possible, whether you’re here for business or pleasure.

Explore the vibrant culture of Awka while enjoying the serenity of our premium amenities. With our convenient location, you’ll be close to local attractions, dining, and entertainment, making it easy to immerse yourself in the local charm.

Join us at DE HEAVENS, where comfort meets sophistication and every stay is a celebration of hospitality. We look forward to welcoming you soon!
              </p>
              <div className="row g-3 pb-4">
                {about.map((item, key) => (
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        {item.icon}
                        <h2 className="mb-1" data-toggle="counter-up">
                          {item.count}
                        </h2>
                        <p className="mb-0">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/services" className="btn btn-primary py-3 px-5 mt-2">
                Explore More
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.1s"
                    src="/assets/img/ABOUT1.jpg"
                    style={{ marginTop: "25%" }}
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.3s"
                    src="/assets/img/ABOUT2.jpg"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-50 wow zoomIn"
                    data-wow-delay="0.5s"
                    src="/assets/img/ABOUT3.jpg"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.7s"
                    src="/assets/img/ABOUT4.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
