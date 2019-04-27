import React, {Component} from 'react';

import './About.css';


class About extends Component {

    render() {
        return (
            <div>
                <h2>제작자: 배님</h2>
                <div style={{padding : '10px'}}>
                    <table className="table-class">
                        <thead>
                        <tr>
                            <th>사용 기술</th>
                            <th>비고</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>react</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>react router</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>redux</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>redux-saga</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>axios</td>
                            <td>HTTP 통신 모듈</td>
                        </tr>
                        <tr>
                            <td>cross-env</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>@material-ui</td>
                            <td>@material-ui/core, @material-ui/icons</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default (About);
