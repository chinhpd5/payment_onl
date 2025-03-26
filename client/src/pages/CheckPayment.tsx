import { Button, Result } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

function CheckPayment() {
  // const [searchParams] = useSearchParams();
  const searchParams = new URLSearchParams(useLocation().search);
  const [status, setStatus] = useState<"success" | "error">("error");
  const [title, setTitle] = useState<string>("");
  const paymentMethod = searchParams.get("paymentMethod");

  console.log({ searchParams, paymentMethod });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/check_payment?${searchParams.toString()}`
        );
        if (
          (paymentMethod == "vnpay" && data.data.vnp_ResponseCode == "00") ||
          (paymentMethod == "zalopay" && data.data.status == "1")
        ) {
          // thành công
          setStatus("success");
          setTitle("Thanh toán thành công");
          return;
        }

        setStatus("error");
        setTitle("Khách hàng hủy thanh toán");
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
