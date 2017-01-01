import React, { Component } from 'react'
import cloud from './cloud.svg'
import server from './server.svg'
import web from './web.svg'

import media from '../MediaQueries'
import styled from 'styled-components'

const Wrapper = styled.div`
  ${media.gtxs`
    border-bottom: 1px solid #eaeaea;
  `}
`

const Container = styled.div`
  max-width: 1280px;
  padding: 40px 40px 0;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  ${media.gtxs`
    padding: 40px;
    flex-wrap: nowrap;
  `}
`

const Point = styled.div`
  width: 100%;
  text-align: center;
  padding: 0 0 20px;
  ${media.gtxs`
    padding: 0 40px 10px;
  `}
  > h4 {
    margin: 10px 0;
  }
  > p {
    margin-top: 0;
  }
  > div {
    padding-top: 0;
    padding-bottom: 20px;
    > a {
      max-width: 100px;
      margin: 0 auto;
    }
  }
`

class ThreePointCta extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Point>
          <img src={web} alt="web" />
            <h4>Frontend</h4>
            <p>Extensive use of AngularJS, but shifting more focus to React. Sass, HTML etc.</p>
          </Point>
          <Point>
            <img src={server} alt="server" />
            <h4>Backend</h4>
            <p>Continuing use of JS across the stack, my language of choice is NodeJS. I have also spent time in PHP land. For Database; PostgreSQL, MySQL, MongoDB and RethinkDB.</p>
          </Point>
          <Point>
            <img src={cloud} alt="cloud" />
            <h4>DevOps</h4>
            <p>Experience working with the major cloud provders including AWS, GCP and Digital Ocean.</p>
          </Point>
        </Container>
      </Wrapper>
    )
  }
}

export default ThreePointCta
