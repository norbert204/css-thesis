import React from 'react'

export default function CodeBlock({ code }) {
    return (
        <pre><code><React.Fragment>{code}</React.Fragment></code></pre>
    )
}
