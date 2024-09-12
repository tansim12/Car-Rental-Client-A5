import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CheckCircleOutlined } from '@ant-design/icons';

const PaymentSuccessPage: React.FC = () => {
  const navigate = useNavigate();

  const handleViewOrder = () => {
    // Logic to navigate to the user's order page
    navigate(-4); // Example path
  };

  const handleContinueShopping = () => {
    navigate('/'); // Navigate to the shop page
  };

  return (
    <div style={styles.container}>
      <Result
        status="success"
        title="Payment Successful!"
        subTitle="Thank you for your purchase. Your payment was processed successfully."
        icon={<CheckCircleOutlined style={{ color: '#52c41a', fontSize: '48px' }} />}
        extra={[
          <Button type="primary" onClick={handleViewOrder} key="viewOrder">
            View Order
          </Button>,
          <Button onClick={handleContinueShopping} key="continueShopping">
            Continue Shopping
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

export default PaymentSuccessPage;
