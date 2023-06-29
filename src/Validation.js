
const validation = (userData) => {
    const errors = {};
           
    if (!userData.email) {
        errors.email = "You must enter your email here";
        
    }
    if (userData.email.length > 35){
        errors.email = 'Your email must be less than 35 characters'
    }
    if (! /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test (userData.email)){
        errors.email = 'Come on, friend! You are not entering the email correctly!';
        
    } 
    if (!userData.password) {
        errors.password= "Password is required";
    }
    
    if (userData.password.length < 6 || userData.password.length > 10){
        errors.password= "Password must be between 6 and 10 characters";
    }

    const passwordRegex = /\d/;
    if (!passwordRegex.test(userData.password)) {
        errors.password= "Password must contain at least one number";
  }
  
  return errors;
}

export default validation; 