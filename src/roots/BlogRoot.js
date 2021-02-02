import React, { Component } from 'react';
import { BlogPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <BlogPage data={data ? data : {}}/>
    }
}

export default Root;
