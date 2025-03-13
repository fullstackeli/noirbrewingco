import { Outlet } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap'; 


function App() {
  return (
    <div>
      {/* Bootstrap Navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Noir Brewing Co.</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="/our-story">Our Story</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Outlet for routing */}
      <Outlet />
    </div>
  );
}

export default App;
