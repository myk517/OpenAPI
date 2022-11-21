function Authorize(props){
    const onSubmit = () =>{
        window.location.href = "https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=9815d321-e0e1-462c-ad06-9cfa5d46c53c&redirect_uri=http://localhost:3000&scope=login inquiry transfer&state=b80BLsfigm9OokPTjy03elbJqRHOfGSY&auth_type=0";
        // axios.get("http://localhost:8080/api/v1/auth", 
        //   {params:{
        //   response_type : "code",
        //   client_id : "9815d321-e0e1-462c-ad06-9cfa5d46c53c",
        //   redirect_uri : "http://localhost:3000",
        //   scope : "login inquiry transfer",
        //   state : "b80BLsfigm9OokPTjy03elbJqRHOfGSY",
        //   auth_type : "0"
        //   }}).then(()=>{console.log('success...')}).catch(()=>{console.log('err..')})
        }

    return ( 
        <>

        </>

    )

}
export default Authorize;