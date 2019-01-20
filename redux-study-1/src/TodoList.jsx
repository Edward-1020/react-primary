import React, { Component } from 'react';
import * as actionCreators from './store/actionCreators';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/index';
import axios from 'axios';  

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
        store.dispatch(actionCreators.getInputChangeAction(e.target.value));
    }

    handleStoreChange () {
       this.setState(store.getState()); 
    }

    handleBtnClick () {
        store.dispatch(actionCreators.getAddItemAction());
    }

    componentDidMount () {
        axios.get('/list.json').then((res => {
            const data = res.data;
            store.dispatch(actionCreators.initListAction(data));
        }))
    }
}

export default TodoList;