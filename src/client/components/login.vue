<style>
  body {
    background-image: url('/background.jpg');
    background-repeat: repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
  }
</style>

<style scope>
  #login-div {
    background-color: white;
    width: 300px;
    margin-left: 40%;
    margin-top: 10%;
  }

  #user-img {
    margin-top: 25px;
    margin-left: 120px;
    width: 60px;
  }

  #github-img {
    margin-left: 15px;
    width: 25px;
  }

  #submit-btn {
    margin-left: 95px;
    color: white;
    width: 110px;
    padding: 6px 12px;
    text-align: center;
    background-color: #60b044;
    font-size: 14px;
    border: 1px solid #d5d5d5;
    font-weight: 600;
    border-color: #5ca941;
  }

  .login-input {
    margin-top: 5px;
    margin-bottom: 15px;
    font-size: 14px;
    padding: 6px 8px;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin-left: 25%;
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.075);
  }

  form {

  }
</style>

<template>
  <div id="login-div">
    <form>
      <div>
        <img id="user-img" src="/user.png">
      </div>
      <div style="margin-top: 25px;">
        <input class="login-input" placeholder="Login Name"/>
      </div>
      <div>
        <input class="login-input" type="password" placeholder="Password"/>
      </div>
      <div>
        <input type="button" id="submit-btn" value="Sign&nbsp;in"></input>
      </div>
    </form>
    <div>
      <a>
        <img id="github-img"src="/github.png"/>
      </a>
    </div>
  </div>
</template>
