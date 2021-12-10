import React, { Component } from "react";
import { connect } from "react-redux";
import TasksPage from './components/TasksPage';

class App extends Component {
    onCreateTask = ({ title, description }) => {
        this.props.dispatch({
            type: 'CREATE_TASK',
            payload: {
                title,
                description,
            }
        });
    }
    render(){
        return (
            <div className="main-content">
                <TasksPage 
                    tasks={this.props.tasks}
                    onCreateTask={this.onCreateTask}
                />
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(App);
