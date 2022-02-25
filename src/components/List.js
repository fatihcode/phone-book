import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class List extends Component {

    static propTypes = { contacts: PropTypes.array.isRequired }

    state = { filterText: "" }

    render() {

        const clear = () => { this.setState({ filterText: "" }) }

        const onChangeFilter = (e) => { this.setState({ filterText: e.target.value }) }

        const filterContacts = this.props.contacts.filter(
            item => {
                return item.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1
                    || item.phone.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1
            }
        )

        setTimeout(() => {
            const close = document.getElementById("close")
            this.state.filterText ? (close.style.display = "block") : (close.style.display = "none");
        }, 10);


        const userDel = (e) => { this.props.change(this.props.contacts.filter(item => item.phone !== e.target.id)) }

        return (
            <>
                <div className="filter mb-2">
                    <button onClick={clear} id="close" type="button" className="btn-close" aria-label="Close"></button>
                    <input className="form-control" name="filter" id="filter" placeholder="Filter..."
                        onChange={onChangeFilter} value={this.state.filterText} />
                </div>

                <div className="scrool">
                    <table className="table table-hover mb-2">
                        <tbody>

                            {filterContacts.map((item, index) => {
                                return <tr key={index}>
                                    <td><i className="bi bi-person"> </i>{item.name}</td>
                                    <td style={{ textAlign: "end" }}><i className="bi bi-telephone"> </i>
                                        {item.phone.substr(0, 3) + "-" + item.phone.substr(3, 3) + "-" + item.phone.substr(6)} { }
                                        <span className="del bi bi-x-circle" id={item.phone} onClick={userDel}></span>
                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                </div>
            </>);
    }
}