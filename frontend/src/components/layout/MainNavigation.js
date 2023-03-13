import { useEffect, useState } from "react";

import "./css/navigation-menu.css";

import MediaQuery from "react-responsive";
import { Container } from "react-bootstrap";
import { Sling as Hamburger } from "hamburger-react";
import NavLinks from "./NavLinks";
import NavLinks2 from "./NavLinks2";

import logomain from "../../assets/images/logonew.png";

const MainNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) document.body.classList.add("open-menu");
    else document.body.classList.remove("open-menu");
  }, [isMenuOpen]);

  const linkClickedHandler = () => setIsMenuOpen(false);

  return (
    <Container>
      <nav>
        <ul className="nav-links list-unstyled">
          <li>
            <a href="#">
              <img
                src={logomain}
                className="discord-icon"
                style={{ width: "160px" }}
              />
            </a>
          </li>

          <MediaQuery minWidth={991}>
            <NavLinks2></NavLinks2>
          </MediaQuery>

          <li>
            <Hamburger
              toggled={isMenuOpen}
              toggle={setIsMenuOpen}
              color="#fff"
            />
          </li>
          {isMenuOpen && (
            <NavLinks
              className="menu-open align-column"
              onLinkClicked={linkClickedHandler}
            />
          )}
          {/* </MediaQuery> */}
        </ul>
      </nav>
    </Container>
  );
};

export default MainNavigation;
