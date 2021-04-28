import React from 'react';

const SignupForm = () => {
    return (
        <form>
            <div className='form-group'>
                <label for="title">Title: *&nbsp;</label>
                <input type="select" required />
            </div>
            <div className='form-group'>
                <label for="fname">First Name: *&nbsp;</label>
                <input name="fname" type="text" required />
            </div>
            <div className='form-group'>
                <label for="lname">Last Name: *&nbsp;</label>
                <input name="lname" type="text" required />
            </div>
            <div className='form-group'>
                <label for="email">Email: *&nbsp;</label>
                <input name="email" type="email" required />
            </div>
            <div className='form-group'>
                <label for="dob">Date of Birth:&nbsp;</label>
                <input name="dob" type="date" />
            </div>
            <div className='form-group'>
                <label for="dob">Date of Birth:&nbsp;</label>
                <input name="dob" type="tel" />
            </div>

        </form>
    );
};

export default SignupForm;