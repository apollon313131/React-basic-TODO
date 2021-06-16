import React from 'react'

class LifecycleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            someValue: props.someValue2
        }
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.userID !== prevProps.userID) {
            this.fetchData(this.props.userID);  //TODO если юзер не изменился нам не нужно запрашивать data
        }
    }

    componentWillUnmount() {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    static getDerivedStateFromProps() {
        return null
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return null
    }

    render() {
        return null
    }
}