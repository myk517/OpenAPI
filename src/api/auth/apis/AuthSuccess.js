import React, {useEffect, useState} from "react"
import queryString from 'query-string';
import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";

const AuthSuccess = ()=>{
    const [accessToken, setAccessToken] = useState();
    const [searchParams] = useSearchParams();
    const query = searchParams.get('code'); //1. 특정 query parameter의 value만 받아오는 경우 
    // const queryList = [...searchParams]; // [['key1', 'test1'], ['key2', 'test2']] //2. 모든 query parameter의 value를 받아오는 경우.
    
    useEffect(()=>{
        console.log('getToken Function..., query >> ' + query);
        
        let datas = {
          "code": query,
          //"code" : "000000000", //이렇게 해도 spring 에서는 null 로 넘어감?
          "client_id": "9815d321-e0e1-462c-ad06-9cfa5d46c53c",
          "client_secret": "39831a41-c3d7-47f2-b72f-bc82c4ca5e53",
          "redirect_uri": "http://localhost:3000/auth/success",
          "grant_type": "authorization_code"
          };
        //axios.post("http://localhost:8080/api/v1/token/getToken", null, datas). 이렇게 하면 왜 contorller에서는 request.getParam이 null로 찍힘..?
        axios.post("http://localhost:8080/api/v1/token/getToken", null, {params: {
            "code": query, 
            "client_id": "9815d321-e0e1-462c-ad06-9cfa5d46c53c",
            "client_secret": "39831a41-c3d7-47f2-b72f-bc82c4ca5e53",
            "redirect_uri": "http://localhost:3000/auth/success",
            "grant_type": "authorization_code" 
        }}).
        then((res)=>{
          console.log('token API success..', res); 
          setAccessToken(res.data.accessToken);
          sessionStorage.setItem("accessToken", accessToken);
        }).
        catch((res)=>{console.log('token API fail...', res)});
         //getToken(); //함수로 별도로 뺏을 때 axios fail 되어 catch문으로 빠짐. 위 처럼 바로 axios.post로 보내면 success되어 then으로 감. why ??
    }, [])

    // const getToken = () =>{
    //     console.log('getToken Function...');
    //     let datas = {
    //       "code": query,
    //       "client_id": "9815d321-e0e1-462c-ad06-9cfa5d46c53c",
    //       "client_secret": "39831a41-c3d7-47f2-b72f-bc82c4ca5e53",
    //       "redirect_uri": "http://localhost:3000/auth/success",
    //       "grant_type": "authorization_code"
    //       };
    //     axios.post("http://localhost:8080/api/v1/token/getToken", null, datas).
    //     then((res)=>{
    //       console.log('token API success..', res); 
    //       setAccessToken(res.data.access_token);
    //       sessionStorage.setItem("access_token", accessToken);
    //     }).
    //     catch((res)=>{console.log('token API fail...', res)});
    //   }

    return (
        <>
        <h3>인증에 성공하였습니다.</h3>
        <p>토큰 발행...</p>
        
        </>
    )
}

export default AuthSuccess;