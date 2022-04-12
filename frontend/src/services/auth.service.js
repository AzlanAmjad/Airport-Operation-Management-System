import axiosInstance from "../components/Axios";

const register = async (email, password, firstName, lastName, SSN, address) => {
  const result = await axiosInstance.post("register/", {
    email: {
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
    },
    ssn: SSN,
    address: address,
  });
  return result;
};

const login = async (email, password) => {
  // post
  const result = await axiosInstance.post("token/", {
    email: email,
    password: password,
  });

  // set jwt in local storage
  localStorage.setItem("access_token", result.data.access);
  localStorage.setItem("refresh_token", result.data.refresh);
  axiosInstance.defaults.headers["Authorization"] =
    "JWT " + localStorage.getItem("access_token");

  return result;
};

const logout = async () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
