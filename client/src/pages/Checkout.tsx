import { Button, Card, Col, Form, Input, Radio, Row, Table } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

const data = [
  {
    name: "Sản phẩm 1",
    price: 1000,
    quantity: 1,
  },
  {
    name: "Sản phẩm 2",
    price: 2000,
    quantity: 2,
  },
  {
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
  return (
    <div>
      <h1>Thanh toán</h1>
      <Row>
        <Col span={14}>
          {/* Thông tin nhận */}
          <Form
            layout="vertical"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
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
          </Form>
        </Col>

        <Col span={10}>
          {/* Thông tin sản phẩm */}
          <Card title="Thông tin sản phẩm">
            <Table pagination={false} dataSource={data} columns={columns} />
            <h3>Tổng tiền: 3000</h3>

            <Radio.Group
              defaultValue={1}
              style={{ display: "flex", flexDirection: "column", gap: 8 }}
            >
              <Radio value={1}>VNPAY</Radio>
              <Radio value={2}>ZALOPAY</Radio>
              <Radio value={3}>Ship COD</Radio>
            </Radio.Group>

            <Button style={{marginTop:20}} color="primary" variant="solid">Thanh toán</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Checkout;
