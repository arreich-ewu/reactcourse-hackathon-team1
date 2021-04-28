import React from 'react';
import { act, create } from 'react-test-renderer';
import SignupForm from '../Components/SignupForm';

describe('SignupForm test suite', () => {
    describe('On Change event tests', () => {
        test( `it should render the new value in the input when title onChange is activated`, () => {
            const testValue = "Test";
            const testRenderer = create(<SignupForm />);
            const testInstance = testRenderer.root;
            const titleInput = testInstance.findByProps({name: "title"});
            expect(titleInput.props.value).toBe(``);
            act(()=> titleInput.props.onChange({target:{value:testValue}}));
            expect(titleInput.props.value).toBe(testValue);
        });

        test( `it should render the new value in the input when First Name onChange is activated`, () => {
            const testValue = "Test";
            const testRenderer = create(<SignupForm />);
            const testInstance = testRenderer.root;
            const fnameInput = testInstance.findByProps({name: "fname"});
            expect(fnameInput.props.value).toBe(``);
            act(()=> fnameInput.props.onChange({target:{value:testValue}}));
            expect(fnameInput.props.value).toBe(testValue);
        });

        test( `it should render the new value in the input when Last Name onChange is activated`, () => {
            const testValue = "Test";
            const testRenderer = create(<SignupForm />);
            const testInstance = testRenderer.root;
            const lnameInput = testInstance.findByProps({name: "lname"});
            expect(lnameInput.props.value).toBe(``);
            act(()=> lnameInput.props.onChange({target:{value:testValue}}));
            expect(lnameInput.props.value).toBe(testValue);
        });

        test( `it should render the new value in the input when Email onChange is activated`, () => {
            const testValue = "Test";
            const testRenderer = create(<SignupForm />);
            const testInstance = testRenderer.root;
            const emailInput = testInstance.findByProps({name: "email"});
            expect(emailInput.props.value).toBe(``);
            act(()=> emailInput.props.onChange({target:{value:testValue}}));
            expect(emailInput.props.value).toBe(testValue);
        });

        test( `it should render the new value in the input when DOB onChange is activated`, () => {
            const testValue = "Test";
            const testRenderer = create(<SignupForm />);
            const testInstance = testRenderer.root;
            const dobInput = testInstance.findByProps({name: "dob"});
            expect(dobInput.props.value).toBe(``);
            act(()=> dobInput.props.onChange({target:{value:testValue}}));
            expect(dobInput.props.value).toBe(testValue);
        });

        test( `it should render the new value in the input when Gender onChange is activated`, () => {
            const handleGender = jest.fn();
            const testRenderer = create(<SignupForm />);
            const testInstance = testRenderer.root;
            const genderInputs = testInstance.findAllByType('radio');
            for(let input of genderInputs){
                expect(input.props.value).toBe(``);
                act(()=> input.props.onChange({target:{value:testValue}}));
                expect(input.props.value).toBe(testValue);
            }
            
        });


    });

});
