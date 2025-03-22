import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Rate,
  Select,
  TreeSelect,
  Upload,
} from "antd";

function ProductAdd() {
  const { RangePicker } = DatePicker;

  const categories = [
    {
      name: "Laptop",
      id: 1,
    },
    {
      name: "PC",
      id: 2,
    },
    {
      name: "Mobile",
      id: 3,
    },
  ];
  function handleSubmit(values: any) {
    console.log(values);
  }
  return (
    <div>
      <Form onFinish={handleSubmit}>
        <Form.Item label="In Stock" name="inStock" valuePropName="checked">
          <Checkbox>In Stock</Checkbox>
        </Form.Item>
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Category" name="category">
          <Select>
            {categories.map((category, index) => (
              <Select.Option key={index} value={category.id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: "Light",
                value: "light",
                children: [{ title: "Bamboo", value: "bamboo" }],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="RangePicker" name="date">
          <RangePicker />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{
                color: "inherit",
                cursor: "inherit",
                border: 0,
                background: "none",
              }}
              type="button"
            >
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item label="Rate" name="rate">
          <Rate />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Button
        </Button>
      </Form>
    </div>
  );
}

export default ProductAdd;
