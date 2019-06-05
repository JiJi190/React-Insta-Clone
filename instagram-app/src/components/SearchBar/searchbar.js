import React, { Component } from 'react'

class SearchBar extends Component {
    render() {
        return (
            <input
                name='search'
                onChange={this.props.searchFilter}
                placeholder='search...'
                type="text"
            />
        )
    }
}

export default SearchBar;
