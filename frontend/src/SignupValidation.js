function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.first_name === ""){
        error.first_name = "Field Should not be empty"
    }else {
        error.first_name = ""
    }

    if(values.middle_name === ""){
        error.middle_name = "Field Should not be empty"
    }else {
        error.middle_name = ""
    }

    if(values.last_name === ""){
        error.last_name = "Field Should not be empty"
    }else {
        error.last_name = ""
    }
    
    if(values.email === "") {
        error.email = "Feild Should not be empty"
    }else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Feild Should not be empty"
    }else {
        error.password = ""
    }

    return error;
    
}

export default Validation;