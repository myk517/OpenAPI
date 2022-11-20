import React, { useEffect, useState } from "react";
import axios from "axios";


function InquiryPage (){

    const access_token = sessionStorage.getItem("access_token");
    
    const inqRealName = ()=>{
        const data = {
            "bank_tran_id": "M202201963U008140230",
            "bank_code_std": "90",
            "account_num": "1234567890123456",
            "account_holder_info_type": "",
            "account_holder_info": "980724",
            "tran_dtime": "20201001150133"
        }
        axios.post("http://localhost:8080/api/v1/inquiry/real_name", data, {headers: {AccessToken: access_token}})
        .then((res)=>{console.log('success..', res)})
        .catch((res)=>{console.log('fail..', res)});
    }

    useEffect(()=>{
        console.log('>>', sessionStorage.getItem("access_token"));
    },[])
        
    


    return(
        <>
        <h2>Inquiry Page...</h2>
        <button onClick={()=>{inqRealName()}}>계좌실명조회</button>
        
        </>
    )

}
export default InquiryPage