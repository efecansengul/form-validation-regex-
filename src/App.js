import "./App.css";
import { useState } from "react";
import FormInput from "./components/FormInput";
import Button from "./components/button/Button";
function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(false);
    setTimeout(() => {
      setIsLoading(true);
    }, 3000);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="formik">
        <h1>Register</h1>
        <FormInput
          title="Username"
          name="name"
          type="text"
          pattern="^[a-zA-Z0-9_]{3,16}$" //3-16 karakter arası büyük kücük harf ve sayı iceren regex
          error="3-16 karakter arası büyük kücük harf ve sayı ve (_) iceren"
          user={user}
          setUser={setUser}
          required="required"
        />
        <FormInput
          title="Email"
          name="email"
          type="email"
          user={user}
          setUser={setUser}
          required="required"
        />
        <FormInput
          title="Password"
          name="password"
          type="text"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$"
          /* en az 8 karakterden olusan,  en az 1 kücük harf,en az  1 büyük harf, en az 1 rakam,en az
          bir özel karakterden olusan password */
          error="en az 8 karakterden olusan,  en az 1 kücük harf,en az  1 büyük harf, en az 1 rakam,en az
          bir özel karakterden"
          user={user}
          setUser={setUser}
          required="required"
        />
        <FormInput
          title="Confirm Password"
          name="confirmPassword"
          type="text"
          pattern={user.password}
          user={user}
          setUser={setUser}
          error="Parola eşleşmedi."
          required="required"
        />
        <Button isLoading={isLoading} name="Submit" />
      </form>
    </div>
  );
}

export default App;
