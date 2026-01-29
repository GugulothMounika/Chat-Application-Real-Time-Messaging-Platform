export function forgot(credentials,){
    console.log(credentials)
    // validateForgot(credentials)
}

export function validateForgot({newpassword,conformpassword},error,setError){

    if(newpassword ===""){
     setError((prevState)=>{
return{
  ...prevState,
  newpassword:"newpassword is required"
};
     });

    }
    if(conformpassword===""){
       setError((prevState)=>{
        return{
          ...prevState,
          conformpassword:"conformpassword is required"
        };
       });
        

    };

};



