import 'purecss/build/pure.css';
import React,{ Component} from "react";
import { render } from "react-dom";
import Layout from './components/Layout';
import './style.css';

export default class Hellworld extends Component{
    render(){
        return(
            <div id='helloworld'>
                helloworld
            </div>
        );
    }
}

render(<Layout/>,document.getElementById('app'))