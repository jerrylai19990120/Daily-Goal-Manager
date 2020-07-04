import React from 'react';
import 'antd/dist/antd.css';
import {  List,  Card } from 'antd';
import {  Link } from 'react-router-dom';
import {useParams} from 'react-router';
import './styles.css';

const { Meta } = Card;

const profiles = [];



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


const FollowingPage = () => {
  const prof = useParams();
  const profile = profiles.find(profile => profile.username === prof.name)

  console.log(profile)
  return(
    <div className="ProfileGrid">
      <List
    grid={{ gutter: 16, column: {xs: 1, sm: 2, md: 4, lg: 6} }}
    // dataSource={profiles}
    dataSource={profiles}
    renderItem={item => (
      <List.Item>
        <Link to={"/user/" + item.username}>
        <Card
        style={{width: 300}}
        hoverable
        cover={<img className="profileGridImages" alt="" src={item.profilePictureUrl} height="300"></img>}
        
    >
      <Meta title={item.username.charAt(0).toUpperCase() + item.username.slice(1)} />
    </Card>
    </Link>
      </List.Item>
    )}
  />
    </div>
  );
};

export default FollowingPage
