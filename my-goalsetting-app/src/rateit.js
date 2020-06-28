import React from 'react';
import './goal-description.css';
import {StarFilled} from '@ant-design/icons';

class Ratings extends React.Component{

    

    render(){

        const ch = () => {
            let star0 = document.getElementById('s0');
            star0.style.color = '#fdcc29';
        }

        const ch2 = () => {
            let star0 = document.getElementById('s0');
            star0.style.color = '#fdcc29';
            let star1 = document.getElementById('s1');
            star1.style.color = '#fdcc29';
        }

        const ch3 = () => {
            let star0 = document.getElementById('s0');
            star0.style.color = '#fdcc29';
            let star1 = document.getElementById('s1');
            star1.style.color = '#fdcc29';
            let star2 = document.getElementById('s2');
            star2.style.color = '#fdcc29';
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