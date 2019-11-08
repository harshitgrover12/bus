import React from 'react';

import './signUp.css';

const signUp = () => {
  return (
      
    <div className="signup-form">
    <form action="#" method="post">
		<h2>Sign Up</h2>
		<p>Please fill in this form to create an account!</p>
		<hr/>
        <div className="form-group">
			
				<input type="text" className="form-control" name="Full Name" placeholder="Full Name" required="required"/>
				
			</div>        	
       
        <div className="form-group">
        	<input type="email" className="form-control" name="email" placeholder="Email" required="required"/>
        </div>
		<div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password" required="required"/>
        </div>
		<div className="form-group">
            <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required"/>
        </div>        
        <div className="form-group">
			<label className="checkbox-inline"><input type="checkbox" required="required"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div>
		<div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
        </div>
    </form>
	<div className="hint-text">Already have an account? <a href="#">Login here</a></div>
</div>

  );
};

export default signUp;