import "./App.css";
import Head from "./component/header";
import Dashboard from "./component/dashboard";
import DataBoard from "./component/databoard";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
// import dotinv from 'dotenv'
function App() {
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const [Data, setData] = useState([]);
  const getData = async () => {
    let result = await axios.get(`${apiUrl}participants`);
    ProcessData(result.data);
  };
  const ProcessData = (Data) => {
    setData(Data);
    // totalParticipant = Data.length;
  };
  useEffect(() => {
    getData();
  },[]);
  return (
    <>
      <Head></Head>
      <Dashboard></Dashboard>
      <DataBoard participant={Data} ></DataBoard>
    </>
  );
}

export default App;
