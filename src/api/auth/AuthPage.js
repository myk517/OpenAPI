import React, {useEffect, useState } from "react";
import axios from "axios";

function AuthPage(){
    const [accessTokenOob, setAccessTokenOob] = useState();

    const onSubmit = () => {
      window.location.href =
        "https://testapi.openbanking.or.kr/oauth/2.0/authorize?" +
        "response_type=code&" +
        "client_id=9815d321-e0e1-462c-ad06-9cfa5d46c53c&" +
        "redirect_uri=http://localhost:3000/auth/success&" +
        "scope=login inquiry transfer&" +
        "state=b80BLsfigm9OokPTjy03elbJqRHOfGSY&" +
        "auth_type=0";
      // redirect url 이 호출되면 해당 code 값을 기반으로 token을 발급한다.

      // axios.get("http://localhost:8080/api/v1/oauth/getOauth")
      // .then((res)=>{console.log('success...',

      // res)})
      // .catch((res)=>{console.log('fail...', res)});
    };

    const getOobToken = () => {
      let datas = {
        params: { client_id: "9815d321-e0e1-462c-ad06-9cfa5d46c53c", client_secret: "39831a41-c3d7-47f2-b72f-bc82c4ca5e53", scope: "oob", grant_type: "client_credentials" },
      };
      axios
        .post("http://localhost:8080/api/v1/token/getToken", null, datas)
        .then((res) => {
          console.log("getOobToken Success...", res);
          setAccessTokenOob(res.data.access_token);
          localStorage.setItem("accessTokenOob", accessTokenOob);
        })
        .catch((res) => {
          console.log("getOobToken fail...", res);
        });
    };

    const getSe = () => {
      console.log("asdfasdfasdf", localStorage.getItem("accessTokenOob"));
    };

    return (
      <>
        <h2> Auth Page ...</h2>
        <button
          onClick={() => {
            onSubmit();
          }}
        >
          인증하기123 (/authorize)
        </button>
        <button
          onClick={() => {
            getOobToken();
          }}
        >
          oob 토큰 발급 받기 (/authorize)
        </button>
        <br />
        oob 토큰 :{accessTokenOob} <br />
        <button
          onClick={() => {
            getSe();
          }}
        >
          localStorage.getItme(""){" "}
        </button>
        {/* <button onClick={()=>{getToken()}}>토큰발급123 (/token)</button> */}
      </>
    );
}

export default AuthPage;