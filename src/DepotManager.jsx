import React, { useState } from 'react';
import { Select, Button, DatePicker, Form, Modal } from 'antd';
import { useNavigate } from 'react-router-dom'; 
import 'antd/dist/reset.css';
import './CxAgent.css';

const { Option } = Select;
const { RangePicker } = DatePicker;

const DepotManager = () => {
const navigate = useNavigate();
  const [region, setRegion] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [customer, setCustomer] = useState('');
  const [dateRange, setDateRange] = useState([null, null]);
  const [showResults, setShowResults] = useState(false);

  const [importModalVisible, setImportModalVisible] = useState(false);
  const [exportModalVisible, setExportModalVisible] = useState(false);
  const [importContainerModalVisible, setImportContainerModalVisible] = useState(false);
  const [exportContainerModalVisible, setExportContainerModalVisible] = useState(false);

  const handleRegionChange = value => setRegion(value);
  const handleCountryChange = value => setCountry(value);
  const handleCityChange = value => setCity(value);
  const handleCustomerChange = value => setCustomer(value);
  const handleDateChange = dates => setDateRange(dates);

  const showImportModal = () => setImportModalVisible(true);
  const hideImportModal = () => setImportModalVisible(false);
  const showExportModal = () => setExportModalVisible(true);
  const hideExportModal = () => setExportModalVisible(false);
  const showImportContainerModal = () => setImportContainerModalVisible(true);
  const hideImportContainerModal = () => setImportContainerModalVisible(false);
  const showExportContainerModal = () => setExportContainerModalVisible(true);
  const hideExportContainerModal = () => setExportContainerModalVisible(false);

  const importDetails = [
    { ffe: 3, toLocation: '33100082194', status: 'In transit' },
    { ffe: 4, toLocation: '33100133680', status: 'Delivered' },
    { ffe: 3, toLocation: 'USMPDWT', status: 'Yet to move' }
  ];

  const exportDetails = [
    { ffe: 3, fromLocation: '33101285222', status: 'In transit' },
    { ffe: 6, fromLocation: '33103314833', status: 'Delivered' },
    { ffe: 6, fromLocation: 'USHOUPP', status: 'Yet to move' }
  ];

  const data = {
    importCustomers: [
      {
        customerName: '331C8022112',
        customerLocation: 'USHOU',
        noOfShipments: 4,
        containerTypeAndSize: '40DRY',
        commodity: 'CHEMICALS',
        totalFFE: 10
      }
    ],
    depotStock: [
      {
        depotName: 'USHOUBY',
        currentStock: 1071,
        maxStock: 850,
        deficit: 0
      },
      {
        depotName: 'USHOUEM',
        currentStock: 690,
        maxStock: 1050,
        deficit: 360
      },
      {
        depotName: 'USHOUWO',
        currentStock: 870,
        maxStock: 650,
        deficit: 0
      }
    ],
    exportCustomers: [
      {
        customerName: '33100092980',
        customerLocation: 'USHOU',
        noOfShipments: 5,
        containerTypeAndSize: '40DRY',
        commodity: 'CHEMICALS',
        totalFFE: 15
      }
    ]
  };

  const handleSubmit = () => setShowResults(true);
  const handleReset = () => {
    setRegion('');
    setCountry('');
    setCity('');
    setCustomer('');
    setDateRange([null, null]);
    setShowResults(false);
  };

  const handleLogout = () => {

        navigate('/'); // Navigate to the root URL
      
    console.log('Logout');
    // For example, redirect to login page or clear user session
    // window.location.href = '/login'; // Uncomment if you have a login page
  };

  return (
    <div className="container">
      <div className="header">
        <h4>Depot Manager Dashboard</h4>
      </div>
      <div className="content">
        <div className="filters">
          <h2>Select Filters</h2>
          <Form layout="vertical">
            <Form.Item label="Depot Region">
              <Select
                value={region}
                onChange={handleRegionChange}
                style={{ width: '100%' }}
                placeholder="Select a region"
              >
                <Option value="apa">APA</Option>
                <Option value="eur">EUR</Option>
                <Option value="imea">IMEA</Option>
                <Option value="lam">LAM</Option>
                <Option value="nam">NAM</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Depot Country">
              <Select
                value={country}
                onChange={handleCountryChange}
                style={{ width: '100%' }}
                placeholder="Select a country"
              >
                <Option value="ca">CA</Option>
                <Option value="mx">MX</Option>
                <Option value="us">US</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Depot City">
              <Select
                value={city}
                onChange={handleCityChange}
                style={{ width: '100%' }}
                placeholder="Select a city"
              >
                <Option value="USHOU">USHOU</Option>
              </Select>
            </Form.Item>
        
            <Form.Item label="Date Range">
              <RangePicker
                value={dateRange}
                onChange={handleDateChange}
                style={{ width: '100%' }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                onClick={handleSubmit}
                style={{ marginTop: '20px', marginRight: '10px' }}
              >
                Submit
              </Button>
              <Button
                type="default"
                onClick={handleReset}
                style={{ marginTop: '20px', marginRight: '10px' }}
              >
                Reset
              </Button>
              <Button
  type="danger"
  onClick={handleLogout}
  className="logout-button" // Add this class
  style={{ marginTop: '20px' }}
>
  Logout
</Button>

            </Form.Item>
          </Form>
        </div>
        <div className="results">
          {!showResults ? (
            <div className="placeholder">
              <p>Please select filters and click "Submit" to view results.</p>
            </div>
          ) : (
            <div className="cxagent-output">
              <h2>Selected Filters</h2>
              <div className="selected-filters">
                <table>
                  <tbody>
                    <tr>
                      <td><strong>Depot Region:</strong></td>
                      <td className="uppercase">{region || 'Not selected'}</td>
                    </tr>
                    <tr>
                      <td><strong>Depot Country:</strong></td>
                      <td className="uppercase">{country || 'Not selected'}</td>
                    </tr>
                    <tr>
                      <td><strong>Depot City:</strong></td>
                      <td className="uppercase">{city || 'Not selected'}</td>
                    </tr>
                 
                    <tr>
                      <td><strong>Date Range:</strong></td>
                      <td>
                        {dateRange[0] ? dateRange[0].format('DD-MM-YYYY') : 'Not selected'} 
                        to 
                        {dateRange[1] ? dateRange[1].format('DD-MM-YYYY') : 'Not selected'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="table-wrapper">
                <h2>Depot Stock</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Depot Name</th>
                      <th>Current Stock</th>
                      <th>Max Stock</th>
                      <th>Deficit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.depotStock.map((item, index) => (
                      <tr key={index}>
                        <td>{item.depotName}</td>
                        <td>{item.currentStock}</td>
                        <td>{item.maxStock}</td>
                        <td>{item.deficit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="table-wrapper">
                <h2>Empty Return - Import Customers</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Customer Name</th>
                      <th>Customer Location</th>
                      <th>No. of Shipments</th>
                      <th>Container Type & Size</th>
                      <th>Commodity</th>
                      <th>Total FFE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.importCustomers.map((item, index) => (
                      <tr key={index}>
                        <td>{item.customerName}</td>
                        <td>{item.customerLocation}</td>
                        <td>{item.noOfShipments}</td>
                        <td>{item.containerTypeAndSize}</td>
                        <td>{item.commodity}</td>
                        <td className="clickable-link" onClick={showImportContainerModal}>
                          {item.totalFFE}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

         

              <div className="table-wrapper">
                <h2>Demand Fulfilment - Export Customers</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Customer Name</th>
                      <th>Customer Location</th>
                      <th>No. of Shipments</th>
                      <th>Container Type & Size</th>
                      <th>Commodity</th>
                      <th>Total FFE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.exportCustomers.map((item, index) => (
                      <tr key={index}>
                        <td>{item.customerName}</td>
                        <td>{item.customerLocation}</td>
                        <td>{item.noOfShipments}</td>
                        <td>{item.containerTypeAndSize}</td>
                        <td>{item.commodity}</td>
                        <td className="clickable-link" onClick={showExportContainerModal}>
                          {item.totalFFE}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <Modal
                title="Import Container Details"
                visible={importContainerModalVisible}
                onOk={hideImportContainerModal}
                onCancel={hideImportContainerModal}
              >
                <div>
                 
                  <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                    <thead>
                      <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>FFE</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>To Location</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {importDetails.map((item, index) => (
                        <tr key={index}>
                          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.ffe}</td>
                          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.toLocation}</td>
                          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Modal>

              <Modal
                title="Export Container Details"
                visible={exportContainerModalVisible}
                onOk={hideExportContainerModal}
                onCancel={hideExportContainerModal}
              >
                <div>
                
                  <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                    <thead>
                      <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>FFE</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>From Location</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {exportDetails.map((item, index) => (
                        <tr key={index}>
                          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.ffe}</td>
                          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.fromLocation}</td>
                          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Modal>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DepotManager;
