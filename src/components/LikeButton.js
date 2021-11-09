import React from 'react'
import { Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { incrementLikes } from '../actions/incrementLikes'

class LikeButton extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            count: 0
        }
    }

    incrementCount = (event) => {
        event.preventDefault()
        this.props.incrementLikes(this.state)
        console.log(this.state)
    }

    render() {
        return (
            <div className="like-button">
                <button onClick={this.incrementCount} className="counter">Like</button>
                <p><Icon name='heart' /></p>
                <p>{this.state.count}</p>
            </div>
        )
    }
}
    const mapStateToProps = (state) => {
        return { count: state.count}
    }

export default connect(mapStateToProps, { incrementLikes })(LikeButton)