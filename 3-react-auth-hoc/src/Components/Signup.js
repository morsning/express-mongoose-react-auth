import React from 'react'
import axios from 'axios'
import { setToken } from './AuthHelper';

class Signup extends React.Component {

    state = {
        user: '',
        pass: ''
    }

    handleFormSubmit(event) {
        event.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:3010/signup',
            data: {
              username: this.state.user,
              password: this.state.pass
            }
        }).then((result) => {
            if (result && result.data && result.data.signedJWT) {
                console.log("inuti then")
                setToken(result.data.signedJWT)
                this.props.history.replace('/');
            }
        })
    }

    render() {

        return (
            <div>
                <p>Register</p>
                <form onSubmit={event => this.handleFormSubmit(event)}>
                    <input 
                        type="text" 
                        value={this.state.user}
                        placeholder="email"
                        onChange={e => this.setState({user: e.target.value})}
                    />
                    <br></br>
                    <input 
                        type="password" 
                        value={this.state.pass}
                        placeholder="password"
                        onChange={e => this.setState({pass: e.target.value})}
                    />
                    <br></br>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}

export default Signup;