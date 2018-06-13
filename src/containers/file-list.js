import React, { Component } from 'react';
import { connect } from 'react-redux';

class FileList extends Component {
    renderList() {
        return this.props.files.result.map((file) => {
            return (
                <li key={file.id} className="list-group-item">
                    {file.title}
                </li>
            );
        });
    }

    render() {
        console.log(this.props.files)
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// Takes application state as an argument
// state contains array of files, and active file
function mapStateToProps(state) {
    // Return from here shows as props inside of FileList
    return {
        files: state.files
    };
}

export default connect(mapStateToProps)(FileList);