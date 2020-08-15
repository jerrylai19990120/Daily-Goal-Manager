const bcrypt = require('bcryptjs')

export const signUp = (app) => {

    const username = document.getElementById('usernameSignUp').value;
    const email = document.getElementById('emailSignUp').value;
    const password = document.getElementById('passwordSignUp').value;

    const request = new Request('/signup', {
        method: 'post',
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        }),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })


    fetch(request)
        .then(res => {
            if(res.status===200){
                return res.json()
            }
        })
        .catch(error => {
            console.log(error)
        })
    app.setState({currentUser: {
        username: username,
        email: email,
        password: password
    }})
}

export const login = (info, app) => {

    const request = new Request('/login', {
        method: 'get',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-type": "application/json"
        }
    })

    fetch('/loginAuth')
        .then((result)=>{
            return result.json();
        })
        .then((json)=>{
            const username = document.getElementById('usernameLogin').value;
            const password = document.getElementById('passwordLogin').value;
            for(let i=0;i<json.length;i++){
                bcrypt.compare(password, json[i].password, (err, res)=>{
                    info.setState({firstTry: false});
                    if(json[i].username === username && res === true){
                        info.setState({correctAuth: true, firstTry: true});
                        console.log(app);
                        app.setState({currentUser: {
                            username: json[i].username,
                            email: json[i].email,
                            password: json[i].password
                        }});
                    }
                })
            }

            return json;
        })
        .catch((error)=>{
            console.log(error)
        })
}

export const readCookie = (app) => {

    const url = "/check-session";

    fetch(url)
        .then((res)=>{
            if(res.status===200){
                return res.json();
            }
        })
        .then((json)=>{
            if(json && json.currentUser){
                app.setState({ currentUser: json.currentUser });
            }
        })
        .catch((error)=>{
            console.log(error);
        })
}
export const getUsers = (userList) => {

    const url = "/admin";
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                alert("Could not get users");
            }
        })
        .then(json => {
            userList.setState({ users: json.users });
        })
        .catch(error => {
            console.log(error);
        });
};



