import React from 'react';
import axios from 'axios'
import { isLoggedIn, getToken } from './AuthHelper';

class App extends React.Component {

    componentDidMount() {
        if (!isLoggedIn()) {
            this.props.history.replace('/login')
        } else {
            axios({
                method: 'get',
                url: 'http://localhost:3010/api/books',
                headers: {
                    authorization: 'Bearer ' + getToken()
                }
            }).then((result) => {
                    console.log("app protected resource")
                    console.log(result)
            })
        }
    }

    render() {
        return (
            <div>
                <p>Our protected resources</p>
            </div>
        )
    }

}
export default App;