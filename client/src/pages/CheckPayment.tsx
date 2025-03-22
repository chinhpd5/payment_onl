import { Button, Result } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function CheckPayment() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<"success"| "error">("error")
  const [title, setTitle] = useState<string>("")

  useEffect(() => {
    (async () => {
      try {
        // console.log(searchParams);
        const { data } = await axios.get(
          `http://localhost:3000/check_payment?${searchParams.toString()}`
        );
        // console.log(data);
        if (data.data.vnp_ResponseCode == "00") {
          // thành công
          setStatus("success")
          setTitle("Thanh toán thành công")
        }else if(data.data.vnp_ResponseCode == "24"){
          setStatus("error")
          setTitle("Khách hàng hủy thanh toán")
        }
      } catch (error) {}
    })();
  }, [searchParams]);

  return (
    <div>
      <Result
        status={status}
        title={title}
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
          <Button type="primary" key="console">
            Go Console
          </Button>,
          <Button key="buy">Buy Again</Button>,
        ]}
      />
    </div>
  );
}

export default CheckPayment;
