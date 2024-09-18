import { Button, Card, Form } from "react-bootstrap";
import axios from "axios"
import { useParams,useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";

function ProductForm() {
    const { id } = useParams();
    const [productInfo,setProductInfo] = useState({});
    const navigate = useNavigate();
    const [name,setName] = useState(null);
    const [price,setPrice] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post('api.url/post',{
            name:name,
            price:price
        })
        alert('Product Submitted')
        navigate('/products')
        
    }

    useEffect(()=>{
        if(id) {
            const getProductInfo = async () => {
                //the lines below is what you would use if you were to use an api but i am going to use dummy data here
                //const response = axios.get(`api.url/${id}`)
                //setProductInfo(response.data)
                setProductInfo({name:'soap',price:10.99})
            }
            getProductInfo();
        }
    },[])
return (
    <div>
        <Card>
        <Form onSubmit={handleSubmit}>
            <Form.Label>Name</Form.Label>
            <Form.Control required className="mb-3" defaultValue={productInfo.name} onChange={(e)=>setName(e.target.value)}></Form.Control>
            <Form.Label>Price</Form.Label>
            <Form.Control required className="mb-3" type="number" defaultValue={productInfo.price} onChange={(e)=>setPrice(e.target.value)}></Form.Control>
            <Button className="button" type="submit">Submit Product</Button>
        </Form>
        </Card>
    </div>
)
}

export default ProductForm