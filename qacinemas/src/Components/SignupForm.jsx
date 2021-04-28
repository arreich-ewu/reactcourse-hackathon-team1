import React, { useState } from 'react';
import '../qacinemas.css';

const SignupForm = () => {
    const [title, setTitle] = useState(``);
    const [fname, setFname] = useState(``);
    const [lname, setLname] = useState(``);
    const [email, setEmail] = useState(``);
    const [dob, setDOB] = useState(``);
    const [phone, setPhone] = useState(``);
    const [gender, setGender] = useState(``);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(title, fname, lname, email, dob, phone, gender);
        setTitle(``);
        setFname(``);
        setLname(``);
        setEmail(``);
        setDOB(``);
        setPhone(``);
        setGender(``);
        

    };

    const handleRadioChange = event => {
        setGender(event.target.value)
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor="title">Title: *&nbsp;</label>
                <select
                    name="title"
                    id="title"
                    value={title}
                    onChange={event => {
                        setTitle(event.target.value)
                    }}>
                    <option value="1">Mr</option>
                    <option value="2">Mrs</option>
                    <option value="3">Miss</option>
                    <option value="4">Ms</option>
                    <option value="5">Dr</option>
                    <option value="6">Professor</option>
                    <option value="7">The Rt Revd Dr</option>
                    <option value="8">The Most Revd</option>
                    <option value="9">The Rt Revd</option>
                    <option value="10">The Revd Canon</option>
                    <option value="11">The Revd</option>
                    <option value="12">The Rt Revd Professor</option>
                    <option value="13">The Ven</option>
                    <option value="14">The Most Revd Dr</option>
                    <option value="16">Rabbi</option>
                    <option value="17">Canon</option>
                    <option value="18">Dame</option>
                    <option value="19">Chief</option>
                    <option value="20">Sister</option>
                    <option value="21">Reverend</option>
                    <option value="22">Major</option>
                    <option value="23">Other</option>
                    <option value="24">Cllr</option>
                    <option value="25">Sir</option>
                    <option value="26">Rt Hon Lord</option>
                    <option value="27">Rt Hon</option>
                    <option value="28">The Lord </option>
                    <option value="29">Viscount</option>
                    <option value="30">Viscountess</option>
                    <option value="31">Baroness</option>
                    <option value="32">Captain</option>
                    <option value="33">Master</option>
                    <option value="35">Lady</option>
                    <option value="38">MP</option>
                    
                </select>
            </div>
            <div className='form-group'>
                <label htmlFor="fname">First Name: *&nbsp;</label>
                <input
                    name="fname"
                    type="text"
                    value={fname}
                    onChange={event =>
                        setFname(event.target.value)
                    }
                    required />
            </div>
            <div className='form-group'>
                <label htmlFor="lname">Last Name: *&nbsp;</label>
                <input
                    name="lname"
                    type="text"
                    value={lname}
                    onChange={event =>
                        setLname(event.target.value)
                    }
                    required />
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email: *&nbsp;</label>
                <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={event =>
                        setEmail(event.target.value)
                    }
                    required />
            </div>
            <div className='form-group'>
                <label htmlFor="dob">Date of Birth:&nbsp;</label>
                <input
                    name="dob"
                    type="date"
                    value={dob}
                    onChange={event =>
                        setDOB(event.target.value)
                    } />
            </div>
            <div className='form-group'>
                <label htmlFor="phone">Phone Number:&nbsp;</label>
                <input
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={event=>
                        setPhone(event.target.value)
                }
                 />
            </div>
            <div className='form-group'>
                <input id="male" name="gender" type="radio" value="male" onChange={handleRadioChange}/>
                <label htmlFor="male">Male&nbsp;</label>
                <input id="female" name="gender" type="radio" value="female" onChange={handleRadioChange}/>
                <label htmlFor="female">Female&nbsp;</label>
                <input id="other" name="gender" type="radio" value="other" onChange={handleRadioChange}/>
                <label htmlFor="other">Other&nbsp;</label>
            </div>
            <div className='form-group'>
                <input  
                    type="submit" 
                    value="Sign me up!" 
                    className={`btn ${(!fname || !lname || !title || !email) ? `btn-danger` : `btn-primary`}`}
                    disabled={!fname || !lname || !title || !email}
                />
            </div>

        </form>
    );
};

export default SignupForm;