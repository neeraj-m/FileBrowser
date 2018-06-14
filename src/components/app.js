import _ from 'lodash'
import React from 'react';
import { Component } from 'react';
import InfiniteTree from 'react-infinite-tree';

import SearchBar from '../components/search_bar'
import FileList from '../containers/file-list'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            files: null,
        };
    }

    fileSearch(term) {
        // console.log(term);
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