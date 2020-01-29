import React from 'react';
import FromInput from '../form-input/form-input.component';
import CustomButtom from '../custom-button/custom-button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';
import {SignInContainer,SignInTitle,ButtonsContainer} from './sign-in.styles';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit =async event=>{
        event.preventDefault();
        const {email,password}=this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        }catch(error){
            console.log(error);
        }
    }
    handleChange =event=>{
        const {value,name}=event.target;
        this.setState({[name]:value})
    }
    render(){
        return(
            <SignInContainer>
                <SignInTitle>I already have a an account</SignInTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FromInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label='Email' required />
                    <FromInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='Password' required />
                    <ButtonsContainer>
                        <CustomButtom type='submit'>Sign in</CustomButtom>
                        <CustomButtom onClick={signInWithGoogle} isGoogleSignIn>{' '} Sign in with Google {' '}</CustomButtom>
                    </ButtonsContainer>   
                </form>
            </SignInContainer>
        )
    }
}


export default SignIn;