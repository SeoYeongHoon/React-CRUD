// 게시판 작성 칸

import React from 'react';

class Board extends React.Component {
    render() {
        return (
            <div>
                <BoardProfile id={this.props.id} image={this.props.image} name={this.props.name} />
                <BoardInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job} />
            </div>
        )
    }
}

class BoardProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile" />
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class BoardInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Board;