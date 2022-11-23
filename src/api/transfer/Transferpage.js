import React, { useEffect, useState } from "react";
import axios from "axios";

const Transfer = ()=>{
  //const [accessTokenOob, setAccessTokenOob] = useState();
  const accessTokenOob = localStorage.getItem("accessTokenOob");

  const withdrawApi = () => {
    console.log("Run withdraw Funcion ...");
    console.log("oob token>> ", accessTokenOob);
    axios
      .post("http://localhost:8080/api/v1/transfer/withdraw", null, {
        params: {
          bank_tran_id: "value",
          cntr_account_type: "value",
          cntr_account_num: "value",
          dps_print_content: "value",
          fintech_use_num: "value",
          wd_print_content: "value",
          tran_amt: "value",
          tran_dtime: "value",
          req_client_name: "value",
          req_client_account_num: "value",
          req_client_num: "value",
          transfer_purpose: "value",
        },
      })
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
    let datas = {
      access_token: accessTokenOob,
      cntr_account_type: "N",
      cntr_account_num: "100000000001",
      wd_pass_phrase: "NONE",
      wd_print_content: "환불금액",
      name_check_option: "off",
      tran_dtime: "20201001150133",
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