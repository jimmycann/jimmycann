import React, { Component } from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

import TopSection from '../TopSection/template'
import DarkFooter from '../DarkFooter/template'

import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 100%;
  > a {
    margin: 10px;
  }
`

const Container = styled.div`
  max-width: 700px;
  padding: 10px 40px 40px;
  margin: 0 auto;
`

const LinkWrap = styled.div`
  position: absolute;
  top: 85px;
  left: 15px;
  > a {
    color: #fff;
  }
`

class BlogPage extends Component {
  render() {
    const postDate = this.props.params.year + '-' + this.props.params.month + '-' + this.props.params.day
    const postRoute = postDate + '-' + this.props.params.slug
    const blog = require('markdown-with-front-matter!../_posts/' + postRoute + '.md')
    const tsProps = {
      bgImg: blog.image || '/img/blog.png',
      header: blog.title,
      logo: false,
      button: false,
      subhead: blog.subhead
    }
    return (
      <Wrapper>
        <Helmet
            title={blog.title + ' - Jimmy Cann - Full Stack Developer'}
            meta={[
              {'name': 'description', 'content': blog.subhead},
              {'property': 'og:type', 'content': 'article'},
              {'property': 'og:title', 'content': blog.title + ' - Jimmy Cann - Full Stack Developer'},
              {'property': 'og:description', 'content': blog.subhead},
              {'property': 'og:image', 'content': blog.image || '/img/blog.png'},
              {'property': 'og:url', 'content': 'https://jimmycann.com/' + postRoute},
              {'property': 'twitter:card', 'content': 'article'},
              {'property': 'twitter:title', 'content': blog.title + ' | Jimmy Cann - Full Stack Developer'},
              {'property': 'twitter:description', 'content': blog.subhead},
              {'property': 'twitter:image', 'content': blog.image || '/img/blog.png'},
              {'property': 'twitter:url', 'content': 'https://jimmycann.com/' + postRoute}
            ]}
        />
        <TopSection bgImg={tsProps.bgImg}
                    header={tsProps.header}
                    logo={tsProps.logo}
                    button={tsProps.button}
                    subhead={tsProps.subhead}></TopSection>
        <LinkWrap>
          <Link to="/blog">&#171; Back to Blog</Link>
        </LinkWrap>
        <Container>
          <div className='markdown-body' dangerouslySetInnerHTML={{__html: blog.__content}}></div>
          <span>Originally posted on {new Date(postDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </Container>
        <DarkFooter></DarkFooter>
      </Wrapper>
    )
  }
}

export default BlogPage
