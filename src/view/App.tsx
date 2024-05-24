import React, { useEffect } from "react";
import { DatePicker, Table } from "antd";
import { Button, Input, Flex, List, Typography, Space } from "antd";

const App = () => {
  const { RangePicker } = DatePicker;
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];
  const dataSource = [
    {
      key: "1",
      name: "胡彦斌1",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖2",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ];

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <>
      <h2>OtterTrade回测可视化插件</h2>
      <Flex gap="middle" vertical>
        <Space direction="vertical" size="large">
          <Space.Compact style={{ width: "100%" }}>
            <Input defaultValue="修改本地服务端口" />
            <Button type="primary">启动服务</Button>
          </Space.Compact>
          <Space.Compact style={{ width: "100%" }}>
            <Input defaultValue="当前服务的BaseUrl为：http:localhost:9342" />
            <Button type="primary">复制</Button>
          </Space.Compact>
          <Space.Compact style={{ width: "100%" }}>
            <DatePicker />
          </Space.Compact>
          <List
            header={<div>当前服务运行日志</div>}
            bordered
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Typography.Text mark>[ITEM]</Typography.Text> {item}
              </List.Item>
            )}
          />
        </Space>
        <Flex gap="middle">
          <Flex gap="middle" vertical>
            <RangePicker />
            <Table dataSource={dataSource} columns={columns} />;
          </Flex>
          <div>
            <div id="chart" style={{ margin: "0 auto" }}></div>
          </div>
        </Flex>
      </Flex>
    </>
  );
};

export default App;
