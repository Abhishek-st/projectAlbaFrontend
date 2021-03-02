import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormText, FormFeedback,
} from 'reactstrap';
import '../css/form.css';

class Marks extends Component {
  constructor(props) {
    super(props);
      this.state = {
      'email': '',
      'password': '',
      'name':'',
      'roll':'',
      'physics':'',
      'chemistry':'',
      'maths':'',
      'msg': '',
      'msg2':'',
      validate: {
        emailState: '',
        marksStateP: '',
        marksStateC: '',
        marksStateM: '',
        rollState: '',
        nameState: '',
      },
    }
    this.handleChange = this.handleChange.bind(this);
  }

  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state
      if (emailRex.test(e.target.value)) {
        validate.emailState = 'has-success'
      } else {
        validate.emailState = 'has-danger'
      }
      this.setState({ validate })
    }
 ValidateRoll(e){
  const emailRex = /^[0-9]{4,8}$/
  const { validate } = this.state
    if (emailRex.test(e.target.value)) {
      validate.rollState = 'has-success'
    } else {
      validate.rollState = 'has-danger'
    }
    this.setState({ validate })
 }
 ValidateName(e){
  const emailRex = /^([a-zA-Z ]){3,50}$/
  const { validate } = this.state
    if (emailRex.test(e.target.value)) {
      validate.nameState = 'has-success'
    } else {
      validate.nameState = 'has-danger'
    }
    this.setState({ validate })
 }
    validateMarksP(e) {
      const emailRex = /^(100(\.00?)?|[1-9]?\d(\.\d\d?)?)$/;
      const { validate } = this.state
        if (emailRex.test(e.target.value)) {
          validate.marksStateP = 'has-success'
        } else {
          validate.marksStateP = 'has-danger'
        }
        this.setState({ validate })
      }

  validateMarksC(e) {
    const emailRex = /^(100(\.00?)?|[1-9]?\d(\.\d\d?)?)$/;
    const { validate } = this.state
      if (emailRex.test(e.target.value)) {
        validate.marksStateC = 'has-success'
      } else {
        validate.marksStateC = 'has-danger'
      }
      this.setState({ validate })
    }
  validateMarksM(e) {
    const emailRex = /^(100(\.00?)?|[1-9]?\d(\.\d\d?)?)$/;
    const { validate } = this.state
      if (emailRex.test(e.target.value)) {
        validate.marksStateM = 'has-success'
      } else {
        validate.marksStateM = 'has-danger'
      }
      this.setState({ validate })
    }

  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [ name ]: value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    
    console.log(`Email: ${ this.state.maths }`)
    const input = {"name":this.state.name,
                    "roll":parseInt(this.state.roll),
                    "physics":parseFloat(this.state.physics),
                    "chemistry":parseFloat(this.state.chemistry),
                    "maths":parseFloat(this.state.maths),};

    console.log(this.state.validate)
    this.setState({'msg2':'submitting...', 'msg':''})
    if( this.state.validate.nameState=="has-success" && this.state.validate.rollState=="has-success" && this.state.validate.marksStateM=="has-success" && this.state.validate.marksStateC=="has-success" && this.state.validate.marksStateP=="has-success" ){
      let url = "https://projectalbackend.herokuapp.com/api/postMarks/"
      // let url = "http://localhost:8000/api/postMarks/"
      fetch(url, {
      method: 'POST',  
      body: JSON.stringify(input),  
      headers:{
        'Content-Type': 'application/json'
        }
        }).then(res => res.json())
        .then(response => this.setState({msg:response.msg, msg2:''}))
        .catch(error => console.error('Error:', error));       
    }else{
      this.setState({'msg':'Data Inconsitency', 'msg2':''})
    }

  }

  render() {
    const { email, password } = this.state;
    return (
      <Container className="App">
        <h2>Post Marks</h2>
        <Form className="form" onSubmit={ (e) => this.submitForm(e) }>
            
         
          <Col>
            <FormGroup>
              <Label for="examplePassword">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="enter your name"
                valid={ this.state.validate.nameState === 'has-success' }
                invalid={ this.state.validate.nameState === 'has-danger' }
                onChange={ 
                  (e) => {
                    this.ValidateName(e)
                    this.handleChange(e)
                  } 
                }
            />
              <FormFeedback valid>
                Correct format
              </FormFeedback>
              <FormFeedback>
                Name should have atleast 3 character and NO special character like .? -_
              </FormFeedback>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Roll</Label>
              <Input
                type="text"
                name="roll"
                id="roll"
                placeholder="enter your roll number"
                valid={ this.state.validate.rollState === 'has-success' }
                invalid={ this.state.validate.rollState === 'has-danger' }
                onChange={ 
                  (e) => {
                    this.ValidateRoll(e)
                    this.handleChange(e)
                  } 
                }
            />
              <FormFeedback valid>
                Correct format
              </FormFeedback>
              <FormFeedback>
                Roll No length should lie between 5-8
              </FormFeedback>
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label for="examplePassword">Physics</Label>
              <Input
                type="text"
                name="physics"
                id="physics"
                placeholder="enter marks in physics"
                valid={ this.state.validate.marksStateP === 'has-success' }
                invalid={ this.state.validate.marksStateP === 'has-danger' }
                onChange={ 
                  (e) => {
                    this.validateMarksP(e)
                    this.handleChange(e)
                  } 
                }
            />
              <FormFeedback valid>
                Correct format
              </FormFeedback>
              <FormFeedback>
                Marks should grteter than 0 and less than 100, and after. it should have number
              </FormFeedback>
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label for="examplePassword">Chemistry</Label>
              <Input
                type="text"
                name="chemistry"
                id="chemistry"
                placeholder="enter marks in chemistry"
                valid={ this.state.validate.marksStateC === 'has-success' }
                invalid={ this.state.validate.marksStateC === 'has-danger' }
                onChange={ 
                  (e) => {
                    this.validateMarksC(e)
                    this.handleChange(e)
                  } 
                }
            />
              <FormFeedback valid>
                Correct format
              </FormFeedback>
              <FormFeedback>
                Marks should grteter than 0 and less than 100, and after. it should have number
              </FormFeedback>
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label for="examplePassword">Maths</Label>
              <Input
                type="text"
                name="maths"
                id="maths"
                placeholder="enter marks in maths"
                valid={ this.state.validate.marksStateM === 'has-success' }
                invalid={ this.state.validate.marksStateM === 'has-danger' }
                onChange={ 
                  (e) => {
                    this.validateMarksM(e)
                    this.handleChange(e)
                  } 
                }
            />
              <FormFeedback valid>
                Correct format
              </FormFeedback>
              <FormFeedback>
                Marks should grteter than 0 and less than 100, and after. it should have number
              </FormFeedback>
            </FormGroup>
          </Col>

          <Button>Submit</Button>
          {this.state.msg.length > 0 ? <center><h2>{this.state.msg}</h2></center> : null}
          {this.state.msg2.length > 0 ? <center><h2>{this.state.msg2}</h2></center> : null}
      </Form>
      </Container>
    );
  }
}

export default Marks;

{/* <center><h2>submitting...</h2> */}