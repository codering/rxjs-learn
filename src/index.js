import './index.html'

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';

function render() {
    ReactDOM.render( <App />, document.getElementById('root'))
}

class App extends Component {

    componentDidMount() {
        const a$ = Observable.of('foo', 'bar');

        console.log(a$)

        a$.subscribe(v => console.log(v))

        const b$ = Observable.fromEvent(document.querySelector('button'), 'click');

        b$.subscribe(v => console.log(v))
    }
    
    render() {
        return (
            <div>
                <input></input>
                <button>按钮</button>
            </div>
        )
    }
} 

render()
