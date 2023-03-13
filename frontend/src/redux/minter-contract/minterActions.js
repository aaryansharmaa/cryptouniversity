import Web3 from "web3";
import store from "../store";
import MinterContract from "../../contract/MinterContract.json";

const loadContractRequest = () => {
  return {
    type: "LOAD_MINTER_CONTRACT_REQUEST",
  };
};

const loadContractSuccess = (payload) => {
  return {
    type: "LOAD_MINTER_CONTRACT_SUCCESS",
    payload: payload,
  };
};

const loadContractFailed = (payload) => {
  return {
    type: "LOAD_MINTER_CONTRACT_FAILED",
    payload: payload,
  };
};

const walletConnectionFailure = (payload) => {
  return {
    type: "WALLET_CONNECTION_FAILURE",
    payload: payload,
  };
};

const fetchCollectionSupplyRequest = () => {
  return {
    type: "FETCH_COLLECTION_SUPPLY_REQUEST",
  };
};

const fetchCollectionSupplySuccess = (payload) => {
  return {
    type: "FETCH_COLLECTION_SUPPLY_SUCCESS",
    payload: payload,
  };
};

const fetchCollectionSupplyFailed = (payload) => {
  return {
    type: "FETCH_COLLECTION_SUPPLY_FAILED",
    payload: payload,
  };
};

export const loadMinterContract = () => {
  return async (dispatch) => {
    dispatch(loadContractRequest());
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
          const MinterContractObj = new web3.eth.Contract(
            MinterContract,
            `0xE3932a974575d63204e7f7934EF0368a2577C17C`
          );
          dispatch(
            loadContractSuccess({
              account: accounts[0],
              contract: MinterContractObj,
              web3: web3,
            })
          );

          dispatch(fetchCirculatingSupply());
        } else {
          alert(`Please Connect To Goerli Network! [Chain ID: 5]`);

          dispatch(
            loadContractFailed(
              `Please Connect To Goerli Network! [Chain ID: 5]`
            )
          );
        }
      } catch (err) {
        alert("Please Log into metamsk!");
        dispatch(walletConnectionFailure("Something went wrong."));
      }
    } else {
      alert("Please Install Metamask on your device.");
      dispatch(walletConnectionFailure("Install Metamask."));
    }
  };
};

export const fetchCirculatingSupply = () => {
  return async (dispatch) => {
    dispatch(fetchCollectionSupplyRequest());

    try {
      // set timeout used to give sometime to the blockchain to update the minted supply before fetching it from the contract.
      setTimeout(async () => {
        try {
          // optional chain to avoid internal json rpc error (subjective)
          let currentSupply = await store
            .getState()
            .minterContract.contract?.methods.totalSupply()
            .call();

          dispatch(
            fetchCollectionSupplySuccess({
              circulatingSupply: currentSupply,
            })
          );
        } catch {
          alert(`Could not load updated data from contract. Please refresh.`);

          dispatch(
            fetchCollectionSupplyFailed("Could not load data from contract.")
          );
        }
      }, 5000);
    } catch (err) {
      dispatch(
        fetchCollectionSupplyFailed("Could not load data from contract.")
      );
    }
  };
};
