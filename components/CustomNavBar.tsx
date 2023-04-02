
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { ConnectWallet } from '@thirdweb-dev/react';

export default function CustomNavBar() {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="awz">
          <img
            alt=""
            src="/CirclezCoffeeLogo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Circlez Coffee
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/membership">Membership</Nav.Link>
            <Nav.Link href="/rewards">Rewards</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>

          <Nav >
            <ConnectWallet colorMode="light" />
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}