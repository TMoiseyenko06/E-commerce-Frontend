import { Card, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function PlaceOrderForm() {
  const [products, setProducts] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [customerId,setCustomerId] = useState(null);

  const handleCheckboxChange = (event) => {
    const productId = event.target.value;
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId]
    );
  };

  useEffect(() => {
    const getProducts = async () => {
      // These 2 lines are to be used when you have an api to call, i will be using dummy data here to demonstrate
      //const response = await axios.get('api.url/products');
      //return response.data;
      const response = [
        {
          id: 1,
          name: "soap",
          price: 10.99,
        },
        {
          id: 2,
          name: "shampoo",
          price: 19.99,
        },
        {
          id: 3,
          name: "conditioner",
          price: 15.99,
        },
      ];
      setProducts(response);
    };

    getProducts();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    //this api does not work until an api is put in place 
    axios.post('api.url/orders',{
        customer:customerId,
        products:selectedProducts
    })
  }

  return (
    <div>
      <Card>
        <Form onSubmit={handleSubmit}>
          <Form.Label>Customer ID</Form.Label>
          <Form.Control type="number" className="mb-3" onChange={(e)=>setCustomerId(e.target.value)}></Form.Control>
          {products &&
            products.map((product) => {
              return (
                <div key={product.id}>
                  <Form.Group className="group">
                    <Form.Check
                      value={product.id}
                      onChange={handleCheckboxChange}
                    ></Form.Check>
                    <Form.Label>{product.name}</Form.Label>
                    <Form.Label>. ${product.price}</Form.Label>
                  </Form.Group>
                  
                </div>
              );
            })}
            <Button className="button" type="submit">Place Order</Button>
        </Form>
      </Card>
    </div>
  );
}

export default PlaceOrderForm;
