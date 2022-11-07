import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"

export default function Home({data}) {
    return <Layout>
        <Title text={data.site.siteMetadata.title} />
        <div>
            <Link to="/">Home</Link> <Link to="/about">About</Link>
        </div>
        <p>Here is some more text for the page</p>
    </Layout>
}

export const query = graphql `query {
    site{
        siteMetadata{
            title
        }
    }
}`