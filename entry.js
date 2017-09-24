import './style.css';
import { render } from "react-dom";

import React, { Component} from 'react';

export default class Hellworld extends Component{
    render(){
        return(
            <div id='helloworld'>
                helloworld
            </div>
        );
    }
}

render(<Hellworld/>,document.getElementById('app'))