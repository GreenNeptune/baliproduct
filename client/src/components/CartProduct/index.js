import React, { useState } from 'react';
import { Form, InputGroup } from "react-bootstrap";
import './cartProduct.scss'
function CartProduct({ product, updateProductQuantity, removeProductFromCart }) {

  const [quantityInput, setQuantityInput] = useState(product.quantity);

  const generateArrayByNumber = (num) => Array.from({ length: num }, (value, index) => index + 1);

  const onChangeProductQuantity = (e) => {
    const { value } = e.target;
    const newQuantity = parseInt(value)

    if (newQuantity === 0) {
      removeProductFromCart(product._id);
    } else {
      updateProductQuantity(product._id, newQuantity);
      setQuantityInput(newQuantity)
    }

  }

  const onSubmit = (e) => {
    e.preventDefault();
    quantityInput ?
      updateProductQuantity(product._id, quantityInput) :
      removeProductFromCart(product._id)
  }

  return (
    <div className="cart_product">
      <div className="cart_product_img">
        <img src={product.imgUrl} alt={product.title} />
      </div>
      <div className="cart_product_description">
        <div className="cart_product_title">{product.title}
        </div>
        <div className="cart_product_price">${product.price}</div>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1" className="mt-2 mt-sm-5" md="4" >
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">QTY:</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                as="select"
                value={quantityInput}
                onChange={onChangeProductQuantity}
              >
                <option value={0}>Delete</option>
                {
                  generateArrayByNumber(product.inventory).map(
                    (value, index) => (
                      <option
                        key={index}
                        value={`${value}`}>
                        {value}
                      </option>))
                }
              </Form.Control>
            </InputGroup>
          </Form.Group>
        </Form>
        < button className="btn btn_cart_product--remove mt-sm-3" onClick={() => removeProductFromCart(product._id)} >remove</button>
      </div>
    </div >
  );
}

export default CartProduct;