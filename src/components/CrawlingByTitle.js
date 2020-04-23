import React, { Component } from 'react';

class CrawlingByTitle extends Component {
    static defaultProps = {
        keyword: '기본값'
    }

    componentDidMount() {
        const { keyword, history } = this.props;
        if (keyword === '기본값') {
            alert("키워드 값이 기본값이다!");
            history.push("/");
        } else {
            alert("키워드 값은 "+keyword+" 이다.");
        }
    }

    render() {
        return (
            <div>
                안녕하세요! 제 이름은 <b>{this.props.keyword}</b> 입니다.
            </div>
        );
    }
}

export default CrawlingByTitle;
