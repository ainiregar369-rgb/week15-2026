"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Herosection from "../component/Herosection";
import Worksection from "../component/Worksection";
import Servicesection from "../component/Servicesection";
import Contactsection from "../component/Contactsection";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <main>
      <Herosection />

      <Container className="my-5">
        <Row className="my-4">
          <Col md={6} className="align-self-center mb-3">
            <h2>About Us</h2>
            <h6>What We Do?</h6>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Fugiat, ipsam culpa. Commodi aspernatur temporibus placeat
              libero fugit at sequi consequuntur.
            </p>

            <Button variant="info">
              Learn More
            </Button>
          </Col>
          <Col md={6}>
            <Image
              src="/seven.jpg"
              alt="seven"
              width={500}
              height={500}
            />
          </Col>
        </Row>
      </Container>

      <section className="py-4" style={{ backgroundColor: "#fff9ac" }}>
        <Worksection />
      </section>

      <Servicesection />
      <Contactsection />
      <Footer />
    </main>
  );
}