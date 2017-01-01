import React, { Component } from 'react'
import { Link } from 'react-router'

import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  position: relative;
  background-color: #2196f3;
  color: #fff;
  cursor: pointer;
  min-height: 50px;
  min-width: 150px;
  line-height: 50px;
  vertical-align: middle;
  align-items: center;
  text-align: center;
  border-radius: 3px;
  box-sizing: border-box;
  user-select: none;
  border: 2px solid transparent;
  padding: 0 20px;
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  font-style: inherit;
  font-variant: inherit;
  font-family: inherit;
  text-decoration: none;
  overflow: hidden;
  transition: box-shadow .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1);
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: transparent;
    border-color: #2196f3;
    color: #2196f3;
  }
  > a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }
`

class BlueButton extends Component {
  render() {
    return (
      <Link to={this.props.link}>
        <Button>
          {this.props.text}
        </Button>
      </Link>
    );
  }
}

export default BlueButton;
