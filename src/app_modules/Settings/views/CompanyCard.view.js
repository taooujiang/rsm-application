
import React, { Component } from 'react'
export default class companyCard extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {};
    }

    render() {
       console.log(this.props,'=====this.props')
        return (
            <div>测试</div>
        );
    }
}

companyCard.propTypes = {};
