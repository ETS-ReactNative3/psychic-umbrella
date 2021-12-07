import React from 'react';
import { HiChevronDoubleDown } from "react-icons/hi";

import './Page.css';

function Page(props) {

  if (props.backg) {
    return (
      <>
      <div className="imagecontainer">
        <div className="leftHalf">
        <div className="media-container">
          <img className="photo" alt="alt" src={props.backg}/>
        </div>
        </div>
        <div className="rightHalf">
          <div className="header">
            {props.header}
          </div>
          <div className="sub">
            {props.sub}
          </div>

        </div>

      </div>
      <div className = "chevron"><HiChevronDoubleDown /></div>
</>

    );
  }

  if (props.specialBroken) {
    return (
      <>
      <div className="topHalf">
        <div className="headerContainer">
          <div className="header">sometimes</div>
          <div className="header">this</div>
          <div className="header">site</div>
          <div className="header">may</div>
          <div className="header">be</div>
          <div className="header broken">broken</div>
        </div>
      </div>
      <div className="content-container">
        <div className="sub">
          {props.sub}
        </div>
      </div>
      </>
    );
  }

  return (
    <>
      <div className="topHalf">
      <div className="header">
        {props.header}
      </div>
      </div>
      <div className="content-container">
        <div className="sub">
          {props.sub}
        </div>
      </div>
    </>
  );
}

export default Page;
