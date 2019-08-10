import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";

import MyButton from "../Util/MyButton";

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    position: ["Balcony", "Medium", "Star"],
    desc: [
      "Donec egestas pellentesque lobortis. Aenean bibendum orci at dolor commodo, sed fringilla elit pulvinar.",
      "Donec venenatis luctus neque, gravida semper erat vestibulum at.sasad asddasv einas sldlk ytrean.",
      "ex ut fermentum posuere. Fusce ac dui id sem aliquet interdum a nec diam. Mauris tincidunt elit id urna."
    ],
    linkto: ["http://sales/b", "http://sales/m", "http://sales/s"],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.position[i]}</span>
            </div>
            <div className="pricing_description">
              <span>${this.state.desc[i]}</span>
            </div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase"
                bck="#ffa800"
                color="#ffffff"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
