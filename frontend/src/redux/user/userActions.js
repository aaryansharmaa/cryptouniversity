import Web3 from "web3";
import { loadMinterContract } from "../minter-contract/minterActions";
// import setAlert from "../alerts/alertActions";

const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};

export const disconnect = () => {
  return {
    type: "DISCONNECT",
  };
};

export const connect = () => {
  return async (dispatch) => {
    dispatch(connectRequest());
    const { ethereum } = window;
    const metamaskIsInstalled = ethereum && ethereum.isMetaMask;

    if (metamaskIsInstalled) {
      let web3 = new Web3(ethereum);
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        const networkId = await ethereum.request({
          method: "net_version",
        });

        /* eslint eqeqeq: 0 */
        if (networkId == 5) {
          dispatch(
            connectSuccess({
              account: accounts[0],
              web3: web3,
            })
          );

          dispatch(loadMinterContract());

          // Add listeners start
          ethereum.on("accountsChanged", (accounts) => {
            dispatch(updateAccount(accounts[0]));
          });
          ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          // Add listeners end
        } else {
          alert("Please Connect To Fantom Mainnet Network! [Chain ID:250]");
          // dispatch(
          //   setAlert(
          //     `Please Connect To Fantom Mainnet Network! [Chain ID:250]`,
          //     "warning"
          //   )
          // );

          dispatch(
            connectFailed(
              "Please Connect To Fantom Mainnet Network! [Chain ID:250]"
            )
          );
        }
      } catch (err) {
        alert("Please Log into metamsk!");
        // dispatch(
        //   setAlert(
        //     `An Error Occurred. Make sure you are logged into you metamask wallet`,
        //     "danger"
        //   )
        // );

        dispatch(connectFailed("Something went wrong."));
      }
    } else {
      alert("Please Install Metamask on your device.");
      // dispatch(setAlert(`Please Install Metamask on your device.`, "danger"));
      dispatch(connectFailed("Install Metamask."));
    }
  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
  };
};
