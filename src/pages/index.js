import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"
import Article from "../components/article"

export default function Home({data}) {
    return <Layout>
        <Title text='Welcome' />
        <div>
            <Link to="/">Home</Link> <Link to="/about">About</Link>
        </div>
        <p>Here is some more text for the page</p>

        <div>
            {data.allMarkdownRemark.edges.map(({node}) => (
                <Article 
                    to='/'
                    keywords={node.frontmatter.keywords}
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                    excerpt={node.excerpt}
                />
            ))}
        </div>
    </Layout>
}

export const query = graphql ` {
    allMarkdownRemark(sort:{fields: [frontmatter___date],order:DESC}){
      totalCount
      edges{
        node{
          id
          frontmatter{
            title
            image
            date(formatString: "MMMM YYYY")
            keywords
          }
          excerpt
        }
      }
    }
  }`
  