import React, { Component } from 'react';
import axios from 'axios';
import { Breadcrumb, BreadcrumbItem,
  Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
function ValidationMessage(props) {
  if (!props.valid) {
    return(
      <div className='error-msg'>{props.message}</div>
    )
  }
  return null;
}

class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      message: '',
      formValid:false,
      validname: false,
      validmessage: false,
      errmessage:{}
  };
  this.handleSubmit = this.handleSubmit.bind(this);
  }
  validateForm = () => {
    const {validname,validmessage} = this.state;
    this.setState({
      formValid: validmessage&& validname
    })
  }
  updatename = (name) => {
    this.setState({name}, this.validatename)
  }
  updatemessage = (message) => {
    this.setState({message}, this.validatemessage)
  }
  validatename = () => {
    const {name} = this.state;
    let validname = true;
    let errmessage = {...this.state.errmessage}

    if (name.length < 3) {
      validname = false;
      errmessage.name = 'Must be at least 3 characters long'
    }

    this.setState({validname, errmessage}, this.validateForm)
  }
  validatemessage = () => {
    const {message} = this.state;
    let validmessage = true;
    let errmessage = {...this.state.errmessage}

    if (message.length < 3) {
      validmessage = false;
      errmessage.message = 'Must be at least 3 characters long'
    }

    this.setState({validmessage, errmessage}, this.validateForm)
  }
  // handleInputChange(event) {
  //   const target = event.target;
  //   const value =  target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   });
  //   }
    // handleBlur = (field)=>(event) => {
    //     this.setState({
    //         touched: { ...this.state.touched, [field]: true}
    //     });
    // }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Thank you for your valuable time .Your feeback has received ');
        axios.post(baseUrl+'feedback', { name:this.state.name,message:this.state.message })
        .then(res => {
          console.log(res.data);
        })
        // alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }


  render (){
    return (
    <div >
      <footer className="main-footer">
        <div className="container">
          <div className="row">
          <div class="col-md-4">
            <div class="logo">
              <h6 class="text-white">Ingenuity</h6>
            </div>
            <div class="contact-details">
              <p>Near Bopdev Ghat, Kondhwa Annexe, Yewalewadi, Pune, Maharashtra 411048</p>
              <p>Phone: </p>
              <p>Email: <a href="mailto:ingenuity@iiitp.ac.in">ingenuity@iiitp.ac.in</a></p>
              <ul class="social-menu">
                <li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#"><i class="fa fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 justify-content-center mt-5 ">
              <img src={require('../assets/images/logo2.png') }
              width='300'></img>
          </div>
          <div class="col-md-4">
            <h6>Share your thoughts or Report problems</h6>
            <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
                  <Label htmlFor="name" md={3}>Name*</Label>
                  <Col md={9}>
                      <Input type="text" id="name" name="name"
                          placeholder="Name"
                          value={this.state.name}
                          onChange={(e) => this.updatename(e.target.value)} />
                      < ValidationMessage valid={this.state.validname} message={this.state.errmessage.name} />
                  </Col>
              </FormGroup>
              <FormGroup row>
                  <Label htmlFor="message" md={3}>Message*</Label>
                  <Col md={9}>
                      <Input type="textarea" id="message" name="message"
                          rows="5"
                          placeholder="Your message"
                          value={this.state.message}
                          onChange={(e) => this.updatemessage(e.target.value)}></Input>
                  < ValidationMessage valid={this.state.validmessage} message={this.state.errmessage.message} />
                  </Col>
              </FormGroup>
              <FormGroup row>
                  <Col md={{size: 10, offset: 3}}>
                      <Button type="submit" color="primary" disabled={!this.state.formValid}>
                          Feedback
                      </Button>
                  </Col>
              </FormGroup>
            </Form>
          </div>
          </div>
        </div>
        <div class="copyrights">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p>&copy; 2020 Ingenuity Student Media Body , IIIT Pune</p>
            </div>
          </div>
        </div>
      </div>
      </footer>
      {/* <div className='container footer-font'>
        <div className='row justify-content-center'>
          <div className='col-12 col-sm-4 '>
            <div style={{fontFamily:'San serif'}}>CONTACT US : <br/>
            Email: <a href='mailto:ingenuity@iiitp.ac.in'>ingenuity@iiitp.ac.in</a></div>
            <div className="ml-0"><Link  to='/ourteam' >About us</Link></div>
            <h3>Links</h3>
            <ul className='list-unstyled'>
              <li className="mb-1" >
                <Link className='footer-link-name ' to='/home'>
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <Link className='footer-link-name' to='/aboutus'>
                  About Us
                </Link>,
              </li>
              <li className="mb-1">
                <Link className='footer-link-name' to='/menu'>
                  Menu
                </Link>
              </li>
              <li >
                <Link className='footer-link-name' to='/contactus'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className='col-12 col-sm-4 justify-content-center align-self-center'>
            <a href='/home'>
              <img
                src={require('../assets/images/logo2.png')}
                width='300'
              ></img>
            </a>

          </div>
          <div className='col-12 col-sm-4 align-self-center'>
            <div className='text-center'>
              <a
                className='btn btn-social-icon zoom '
                href='http://www.facebook.com/profile.php?id='
              >
                <i
                  className='fa fa-facebook-square'
                  style={{ color: 'white' }}
                  aria-hidden='true'
                ></i>
              </a>
              <a
                className='btn btn-social-icon zoom'
                href='http://www.linkedin.com/in/'
              >
                <i
                  className='fa fa-linkedin'
                  style={{ color: 'white' }}
                  aria-hidden='true'
                ></i>
              </a>
              <a
                className='btn btn-social-icon zoom '
                href='http://twitter.com/'
              >
                <i
                  className='fa fa-twitter'
                  style={{ color: 'white' }}
                  aria-hidden='true'
                ></i>
              </a>
              <a
                className='btn btn-social-icon btn-google'
                href='http://youtube.com/'
              >
                <i className='fa fa-youtube'></i>
              </a>
            </div>
          </div>
        </div>
        <div className='row justify-content-center mt-5'>
          <div className='col-auto'>
            <p> Copyright © 2020 Ingenuity Student Media Body , IIIT Pune </p>
          </div>
        </div>
      </div> */}
    </div>
  );
    }
}

export default Footer;
