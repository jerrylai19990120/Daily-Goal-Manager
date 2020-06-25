import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import './goal-description.css';
import Description from './description';
import PastGoals from './pastGoals';
import Common from './common';
import {Menu, Layout, Card, Timeline, Calendar} from 'antd';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {BellTwoTone, HeartTwoTone, SmileTwoTone, LeftCircleTwoTone} from '@ant-design/icons';
import HeaderGoals from './header-goals';
import HeaderPast from './header-past';
import HeaderCommon from './header-common';




class Goal extends React.Component{

    

    render() {

        const { Header, Content, Footer, Sider } = Layout;

        const {Meta} = Card;

        return (
            <div id="container">
                <Router>
                <Layout>
                <Sider id="sider">
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['goals']} >
                    <Menu.Item key="goals" icon={<SmileTwoTone twoToneColor='orange'/>}>
                        My Goals
                        <Link to='/goals'/>
                    </Menu.Item>
                    <Menu.Item key="common" icon={<BellTwoTone twoToneColor='#8915F9'/>}>
                        Try Something New?
                        <Link to='/common'/>
                    </Menu.Item>
                    <Menu.Item key="pastGoals" icon={<HeartTwoTone twoToneColor="#eb2f96" />}>
                        Past Goals
                        <Link to='/pastGoals'/>
                    </Menu.Item>
                    <Menu.Item key="back" icon={<LeftCircleTwoTone twoToneColor='#5184DD'/>}>
                    Back
                    </Menu.Item>
                </Menu>
                </Sider>
                <Layout className='site-layout'>
                    <Header>
                        <Route path='/goals' component={HeaderGoals}/>
                        <Route path='/common' component={HeaderCommon}/>
                        <Route path='/pastGoals' component={HeaderPast}/>
                    </Header>
                    <Layout>
                    <Content>
                        <Route path='/goals' component={Description}/>
                        <Route path='/common' component={Common}/>
                        <Route path='/pastGoals' component={PastGoals}/>
                    </Content>
                    
                    <div id='right-sider'>
                    <Calendar fullscreen={false} id='calendar'/>
                        <Timeline>
                            <Timeline.Item color="#FFCB35">Read for 30 minutes</Timeline.Item>
                            <Timeline.Item color='#CF4141'>10K Run</Timeline.Item>
                            <Timeline.Item color="#FFCB35">Yoga session</Timeline.Item>
                            <Timeline.Item color='#CF4141'>Finished the template of a group project</Timeline.Item>
                            <Timeline.Item color="#FFCB35">E-learning for 1 hour</Timeline.Item>
                            <Timeline.Item color='#CF4141'>Meeting with group</Timeline.Item>
                            <Timeline.Item color="#FFCB35">Write a diary</Timeline.Item>
                            <Timeline.Item color='#CF4141'>Coding</Timeline.Item>
                            <Timeline.Item color="#FFCB35">Applying for jobs</Timeline.Item>
                            <Timeline.Item color='#CF4141'>Eat a bowl of salad for lunch</Timeline.Item>
                        </Timeline>,
                        <Card
                            className='quote'
                            hoverable
                            cover={<img alt="" src={require("./images/inspirational-motivation-quotes-harder-you-work-better-you-get_67445-139.jpg")} />}
                        >
                        <Meta title="Quote for the day" description="Be Better Every Day!" />
                        </Card>
                    </div>
                    
                    </Layout>
                </Layout>
                </Layout>
                </Router>
            </div>
        )
    }
}

export default Goal;

