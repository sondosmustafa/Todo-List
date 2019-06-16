import React, {Component} from 'react';
import './assest/style.css';
import {Button,Input,Form} from 'reactstrap'
class AddItem extends Component{
    state = {
        activity: ' ',
    };
    handelChange = (e) => {
        this.setState ({
            [e.target.id]: e.target.value
        });
    };
    handelSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            activity : ' ',
        })
    };
    render(){
        return (
            <div>
                <Form onSubmit={this.handelSubmit} className="FormStyle">
                    <Input type="text" placeholder="enter Activity" id="activity" onChange={this.handelChange} value={this.state.activity}/>
                    <Button type="submit" color="success" value="Add">Add Activity</Button>
                </Form>

            </div>
        )
    }
}
export default AddItem
