import "./css/section-mint.css";

import { useState } from "react";
import foxIcon from "../../assets/images/fox-icon.svg";
import { Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "../../redux/user/userActions";
import { fetchCirculatingSupply } from "../../redux/minter-contract/minterActions";

const SectionMint = () => {
  const [counter, setCounter] = useState(1);
  const [claimingNft, setClaimingNft] = useState(false);

  const minterContract = useSelector((state) => state.minterContract);
  const circulatingSupply = minterContract.circulatingSupply;
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const isConnected = user.account !== null;

  const handleIncrement = (e) => {
    e.preventDefault();

    if (counter < 5) {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const showSpinner = () => {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  };

  const handleConnectClick = (e) => {
    e.preventDefault();
    if (user.account === "") {
      dispatch(connect());
    } else {
      if (user.account) {
        alert(
          `You are already connected with wallet ${user.account}. If you wish to change it please use metamask.`
        );

        alert(
          `You are already connected with wallet ${user.account}. If you wish to change it please use metamask.`
        );
      } else {
        dispatch(connect());
      }
    }
  };

  const mintNft = (e, _amount) => {
    e.preventDefault();
    if (_amount <= 0) {
      return;
    }
    setClaimingNft(true);
    minterContract.contract.methods
      .mint(user.account, _amount)
      .send({
        gasLimit: "750000",
        to: "0xE3932a974575d63204e7f7934EF0368a2577C17C",
        from: user.account,
        value: minterContract.web3.utils.toWei(
          (0.01 * _amount).toString(), // price
          "ether"
        ),
      })
      .on("transactionHash", function (hash) {
        let txHash = hash;
        alert(`Transaction Sumbitted: ${txHash}`);
      })
      .on("error", (err) => {
        setClaimingNft(false);
        alert(`Couldn't process the transaction`);
      })
      .then((receipt) => {
        setClaimingNft(false);
        alert("Mint Successful!");
        dispatch(fetchCirculatingSupply());
      });
  };
  return (
    <section className="section-mint text-center" id="mint">
      <div className="heading-container">
        <h2 className="heading-secondary text-gradient">Mint your NFT!</h2>
      </div>

      <div className="mint-head">
        <h2 className="mint-title">
          {!minterContract.contract || !circulatingSupply
            ? showSpinner()
            : circulatingSupply
            ? circulatingSupply
            : null}
          /3333
        </h2>
      </div>
      {!isConnected && (
        <button
          className="btn gradient-btn animate-btn"
          onClick={handleConnectClick}
        >
          Connect to Metamask{" "}
          <img src={foxIcon} className="fox-icon" alt="fox icon" />
        </button>
      )}
      {isConnected && (
        <>
          <div className="cart">
            <button
              className="btn gradient-btn operation-btn"
              onClick={handleDecrement}
            >
              -
            </button>
            <p className="mint-counter">{counter}</p>
            <button
              className="btn gradient-btn operation-btn"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>

          {!claimingNft ? (
            <button
              className="btn gradient-btn"
              onClick={(e) => mintNft(e, counter)}
              disabled={
                !isConnected ||
                !minterContract.contract ||
                !minterContract.circulatingSupply
              }
            >
              Mint
            </button>
          ) : (
            showSpinner()
          )}
        </>
      )}
      {/* <div>
        <a href="#mint">
          <button className="btn gradient-btn animate-btn">
            Coming Soon!{" "}
            <img src={foxIcon} className="fox-icon" alt="fox icon" />
          </button>
        </a>
      </div> */}

      <br></br>
      <br></br>

      {/* <span class="tab"></span> */}

      {/* 
      <br></br>
      <br></br> */}

      {/* <a href="/my-bears">
        <button className="btn gradient-btn animate-btn">
          My Bears
        </button>
      </a> */}

      <p className="mint-text">Access your collection on opensea!</p>
      <a className="mint-text" rel="noreferrer" href="#" target="_blank">
        {" "}
        Click here to view!
      </a>
    </section>
  );
};

export default SectionMint;
