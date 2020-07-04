import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Space, List, Col, Row, Avatar, Button, Card, Progress } from 'antd';
import { Link } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons';

const { Content } = Layout;




function ProfilePage({profile, profiles, profileLoggedInAs, updateFriends}) {

    const addFriend = () => {
        updateFriends(profileLoggedInAs, profile.username)

    }

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
                                        <Button onClick={addFriend}>
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
                                                defaultPageSize: 5,
                                                showSizeChanger: false,
                                                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
                                            }}
                                            dataSource={profile.goals}
                                            renderItem={item => (
                                                <List.Item
                                                >
                                                    <List.Item.Meta
                                                        title={<a href="/#">{item.title}</a>}
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


export default ProfilePage;
