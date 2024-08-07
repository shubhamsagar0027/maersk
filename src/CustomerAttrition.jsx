import React, { useState } from "react";
import { Upload, Button, Table, Typography, Row, Col, message, Space } from "antd";
import { InboxOutlined, DownloadOutlined, SearchOutlined } from "@ant-design/icons";
import "./CustomerAttrition.css";

const { Dragger } = Upload;
const { Title, Paragraph } = Typography;

// Dummy data for the table
const dummyData = [
  { key: "1", name: "John Doe", email: "john@example.com", churnRisk: "High", lastPurchase: "2024-01-10" },
  { key: "2", name: "Jane Smith", email: "jane@example.com", churnRisk: "Medium", lastPurchase: "2024-02-15" },
  { key: "3", name: "Alice Johnson", email: "alice@example.com", churnRisk: "Low", lastPurchase: "2024-03-20" },
  { key: "4", name: "Bob Brown", email: "bob@example.com", churnRisk: "High", lastPurchase: "2024-04-05" },
  { key: "5", name: "Charlie Davis", email: "charlie@example.com", churnRisk: "Medium", lastPurchase: "2024-05-30" },
];

const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Email", dataIndex: "email", key: "email" },
  { title: "Churn Risk", dataIndex: "churnRisk", key: "churnRisk" },
  { title: "Last Purchase", dataIndex: "lastPurchase", key: "lastPurchase" },
];

const CustomerAttrition = () => {
  const [file, setFile] = useState(null);
  const [showTable, setShowTable] = useState(false);

  const handleFileChange = (info) => {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      setFile(info.file.originFileObj);
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const handlePredictChurnRate = () => {
    setShowTable(true);
  };

  return (
    <div className="customer-retention">
      <Title level={2}>Understand and Reduce Customer Attrition</Title>
      <Paragraph>
        Upload your customer data to calculate churn rates and identify factors contributing to customer loss, enabling you to take proactive measures.
      </Paragraph>

      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Dragger
          name="file"
          multiple={false}
          customRequest={({ file, onSuccess }) => {
            setTimeout(() => {
              onSuccess("ok");
            }, 0);
          }}
          showUploadList={false}
          onChange={handleFileChange}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single upload.
          </p>
        </Dragger>

        {file && (
          <div style={{ marginTop: 20 }}>
            <p>File: {file.name}</p>
            {!showTable && (
              <Button type="primary" onClick={handlePredictChurnRate}>
                Predict Churn Rate
              </Button>
            )}
          </div>
        )}

        {showTable && (
          <div>
            <Table dataSource={dummyData} columns={columns} pagination={false} />
            <div className="summary-report">
              <Title level={4}>Summary Report</Title>
              <Paragraph># of Customers: 100</Paragraph>
              <Paragraph># Low Churn: 64</Paragraph>
              <Paragraph># Medium Churn: 19</Paragraph>
              <Paragraph># High Churn: 17</Paragraph>
            </div>
            <Row gutter={16} style={{ marginTop: 20 }}>
              <Col>
                <Button icon={<DownloadOutlined />} type="default">
                  Download Report
                </Button>
              </Col>
              <Col>
                <Button icon={<SearchOutlined />} type="primary">
                  Drilldown
                </Button>
              </Col>
            </Row>
          </div>
        )}
      </Space>
    </div>
  );
};

export default CustomerAttrition;
