import React, { Component } from "react";

class WhosGoing extends Component {
  render() {
    const steeringWheelSvg = (
      <svg
        className="wheel-svg"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 32 32"
      >
        <g id="steering_x5F_wheel">
          <path
            className="wheel-path"
            d="M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z M16,4
                c5.207,0,9.605,3.354,11.266,8H4.734C6.395,7.354,10.793,4,16,4z M16,18c-1.105,0-2-0.895-2-2s0.895-2,2-2s2,0.895,2,2
                S17.105,18,16,18z M4,16c5.465,0,9.891,5.266,9.984,11.797C8.328,26.828,4,21.926,4,16z M18.016,27.797
                C18.109,21.266,22.535,16,28,16C28,21.926,23.672,26.828,18.016,27.797z"
          />
        </g>
      </svg>
    );

    return (
      <div className="WhosGoing">
        <div className="pages-wrapper">
          <h3 className="pages-title">Who's Going</h3>

          <div className="whos-going-intro">
            <p>
              These people are coming, are you?
              <br />
              <br />
            </p>
            <p>
              +1 means they're bringing someone <br />A steering wheel indicates
              a sober driver.
            </p>
          </div>
          <div className="whosGoingAndPlaylist-list-wrapper">
            {this.props.attendees.map(attendee => (
              <div key={attendee.id.toString()} className="name-card">
                <span className="capitalize-details">
                  {attendee.firstName} {attendee.lastName}
                </span>
                <span>{attendee.plusOne ? "+1" : null}</span>
                <br />
                <span>Phone: {attendee.phone}</span>

                <span className="steering-wheel-container">
                  {attendee.soberDriver ? steeringWheelSvg : null}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default WhosGoing;
