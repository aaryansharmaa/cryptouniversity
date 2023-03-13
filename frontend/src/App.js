import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  loadMinterContract,
  fetchCirculatingSupply,
} from "./redux/minter-contract/minterActions";
import Main from "./pages/Main";

function App() {
  const dispatch = useDispatch();
  const minterContract = useSelector((state) => state.minterContract);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (minterContract.contract === null) dispatch(loadMinterContract());
  }, [minterContract.contract]);

  useEffect(() => {
    dispatch(fetchCirculatingSupply());
  }, []);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
