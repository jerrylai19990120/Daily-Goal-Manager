import React from "react";
import "antd/dist/antd.css";
import { Form, Input, InputNumber, Button} from "antd";
import "./styles.css";

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

        <div className="header"><h1>Add Goals Form</h1></div>

        <Form
          name="GoalForm"
          onFinish={addGoal}
          //onFinish={(values) => {
            //console.log('values before:',values);  // works
            //values.title = {goalTitle};
            //values.description = {goalDescription};
            //values.duration = {goalDuration};
            //console.log('values after:', values);
          //}}
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
              message: "Please input your password!",
              type: Number
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
              message: "Please input the duration of your goal only in numbers!"
            }]}
          >

            <Input
              name="goalDuration"
              defaultValue={1}
              value = {goalDuration}
              onChange={handleChange} 
            />
            <span>  Days</span>
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
