import React from 'react';
import './goal-description.css';
import {StarFilled} from '@ant-design/icons';

class Ratings extends React.Component{

    

    render(){

        const changeColor = (index) => {
            console.log('1');
        }
        return(
            <ul id='starList'>
                <li className='starItem'><StarFilled className='star' /></li>
                <li className='starItem'><StarFilled className='star' /></li>
                <li className='starItem'><StarFilled className='star' /></li>
                <li className='starItem'><StarFilled className='star' /></li>
                <li className='starItem'><StarFilled className='star' /></li>
            </ul>
                
            
        );
    }
}

export default Ratings;