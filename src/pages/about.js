import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function About() {
    return <Layout>
        <h1>This is the About page</h1>
        <div>
        <Link to="/">Home</Link> <Link to="/about">About</Link>
        </div>
        <p>Here is some more text for the page</p>
    </Layout>
}