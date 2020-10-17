import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = ( ) => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const [text, setText] = useState('')
    // state = {
    //     text: ''
    // };

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Please enter something', 'light');
        }
        else {
            githubContext.searchUsers(text);
            setText('');
        }

    }

    const onChange = e =>
        // this.setState({ [e.target.name]: e.target.value });
        setText(e.target.value);
    return (
        <div>
            <form onSubmit={onSubmit} action="" className="form">
                <input
                    type="text"
                    name='text'
                    // value={this.state.text}
                    value={text}
                    placeholder="Search users..."
                    onChange={onChange}
                />
                <input
                    type="submit"
                    value="Search"
                    className="btn btn-dark btn-block" />
            </form>

            {githubContext.users.length > 0 && <button
                className="btn btn-light btn-block"
                onClick={githubContext.clearUsers}>
                Clear
                    </button>}

        </div>
    )

}



export default Search
