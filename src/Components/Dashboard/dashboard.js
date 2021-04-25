import './../Login/login.css'
import {useSelector,useDispatch} from 'react-redux'
import { isLoggedIn } from '../../Actions/Login'
function Dashboard() {
	const name = useSelector(state => state.name)
	const mystate = useSelector(state => state)
	const dispatch = useDispatch()
	const loggedIn = useSelector(state => state.isLoggedIn)
	console.log(mystate)
	// useSelector(state=>console.log(state))
  return (
    <div className="Dashboard">
      
	<div class="limiter">
		<div class="container-login100 mybg-class" >
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<div class="login100-form validate-form">
					<span class="login100-form-title p-b-49">
						{loggedIn?(
						<div>
						<h1>Welcome {name}</h1>
						<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn" onClick={()=>{dispatch(isLoggedIn())}}>
							LogOut
							</button>	
							
						</div>
					</div>
					</div>
						):
						(
							<div>
						<h1>Please login to View Content</h1>
						<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn" onClick={()=>{window.location="/login"}}>
							Proceed to Login
							</button>	
							
						</div>
					</div>
					</div>
						)}
						
					</span>
					
                 
				</div>
			</div>
		</div>
	</div>


	<div id="dropDownSelect1"></div>
    </div>
  );
}

export default Dashboard;
