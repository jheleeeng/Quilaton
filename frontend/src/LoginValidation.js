function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email === ""){
        error.email = "Field Should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email Didn't Match"
    }else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Feild Should not be empty"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Password Didn't Match"
    }else {
        error.password = ""
    }
    return error;
    
}

export default Validation;