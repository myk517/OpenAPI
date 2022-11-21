import React, { useState } from "react";
import axios from "axios";

function Token(props){
    const [access_token, setAccess_token] = useState('');
    const test = ()=>{
      console.log('test');
      axios.get("http://localhost:8080/").then(()=>{console.log('su')}).catch(()=>{console.log('fial')});
    }
    const getToken = () =>{
        let data = {
          "code": "R7Huqyjty05sPb39dQey8hZHRwRkmd",
          "client_id": "9815d321-e0e1-462c-ad06-9cfa5d46c53c",
          "client_secret": "39831a41-c3d7-47f2-b72f-bc82c4ca5e53",
          "redirect_uri": "http://localhost:3000",
          "grant_type": "authorization_code"
          };
        axios.post("http://localhost:8080/api/v1/getToken", data).
        then((res)=>{
          console.log('success..', res); 
          setAccess_token(res.data.access_token);
          console.log(access_token);
        }).
        catch((res)=>{console.log('fail...', res)});
      }

    return ( 
        <>
        </>

    )

}
export default Token;