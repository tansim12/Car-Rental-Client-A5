import React from "react";
import { Typography, Card, Button, Col, Row, Collapse } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import Map from "./Map";
import ReUseableBanner from "../../components/ui/Reuseable Banner/ReUseableBanner";

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

import history from "../../assets/About Us/About us page-cuate.png";
import fleet from "../../assets/About Us/Questions-cuate.png";
import banner from "../../assets/About Us/banner.jpg";
import e1 from "../../assets/About Us/e1.jpg";
import e2 from "../../assets/About Us/e2.jpg";
import e3 from "../../assets/About Us/e3.jpg";

const teamMembers = [
  { name: "John Doe", role: "CEO", photo: e2 },
  { name: "Jane Smith", role: "CTO", photo: e1 },
  { name: "Emily Johnson", role: "COO", photo: e3 },
];

const fleetItems = [
  {
    name: "Economy",
    description: "Fuel-efficient cars for budget-conscious travelers",
  },
  {
    name: "Luxury",
    description: "Premium vehicles for a sophisticated driving experience",
  },
  {
    name: "SUV",
    description: "Spacious and versatile vehicles for all terrains",
  },
  {
    name: "Electric",
    description: "Eco-friendly options for environmentally conscious drivers",
  },
];

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <div className="bg-pageBg">
        <ReUseableBanner
          image={banner}
          title="About Us"
          subTitle="** Contact"
        ></ReUseableBanner>
      </div>

      {/* Company History */}
      <section className=" px-4 sm:px-6 lg:px-8">
        <Row gutter={[32, 32]} align="middle" className="container mx-auto">
          <Col xs={24} md={12}>
            <div className="transition-all duration-500 ease-in-out">
              <Title
                level={2}
                className="text-4xl font-bold mb-6 text-gray-800"
              >
                Our Journey
              </Title>
              <Paragraph className="text-gray-700 mb-4">
                Founded in 2010, our company has been at the forefront of the
                car rental industry, committed to providing excellent service
                with a focus on customer satisfaction and innovation.
              </Paragraph>
              <Paragraph className="text-gray-700 mb-6">
                Our mission is to deliver top-notch transportation solutions,
                and our vision is to become the leading car rental service
                globally, known for our reliability, flexibility, and
                customer-centric approach.
              </Paragraph>
              <Button type="primary" size="large">
                Learn More
              </Button>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className="transition-all duration-500 ease-in-out">
              <img
                src={history}
                alt="Company History"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </Col>
        </Row>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="container mx-auto">
          <Title
            level={2}
            className="text-3xl font-bold mb-12 text-center text-gray-800"
          >
            Meet Our Leadership
          </Title>
          <Row gutter={[24, 24]}>
            {teamMembers.map((member, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <div className="transition-all duration-500 ease-in-out">
                  <Card
                    cover={
                      <img
                        alt={member.name}
                        src={member.photo}
                        className="h-48 object-cover rounded-t-lg"
                      />
                    }
                  >
                    <Card.Meta title={member.name} description={member.role} />
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Our Fleet */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Title
            level={2}
            className="text-3xl font-bold mb-12 text-center text-gray-800"
          >
            Our Fleet
          </Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <div className="transition-all duration-500 ease-in-out">
                <img
                  src={fleet}
                  alt="Our Fleet"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="transition-all duration-500 ease-in-out">
                <Collapse
                  defaultActiveKey={["0"]}
                  style={{ backgroundColor: "gray", color: "" }}
                >
                  {fleetItems.map((item, index) => (
                    <Panel
                      header={item.name}
                      key={index}
                      style={{
                        color: "black",
                      }}
                    >
                      <p style={{ color: "black" }}>{item.description}</p>
                    </Panel>
                  ))}
                </Collapse>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Values & Commitment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="container mx-auto">
          <Title
            level={2}
            className="text-3xl font-bold mb-12 text-center text-gray-800"
          >
            Our Values & Commitment
          </Title>
          <Row gutter={[24, 24]}>
            {["Customer First", "Sustainability", "Innovation"].map(
              (value, index) => (
                <Col xs={24} md={8} key={index}>
                  <div className="transition-all duration-500 ease-in-out">
                    <Card className="h-full">
                      <Title level={4} className="mb-4 text-gray-700">
                        {value}
                      </Title>
                      <Paragraph className="text-gray-600">
                        We are committed to upholding the highest standards in{" "}
                        {value.toLowerCase()}, ensuring that every aspect of our
                        service reflects this core value.
                      </Paragraph>
                    </Card>
                  </div>
                </Col>
              )
            )}
          </Row>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Title
            level={2}
            className="text-3xl font-bold mb-12 text-center text-gray-800"
          >
            Get in Touch
          </Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <div className="transition-all duration-500 ease-in-out">
                <Card>
                  <Title level={3} className="mb-6">
                    Contact Information
                  </Title>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <PhoneOutlined className="mr-2 text-gray-600" />
                      <span>(123) 456-7890</span>
                    </div>
                    <div className="flex items-center">
                      <MailOutlined className="mr-2 text-gray-600" />
                      <span>contact@ourcompany.com</span>
                    </div>
                    <div className="flex items-center">
                      <EnvironmentOutlined className="mr-2 text-gray-600" />
                      <span>123 Main Street, Anytown, USA</span>
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="transition-all duration-500 ease-in-out h-[400px] bg-gray-200 rounded-lg shadow-xl">
                <Map />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
