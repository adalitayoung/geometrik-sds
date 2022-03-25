import React, {useState} from "react";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure();
export default function Register(){
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        pwd:"",
        confirmPwd: "",
        role:"",
        experience:"",
    });
    const [role, setRole] = useState("select-one");
    // const [show, setShow] = useState(true);
    const updatefirstName = (event) => {
        setValues({...values, firstName:event.target.value})
    }
    const updatelastName = (event) => {
        setValues({...values, lastName:event.target.value})
    }
    const updateemail = (event) => {
        setValues({...values, email:event.target.value})
    }
    const updateconfirmemail = (event) => {
        setValues({...values, confirmEmail:event.target.value})
    }
    const updatepwd = (event) => {
        setValues({...values, pwd:event.target.value})
    }
    const updateConfirmpwd = (event) => {
        setValues({...values, confirmPwd:event.target.value})
    }
    // if (values.pwd === values.confirmPwd && values.pwd !== "" && values.confirmPwd !== "")
    // {
    //     setShow(true);
    // }
    const notify = (event) =>{
        if (values.firstName !== '' && values.lastName !== '' && values.email !== '' && values.pwd !== '' && values.confirmPwd === values.pwd && values.email === values.confirmEmail){
            toast.success('Registration Successful!', {position: toast.POSITION.TOP_CENTER})
        }
    }
    return(
        <div className="body">
            <div className="register-container">
                <div className="title">Registration</div>
                <form className="registration-form">
                    <div className="user-details">
                        <div className="input">
                            <span className="details">First Name</span>
                            <input type="text" placeholder="Enter your First Name" name="firstName" value={values.firstName} onChange={updatefirstName} required/>
                        </div>
                        <div className="input">
                            <span className="details">Last Name</span>
                            <input type="text" placeholder="Enter your Last Name" name="lastName" value={values.lastName} onChange={updatelastName} required/>
                        </div>
                        <div className="input">
                            <span className="details">Email</span>
                            <input type="email" placeholder="Enter your Email" name="email" value={values.email} onChange={updateemail} required/>
                        </div>
                        <div className="input">
                            <span className="details">Confirm Email</span>
                            <input type="email" placeholder="Confirm your Email" name="Confirmemail" value={values.confirmEmail} onChange={updateconfirmemail} onPaste={(e) => {
                                e.preventDefault()
                                return false;
                            }} required/>
                        </div>
                        <div className="input">
                            <span className="details">Password</span>
                            <input type="password" placeholder="Enter your Password" name="pwd" value={values.pwd} onChange = {updatepwd} required/>
                        </div>
                        <div className="input">
                            <span className="details">Confirm Password</span>
                            <input type="password" placeholder="Confirm your Password" name="confirmPwd" value={values.confirmPwd} onChange={updateConfirmpwd} onPaste={(e) => {
                                e.preventDefault()
                                return false;
                            }} required/>
                            {/* {!show ? <p>Passwords do not match!</p> : null} */}
                        </div>
                        <div className="input">
                            <span className="details">What is your role?</span>
                            <select name="selectRole" id="selectRole" required value={role} onChange={(e)=>{setRole(e.target.value)}}>
                                <option value="table-select">-select one-</option>
                                <option value="Designer">Designer</option>
                                <option  value="Supplier">Supplier</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-radio">
                                <span className="radio-details">What is your discipline?</span><br/>
                                    <label for="role-id1" className="details">
                                        <input type="radio" name="radio-field" id="role-id1" className="details" value="Architect" required/>
                                        Architect
                                    </label><br/>
                                    <label for="role-id2" className="details">
                                        <input type="radio" name="radio-field" id="role-id2" className="details" value="Landscape Architect" />
                                        Landscape Architect
                                    </label><br/>
                                    <label for="role-id3" className="details">
                                        <input type="radio" name="radio-field" id="role-id3" className="details" value="Interior Designer" />
                                        Interior Designer
                                    </label><br/>
                                    <label for="role-id4" className="details">
                                        <input type="radio" name="radio-field" id="role-id4" className="details" value="Structural Engineer" />
                                        Structural Engineer
                                    </label><br/>
                                    <label for="role-id5" className="details">
                                        <input type="radio" name="radio-field" id="role-id5" className="details" value="Mechanical Engineer" />
                                        Mechanical Engineer
                                    </label><br/>
                                    <label for="role-id6" className="details">
                                        <input type="radio" name="radio-field" id="role-id6" className="details" value="Civil Engineer" />
                                        Civil Engineer
                                    </label><br/>
                                    <label for="role-id7" className="details">
                                        <input type="radio" name="radio-field" id="role-id7" className="details" value="Electrical Engineer" />
                                        Electrical Engineer
                                    </label><br/>
                                    <label for="role-id8" className="details">
                                        <input type="radio" name="radio-field" id="role-id8" className="details" value="Environmental Engineer" />
                                        Environmental Engineer
                                    </label><br/>
                                    <span className="radio-details">What is your position?</span><br/>
                                    <label for="position-id1" className="details">
                                        <input type="radio" name="radio-field2" id="position-id1" className="details" value="Business Owner" required/>
                                        Business Owner
                                    </label><br/>
                                    <label for="position-id2" className="details">
                                        <input type="radio" name="radio-field2" id="position-id2" className="details" value="Employee" />
                                        Employee
                                    </label><br/>
                                    <label for="position-id3" className="details">
                                        <input type="radio" name="radio-field2" id="position-id3" className="details" 
                                        value="Prefer not to say" />
                                        Prefer not to say 
                                    </label><br/>
                        </div>
                    { role === "Designer" ? (
                        <div>
                            <div className="input-select">
                                <span className="details">What design program are you using?</span>
                                <select name="selectDesign" id="selectDesign" required>
                                    <option value="table-select">-select one-</option>
                                    <option value="autocad 2d">AutoCad 2D</option>
                                    <option  value="revit">Revit</option>
                                    <option  value="civilcad">CivilCad</option>
                                    <option  value="archicad">ArchiCad</option>
                                </select>
                            </div>
                            <div className="input-radio">
                                    <span className="radio-details">How many years of experience do you have?</span><br/>
                                    <label for="year-id1" className="details">
                                        <input type="radio" name="radio-field1" id="year-id1" className="details" value="1-5 years" required/>
                                        1-5 years
                                    </label><br/>
                                    <label for="year-id2" className="details">
                                        <input type="radio" name="radio-field1" id="year-id2" className="details" value="5-10 years" />
                                        5-10 years
                                    </label><br/>
                                    <label for="year-id3" className="details">
                                        <input type="radio" name="radio-field1" id="year-id3" className="details" 
                                        value="10+ years" />
                                        10+ years 
                                    </label><br/>
                            </div>
                        </div>
                    ) : null }
                    <div className="register-button">
                        <input type="submit" value="SUBMIT" onClick={notify} />
                    </div>
                </form>
            </div>
        </div>
    );
}
                