import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Components/user.css';




class SingleUser extends Component {

    handleUserDelete= () => {
        let id = parseInt(this.props.match.params.id);
        this.props.deleteUser(id);
        this.props.history.push('/');
    }

    render() {
        const userDisplay = this.props.user ?
            (<div >
                <article className='users' key={this.props.user.id} >
                    <div>
                        ID={this.props.user.id}
                    </div>

                    <div>
                        EMAIL={this.props.user.email}
                    </div>
                    <div>
                        FIRST NAME={this.props.user.first_name}
                    </div>
                    <div>
                        LAST NAME={this.props.user.last_name}
                    </div>
                    <div>
                        AVATAR={this.props.user.avatar}
                    </div>
                </article>
                <button className="center btn" onClick={()=>{this.handleUserDelete()}}>Delete</button>
               
                </div>
                
            ) : (<div> loading.....</div>)


        return (
            <div>
                {userDisplay}
            </div>

        )
    }

}
function mapDispatchToProps(dispatch) {
    return {
        deleteUser: function (id) {
            dispatch({ type: 'delete_user', id: id })
        }
    }
}


function mapStateToProps(state, ownProps) {
    let id = parseInt(ownProps.match.params.id);
    let { users } = state;
    let user = users.find((user) => {
        return user.id === id
    });
    return {
        user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleUser);