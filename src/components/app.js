import _ from 'lodash'
import React from 'react';
import { Component } from 'react';
// import InfiniteTree from 'react-infinite-tree';

import SearchBar from '../components/search_bar'
import FileList from '../containers/file-list'
import { search } from '../actions/index';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            files: null,
            searchTerm: '',
        };
    }

    fileSearch(term) {
        console.log("in app. search: " + term);
        // TODO: send to search action
        search(term);
    }

    render() {
        const fileSearch = _.debounce((term) => { this.fileSearch(term) } , 400);

        return (
            <div>
                <SearchBar onSearchTermChange={fileSearch} />
                <FileList />
            </div>
        );
    }
}


export default App;