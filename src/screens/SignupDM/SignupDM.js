import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SignupDM = () => {
    // const [firstName, setFirstName] = useState();
    // const [lastName, setLastName] = useState();
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();
    // const [passwordConfirm, setPasswordConfirm] = useState();
    // const [designation, setDesignation] = useState();
    // const [mobile, setMobile] = useState();
    // const [organization, setOrganization] = useState();
    
    
    //*Update values
    // const firstNameUpdate=(event)=>{ // Dealing with name field changes to update our state
    //     setFirstName(event.target.value)
    // }
    // const lastNameUpdate=(event)=>{ // Dealing with name field changes to update our state
    //     setLastName(event.target.value)
    // }
    // const emailUpdate=(event)=>{ // Dealing with name field changes to update our state
    //     setEmail(event.target.value)
    // }
    // const passwordUpdate=(event)=>{
        //     setPassword(event.target.value)
        // }
        // const designationUpdate=(event)=>{
            //     setDesignation(event.target.value)
            // }
            // const organizationUpdate=(event)=>{
                //     setOrganization(event.target.value)
            // }
            const [passError, setPassError] = useState(false);
            
            
            
            
            // function setPasswordState(e) {
            //     let pass = e.target.value;
            //     setPassword(pass);
            // }
    //         function confirmPassword(e) {
    //             let conPass = e.target.value;
    //             let pass = password
    //             console.log(pass, conPass);
    //             if(pass !== conPass) {
    //                 console.log("Does not match");
    //                 setPassError(true);
    //                 console.log(passError);
    //             }
    //             else{
    //         setPassError(false);
    //         console.log(passError);
    //     }
    // }
    
    // const checkInput = (e) => {
    //     const onlyDigits = e.target.value.replace(/\D/g, "");
    //     setMobile(onlyDigits);
    // };
    const [validated, setValidated] = useState(false);
    const [credentials, setCredentials] = useState({firstname: "", lastname: "", email: "", password: "",confirmPassword: "", mobile: "", designation: "", organization: ""});
    

    const handleSubmit = async (event) =>{
        const form = event.currentTarget;
        console.log(form);
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else{
        this.setState({validated:true});
        event.preventDefault(); 
       }
        const {firstname, lastname, email, password, confirmPassword, mobile, designation, organization} = credentials;
        const res = await fetch("http://localhost:5000/user", {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({firstname, lastname, email, password, mobile, designation, organization})
        });
        const data = await res.json();
        console.log((data));
        if(data.success){
            window.alert("Reg done");
        }
        else{
            window.alert("Not done");
        }
    }
    const onChange = (e) =>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <Card style={{display: "table", margin: "auto", marginTop: "5%", padding: "2%"}}>
              <Card.Body>
                <Card.Title as="h2" className="mb-5" style={{color: "orangered"}}>Sign Up</Card.Title>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Control type="text" placeholder="First name" name="firstname"  onChange={onChange} required/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Control type="text" placeholder="Last Name" name="lastname"  onChange={onChange} required/>
                        </Form.Group>
                    </Row>

                    <Form.Group controlId="formGridEmail">
                      <Form.Control type="email" placeholder="Enter email" name="email" onChange={onChange} required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide valid email.
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                    <Row>
                        <Form.Group as={Col} controlId="formGridPassword">
                          <Form.Control type="password" placeholder="Password"  minLength="6" name="password" onChange={onChange} required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridConfirmPassword">
                          <Form.Control type="password" placeholder="Confirm Password" minLength="6" name="confirmPassword" onChange={onChange} required/>
                        </Form.Group>
                    </Row>

                    <Form.Group controlId="formGridDesignation">
                        <Form.Control type="text" placeholder="Designation" name="designation" onChange={onChange} required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide valid designation.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formGridMobile">
                    <Form.Control type="tel" maxLength="10" minLength="10" placeholder="Mobile Number" name="mobile" onChange={onChange} required/>
                        <Form.Control.Feedback type="invalid">
                        Please enter valid mobile number
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formGridOrganization">
                        <Form.Control type="text" placeholder="Organization Name" name="organization" onChange={onChange} required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide valid organization name.
                        </Form.Control.Feedback>
                    </Form.Group>
                <Button variant="outline-danger" type="submit">Sign Up</Button>
                </Form>
              </Card.Body>
            </Card>
        </div>
    )
}

export default SignupDM;
