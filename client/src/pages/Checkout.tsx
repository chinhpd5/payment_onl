import { Button, Card, Col, Form, Input, Radio, Row, Table } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const productList = [
  {
    key: 1,
    name: "Sản phẩm 1",
    price: 1000,
    quantity: 1,
  },
  {
    key: 2,
    name: "Sản phẩm 2",
    price: 2000,
    quantity: 2,
  },
  {
    key: 3,
    name: "Sản phẩm 3",
    price: 3000,
    quantity: 3,
  },
];

const columns = [
  {
    title: "Tên sản phảm",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Giá",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Số lượng",
    dataIndex: "quantity",
    key: "quantity",
  },
];

function Checkout() {
  // const [paymentMethod, setPaymentMethod] = useState<number>(1);
  const nav = useNavigate();

  // xử lý call api thanh toán
  const handlePayment = async (values: any) => {
    // tổng tiền
    const total = productList.reduce((init, item) => {
      return (init += item.price * item.quantity);
    }, 0);
    // console.log(total);
    console.log(values);
    try {
      if (values.paymentMethod == "vnpay") {
        // xử lý thanh toán bằng vnpay
        const { data } = await axios.get(
          `http://localhost:3000/create_payment?amount=${total}`
        );
        window.location.href = data.paymentUrl;
        return;
      }
      if (values.paymentMethod == "zalopay") {
        alert(values.paymentMethod);
        // xử lý thanh toán bằng zalopay
        // const { data } = await axios.get(
        //   `http://localhost:3000/create_payment?amount=${total}`
        // );
        // window.location.href = data.paymentUrl;
        return;
      }
      // ship
      const { data } = await axios.post("http://localhost:3000/orders", {
        products: productList,
        paymentMethod: values.paymentMethod,
        user: {
          username: values.name,
          address: values.address,
          phone: values.phone,
          email: values.email,
        },
      });
      console.log(data);
    } catch (error) {}
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Thanh toán</h1>
      <Form
        layout="vertical"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={handlePayment}
        initialValues={{ paymentMethod: "vnpay" }}
      >
        <Row>
          <Col span={14}>
            {/* Thông tin nhận */}

            <Form.Item label="Họ và tên" name="name">
              <Input />
            </Form.Item>

            <Form.Item label="Email" name="email">
              <Input type="email" />
            </Form.Item>

            <Form.Item label="Sô điện thoại" name="phone">
              <Input type="number" />
            </Form.Item>

            <Form.Item label="Địa chỉ" name="address">
              <TextArea rows={4} />
            </Form.Item>
          </Col>

          <Col span={10}>
            {/* Thông tin sản phẩm */}
            <Card title="Thông tin sản phẩm">
              <Table
                pagination={false}
                dataSource={productList}
                columns={columns}
              />
              <h3>Tổng tiền: 3000</h3>
              <Form.Item label="Payment Method" name="paymentMethod">
                <Radio.Group
                  // onChange={(e) => {
                  //   setPaymentMethod(e.target.value);
                  // }}
                  style={{ display: "flex", flexDirection: "column", gap: 8 }}
                >
                  <Radio value={"vnpay"}>VNPAY</Radio>
                  <Radio value={"zalopay"}>ZALOPAY</Radio>
                  <Radio value={"cod"}>Ship COD</Radio>
                </Radio.Group>
              </Form.Item>

              <Button
                // onClick={handlePayment}
                style={{ marginTop: 20 }}
                color="primary"
                variant="solid"
                htmlType="submit"
              >
                Thanh toán
              </Button>
            </Card>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Checkout;
