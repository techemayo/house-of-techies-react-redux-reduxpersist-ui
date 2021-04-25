import './../Login/login.css'
import {useSelector,useDispatch} from 'react-redux'
import {handleName,handleUserName,handlePassword} from './../../Actions/SignUp'
import axios from 'axios'
function submitData(mydata){
	axios({
		"method": "POST",
		"url": "http://localhost:4000/api/signup",
		// "url": `${process.env.API_URL}/salary`,
		data:{
			name:mydata.name,
			username:mydata.username,
			password:mydata.password
		}
	  })
		.then((response) => {
		  console.log(response.data)
			alert("You Registered Successfully, Proceed to login")

		  window.location='/login' 
		 
		})
		.catch((error) => {
			alert("Failed to Sign Up")
		  console.log(error)
		})
}
function SignUp() {
	const dispatch = useDispatch()
	const mystate = useSelector(state=>state)
	return (
    <div className="SignUp">
  
	<div class="limiter">
		<div class="container-login100 mybg-class" >
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<div class="login100-form validate-form">
					<span class="login100-form-title p-b-49">
						Sign Up
					</span>
                    <div class="wrap-input100 validate-input m-b-23" data-validate = "Name is reauired">
						<span class="label-input100">Name</span>
						<input class="input100" type="text" name="name" onChange={(e)=>dispatch(handleName(e.target.value))} placeholder="Type your Name"/>
					</div>
					<div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
						<span class="label-input100">Username</span>
						<input class="input100" type="text" name="username" onChange={(e)=>dispatch(handleUserName(e.target.value))} placeholder="Type your username"/>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<span class="label-input100">Password</span>
						<input class="input100" type="password" name="pass" onChange={(e)=>dispatch(handlePassword(e.target.value))} placeholder="Type your password"/>
					</div>

					<div class="text-right p-t-8 p-b-31">
						<a href="#">
							Forgot password?
						</a>
					</div>

					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							{/* <button class="login100-form-btn" onClick={()=>{console.log(mystate)}}> */}
							<button class="login100-form-btn" onClick={()=>{submitData(mystate)}}>
								SignUp
							</button>
						</div>
					</div>

					<div class="txt1 text-center p-t-54 p-b-20">
						<span>
							Or Login Using
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
							Or Login Using
						</span>

						<a href="#" class="txt2">
							Login
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

export default SignUp;
