import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Typography, Space, notification } from 'antd';
import 'antd/dist/reset.css';
import './Login.css';
import backgroundImage from '../src/images/background.png'; 
import maerskLogo from '../src/images/maersklogo.png';

const { Title, Text } = Typography;

const Login = () => {
  const [userType, setUserType] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUserType = (type) => {
    setUserType(type);
  };

  const handleLogin = () => {
    const credentials = {
      CxAgent: { username: 'cxagent', password: 'password123' },
      DepotManager: { username: 'depotmanager', password: 'password456' }
    };

    if (username === credentials[userType].username && password === credentials[userType].password) {
      navigate(`/${userType}`);
    } else {
      notification.error({
        message: 'Login Failed',
        description: 'Invalid username or password',
      });
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
      <div className="login-content" style={{ backgroundColor: 'white', padding: '40px', borderRadius: '8px', maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
        <div className="logo-section" style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img src={maerskLogo} alt="Maersk Logo" style={{ width: '150px' }} />
        </div>
        <div className="login-section">
          <Title level={1} style={{ textAlign: 'center' }}>Welcome</Title>
          {!userType ? (
            <div className="user-type-selection" style={{ textAlign: 'center' }}>
                <Text className="prompt-text">Who are you?</Text>
                
              <Space direction="vertical" style={{ width: '100%' }}>
                <Button
                  type="primary"
                  onClick={() => handleUserType('CxAgent')}
                  style={{ width: '100%' }}
                >
                  CX Agent
                </Button>
                <Button
                  type="primary"
                  onClick={() => handleUserType('DepotManager')}
                  style={{ width: '100%' }}
                >
                  Depot Manager
                </Button>
              </Space>
            </div>
          ) : (
            <div>
              <div className="user-type-buttons" style={{ textAlign: 'center', marginBottom: '20px' }}>
                <Button
                  type={userType === 'CxAgent' ? 'primary' : 'default'}
                  onClick={() => handleUserType('CxAgent')}
                  style={{ marginRight: '10px' }}
                >
                  CX Agent
                </Button>
                <Button
                  type={userType === 'DepotManager' ? 'primary' : 'default'}
                  onClick={() => handleUserType('DepotManager')}
                >
                  Depot Manager
                </Button>
              </div>
              <div className="login-form">
                <Input
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{ marginBottom: '10px' }}
                />
                <Input.Password
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ marginBottom: '10px' }}
                />
                <Button
                  type="primary"
                  onClick={handleLogin}
                  style={{ width: '100%' }}
                >
                  Sign in
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
