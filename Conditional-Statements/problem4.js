let email="abc@gmail.com";
let pass="123456";
let in_email="abc@gmail.com";
let in_pass="123456";

if(email==in_email){
  if(pass==in_pass){
    console.log("Login");
  } else {
    console.log("Wrong Password");
  }
} else {
  console.log("Wrong Credentials");
}