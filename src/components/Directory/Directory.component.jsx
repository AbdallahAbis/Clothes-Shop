import React, { Component } from "react";

import MenuItem from "../Menu-Item/Menu-Item.component";

import "./Directory.styles.scss";

class Directory extends Component {
  state = {
    sections: [
      {
        title: "hats",
        imageUrl: "https://bit.ly/3akbQ0I",
        id: 1,
        linkUrl: "hats"
      },
      {
        title: "jackets",
        imageUrl: "https://bit.ly/2wimNS2",
        id: 2,
        linkUrl: ""
      },
      {
        title: "sneakers",
        imageUrl: "https://bit.ly/2vDAavH",
        id: 3,
        linkUrl: ""
      },
      {
        title: "women",
        imageUrl: "https://bit.ly/2xY1yoX",
        size: "large",
        id: 4,
        linkUrl: ""
      },
      {
        title: "men",
        imageUrl: "https://bit.ly/3943j0N",
        size: "large",
        id: 5,
        linkUrl: ""
      }
    ]
  };
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
