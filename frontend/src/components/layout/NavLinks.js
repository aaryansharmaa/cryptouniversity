import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import foxIcon from "../../assets/images/fox-icon.svg";
import discordIcon from "../../assets/images/discord.svg";
import { useDispatch, useSelector } from "react-redux";
import { connect, disconnect } from "../../redux/user/userActions";

const WalletCard = () => {
  // const [userBalance, setUserBalance] = useState(null)
  const [connButtonText, setConnButtonText] = useState("Connect");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // const data = useSelector(state => state.data)
  const account = user.account;
  useEffect(() => {
    if (account !== "") {
      if (account) {
        setConnButtonText(
          account.substring(0, 4) + "..." + account.substring(38, 42)
        );
      } else {
        setConnButtonText("Connect");
        dispatch(disconnect());
      }
    }
  }, [user.account, dispatch, account]);

  const handleConnectClick = (e) => {
    e.preventDefault();
    if (user.account === "") {
      dispatch(connect());
    } else {
      if (account) {
        alert(
          `You are already connected with wallet ${account}. If you wish to change it please use metamask.`
        );

        alert(
          `You are already connected with wallet ${account}. If you wish to change it please use metamask.`
        );
      } else {
        dispatch(connect());
      }
    }
  };

  return (
    <Button
      className="animate-btn btn"
      style={{
        marginLeft: "5px",
        backgroundColor: "#02b5ca",
        color: "white",
      }}
      onClick={handleConnectClick}
    >
      {connButtonText}
      <img src={foxIcon} className="fox-icon" alt="fox icon" />
    </Button>
  );
};

const NavLinks = (props) => {
  return (
    <ul className={`nav-menu ${props.className}`}>
      <li className="btn-collection column-list">
        <a href="#">
          <Button className="animate-btn">
            Join the Server{" "}
            <img
              src={discordIcon}
              className="discord-icon"
              alt="join the discord"
            />
          </Button>
        </a>

        <a
          className="animate-btn btn"
          href="#mint"
          onClick={props.onLinkClicked}
        >
          Mint
        </a>

        <WalletCard />
      </li>
    </ul>
  );
};

export default NavLinks;
