import React from 'react';
import './goal-description.css';
import {StarFilled} from '@ant-design/icons';

class Ratings extends React.Component{

    sendRatingaToDB(stars){

        const request = new Request('/add-ratings/testGoal', {
            method: 'post',
            body: JSON.stringify({
                ratings: stars
            }),
            headers: {
                Accept: "application/json, text/plain, ",
                "Content-type": "application/json"
            }
        })

        fetch(request)
            .then(result => {
                if(result===200){
                    return result.json()
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){

        const ch = () => {
            let star0 = document.getElementById('s0');
            star0.style.color = '#fdcc29';
            this.sendRatingaToDB(1);
        }

        const ch2 = () => {
            let star0 = document.getElementById('s0');
            star0.style.color = '#fdcc29';
            let star1 = document.getElementById('s1');
            star1.style.color = '#fdcc29';
            this.sendRatingaToDB(2);
        }

        const ch3 = () => {
            let star0 = document.getElementById('s0');
            star0.style.color = '#fdcc29';
            let star1 = document.getElementById('s1');
            star1.style.color = '#fdcc29';
            let star2 = document.getElementById('s2');
            star2.style.color = '#fdcc29';
            this.sendRatingaToDB(3);
        }

        const ch4 = () => {
            let star0 = document.getElementById('s0');
            star0.style.color = '#fdcc29';
            let star1 = document.getElementById('s1');
            star1.style.color = '#fdcc29';
            let star2 = document.getElementById('s2');
            star2.style.color = '#fdcc29';
            let star3 = document.getElementById('s3');
            star3.style.color = '#fdcc29';
            this.sendRatingaToDB(4);

        }

        const ch5 = () => {
            let star0 = document.getElementById('s0');
            star0.style.color = '#fdcc29';
            let star1 = document.getElementById('s1');
            star1.style.color = '#fdcc29';
            let star2 = document.getElementById('s2');
            star2.style.color = '#fdcc29';
            let star3 = document.getElementById('s3');
            star3.style.color = '#fdcc29';
            let star4 = document.getElementById('s4');
            star4.style.color = '#fdcc29';
            this.sendRatingaToDB(5);
        }

        return(
            <ul id='starList'>
                <li className='starItem'><StarFilled className='star' id='s0' onClick={ch}/></li>
                <li className='starItem'><StarFilled className='star' id='s1' onClick={ch2}/></li>
                <li className='starItem'><StarFilled className='star' id='s2' onClick={ch3}/></li>
                <li className='starItem'><StarFilled className='star' id='s3' onClick={ch4}/></li>
                <li className='starItem'><StarFilled className='star' id='s4' onClick={ch5}/></li>
            </ul>
                
            
        );
    }
}

export default Ratings;