import axios from "axios";

const handleLogin = () => {
  axios
    .post("https://b1-su04-api.a1.bg/b1s/v1/Login", {
      UserName: "B1\\proaktor",
      Password: "GYpf5=M>",
      CompanyDB: "TRUBNA_MEBEL_TEST",
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("ERROR FOUND!");
      console.log(error);
    });
};

export default handleLogin;
