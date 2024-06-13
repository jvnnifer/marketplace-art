function Validation(values) {
  let error = {};
  const password_pattern = /^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.username === "") {
    error.username = "Username should not be empty";
  } else {
    error.username = "";
  }

  if (values.password === "") {
    error.password = "Password should not be empty";
  } else {
    error.password = "";
  }
  return error;
}

export default Validation;
