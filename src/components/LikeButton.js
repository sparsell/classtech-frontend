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

    handleClick = (event) => {
        event.preventDefault()
        const newCount = this.state.count + 1
        this.setState({
            count: newCount
        })
    }

    render() {
        // console.log(this.props)
        return (
            <div className="like-button">
                <button onClick={this.handleClick} id={this.props.studentId}className="counter" ><Icon name='heart' /></button>
                <p>{this.state.count}</p>
            </div>
        )
    }
}
    const mapStateToProps = (state) => {
        return { count: state.count}
    }

export default connect(mapStateToProps, {incrementLikes})(LikeButton)