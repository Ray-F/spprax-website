import React, { Component } from 'react';

import emailjs from 'emailjs-com';

class ContactForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      promptStatus: '',
      promptColour: null,
      name: '',
      email: '',
      phone: '',
      desc: '',
    }
  }

  componentDidMount() {
  }

  sendEmail(payload) {
    if (this.state.name && this.state.email && this.state.desc) {
      if (this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailjs.sendForm('service_g3jxd9g', 'template_3gofvS9S', payload, 'user_zd9TCp3VWl0xK97AkDjje')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });

        this.setState(
          {
            promptStatus: 'enquiry successfully sent!',
            promptColour: 'lightgreen',
            name: '',
            email: '',
            phone: '',
            desc: '',
          }
        )

        setTimeout(() => this.setState({promptStatus: '', promptColour: null}), 3000);
      } else {
        this.setState(
          {
            promptStatus: 'email address is not valid!',
            promptColour: '#D23535'
          }
        )

        setTimeout(() => this.setState({promptStatus: '', promptColour: null}), 3000);
      }
    } else {
      this.setState(
        {
          promptStatus: 'these must be filled out!',
          promptColour: '#D23535'
        }
      )

      setTimeout(() => this.setState({promptStatus: '', promptColour: null}), 3000);
    }

  }

  render() {
    const promptStyle = {
      color: this.state.promptColour
    }

    return (
      <div id='contact'>
        <a name='contact' className='anchor'></a>
        <div className='content'>
          <h2>Obligation Free Chat</h2>
          <p>
            Let us figure out together (over coffee!) what media option suits you best for your requirements and how to maximise your budget.
          </p>

          <form id='contact-form-el' onSubmit={(e) => {e.preventDefault(); this.sendEmail(e.target)}} action='POST' >
            <div id='contact-form'>
              <input
                id='input-fullname' type='text' name='fullname' placeholder='Full name *'
                onChange={(e) => this.setState({name: e.target.value})} value={this.state.name}
              />
              <input
                id='input-email' type='email' name='email' placeholder='Email *'
                onChange={(e) => this.setState({email: e.target.value})} value={this.state.email}
              />
              <input
                id='input-phone' type='tel' name='phone' placeholder='Phone'
                onChange={(e) => this.setState({phone: e.target.value})} value={this.state.phone}
              />

              <textarea
                id='input-proj-desc' name='text' rows='1' cols='1' placeholder='Describe your project... *'
                onChange={(e) => this.setState({desc: e.target.value})} value={this.state.desc}
              ></textarea>

            </div>

            <p id='contact-prompt'>
              * Required fields, <span style={promptStyle}>{this.state.promptStatus}</span>
            </p>


            <input className='btn' id='send-form' type='submit' tabIndex='0' value='Send' />
          </form>

        </div>
      </div>
    );
  }

}

export default ContactForm;
