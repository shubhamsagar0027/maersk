import React, { useState } from 'react';
import { Select, Button, DatePicker, Form, Modal } from 'antd';
import 'antd/dist/reset.css';
import { useNavigate } from 'react-router-dom'; 
import './CxAgent.css';
import track from '../src/images/track.png';

const { Option } = Select;
const { RangePicker } = DatePicker;

const CxAgent = () => {
    const navigate = useNavigate();
  const [region, setRegion] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [customer, setCustomer] = useState('');
  const [dateRange, setDateRange] = useState([null, null]);
  const [showResults, setShowResults] = useState(false);
  const [importModalVisible, setImportModalVisible] = useState(false);
  const [exportModalVisible, setExportModalVisible] = useState(false);

  const handleRegionChange = value => setRegion(value);
  const handleCountryChange = value => setCountry(value);
  const handleCityChange = value => setCity(value);
  const handleCustomerChange = value => setCustomer(value);
  const handleDateChange = dates => setDateRange(dates);
  const [importContainerModalVisible, setImportContainerModalVisible] = useState(false);
const [exportContainerModalVisible, setExportContainerModalVisible] = useState(false);

const showImportContainerModal = () => setImportContainerModalVisible(true);
const hideImportContainerModal = () => setImportContainerModalVisible(false);

const showExportContainerModal = () => setExportContainerModalVisible(true);
const hideExportContainerModal = () => setExportContainerModalVisible(false);


  const handleSubmit = () => {
    setShowResults(true);
  };

  const importModalContent = (
    <div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>FFE</th>
            <th style={{ border: '1px solid #ddd', padding: '8px'  }}>To Customer</th>
            <th style={{ border: '1px solid #ddd', padding: '8px'  }}>Opportunity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign:'center' }}>1</td>
            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign:'center' }}>331S0006416</td>
            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign:'center' }}>$1.5k</td>
          </tr>
        </tbody>
      </table>
      <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Import Customer Code:</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>331S0006416</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Import Customer Name:</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>GULF EXPRESS LINE USA</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const exportContainerDetails = {
    shipmentNumber: '235156178',
    containerNumber: 'EXFU5529928',
    containerType: 'Dry',
    containerSize: 20,
    commodity: 'CHEMICALS'
  };
  
  const emptyContainerFulfillmentInfo = {
    toCustomer: '33102579744',
    city: 'USMOB'
  };
  

  const containerDetails = {
    shipmentNumber: '234186458',
    containerNumber: 'SEKU4714669',
    containerType: 'Dry',
    containerSize: 40,
    commodity: 'CHEMICALS'
  };
  
  const emptyContainerReturnInfo = {
    toCustomer: '331S0006416',
    city: 'USHOU'
  };
  

  const exportModalContent = (
    <div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>FFE</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>From Customer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign:'center' }}>0.5</td>
            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign:'center' }}>33102579744</td>
          </tr>
        </tbody>
      </table>
      <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Export Customer Code:</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>33102579744</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Export Customer Name:</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>SEBERT SHIPPING INC</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  
  const handleReset = () => {
    setRegion('');
    setCountry('');
    setCity('');
    setCustomer('');
    setDateRange([null, null]);
    setShowResults(false);
  };

  const showImportModal = () => {
    setImportModalVisible(true);
  };
  
  const showExportModal = () => {
    setExportModalVisible(true);
  };
  
  const handleImportModalOk = () => {
    setImportModalVisible(false);
  };
  
  const handleImportModalCancel = () => {
    setImportModalVisible(false);
  };
  
  const handleExportModalOk = () => {
    setExportModalVisible(false);
  };
  
  const handleExportModalCancel = () => {
    setExportModalVisible(false);
  };

  const handleLogout = () => {

    navigate('/'); // Navigate to the root URL
  
console.log('Logout');
// For example, redirect to login page or clear user session
// window.location.href = '/login'; // Uncomment if you have a login page
};


  const data = {
    imports: {
      arrivalDate: '14-01-2024',
      containerType: 'Dry',
      containerSize: 40,
      totalFFE: 1,
      containerNumber: 'SEKU4714669',
      commodity: 'CHEMICALS',
      porCityCode: 'NLROT',
      porCityName: 'Rotterdam',
      porCountryName: 'Netherlands',
      podCityCode: 'USHOU',
      podCityName: 'Houston',
      podCountryName: 'United States',
    },
    exports: {
      departureDate: '23-01-2024',
      containerType: 'Dry',
      containerSize: 20,
      totalFFE: 0.5,
      containerNumber: 'EXFU5529928',
      commodity: 'CHEMICALS',
      porCityCode: 'USMOB',
      porCityName: 'Mobile',
      porCountryName: 'United States',
      podCityCode: 'KRBUS',
      podCityName: 'Busan',
      podCountryName: 'Korea, South',
    },
  };

  return (
    <div className="container">
      <div className="header">
        <h4>CX Agent Dashboard</h4>
      </div>
      <div className="content">
        <div className="filters">
          <h2>Select Filters</h2>
          <Form layout="vertical">
            <Form.Item label="Customer Region">
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
            <Form.Item label="Customer Country">
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
            <Form.Item label="Customer's City">
              <Select
                value={city}
                onChange={handleCityChange}
                style={{ width: '100%' }}
                placeholder="Select a city"
              >
                <Option value="USHOU">USHOU</Option>
             
              </Select>
            </Form.Item>
            <Form.Item label="Customer Name/Code">
              <Select
                value={customer}
                onChange={handleCustomerChange}
                style={{ width: '100%' }}
                placeholder="Select a customer"
              >
                <Option value="customer">331C8022112</Option>
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
                style={{ marginTop: '20px' }}
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
        {showResults && (
  <div className="selected-filters">
    
    <table>
      <tbody>
      <tr>
  <td><strong>Customer Region:</strong></td>
  <td className="uppercase">{region || 'Not selected'}</td>
</tr>
<tr>
  <td><strong>Customer Country:</strong></td>
  <td className="uppercase">{country || 'Not selected'}</td>
</tr>
<tr>
  <td><strong>Customer's City:</strong></td>
  <td className="uppercase">{city || 'Not selected'}</td>
</tr>

        <tr>
          <td><strong>Customer Name/Code:</strong></td>
          <td>331C8022112</td>
        </tr>
        <tr>
          <td><strong>Date Range:</strong></td>
          <td>{dateRange[0] ? dateRange[0].format('DD-MM-YYYY') : 'Not selected'} to {dateRange[1] ? dateRange[1].format('DD-MM-YYYY') : 'Not selected'}</td>
        </tr>
      </tbody>
    </table>
  </div>
)}

              <div className="table-wrapper">
                <h2>List of Imports</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Actual Arrival Date</th>
                      <th>Container Type</th>
                      <th>Container Size</th>
                      <th>Total FFE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{data.imports.arrivalDate}</td>
                      <td>{data.imports.containerType}</td>
                      <td>{data.imports.containerSize}</td>
                      <td className="clickable-link" onClick={showImportModal}>{data.imports.totalFFE}</td>


                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Container Number</th>
                      <th>Container Type</th>
                      <th>Container Size</th>
                      <th>Commodity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <td className="clickable-link" onClick={showImportContainerModal}>{data.imports.containerNumber}</td>

                      <td>{data.imports.containerType}</td>
                      <td>{data.imports.containerSize}</td>
                      <td>{data.imports.commodity}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>POR City Code</th>
                      <th>POR City Name</th>
                      <th>POR Country Name</th>
                      <th>POD City Code</th>
                      <th>POD City Name</th>
                      <th>POD Country Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{data.imports.porCityCode}</td>
                      <td>{data.imports.porCityName}</td>
                      <td>{data.imports.porCountryName}</td>
                      <td>{data.imports.podCityCode}</td>
                      <td>{data.imports.podCityName}</td>
                      <td>{data.imports.podCountryName}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="table-wrapper">
                <h2>List of Exports</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Estimated Departure Date</th>
                      <th>Container Type</th>
                      <th>Container Size</th>
                      <th>Total FFE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{data.exports.departureDate}</td>
                      <td>{data.exports.containerType}</td>
                      <td>{data.exports.containerSize}</td>
                      <td className="clickable-link" onClick={showExportModal}>{data.exports.totalFFE}</td>



                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Container Number</th>
                      <th>Container Type</th>
                      <th>Container Size</th>
                      <th>Commodity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <td className="clickable-link" onClick={showExportContainerModal}>{data.exports.containerNumber}</td>

                      <td>{data.exports.containerType}</td>
                      <td>{data.exports.containerSize}</td>
                      <td>{data.exports.commodity}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>POR City Code</th>
                      <th>POR City Name</th>
                      <th>POR Country Name</th>
                      <th>POD City Code</th>
                      <th>POD City Name</th>
                      <th>POD Country Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{data.exports.porCityCode}</td>
                      <td>{data.exports.porCityName}</td>
                      <td>{data.exports.porCountryName}</td>
                      <td>{data.exports.podCityCode}</td>
                      <td>{data.exports.podCityName}</td>
                      <td>{data.exports.podCountryName}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Modal
  title="Import Details"
  visible={importModalVisible}
  onOk={handleImportModalOk}
  onCancel={handleImportModalCancel}
>
  {/* Use the importModalContent variable here */}
  {importModalContent}
</Modal>

<Modal
  title="Export Details"
  visible={exportModalVisible}
  onOk={handleExportModalOk}
  onCancel={handleExportModalCancel}
>
  {exportModalContent}
</Modal>
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
          <th colSpan={2} style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Container Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Shipment Number:</strong></td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{containerDetails.shipmentNumber}</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Container Number:</strong></td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{containerDetails.containerNumber}</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Container Type:</strong></td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{containerDetails.containerType}</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Container Size:</strong></td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{containerDetails.containerSize}</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Commodity:</strong></td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{containerDetails.commodity}</td>
        </tr>
      </tbody>
    </table>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th colSpan={2} style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Empty Container Return Information</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>To Customer:</strong></td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{emptyContainerReturnInfo.toCustomer}</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>City:</strong></td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{emptyContainerReturnInfo.city}</td>
        </tr>
      </tbody>
    </table>
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h3>Empty Return Tracking</h3>
          <img
            src={track}
            alt="Empty Return Tracking"
            style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }}
          />
        </div>
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
          <th colSpan={2} style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Container Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Shipment Number:</strong></td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{exportContainerDetails.shipmentNumber}</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Container Number:</strong></td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{exportContainerDetails.containerNumber}</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Container Type:</strong></td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{exportContainerDetails.containerType}</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Container Size:</strong></td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{exportContainerDetails.containerSize}</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Commodity:</strong></td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{exportContainerDetails.commodity}</td>
        </tr>
      </tbody>
    </table>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th colSpan={2} style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Empty Container Fulfillment Information</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>To Customer:</strong></td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{emptyContainerFulfillmentInfo.toCustomer}</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>City:</strong></td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{emptyContainerFulfillmentInfo.city}</td>
        </tr>
      </tbody>
    </table>
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h3>Empty Return Tracking</h3>
          <img
            src={track}
            alt="Empty Return Tracking"
            style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }}
          />
        </div>
  </div>
</Modal>





            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CxAgent;
