import React,{Component} from 'react'
import propTypes from 'prop-types'
export default class App extends Component {
    static propTypes = {
        store:propTypes.object.isRequired
    }

    add = ()=> {
        var num = this.refs.sel.value
        this.props.store.dispatch({type:'inc',num:parseInt(num)})
    }

    dec = ()=> {
        var num = this.refs.sel.value
        this.props.store.dispatch({type:'dec',num:parseInt(num)})
    }
    
    state = {
        n:0
    }
    
    render(){
        return (<div >
            <select ref = 'sel'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button onClick={this.add}>+</button>
            <button onClick={this.dec}>-</button>
            <span>{this.props.store.getState()}</span>
        </div>)
    }
}