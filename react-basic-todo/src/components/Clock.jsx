import React from 'react'
import { connect } from 'react-redux';
import { changeTitle } from '../actions/title';




export class ClockComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            localTitle: ''
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);  //TODO запускается после рендера в DOM
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    onClickChangeTitle = (e) => {
        this.props.onChangeTitle(this.state.localTitle)
    }

    changeLocalTitle = (e) => {
        this.setState({ localTitle: e.target.value })
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                {/* <h1>Привет, мир!</h1> */}
                <h1>{this.props.title}</h1>
                <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
                <div>
                    <textarea name="" id="" cols="30" rows="10" onChange={this.changeLocalTitle}></textarea>
                </div>
                <button onClick={this.onClickChangeTitle}>Change Title</button>
            </div>
        )
    }
};

//TODO это функция которая возвращает обьект в котором будет находится часть состояния из стора
const mapStateToProps = state => {
    return {
        title: state.title
    }
}

//TODO это функция возращает обьект в котором будут находится функция которая генерирует событие
const mapDispatchToProps = dispatch => {
    return {
        onChangeTitle: title => {
            dispatch(changeTitle(title))
        }
    }
}

export const Clock = connect(mapStateToProps, mapDispatchToProps)(ClockComponent)


