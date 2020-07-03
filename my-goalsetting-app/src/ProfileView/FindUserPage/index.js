
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import ProfileView from '../ProfilePage'
import {useParams} from 'react-router';

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


const UsersPage = () => {
  const profileToFind = useParams();
  const profileToRender = profiles.find(profile => profile.username === profileToFind.name)
  console.log(profileToRender)
  if(profileToRender === undefined)
  {
    return (
      <div>
        <h3>
          This user doesn't exist!
        </h3>
      </div>
    );
  }
  else {
    return (
    <div>
      <ProfileView profile={profileToRender} 
      />
    </div>
  );
    }
};

export default UsersPage
