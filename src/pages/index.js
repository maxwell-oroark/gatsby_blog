import React from "react"
import Header from '../components/Header';
import logo from './react_icon.png';
import { graphql, Link } from 'gatsby'

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div>
      <Header />
      <img 
        viewBox="0 0 100 100"
        src={logo} 
      />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'avenir'
      }}>
      {edges.map(edge => {
        const {frontmatter} = edge.node
        return (
          <div
            key={frontmatter.path}
            style={{marginBottom: '1rem'}}
          >
            <Link to={frontmatter.path}>
              {frontmatter.title}
            </Link>
          </div>
        )
      })}
      <Link to={`/tags`} >
        Browse all tags
      </Link>
    </div>
  </div>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
  }
}
`

export default Layout
