import React, { Component } from 'react';
import Board from './components/Board';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const boards = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '서영훈',
    'birthday': '961205',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '서영우',
    'birthday': '980917',
    'gender': '남자',
    'job': '소방관'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '김도은',
    'birthday': '961216',
    'gender': '남자',
    'job': '프로그래머'
  }
]

class App extends Component {
  render() {

    const { classes } = this.props; // 위에서 정의한 스타일 적용시키기 위함
    
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
          // 배열의 각 원소의 내용을 적용하기 위해 map이용
              boards.map(c => { // 하나의 데이터를 c라고 가정
                return (
                <Board
                  key={c.id}  // map 사용하면 key 필요함
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
                );
              })
            }
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);
