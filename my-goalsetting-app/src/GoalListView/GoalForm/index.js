import React from "react";
import "antd/dist/antd.css";
import { Form, Input, InputNumber, Button} from "antd";

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

    return (
      <div className="form">

        <div className="header"><h1>Add Goals Form</h1></div>

        <Form
          name="GoalForm"
          onFinish={(values) => {
            values.title = {goalTitle};
            values.description = {goalDescription};
            values.duration = {goalDuration};
            console.log(values);
          }}
        >

          <Form.Item
            label="Goal Title"
            name="title"
            rules={[{
              required: true,
              message: "Please input the title of your goal!"
            }]}
          >
            <Input placeholder="Input the title of your goal"/>
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{
              required: true,
              message: "Please input your password!"
            }]}
          >
            <TextArea rows={4} placeholder="Input description of your goal"/>
          </Form.Item>

          <Form.Item
            label="Duration (Number of Days)"
          >
            <Form.Item 
              name="duration"
              noStyle
              rules={[
                {
                  required: true,
                  message: "Please input the duration of your goal only in numbers!"
                }
              ]}
            >
              <InputNumber min={1} max={365}/>
            </Form.Item>
            <span className="ant-form-text"> days</span>
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit"
            >
              Add Goal
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default GoalForm;
