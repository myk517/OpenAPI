import React, { useEffect, useState } from "react";
import axios from "axios";

const Transfer = ()=>{
  //const [accessTokenOob, setAccessTokenOob] = useState();
  const accessTokenOob = localStorage.getItem("accessTokenOob");
  const accessTokenTransfer = localStorage.getItem("accessTokenTransfer");
  const currentDate = getCurrentDate();
  
  function getCurrentDate()
    {
        let date = new Date();
        let year = date.getFullYear().toString();

        let month = date.getMonth() + 1;
        month = month < 10 ? '0' + month.toString() : month.toString();

        let day = date.getDate();
        day = day < 10 ? '0' + day.toString() : day.toString();

        let hour = date.getHours();
        hour = hour < 10 ? '0' + hour.toString() : hour.toString();

        let minites = date.getMinutes();
        minites = minites < 10 ? '0' + minites.toString() : minites.toString();

        let seconds = date.getSeconds();
        seconds = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

        return year + month + day + hour + minites + seconds;
    }
 

  const withdrawApi = () => {
    console.log("Run withdraw Funcion ...");
    let datas = {
      access_token : accessTokenTransfer,
      cntr_account_type : "N",
      cntr_account_num: "100000000002",
      dps_print_content: "쇼핑몰환불",
      wd_print_content: "오픈뱅킹출금",
      tran_amt: "1000",
      tran_dtime: currentDate,
      req_client_name: "김미영",
      req_client_account_num: "004",
      req_client_num: "61250201399911",
      transfer_purpose : "RC"
    };
    axios
      .post("http://localhost:8080/api/v1/transfer/withdraw", datas)
      .then((res) => {
        console.log("success...", res);
      })
      .catch((res) => {
        console.log("fail... ", res);
      });
  };

  const depositApi = () => {
    console.log("depositApi Function...");
    console.log("oob token>> ", accessTokenOob);
    console.log('crdate>> ', currentDate);
    let datas = {
      access_token: accessTokenOob,
      cntr_account_type: "N",
      cntr_account_num: "100000000001",
      wd_pass_phrase: "NONE",
      wd_print_content: "환불금액",
      name_check_option: "off",
      tran_dtime: currentDate,
      req_cnt: "1",
      tran_no: "1",
      bank_tran_id: "M202201963U16134605A",
      bank_code_std: "004",
      account_num: "61250201399911",
      account_holder_name: "파리바게트",
      print_content: "빵결제",
      tran_amt: "000000004800",
      req_client_name: "홍길동",
      req_client_bank_code: "097",
      req_client_account_num: "00012300000678",
      req_client_num: "HONGGILDONG1234",
      transfer_purpose: "TR",
    };
    axios
      .post("http://localhost:8080/api/v1/transfer/deposit/acnt_num", datas)
      .then((res) => {
        console.log("success...", res);
      })
      .catch((res) => {
        console.log("fail...", res);
      });
  };

  return (
    <>
      <h2>Transfer Page...</h2> <br />
      <button
        onClick={() => {
          withdrawApi();
        }}
      >
        {" "}
        출금이체{" "}
      </button>{" "}
      <br />
      <button
        onClick={() => {
          depositApi();
        }}
      >
        {" "}
        입금이체{" "}
      </button>
      <br />
      oob >>>> {accessTokenOob}
    </>
  );
}
export default Transfer;