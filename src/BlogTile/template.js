import React, { Component } from 'react'
import { Link } from 'react-router'

import media from '../MediaQueries'
import styled from 'styled-components'

const TopWrap = styled.div`
  background-color: rgba(0,0,0,.666);
  color: #fff;
  padding: 10px 20px;
`

const Header = styled.h2`
  text-align: left;
  margin-bottom: 0;
  font-weight: 500;
  line-height: normal;
`

const Author = styled.h5`
  font-weight: 400;
`

class BlogTile extends Component {
  render() {
    console.log(this.props)
    const image = this.props.blog.image || '/img/blog.png'
    const Wrapper = styled.div`
      background-image: url(${image});
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      height: 350px;
      margin: 5px 0 10px;
      ${media.sm`
        margin: 10px 0 20px;
      `}
      ${media.gtsm`
        margin: 20px 0 40px;
      `}
    `
    return (
      <Link to={'/blog/' + this.props.path}>
        <Wrapper>
          <TopWrap>
            <Header>
              {this.props.blog.title}
            </Header>
            <Author>{new Date(this.props.blog.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</Author>
          </TopWrap>
        </Wrapper>
      </Link>
    )
  }
}

export default BlogTile
