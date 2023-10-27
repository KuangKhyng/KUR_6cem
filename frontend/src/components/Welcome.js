import React, { Component } from "react";
import { Container, Row, Jumbotron, Col } from "react-bootstrap";

export default class Welcome extends Component {
  render() {
    return (
      <Jumbotron className="bg-dark text-white">
        <div className="text-center">
        <img src="https://english4u.com.vn/Uploads/images/book.jpg" width={200} height={200} alt="Mô tả hình ảnh" />
        </div>
    
        <h1>Welcome to the book management system "Bookstore"</h1>
        <blockquote className="blockquote mb-O">
          <p>“ Let us tenderly and kindly cherish, therefore, the means of knowledge. Let us dare to read, think, speak, and write”</p>
          <footer className="blockquote-footer"> John Adams</footer>
        </blockquote>
      </Jumbotron>
    );
  }
}
