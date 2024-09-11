import { Typography, Card, Button, Col, Row } from "antd";
import Map from "./Map"; // Import your Map component
import "tailwindcss/tailwind.css"; // Import Tailwind CSS
const { Title, Paragraph } = Typography;

import history from "../../assets/About Us/history.jpg";
import banner from "../../assets/About Us/banner.jpg";
import e1 from "../../assets/About Us/e1.jpg";
import e2 from "../../assets/About Us/e2.jpg";
import e3 from "../../assets/About Us/e3.jpg";
import ReUseableBanner from "../../components/ui/Reuseable Banner/ReUseableBanner";

// Sample team members data
const teamMembers = [
  { name: "John Doe", role: "CEO", photo: e2 },
  { name: "Jane Smith", role: "CTO", photo: e1 },
  { name: "Emily Johnson", role: "COO", photo: e3 },
];

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
  <div className="bg-pageBg">
  <ReUseableBanner
        image={banner}
        title="About Us"
        subTitle="** Contact"
      ></ReUseableBanner>
  </div>

      {/* Company History */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Row gutter={16}>
            <Col xs={24} md={12} className="mb-8">
              <Title level={2} className="text-3xl font-semibold mb-4">
                Company History
              </Title>
              <Paragraph className="text-gray-700 mb-4">
                Founded in 2010, our company has been committed to providing
                excellent service with a focus on customer satisfaction and
                innovation.
              </Paragraph>
              <Paragraph className="text-gray-700">
                Our mission is to deliver top-notch transportation solutions,
                and our vision is to become the leading car rental service
                globally.
              </Paragraph>
            </Col>
            <Col xs={24} md={12} className="flex justify-center items-center">
              <img
            src={history}
                alt="Company History"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </Col>
          </Row>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <Title level={2} className="text-3xl font-semibold mb-8 text-center">
            Our Team
          </Title>
          <Row gutter={16}>
            {teamMembers.map((member, index) => (
              <Col xs={24} sm={12} md={8} key={index} className="mb-8">
                <Card
                  cover={
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="object-cover w-full h-48"
                    />
                  }
                  className="shadow-lg"
                >
                  <Card.Meta title={member.name} description={member.role} />
                  <Button type="primary" className="mt-4 w-full">
                    Contact
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Our Fleet */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Row gutter={16}>
            <Col xs={24} md={12} className="mb-8">
              <Title level={2} className="text-3xl font-semibold mb-4">
                Our Fleet
              </Title>
              <Paragraph className="text-gray-700 mb-4">
                We offer a diverse range of vehicles including economy, luxury,
                and SUVs to meet all your transportation needs.
              </Paragraph>
            </Col>
            <Col xs={24} md={12} className="flex justify-center">
              <img
                src={history}
                alt="Our Fleet"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </Col>
          </Row>
        </div>
      </section>

      {/* Values & Commitment */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <Title level={2} className="text-3xl font-semibold mb-4 text-center">
            Values & Commitment
          </Title>
          <Paragraph className="text-gray-700 text-center">
            We are committed to excellent customer service and sustainability.
            Our values drive us to continually improve and meet the highest
            standards.
          </Paragraph>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Row gutter={16}>
            <Col xs={24} md={12} className="mb-8">
              <Title level={2} className="text-3xl font-semibold mb-4">
                Contact Information
              </Title>
              <Paragraph className="text-gray-700 mb-2">
                Phone: (123) 456-7890
              </Paragraph>
              <Paragraph className="text-gray-700 mb-2">
                Email: contact@ourcompany.com
              </Paragraph>
              <Paragraph className="text-gray-700">
                Address: 123 Main Street, Anytown, USA
              </Paragraph>
            </Col>
            <Col xs={24} md={12} className="mb-8">
              <Map />
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
