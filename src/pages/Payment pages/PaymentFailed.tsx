import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const PaymentFailed: React.FC = () => {
  const navigate = useNavigate();

  const handleRetryPayment = () => {
    // Logic to retry payment or navigate to payment page
    navigate('/'); // Example path
  };

  const handleGoHome = () => {
    navigate('/'); // Navigate back to homepage
  };

  return (
    <div style={styles.container}>
      <Result
        status="error"
        title="Payment Failed"
        subTitle="It seems that you failed the payment. You can retry or go back to the homepage."
        extra={[
          <Button type="primary" onClick={handleRetryPayment} key="retry">
            Retry Payment
          </Button>,
          <Button onClick={handleGoHome} key="home">
            Go to Homepage
          </Button>,
        ]}
      />
    </div>
  );
};

// Custom styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full screen height
    backgroundColor: '#f0f2f5', // Light background
    padding: '20px',
  },
};

export default PaymentFailed;
