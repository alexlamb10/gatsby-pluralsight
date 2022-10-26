import React from "react"
import { Link } from "gatsby"

export default function Home() {
    return <div>
        <h1>This is the index page</h1>
        <div>
            <Link to="/">Home</Link> <Link to="/about">About</Link>
        </div>
        <p>Here is some more text for the page</p>
    </div>
}