import React, { useState } from "react";

function UserForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [male, setMale] = useState("");
  const [female, setFemale] = useState("");
  const [other, setOther] = useState("");

  function handleSubmit(e) {
    //prevents the page from refreshing when form is submitted
    e.preventDefault();

    //object with the new user
    let user = {
      name: name,
      email: email,
      male: male,
      female: female,
      other: other
    };

    //calls the addUser function in App.js
    props.addUser(user);

    //sets name, email state to empty strings
    setName("");
    setEmail("");
    setMale("")
    setFemale("")
    setOther("")
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <br/>
      <input
        type="text"
        name="fullname"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
       <label for="html">Full Name</label><br/><br/>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
        <label for="html">Email</label><br/>
        <br/>
        <input 
        type="radio" 
        name="male" 
        value={male}
        onChange={(e) => setMale(e.target.value)}
        />
        <label for="html">Male</label><br/>

        <input type="radio"
        name="female" 
        value={female}
        onChange={(e) => setFemale(e.target.value)}
        />
        <label for="css">Female</label>
        <br/>

        <input type="radio" 
        name="other" 
        value={other}
        onChange={(e) => setOther(e.target.value)}
        />
        <label for="css">Other</label><br/>
        <br/>

        <input type="submit" />
    </form>
  );
}
export default UserForm;