import React from 'react'

// const handleClick = (e) => {
//     e.persist()
//     console.log('event', e);
// }

export class ClickCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            fetchData1: {
                value: 'value',
                data: ['some text', 'text']
            },
            fetchData2: [1, 2, 3]
        }
        // this.handleClick = this.handleClick.bind(this) //TODO Привязка контекста
    };
    // handleClick = (e) => {  //TODO третий способ привязки this с общедоступными полями класса
    //     console.log('event', e);
    //     console.log('this', this);
    // }
    handleClick = (data) => (e) => {  //TODO третий способ привязки this с общедоступными полями класса
        // this.setState({ count: this.state.count + 1 })
        this.setState((state, props) => ({ count: state.count + this.props.increment }))
        this.setState((state, props) => ({ fetchData2: [5, 6, 7] }));
        this.setState((state, props) => ({
            fetchData1: {
                value: this.state.fetchData1.value,
                data: ['1', 2, 3]
            }
        }));
    };

    // handleClick(e) {
    //     console.log('event', e);
    //     console.log('this', this);  
    // }

    render() {
        return <>
            <h1>{this.state.count}</h1>
            {/* <button onClick={handleClick}> Increment</button> */}
            {/* <button onClick={this.handleClick}> Increment</button> */}
            {/* <button onClick={(e) => this.handleClick(e)}> Increment</button> */} {/* //TODO первый способ привязки this */}
            {/* <button onClick={this.handleClick}> Increment</button> //TODO второй способ привязки this с методом в конструкторе */}
            <button onClick={this.handleClick('data text')}>Increment</button> {/* //TODO передача аргументов через стрелочную функцию */}
        </>

    };
};
