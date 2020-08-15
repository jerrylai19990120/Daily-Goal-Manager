# My Goal Setting App

## Application Description :
<table> <tr> <td>
In the current pandemic situation where contact between friends and families are limited, people are prone to procrastinate and lay things off. This website encourages users to choose or create a task that they want to fulfil every day with other people with the same goal. This way, users feel supported and stimulated to achieve their goals every day. 
</td> </tr> </table>

Contributors:
**Team 29**
- oheunkyo - Eunkyo Oh  
- jeonjooh - Joo Hyun Jeon  
- tamrazpe - Peter Tamraz  
- laiyihui - Yihui Lai  



## How to Use the Application

... ?

## User Features

### Login

![Image of Login Page](https://github.com/csc309-summer-2020/team29/blob/master/readme_img/login.png)

Users can log in with valid username and password. At successful login, user will be redirected to home page.

There are two valid Login Credentials for users: 

* username : user   
  password : user

* username : user2   
  password : user2

### Sign Up

![Image of Sign Up Page](https://github.com/csc309-summer-2020/team29/blob/master/readme_img/signup.png)

New users can sign up for a new account at this page using username, password and email of their choice.

- Username must not be taken and be greater than 3 characters.
- Password must be greater than 5 characters.

When users sign up, their information will be stored in the `users` database with bcrypted passwords. 

### Goal List (Home Page)

The home page of this website shows the list of goals created by different users in the database.

![Image of Goal List Page](https://github.com/csc309-summer-2020/team29/blob/master/readme_img/goalList.png)

* **Menu Bar** - User will be redirected to *Goals* page or *Profile* page.
* **Add New Goal Form** - Once user clicks on the "Add New Goal Form" tab, a form opens where user can fill out to create new goal.

  ![Image of goalForm1](https://github.com/csc309-summer-2020/team29/blob/master/readme_img/goalForm1.png)
  Once user fills in the form and submits, a message pops on success.
  Also, users can see the added goal at the end of the list.
  ![Image of goalForm2](https://github.com/csc309-summer-2020/team29/blob/master/readme_img/goalForm2.png)
  The goal form creates a new Goal object and creates a `POST` request to add the goals to the `goals` database.

* **Goal List** - Below the "Add New Goal Form" tab, there is a list of goals that are currently in the `goals` database.
  For each goal, users can view the title, description, and duration of the goal. 
  - Also, there is a "More Info" button and "Report" button for each goal. The "More Info" button will redirect the user to Goal Details page for each goal. The "Report" button will report the goal to the Admin, where Admin can review and delete the reported goals.

### Goal Details

In the goal details page, user can see the details of specific goals.

![Image of goal detail](https://github.com/csc309-summer-2020/team29/blob/master/readme_img/detail.png)

* **Progress Status** - Users can log their progress of this goal by clicking on the "Log Your Progress" button. Once the button is clicked, the status of goal progress will be shown in the progress circle in the left top corner. 

  ![Image of progress status](https://github.com/csc309-summer-2020/team29/blob/master/readme_img/progress.png)

* **Select Color** - Users customize their goal details tab by selecting colors.
* **Kudos, Comment, Share, Rating **  - Users can give Kudos, leave comments, share goal, or give rating to the goal.
  - User can leave comments by using the comment text box section. They can view their comments after submitting.
    ![Image of comment](https://github.com/csc309-summer-2020/team29/blob/master/readme_img/comment.png)
  - Users can also 

### Profile Page

In the Profile page, user can see their info and goals in progress.

![Image of Profile Page](https://github.com/csc309-summer-2020/team29/blob/master/readme_img/profile.png)

* **Profile** - Users can see their profile picture, as well as have access to change user info.
  - Change User Info not yet implemented
* **Follow / Following** - User can choose to follow another user or see the list of users following them. Once clicking on the "Following" button, user can view the profiles of other users as well.
  ![Image of Following](https://github.com/csc309-summer-2020/team29/blob/master/readme_img/following.png)
  ![Image of Diff User](https://github.com/csc309-summer-2020/team29/blob/master/readme_img/diff_user.png)
* **Current Goals** - Next to the user info, there is a list of goals the user is currently working on.
  - For each goal, users can see the title, description, duration of the goal.

## Admin Features

The Admin of this application works as a moderator of the website. 
Admin can view the flagged/reported list of goals and users and have the ability to delete them.

### Login

Users can log in with valid username and password.

Valid Login Credentials for Admin: 

* username : admin      
  password : admin

### Admin Page

The Admin page can be accessed and viewed when logged in successfully with admin credentials. Navigate by clicking on the admin tab in the header.

![Image of Admin Page](https://github.com/csc309-summer-2020/team29/blob/master/readme_img/admin.png)

* **Reported Goals and Comments** - Admin can view and delete the list of goals and comments that have been flagged by users. 
  - By pressing on the "Flagged Goals" tab, the list of reported goals are shown.
  - By pressing on the "Flagged Comments" tab, the list of reported comments are shown. Admin can delete the comments directly from this page.
  
![Image of flagged lists](https://github.com/csc309-summer-2020/team29/blob/master/readme_img/flagged.png)

* **List of Users** - Admin also have access to the list of users currently registered in the database. They can also delete users on this page.

## Overview of Routes in Express Server

There are two main routes in the Express server: `users` and `goals`.
The database can be connected through MongoDB using the connection string: "mongodb+srv://jerrylai:tg12345678@team29.gh6gt.mongodb.net/UserInfo?retryWrites=true&w=majority"

### Users
The `users` route holds the list of users registered in the database. The users are added to the database when a user signs up on the SignUp page. Here, a new User object is created using the UserSchema Model. 



The following are the API routes for `users` database:

** Note: `usersAction.js` and `goalActions.js` can be found in `client/src/actions` folder. **

- `app.get("/users", ...)`: This `GET` request returns the list of users currently logged in the database. This request is made in the function `getUsers()` in `usersActions.js` and is used in various functions where the list of users are needed.
- `app.patch("/users/:username", ...)`: This `PATCH` request requires a username of the user and the new attributes to be changed inside of that user. It returns a user with the updated attributes. This request is made in the function `setOwner()` in `goalActions.js` to add the newly created goal into the `goals` attribute of the current User. 
- `app.delete("/users/:username", ...)`: This `DELETE` request requires the username of the user to be deleted. This request is made in the funtion `deleteUser` in `usersAction.js` and lets admins to delete users from the admin page.

### Goals
The `goals` route holds the list of goals registered in the database. T


## Development Instructions - Making Changes

After making changes to the code, user must follow these instructions to reflect the changes in the application.


> Make changes in the React App placed in `/client/src` folder
```
$ cd client
$ npm run build
```

> go back to the root directory
```
$ cd ..
```

> run server
```
$ npm start
```

Upon completing these steps you would be directed to the login page of our web application.


## Built With

* [React](https://reactjs.org/) - Javascript Library used to simplify the creation of user interfaces.
* [Ant Design](https://ant.design/) - React UI library with components used to to efficiently create elegant user interfaces.

## License

The license is made by Joo Hyun Jeon under MIT License - see the [LICENSE.md](LICENSE.md) file for details.
