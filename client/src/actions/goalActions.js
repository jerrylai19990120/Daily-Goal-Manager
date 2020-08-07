export const addGoalJSON = () => {

    const title = document.getElementById('goalTitle').value;
    const description = document.getElementById('goalDescription').value;
    const duration = document.getElementById('goalDuration').value; 

    console.log('title: '+title+', description: '+description+', duration'+duration)

    const url = '/goals'

    const request = new Request(url, {
        method: 'post',
        body: JSON.stringify({
            title: title,
            description: description,
            duration: duration
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