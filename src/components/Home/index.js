import { Link } from 'react-router-dom'
import './index.css'

function Home(){
    return(       
            <div className="header-container">
                <h1>Welocme to Naukari</h1>
                <div className='cred-container'>
                    <Link to="/login">Login</Link>
                    <p className='para'>or</p>
                    <Link to="register">Register</Link>
                </div>
            </div>   
    )
}
export default Home