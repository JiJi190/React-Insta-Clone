import React, { Component } from 'react';
import styled from 'styled-components';

class SearchBar extends Component {
    render() {
        return (
            <Search>
                <input
                    name='search'
                    onChange={this.props.searchFilter}
                    placeholder='search...'
                    type="text"
                />
            </Search>
        )
    }
}

const Search = styled.form`
   input {
       border: 2px solid black;
       margin: 1%;
       padding: .5%
   }
`

export default SearchBar;
