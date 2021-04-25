import './login.css'
import {handleUserName,handleName,handlePassword} from './../../Actions/SignUp'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import { isLoggedIn } from '../../Actions/Login'
function submitData(mydata,dispatch){
	axios({
		"method": "POST",
		"url": "http://localhost:4000/api/login",
		// "url": `${process.env.API_URL}/salary`,
		data:{
			username:mydata.username,
			password:mydata.password
		}
	  })
		.then((response) => {
		  if(response.data){
			console.log(response.data)
			alert("Login Successfully, Proceed to Dashboard")
			dispatch(isLoggedIn())
			dispatch(handleName(response.data.user.name))
			window.location='/' 
		}else{
			alert("Login Failed")
		}
		})
		.catch((error) => {
			alert("Login Failed")
		  console.log(error)
		})
}
function Login() {
	const dispatch = useDispatch()
	const mystate = useSelector(state=>state)


	return (
    <div className="Login">
      
	<div class="limiter">
		<div class="container-login100 mybg-class" >
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<div class="login100-form validate-form">
					<span class="login100-form-title p-b-49">
						Login
					</span>

					<div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
						<span class="label-input100">Username</span>
						<input class="input100" type="text" name="username" onChange={(e)=>{dispatch(handleUserName(e.target.value))}} placeholder="Type your username"/>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<span class="label-input100">Password</span>
						<input class="input100" type="password" name="pass" onChange={(e)=>{dispatch(handlePassword(e.target.value))}} placeholder="Type your password"/>
					</div>

					<div class="text-right p-t-8 p-b-31">
						<a href="#">
							Forgot password?
						</a>
					</div>

					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn" onClick={()=>{submitData(mystate,dispatch);console.log(mystate)}}>
							Login
							</button>	
							{/* <button class="login100-form-btn" onClick={()=>{console.log(mystate)}}>
								Login
							</button> */}
						</div>
					</div>

					<div class="txt1 text-center p-t-54 p-b-20">
						<span>
							Or Sign Up Using
						</span>
					</div>

					<div class="flex-c-m">
						<a href="#" class="login100-social-item bg1">
							f

					
						</a>

						<a href="#" class="login100-social-item bg3">
							G
						</a>
					</div>

					<div class="flex-col-c p-t-155">
						<span class="txt1 p-b-17">
							Or Sign Up Using
						</span>

						<a href="/signup" class="txt2">
							Sign Up
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>


	<div id="dropDownSelect1"></div>
    </div>
  );
}

export default Login;
