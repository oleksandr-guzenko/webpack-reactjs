import React from 'react';

function FormLogin(props) {
  return (
    <form>
      <label htmlFor="name" >
        Username:
        <input type="text" id="name" name="name" />
      </label>

      <label htmlFor="password" >
        Password:
        <input type="password" id="password" name="password" />
      </label>
      <input type="submit" value="Login" />

    </form>
  );
}

export default FormLogin;