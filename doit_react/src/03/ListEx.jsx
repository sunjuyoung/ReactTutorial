import React, { Component } from 'react';

class ListEx extends Component {
    render() {
        const priceList = [1000,2000,30004,234];
        const prices   = priceList.map((price,i)=>(<div key={i}>가격 : {price} </div>));
        const todoList  =[
            {taskName : '빨래하기', finish : false},
            {taskName : '운동하기', finish : true},
        ]

        const todos  = todoList.map((todo,i)=>(<div key={`t_${i}`}>{todo.taskName} : {todo.finish ? '완료':'미완료'}</div>))
        return (
            <div>
                {prices}
                {todos}
            </div>
        );
    }
}

export default ListEx;