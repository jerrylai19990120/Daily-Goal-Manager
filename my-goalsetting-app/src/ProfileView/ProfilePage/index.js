
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Space, List, Col, Row, Avatar, Button, Card, Pagination, Progress } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { EditOutlined} from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {useParams} from 'react-router';

const { Meta } = Card;
const { Header, Content, Footer } = Layout;
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

const profiles = [];

const profileLoggedInAs = "samart"

class Profile {
  constructor(username, email, profilePictureUrl) {
    this.username = username;
    this.email = email;
    this.profilePictureUrl = profilePictureUrl;
    this.goals = [];
    this.friends = [];
    profiles.push(this)
  }

}

class Goal {
  constructor(title, description)
  {
    this.title = title;
    this.description = description;
    this.progress = Math.floor(Math.random() * 101); //new goal
  }
}

const samart = new Profile("samart", "samart@gmail.com", "https://pbs.twimg.com/profile_images/1262370602716889089/4Fk_pbO3_400x400.jpg");
const dieselnoi = new Profile("dieselnoi", "dieselnoi@gmail.com", "https://sports-images.vice.com/images/2016/12/15/dieselnoi-the-knee-of-legend-body-image-1481834836.jpeg");
const veeraphol = new Profile("Muhammad", "muhammad@gmail.com", "https://upload.wikimedia.org/wikipedia/commons/8/89/Muhammad_Ali_NYWTS.jpg");




for(let i = 0; i < 25; i++)
{
  samart.goals.push(new Goal("Daily Workouts!", "Lift those weights then put them down"))
  samart.goals.push(new Goal("Go for a run!", "Move those legs"))
}

for(let i = 0; i < 25; i++)
{
  dieselnoi.goals.push(new Goal("Go for a run!", "Move those legs"))
  dieselnoi.goals.push(new Goal("Daily Workouts!", "Lift those weights then put them down"))
}

function followUser(profileToFollow)
{
    const profileLoggedIn = profiles.find(profile => profile.username === profileLoggedInAs)
    profileLoggedIn.friends.push(profileToFollow.username)
    console.log(profiles)
}



class ProfilePage extends React.Component {

    render() {
        console.log(this.props)
        const { profile } = this.props
        console.log(profile)
        return(
            <div>
                <Layout className="layout">
                    <Content style={{ padding: '0 50px' }}>
                        <div className="site-card-wrapper">
                            <Row>
                                <Col span={3}>
                                </Col>
                                <Col className="profile-area" span={4}>
                                    <Space direction="vertical">
                                        <Avatar src={profile.profilePictureUrl} shape="square" size={128} icon={<UserOutlined />} />
                                        <Button>
                                            Change User Info
                                        </Button>
                                        <Button onClick={() => followUser(profile)}>
                                            Follow
                                        </Button>
                                        <Link to={"/user/" + profile.username + "/following"}>
                                            <Button>
                                                Following
                                            </Button>
                                        </Link>
                                    </Space>
                                </Col>
                                <Col className="goal-area" span={14}>
                                    <Card title = {profile.username.charAt(0).toUpperCase() + profile.username.slice(1) + "'s current goals"}>
                                        <List
                                            itemLayout="horizontal"
                                            pagination={{
                                                defaultPageSize: 7,
                                                showSizeChanger: false,
                                                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
                                            }}
                                            dataSource={profile.goals}
                                            renderItem={item => (
                                                <List.Item
                                                >
                                                    <List.Item.Meta
                                                        title={<a>{item.title}</a>}
                                                        description={item.description}
                                                    />
                                                    <Progress percent={item.progress} type="circle" width={100} />
                                                </List.Item>
                                            )}
                                        />
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Content>
                </Layout> 
            </div>
        )
    }

}

export default ProfilePage
