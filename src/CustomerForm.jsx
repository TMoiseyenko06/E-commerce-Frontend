
import { Form, Card, Button } from "react-bootstrap";
import axios from "axios";
import { useState,useEffect,useRef } from "react";
import { useParams } from "react-router-dom";

function CustomerForm() {
  const { id } = useParams();
  const [nameValue,setNameValue] = useState(null);
  const [emailValue,setEmailValue] = useState(null);
  const [phoneValue,setPhoneValue] = useState(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('api.url/customers',{
      username:nameValue,
      email:emailValue,
      phone:phoneValue

    })

  }

  useEffect(()=>{
      if (id) {
        const getCustomer = async () => {
          const response = await axios.get(`api.url/${id}`);
          return response.data;
        }
        const data = getCustomer();
        setEmailValue(data.email)
        setNameValue(data.name)
        setPhoneValue(data.phone)
      }
  },[])

  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Customer Name</Form.Label>
          <Form.Control placeholder="Enter Name:" required defaultValue={nameValue} ref={nameRef} onChange={(e)=>setNameValue(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Customer E-Mail</Form.Label>
          <Form.Control type="email" placeholder="Enter E-mail:" required defaultValue={emailValue} ref={emailRef} onChange={(e)=>setEmailValue(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Customer Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter Phone:" required defaultValue={phoneValue} ref={phoneRef} onChange={(e)=>setPhoneValue(e.target.value)}></Form.Control>
        </Form.Group>
        <Button type="submit" className="button">Submit Customer</Button>
      </Form>
    </Card>
  );
}

export default CustomerForm;
