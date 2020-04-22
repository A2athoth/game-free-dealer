import React, { Component } from 'react';

class CrawlingByTitle extends Component {
    static defaultProps = {
        name: 'CrawlingByTitle'
    }

    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        return (
            <div>
                안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
            </div>
        );
    }
}

export default CrawlingByTitle;
