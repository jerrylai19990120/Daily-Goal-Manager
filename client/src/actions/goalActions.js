export const addGoalJSON = (formValues) => {

    const newGoal = formValues.props;

    const title = newGoal.goalTitle;
    const description = newGoal.goalDescription;
    const duration = newGoal.goalDuration; 

    //console.log('title: '+title+', description: '+description+', duration'+duration)

    const url = '/goals'

    const request = new Request(url, {
        method: 'post',
        body: JSON.stringify({
            title: title,
            description: description,
            duration: duration,
            comments: [],
            kudos: 0
            // if you need to add attributes to Goal Schema
            // ** ADD ATTRIBUTE HERE **
        }),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })

    // Send the request with fetch()
    fetch(request)
        .then(function (res) {
            if (res.status === 200) {
                return res.json()
            } 
        })
        .catch(error => {
            console.log(error)
        })

}

export const getGoals = (goalList) => {
    // the URL for the request
    const url = "/goals";

    // Since this is a GET request, simply call fetch on the URL
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                alert("Could not get goals");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            goalList.setState({ goals: json.goals });
        })
        .catch(error => {
            console.log(error);
        });
};

export async function findID2(app) {

    const currUser = app.state.currentUser;
    const currUsername = currUser.username;

    const res = await fetch('/users');
    const json = await res.json();

    const userList = json.users;
    userList.filter((user) => {
        if (user.username === currUsername){
            // get goals
            //userID = user._id;
            const userID = JSON.stringify(user._id);
            //console.log(user);
            return JSON.stringify(user._id);
        }
    });

}


//export const setOwner = (app, formValues) => {
export const findID = (app) => {
    const currUser = app.state.currentUser;
    const currUsername = currUser.username;
    //const currUserID = currUser.id;
    //console.log(currUserID);
 
    // find user
    let userID = '';

    fetch("/users")
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                alert("Could not get users");
            }
        })
        .then(json => { //json===users
                // find correct user
                const userList = json.users;
                userList.filter((user) => {
                    if (user.username === currUsername){
                        // get goals
                        //userID = user._id;
                        userID = JSON.stringify(user._id);
                        console.log("user:");
                        console.log(JSON.stringify(user));
                        console.log("user._id:");
                        console.log(JSON.stringify(user._id));
                        //goalForm.setState({ currUserID : userID });
                    }
                });
            //console.log("userID: "+ userID); //works
            //return userID; // if I log this its correct but cannot retreive it as string
        })
        .catch(error => {
            console.log(error);
        });

    return userID;
}


export const returnURL = (app) => {
    const url = '';
    findID(app).then((id) => {
        console.log("return URL"+id);
        console.log(id);
        url.concat(id.toString());
        console.log("returnURL url: "+url);
    })
    return url;
}

export const setOwner = (app, goalForm) => {
// 5f2b2e87e920607eb31129c4 -> user1
    // get currentUsername
    const currUser = app.state.currentUser;
    const currUsername = currUser.username;

    // info of new goal
    const newGoal = goalForm.props;
    const newTitle = newGoal.goalTitle;
    const newDescription = newGoal.goalDescription;
    const newDuration = newGoal.goalDuration;
    //console.log('title: '+newTitle+', description: '+newDescription+', duration'+newDuration)

    //create link to user w/ id
    const link = '/users/';
    const url = link.concat(currUsername);
    
    // make new patch request
    const request = new Request(url, {
        method: 'PATCH',
        body: JSON.stringify({
            title: newTitle,
            description: newDescription,
            duration: newDuration
        }),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })

    // Send the request with fetch()
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .catch(error => {
            console.log(error);
        });
}

export async function updateGoals(goalList, goalForm, app) {
    addGoalJSON(goalForm);
    getGoals(goalList);

    // const id = findID(app);
    // console.log("updateGoals id: ");
    // console.log(id);

    // const result = await findID2(app);
    // console.log("findID2 result: ", result);

    setOwner(app, goalForm);
}
