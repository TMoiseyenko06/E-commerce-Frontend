import { Card,Form,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Search() {
    const navigate = useNavigate();
    const [id,setId] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/Customers/${id}`)
    }
return (
    <Card>
        <h2>Search</h2>
        <Form onSubmit={handleSubmit}>
        <Form.Control className="mb-3" type="number" required onChange={(e) => setId(e.target.value)}></Form.Control>
        <Button className="button" type="submit">Search For Customer</Button>
        </Form>
    </Card>
)
}

export default Search;