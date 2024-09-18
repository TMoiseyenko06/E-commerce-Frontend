import { useParams, useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import { Card, Button } from "react-bootstrap";


function Customers() {
    //id used for api call but theres is no api here but id is here to show that thats what its supposed to do 
    const { id } = useParams();
    const [data,setData] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        
        const getCustomerData = async () => {
            //dummy api call based on id 
            const response = {
                name:'Bob',
                email:'Bobby@gmail.com',
                phone:'4514356783'
            }
            setData(response)
        }

        getCustomerData();
    },[])

    return (
        <div>
            {data ? (
                <Card>
                    <h2 className="mb-3"><span>Name:</span> {data.name}</h2>
                    <h5 className="mb-3"><span>E-Mail:</span> {data.email}</h5>
                    <h5 className="mb-3"><span>Phone:</span> {data.phone}</h5>
                    <Button className="button mb-3" onClick={() => navigate(`/Customer-form/${id}`)}>Edit Customer</Button>
                    <Button className="button" onClick={() => navigate('/')}>Return Home</Button>
                </Card>

            ):(<h2>Loading...</h2>)}
            
        </div>
    )
}

export default Customers;