import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../actions/index';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     // ONLY HERE DO WE CHANGE THE STATE
    //     this.state = {
    //         term: 'test'
    //      };
    //
    //     this.searchCallback = this.searchCallback.bind(this);
    // }

    // searchCallback(value) {
    //     this.setState({value});
    //     search(value);
    //     // this.props.getRequestedFiles(term);
    // }

    render() {
        const {search, value} = this.props;

        return (
            <div className="search-bar">
                <input
                    placeholder="Search for files..."
                    value={value}
                    onChange={event => search(event.target.value)}
                />
            </div>
        );
    }


}


function mapStateToProps({files}) {
  return {value: files.value};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({search}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

// const mapStateToProps = (state) => {
//     return {
//         filters: state.filters
//     }
// }
//
// function mapDispatchToProps(dispatch) {
//     // console.log(dispatch)
//     // When searchFiles is called, result is passed to all reducers
//     return bindActionCreators( { getRequestedFiles: getRequestedFiles }, dispatch)
// }
//
//
// export default connect(mapDispatchToProps)(SearchBar);