/**
 * Created by chenshilong on 2017/6/8.
 */
import React,{Component} from 'react'
import config from './config.json'

class Greeter extends Component {
    render() {
        return (
            <div>
                {config.name}
            </div>
        );
    }
}

export default Greeter