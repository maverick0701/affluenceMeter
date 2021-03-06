import React, { Component } from "react";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
export default class landing extends Component {
  render() {
    return (
      <div>
        <Particles
          height="120vh"
          params={{
            particles: {
              number: {
                value: 860,
                density: {
                  enable: true,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 4,
                },
              },
            },
          }}
        />

        <div id="text1">
          <p className="subtitle col">Radioactive is here</p>
          <h1 className="title">
            <div className="col flexMe">
              <div>new society </div>
              <div>of trust</div>
            </div>
          </h1>
        </div>
        <Link to="/knowMore">
          {" "}
          <div className="btnDiv">
            <div>Know More</div>
          </div>
        </Link>

        <div className="img-3"></div>
        <div class="overlay first"></div>
        <div class="overlay second"></div>
        <div class="overlay third"></div>
      </div>
    );
  }
}
