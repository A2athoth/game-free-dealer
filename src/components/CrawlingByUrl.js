import React, { Component } from 'react';

class CrawlingByUrl extends Component {
    static defaultProps = {
        key: 'CrawlingByUrl'
    }

    render() {
        return (
            <div>
                안녕하세요! 제 이름은 <b>{this.props.key}</b> 입니다.
            </div>
        );
    }
}

export default CrawlingByUrl;
