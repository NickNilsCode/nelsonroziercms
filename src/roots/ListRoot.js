import React, { Component } from 'react';
import { ListPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <ListPage data={data ? data : {}}/>
    }
}

export default Root;