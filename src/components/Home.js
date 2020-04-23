import React, { Component } from 'react';
import CrawlingByTitle from './CrawlingByTitle';
import CrawlingByUrl from './CrawlingByUrl';

class Crawling extends Component {
    constructor() {
        super();

        this.state = {
            keyword: ''
        }

        this.handleChange = (e) => {
            this.setState({
                keyword: e.target.value
            })
        }

        this.submit = (e) => {
            this.setState({
                keyword: e.target.value
            })
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        placeholder="타겟을 입력하시오"
                        value={this.state.keyword}
                        onChange={this.handleChange}
                    />
                    <div>{this.state.keyword}</div>
                </form>

                <CrawlingByTitle keyword={''} />
                {/*<CrawlingByUrl />*/}
            </div>


        );
    }
}

export default Crawling;
