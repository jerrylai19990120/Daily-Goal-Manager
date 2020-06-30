import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button} from "antd";
import "./styles.css";

const txt = "Create new goal here and share them with other people!";

class GoalForm extends React.Component {
  render() {
    const {
      goalTitle,
      goalDescription,
      goalDuration,
      handleChange,
      addGoal
    } = this.props;

    const { TextArea } = Input;

    //console.log('properties:',this.props)

    return (
      <div className="form">

        <h2 className="header">{txt}</h2>

        <Form
          name="GoalForm"
          onFinish={addGoal}
        >

          <Form.Item
            label="Goal Title"
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
            rules={[{
              required: true,
              message: "Please input the duration of your goal only in numbers!",
              type: Number
            }]}
          >
            <Input
              name="goalDuration"
              placeholder='Input the duration of your goal only in numbers (ex/ 3 -> 3 Days)'
              value = {goalDuration}
              onChange={handleChange} 
            /> Days
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary"
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
