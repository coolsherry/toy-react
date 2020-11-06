import { createElement, render, Component } from './toy-react'

class MyComponent extends Component {
    render() {
        return <div>
                <h1>my component</h1>
                {this.children}
            </div>
    }
}

render(<MyComponent id="a" class="c">
    <div>
        <strong>加粗</strong>
    </div>
    <div></div>
    <div></div>
</MyComponent>, document.body);