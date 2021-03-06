import React, { Component } from 'react'
import { Jumbotron, ListGroup } from 'react-bootstrap'
import { Image, Button } from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom'

class Cart extends Component {
    
    render() {
        return (
           
            <Jumbotron className='cart-jumbotron' style={{minHeight: '250px'}}>
                 {this.props.orders.length > 0 ? 
                 <>
                    <ListGroup style={{ overflow: 'auto', maxHeight: '250px' }}>
                    {this.props.orders.map(order => <ListGroup.Item><Image src={order.artifact.primary_image} avatar/><Link to={'/artifacts/'+order.artifact.id}>{order.artifact.title}</Link> List Price: ${parseFloat(order.total_price).toFixed(2)}  
                    <Button style={{ color: '#58768d'}} floated='right' onClick={() => this.props.removeOrder(order.id)}>Remove</Button></ListGroup.Item>)}
                    </ListGroup>
                    <div>
                        <br/>
                        <span><h5 style={{textAlign: 'right'}}>Total: ${this.props.total}</h5></span>
                        <br/>
                    </div>
                    <br/>
                    <div>
                        <Button style={{ color: '#58768d'}} floated='right' onClick={this.props.checkout}>Checkout</Button>
                        <Button style={{ color: '#58768d'}} floated='left' onClick={() => this.props.history.goBack()}>Back</Button>
                    </div>
                </>
                    : 'You have no items in your cart'}
            </Jumbotron>
        )
    }
}

export default withRouter(Cart)