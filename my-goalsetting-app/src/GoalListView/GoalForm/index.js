import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, message} from "antd";
import "./styles.css";
import Detail from './../Detail'; 

const txt = "Create new goal here and share them with other people!";

class GoalForm extends React.Component {
  render() {
    const {
      goalTitle,
      goalDescription,
      goalDuration,
      handleChange,
      // handleSubmit,
      // close,
      addGoal
    } = this.props;

    const { TextArea } = Input;

    // const handleSubmitButton = e => {
    //   e.preventDefault();
    //   this.setState({ close: []});
    // };

    //console.log('properties:',this.props)
      //

    function goalAdded(e)
      {
          message.success("Your goal has been added! Check your goal at the bottom of the list")
          addGoal();
      }

    return (
      <div className="form">

        <h2 className="header">{txt}</h2>

        <Form
          name="GoalForm"
          onFinish={goalAdded}
        >

          <Form.Item
            label="Goal Title"
            name="g_title"
            rules={[{
              required: true,
              message: "Please input the title of your goal!"
            }]}
          >
            <Input 
              name="goalTitle"
              placeholder="Input the title of your goal"
              value = {goalTitle}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            label="Description"
            name="g_description"
            rules={[{
              required: true,
              message: "Please input the description of your goal!"
            }]}
          > 
            <TextArea 
              rows={4} 
              name="goalDescription"
              placeholder="Input description of your goal"
              value = {goalDescription}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            label="Duration (Number of Days)"
            name="g_duration"
            rules={[{
              required: true,
              message: "Please input the duration of your goal only in NUMBERS!",
             
            }]}
          >
            <Input
              name="goalDuration"
              placeholder='Input the duration of your goal only in numbers (ex/ 3 -> 3 Days)'
              value = {goalDuration}
              onChange={handleChange} 
            /> 
          </Form.Item>
 

          <Form.Item className="submit">
            <Button 
              type="submit"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>

        </Form>
      </div>
    );
  }
}

export default GoalForm;
