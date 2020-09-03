import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'
import { withRouter, Link } from 'react-router-dom'

class UserProfile extends Component {
    render() {
        return (
            <div>
                <Jumbotron className='cart-jumbotron'>
                    Hello, {this.props.userName}!

                    

                </Jumbotron>

            </div>
        )
    }
}

export default withRouter(UserProfile)

