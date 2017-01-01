import React, { Component } from 'react'
import leftArrow from './left-arrow.svg'

import media from '../MediaQueries';
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 5px;
  > a {
    display: flex;
    text-decoration: none;
    max-width: 100px;
    margin: 0 auto;
    ${media.gtxs`
      margin: 0;
    `}
  }
`

const Icon = styled.img`
`

const Text = styled.span`
  color: #2196f3;
  padding-top: 2px;
  max-width: 100%;
  text-align: left;
`

class AbsLink extends Component {
  render() {
    return (
      <Wrapper>
        <a href={this.props.link} target="_blank">
          <Icon src={leftArrow} alt="left-arrow" />
          <Text>
            {this.props.text}
          </Text>
        </a>
      </Wrapper>
    )
  }
}

export default AbsLink
