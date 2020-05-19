import React, { Component } from 'react'

export class SearchInput extends Component {
    render() {
        return (
            <div>
                <input type="text" className="srch-input" placeholder="Free text search..." />
            </div>
        )
    }
}

export default SearchInput
