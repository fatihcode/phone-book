import React, { Component } from 'react';

export default class Form extends Component {

    state = { name: '', phone: '' }

    render() {

        const onChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }

        const onSubmitFunc = (e) => { e.preventDefault()
            
            const warn = document.getElementById("warn")

            if (this.state.name && this.state.phone) {

                if (this.props.contacts.some(item => item.phone === this.state.phone)) {

                    warn.style.display = "block"

                    setTimeout(() => { warn.style.display = "none" }, 2000);

                } else {

                    this.props.addContact({ ...this.state })
                    this.setState({ name: "", phone: "" })
                }
            }
        }

        return (
            <div className="form">
                <form onSubmit={onSubmitFunc}>

                    <div className="input-group mb-3">
                        <span className="input-group-text"><i className="bi bi-person-plus-fill"> </i></span>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Name..."
                            onChange={onChange} value={this.state.name} required/>
                    </div>

                    <div className="relative">
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="bi bi-telephone-plus-fill"> </i></span>
                            <input type="tel" inputMode="numeric" pattern="[0-9]{10}" className="form-control" id="phone" name="phone" placeholder="10 Digit Phone..."
                                onChange={onChange} value={this.state.phone} required/>
                        </div>
                        <span id="warn"><i className="bi bi-exclamation-circle"></i> Listede olan bir numara giremezsiniz.</span>
                    </div>

                    <button type="submit" className="btn btn-warning w-100 mb-2"><i className="bi bi-plus-square"> </i>Add</button>

                </form>
            </div>);
    }
}