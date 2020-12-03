import React, { Component } from 'react';
import Board from './components/Board';
import './App.css';

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
    return (
      <div>
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
      </div>
    )
  }
}

export default App;
