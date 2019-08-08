import React from 'react';
import { graphql, Link } from 'gatsby';

const Template = (props) => {
  console.log(props)
  const title = props.data.markdownRemark.frontmatter.title
  const html = props.data.markdownRemark.html
  const { prev, next } = props.pageContext
  return (
    <div>
      <h1 style={{fontFamily: 'avenir'}}>{title}</h1>
      <div className='blogpost'
      dangerouslySetInnerHTML={{__html: html}}
      />
      <div style={{marginBottom: '1rem', fontFamily: 'avenir'}}>
        {next &&
          <Link to={next}>
            Next: {`${next}`}
          </Link>
        }
      </div>
      <div style={{fontFamily: 'avenir'}}>
        {prev &&
          <Link to={prev}>
            Prev: {`${prev}`}
          </Link>
        }
      </div>
    </div>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
      html
      frontmatter {
        title
        tags
      }
    }
  }
`

export default Template
