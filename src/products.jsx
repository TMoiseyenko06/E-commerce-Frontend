import { useEffect, useState } from "react";
import { Table } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

function Products() {
  const [productList, setProductList] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getProductData = async () => {
      //this should be an api call using axios but im just using dummy data since there is no api active (returns a list of objects)
      const response = [
        {
            id:1,
          name: "soap",
          price: 10.99,
        },
        {
            id:2,
          name: "shampoo",
          price: 19.99,
        },
        {
            id:3,
          name: "conditioner",
          price: 15.99,
        },
      ];
      setProductList(response);
    };

    getProductData();
  }, []);

  return (<div>
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
        {productList && productList.map((product)=> {
                    return (<tr key={product.id} onClick={()=>navigate(`../product-form/${product.id}`)}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                    </tr>)
                })}
        </tbody>
    </Table>

  </div>);
}

export default Products;
