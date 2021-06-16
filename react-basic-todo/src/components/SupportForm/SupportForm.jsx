import React from 'react';
import styles from './SupportForm.module.scss'
import { Control } from '../Control/index';

export class SupportForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            comment: ''
        }
    }

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert('UserName is ' + this.state.userName + ', comment: ' + this.state.comment);
    }

    render() {
        return (
            <div className={styles.container}>
                <h2>Please wright your request</h2>
                <form onSubmit={this.handleSubmit}>
                    <Control inputType='input' type="text" name='userName' labelText='Username' onChange={this.handleInputChange} required />  {/*className={styles.control}*/}
                    <Control inputType='textarea' name='comment' labelText='Comment' onChange={this.handleInputChange} required />  {/* className={styles.control}*/}
                    {/* <div className={styles.control}>
                        <input type="text" name='userName' onChange={this.handleInputChange} required />
                        <label> Username</label>
                    </div>
                    <br />
                    <div className={styles.control}>
                        <textarea name="comment" onChange={this.handleInputChange} required></textarea>
                        <label> Comment</label>
                    </div> */}
                    <button className={styles.submitBtn}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}