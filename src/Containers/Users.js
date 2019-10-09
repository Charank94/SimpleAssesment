import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../Components/user.css';




class Users extends Component {

    render() {
        const { usersList } = this.props;


        let displayUsers = []

        displayUsers = usersList && usersList.map(user => {

            return (

                <article className='users' key={user.id} >


                    <Link to={'/' + user.id}>
                        <div>
                            ID={user.id}
                        </div>
                    </Link>

                    <div>
                        EMAIL={user.email}
                    </div>
                    <div>
                        FIRST NAME={user.first_name}
                    </div>
                    <div>
                        LAST NAME={user.last_name}
                    </div>
                    <div>
                        AVATAR={user.avatar}
                    </div>
                </article>

            )
        })

        return (
            <div>
                <nav>
                    <Link to={'/create'}><button className='button'>CREATE USER</button></Link>
                </nav>

                {displayUsers}
            </div>

        )
    }

}

function mapStateToProps(state) {
    return {
        usersList: state.users
    }
}


export default connect(mapStateToProps)(Users);