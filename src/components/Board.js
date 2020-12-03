// 게시판 작성 칸

import React from 'react';
import TableRow from '@material-ui/core/TableRow'; // 한 행
import TableCell from '@material-ui/core/TableCell'; // 한 칸


class Board extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
        )
    }
}

export default Board;