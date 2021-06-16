import React from 'react';

// //TODO Управляемая компонента
export class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            taste: 'lime',
            firstName: '',
            lastName: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTaste = this.handleChangeTaste.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({ value: null })
    //     }, 3000)
    // }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    handleChangeTaste(e) {
        this.setState({ taste: e.target.value });
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        alert('name is: ' + this.state.firstName + ' ' + this.state.lastName)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <br />
                <label>
                    {/* Name: */}
                    {/* <input type="text" name='name' onChange={this.handleChange} value={this.state.value} /> */}
                    <input type="text" name='firstName' onChange={this.handleInputChange} value={this.state.firstName} />
                    <br /><br />
                    <input type="text" name='lastName' onChange={this.handleInputChange} value={this.state.lastName} />
                    <br /><br />
                    <textarea onChange={this.handleChange} value={this.state.value}></textarea>
                    {/* <textarea value={this.state.value}></textarea> */}
                    <div>
                        <label>
                            Выберите ваш любимый фрукт:
                            <select value={this.state.taste} onChange={this.handleChangeTaste}>
                                <option value="grapefruit">Грейпфрут</option>
                                <option value="lime">Лайм</option>
                                <option value="coconut">Кокос</option>
                                <option value="mango">Манго</option>
                            </select>
                        </label>
                    </div>
                </label>
                <input type="submit" value='Отправить' />
            </form>
        );
    }
}
// // //TODO НЕ Управляемая компонента
// export class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.input = React.createRef()
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         alert('name is: ' + this.input.current.value)
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" name='name' ref={this.input} />
//                 </label>
//                 <input type="submit" value='Отправить' />
//             </form>
//         );
//     }
// }


