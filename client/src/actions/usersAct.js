
export const signUp = (info, app) => {

    const request = new Request('/signup', {
        method: 'post',
        body: JSON.stringify(info.state),
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
    
}