import React from 'react';
import { Button,Container,Row } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Router from "./Router"
function App() {
  return (
    <Container fluid>
       <Router></Router>
    </Container>
  );
}

export default App;
