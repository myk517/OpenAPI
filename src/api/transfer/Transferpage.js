import React, { useEffect, useState } from "react";
import axios from "axios";

const Transfer = ()=>{

    const withdrawApi =()=>{
        console.log('Run withdraw Funcion ...');
        axios.post("http://localhost:8080/api/v1/transfer/withdraw", null, {params: {
            "bank_tran_id" : "value",
            "cntr_account_type" : "value",
            "cntr_account_num" : "value",
            "dps_print_content" : "value",
            "fintech_use_num" : "value",
            "wd_print_content" : "value",
            "tran_amt" : "value",
            "tran_dtime" : "value",
            "req_client_name" : "value",
            "req_client_account_num" : "value",
            "req_client_num" : "value",
            "transfer_purpose" : "value"
        }})
        .then((res)=>{console.log('success...', res)})
        .catch((res) => {console.log('fail... ', res)});
    }

    return(
        <>
        <h2>Transfer Page...</h2> <br/>
        <button onClick={()=>{withdrawApi()}}> 출금이체 </button> <br/>
        <button> 입금이체 </button>
        </>
    );
}
export default Transfer;