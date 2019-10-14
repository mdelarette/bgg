import React from "react";
import PropTypes from "prop-types";

import { Page } from "../constants/pages";

// https://fontawesome.com/icons?d=gallery&m=free

const pages = [
  {
    id: Page.Home,
    name: "Menu",
    icon: "fas fa-home"
  },
  {
    id: Page.Players,
    name: "Players",
    icon: "fas fa-address-book"
  },
  {
    id: Page.Games,
    name: "Games",
    icon: "fas fa-dice-d6"
  },
  {
    id: Page.Selected,
    name: "Selected",
    icon: "fas fa-clipboard-check"
  }
];

const Footer = props => {
  return (
    <footer className="w3-container w3-theme-d5 bgg-footer">
      {pages.map((page, index) => (
        <div
          key={index}
          className={"w3-panel bgg-footer-item " + (page.id === props.page ? "selected w3-text-theme" : "")}
          onClick={e => props.onClick(e, page.id)}
        >
          <i className={page.icon} />
          <span>{page.name}</span>
        </div>
      ))}
    </footer>
  );
};

Footer.propTypes = {
  page: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Footer;
