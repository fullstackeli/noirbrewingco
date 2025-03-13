import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Row, Col, Nav, Navbar, Card, Button } from 'react-bootstrap';

const Divider = () => (
  <hr style={{ borderTop: '1px solid #e1e1e1', margin: '20px 0' }} />
);

const MenuPage = () => {
  return (
    <div style={{ backgroundColor: '#f4f1ea', minHeight: '100vh', fontFamily: "'Futura', sans-serif" }}>
      {/* Header */}
      <Navbar bg="light" expand="lg" fixed="top" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <Container>
          <Navbar.Brand href="#">NOIR</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={RouterLink} to="/" style={{ fontWeight: 'bold', color: 'rgb(18, 45, 18)' }}>Home</Nav.Link>
            <Nav.Link as={RouterLink} to="/shop" style={{ fontWeight: 'bold', color: 'rgb(18, 45, 18)' }}>Shop</Nav.Link>
            <Nav.Link as={RouterLink} to="/our-story" style={{ fontWeight: 'bold', color: 'rgb(18, 45, 18)' }}>Our Story</Nav.Link>
            <Nav.Link as={RouterLink} to="/menu" style={{ fontWeight: 'bold', color: 'rgb(18, 45, 18)', textDecoration: 'underline' }}>Menu</Nav.Link>
            <Nav.Link as={RouterLink} to="/events" style={{ fontWeight: 'bold', color: 'rgb(18, 45, 18)' }}>Happenings</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Menu Section */}
      <Container style={{ paddingTop: '80px' }}>
        {["Coffee", "Cocktails", "Lunch & Dinner"].map((category) => (
          <div key={category} style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>{category}</h1>
            <Row>
              {getMenuItems(category).map(({ name, description }) => (
                <Col xs={12} md={4} key={name} className="mb-4">
                  <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                    <Card.Body>
                      <Card.Title>{name}</Card.Title>
                      <Card.Text>{description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>

      {/* Footer */}
      <div style={{ backgroundColor: 'rgba(232, 221, 211, 1)', textAlign: 'center', padding: '30px 20px' }}>
        <Divider />
        <p>&copy; 2025 Noir Brew. All rights reserved.</p>
      </div>
    </div>
  );
};

// Function to return menu items
const getMenuItems = (category) => {
  const menu = {
    Coffee: [
      { name: "Espresso", description: "Medium 12 Oz - $2 | Large 16 Oz - $3.75" },
      { name: "Caffe Americano", description: "Medium 12 Oz - $3.75 | Large 16 Oz - $4.50" },
      { name: "Cappuccino", description: "Medium 12 Oz - $4 | Large 16 Oz - $5" },
      { name: "Matcha Latte", description: "Medium 12 Oz - $4.50 | Large 16 Oz - $5.50" },
      { name: "Caffe Mocha", description: "Medium 12 Oz - $4.50 | Large 16 Oz - $5.50" },
      { name: "Hot Chocolate", description: "$3.50" },
      { name: "Cold Brew Coffee", description: "Medium 12 Oz - $4 | Large 16 Oz - $5" },
      { name: "Iced Caffe Latte", description: "Medium 12 Oz - $4 | Large 16 Oz - $5" },
      { name: "Iced Matcha Latte", description: "Medium 12 Oz - $4.50 | Large 16 Oz - $5.50" },
      { name: "Iced Tea", description: "$3" },
    ],
    Cocktails: [
      { name: "Margarita", description: "Patrón Silver Tequila, Cointreau, fresh lime juice, agave - $15" },
      { name: "Spicy Margarita", description: "Don Julio Blanco Tequila, 21 Seeds Cucumber Jalapeño, fresh lime juice, simple syrup - $15" },
      { name: "Naked & Famous", description: "Ilegal Joven Mezcal, Aperol, Yellow Chartreuse, fresh lemon juice, turbinado - $15" },
      { name: "The Persephine", description: "Grey Goose Vodka, pomegranate liqueur, Cointreau, cranberry, lemon - $15" },
      { name: "Aperol Spritz", description: "Aperol, Gambino Prosecco, Fever Tree club soda - $15" },
    ],
    "Lunch & Dinner": [
      { name: "Roast Turkey Sandwich", description: "Bacon, brie, dijon mayonnaise, lettuce on wheat - $13" },
      { name: "Southwest Tuna Salad Sandwich", description: "On wheat, bagel, or baguette - $13" },
      { name: "Ham & Swiss Cheese Sandwich", description: "Butter, dijonnaise, arugula on baguette - $12" },
      { name: "Truffled Chicken Sandwich", description: "On croissant - $14" },
      { name: "Vegetarian Pita Sandwich", description: "Sun-dried tomato, hummus, ricotta, roasted portobello - $11" },
      { name: "Caesar Salad", description: "Caesar dressing, parmesan reggiano, croutons - $12" },
      { name: "Salad of Arugula", description: "Strawberry, artichoke, toasted hazelnuts, creamy citrus dressing - $13" },
      { name: "Fennel Sausage Pizza", description: "Onion, ricotta, arugula - $14" },
    ],
  };

  return menu[category] || [];
};

export default MenuPage;
