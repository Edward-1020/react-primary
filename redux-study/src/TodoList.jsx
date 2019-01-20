import React, { Component } from 'react';
import * as actionTypes from './store/actionTypes';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/index';
  

class TodoList extends Component {
    constructor (props) {
        super(props);

        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render () {
        return (
            <div style={{
                marginTop: '10px'
            }}>
                <div>
                    <Input
                        value={this.state.inputValue}
                        placeholder="todo info"
                        style={{
                            width: '300px',
                            marginRight: '10px'
                        }}
                        onChange={this.handleInputChange}>
                    </Input>
                    <Button 
                        type="primary"
                        onClick={this.handleBtnClick}>提交</Button>
                </div>

                <List
                    style={
                        {
                            marginTop: '10px',
                            width: '300px'
                        }
                    }
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }

    handleInputChange (e) {
        const action = {
            type: actionTypes.CHANGE_INPUT_VALUE,
            value: e.target.value
        }

        store.dispatch(action);
    }

    handleStoreChange () {
       this.setState(store.getState()); 
    }

    handleBtnClick () {
        const action = {
            type: actionTypes.ADD_TODO_ITEM,
        }
        store.dispatch(action);
    }
}

export default TodoList;