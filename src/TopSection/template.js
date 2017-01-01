import React, { Component } from 'react'
import Logo from './jc.png'
import TopMenu from '../TopMenu/template'
import BlueButton from '../BlueButton/template'

import media from '../MediaQueries'
import styled from 'styled-components'

const Inner = styled.div`
  max-width: 100%;
  min-height: 425px;
  background-color: rgba(0,0,0,.5);
`

const Container = styled.div`
  text-align: center;
  max-width: 100%;
  padding: 0 20px 40px;
  margin: 50px 0;
  ${media.gtxs`
    padding: 0 40px 40px;
  `}
  > p {
    color: #fff;
    font-weight: 600;
    max-width: 700px;
    margin: 20px auto 0;
    padding-bottom: 40px;
  }
`

const Header = styled.h1`
  color: #fff;
  font-size: 2.25em;
  ${media.gtxs`
    margin: 20px 0;
    font-size: 3em;
  `}
`

const JimmyImg = styled.img`
  max-height: 100px;
  border-radius: 100%;
  border: 2px solid;
`

class TopSection extends Component {

  render() {
    let img, button
    if (this.props.logo) img = <JimmyImg src={Logo} alt="Jimmy Cann" />
    if (this.props.button) button = <BlueButton text="GET STARTED" link="/contact"></BlueButton>
    const Wrapper = styled.div`
      max-width: 100%;
      min-height: 425px;
      background-image: url(${this.props.bgImg});
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    `
    return (
      <Wrapper>
        <Inner>
          <TopMenu></TopMenu>
          <Container>
            {img}
            <Header>{this.props.header}</Header>
            <p>{this.props.subhead}</p>
            {button}
          </Container>
        </Inner>
      </Wrapper>
    )
  }
}

export default TopSection
