import React, { Component } from 'react';
import mainImg from './benefits-cta.jpg'
import BlueButton from '../BlueButton/template'

import media from '../MediaQueries';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: left;
  display: flex;
  flex-wrap: wrap-reverse;
  max-width: 100%;
  padding: 40px 0;
  ${media.gtxs`
    display: flex;
    flex-wrap: nowrap;
  `}
`;

const ImgRight = styled.div`
  background-image: url(${mainImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 450px;
  max-width: 100%;
  ${media.gtxs`
    width: 40%;
  `}
  ${media.gtsm`
    width: 50%;
  `}
`;

const Info = styled.div`
  max-width: 100%;
  max-width: 600px;
  margin-left: auto;
  ${media.gtxs`
    width: 60%;
  `}
  ${media.gtsm`
    width: 50%;
  `}
  > div {
    padding: 20px 20px 0;
    ${media.gtxs`
      padding: 0 40px 40px;
    `}
  }
`;

const Header = styled.h2`
  text-align: left;
  display: flex;
  margin-bottom: 0;
  font-weight: 500;
`;

class BenefitsCta extends Component {
  render() {
    return (
      <Wrapper>
        <Info>
          <div>
            <Header>Reliable, scalable, simple</Header>
            <p>
              Our API has been designed specifically to provide seamless integration into any POS, whether cloud or legacy. Built on the cloud, our SSL-secure API provides two-way communication between the POS and any app integrated with Jimmy Cann.
            </p>
            <p>
              Our automated on-boarding engine will allow you to quickly and easily certify your solution without talking to anyone. And with a team of developers dedicated to making integration as simple as possible, Jimmy Cann is built to take the hassle out of connecting hospitality to the web.
            </p>
            <BlueButton text="GET STARTED TODAY" link="/integrate"></BlueButton>
          </div>
        </Info>
        <ImgRight></ImgRight>
      </Wrapper>
    );
  }
}

export default BenefitsCta;
