import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        // ONLY HERE DO WE CHANGE THE STATE
        this.state = { term: '' };

        this.searchCallback = this.searchCallback.bind(this);
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.searchCallback(event.target.value)}
                />
            </div>
        );
    }

    searchCallback(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);

    }
}

export default SearchBar;