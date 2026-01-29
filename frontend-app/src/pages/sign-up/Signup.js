import axios from "axios";
import { toast } from "react-toastify";
export function signup(
  usernameRef,
  passwordRef,
  emailRef,
  cityRef,
  genderRef,
  navigate
) {
  if (
    !checkValidation(usernameRef, passwordRef, emailRef, cityRef, genderRef)
  ) {
    //create data object
    var data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      email: emailRef.current.value,
      city: cityRef.current.value,
      gender: genderRef.current.value,
    };
    //Send request server
    axios
      .post("http://localhost:3000/api/auth/sign-up", data)
      .then((res) => {
        if (res.data.ok) {
          toast.success("Account Created");

          usernameRef.current.value = "";
          passwordRef.current.value = "";
          emailRef.current.value = "";
          cityRef.current.value = "";
          genderRef.current.value = "male";

          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          throw Error(res.data.error);
        }

        // toast("Account Created", {
        //   style: {
        //     backgroundColor: "green",
        //     color: "white",
        //     fontWeight: "bold",
        //   },
        // });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }
}

function checkValidation(userNameRef, passwordRef, emailRef, cityRef) {
  var anyError = true;

  if (userNameRef.current.value === "") {
    userNameRef.current.style.border = "2px solid red";
  } else if (passwordRef.current.value === "") {
    passwordRef.current.style.border = "2px solid red";
  } else if (emailRef.current.value === "") {
    emailRef.current.style.border = "2px solid red";
  } else if (cityRef.current.value === "") {
    cityRef.current.style.border = "2px solid red";
  } else {
    anyError = false;
  }

  return anyError;
}