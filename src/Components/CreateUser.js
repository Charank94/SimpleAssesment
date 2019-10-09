import React, { Component } from 'react';
import axios from 'axios';
import './createuser.css';

class UserForm extends Component {

  state = {
    name: '',
    job: '',
    fields: {},
    allerrors: '',
    submit: false
  };


  handleValidation() {
    let fields = this.state.fields;

    let newerrors = ''
    let formIsValid = true;
    //Name
    if (!fields["name"]) {
      formIsValid = false;
      newerrors = newerrors + " Name Cannot be empty";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z ]+$/)) {
        formIsValid = false;
        newerrors = " ,Name Should have Only letters";
      }
    }

    //Job
    if (!fields["job"]) {
      formIsValid = false;
      newerrors = newerrors + " ,job Cannot be empty";
    }

    if (typeof fields["job"] !== "undefined") {
      if (!fields["job"].match(/[a-zA-Z ]*/)) {
        formIsValid = false;
        newerrors = newerrors + " ,job Should have Only letters";

      }
    }

    this.setState({ allerrors: newerrors });
    return formIsValid;
  }


  onChange = (e) => {

    this.setState({ [e.target.name]: e.target.value });
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ fields })
  }

  handleUpdate = (e) => {

    const { name, job } = this.state;
    this.setState({ submit: false })

    if (this.handleValidation()) {
      axios.post('https://reqres.in/api/users', { name, job })
        .then((result) => {
          alert("Values Updated")
        });
    } else {
      alert("Invalid Entries to update.")
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { name, job } = this.state;

    if (this.handleValidation()) {
      axios.post('https://reqres.in/api/users', { name, job })
        .then((result) => {
          this.setState({ submit: true })
          this.setState({ name: '',job:'' })
        });
    } else {
      alert("Form has these errors." + this.state.allerrors)
    }
  }

  render() {

    let Post = ''
    if (this.state.submit) {
      Post = <p style = {{textAlign: 'center'}}> Name and Job Submitted</p>
    }


    const { name, job } = this.state;
    return (
      <div>
      <form className="create-form" onSubmit={this.onSubmit}>
        <div className="input">
          <div className="label">
            Name
          </div>
          <input
            type="text"
            name="name"
            placeholder='Name'
            value={name}
            onChange={this.onChange}
          />
        </div>
        <div className="input">
        <div className="label">
            Job
          </div>
          <input
            type="text"
            name="job"
            placeholder='job'
            value={job}
            onChange={this.onChange}
          />
        </div>
        {Post}
        <div className="actions">
        <button className="submit"  disabled= {this.state.submit} type="submit">Submit</button>
        
        <button className="update" disabled= {this.state.submit} onClick = {this.handleUpdate}type="update">Update</button>
        </div>

      </form>

{/* <button onClick = {this.handleUpdate}type="update">Update</button> */}


</div>
    );
  }
}

export default UserForm;