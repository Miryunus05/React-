import React, { Component } from 'react'

export default class ContactForm extends Component {
    constructor() {
        super();
        this.state = { name: "", email: "", subject: "", message: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit() {
        const {name, email, subject, message} = this.state;
        alert(`Name: ${name}, Email ${email}, Subject: ${subject}, Message: ${message}`)
    }
    render() {
        const { name, email, subject, message } = this.state;
        return (
            <div className='p-8'>

                <div className='mb-4'>
                    <div className='mb-4'><label htmlFor="">Your name</label></div>
                    <div><input name='name' value={name} onChange={this.handleChange} type="text" className='border-2 w-3/4 p-4 rounded-xl' placeholder='ABC' /></div>
                </div>

                <div className='mb-4'>
                    <div className='mb-4'><label htmlFor="">Email address</label></div>
                    <div><input name='email' value={email} onChange={this.handleChange} type="text" className='border-2 w-3/4 p-4 rounded-xl' placeholder='ABC@def.com' /></div>
                </div>

                <div className='mb-4'>
                    <div className='mb-4'><label htmlFor="">Subject</label></div>
                    <div><input name='subject' value={subject} onChange={this.handleChange} type="text" className='border-2 w-3/4 p-4 rounded-xl' placeholder='This is an optional' /></div>
                </div>

                <div className='mb-4'>
                    <div className='mb-4'><label htmlFor="">Message</label></div>
                    <div><textarea rows={5} name='message' value={message} onChange={this.handleChange} type="text" className='border-2 w-3/4 p-4 rounded-xl' placeholder='Hi! i’d like to ask about' /></div>
                </div>

                <div className='mb-4 '>
                    <button to='/' onClick={this.handleSubmit} className='w-[200px] px-8 py-4 bg-[#B88E2F] rounded-md text-white'>Send</button>
                </div>
            </div>
        )
    }
}
