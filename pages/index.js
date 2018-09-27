import React from 'react'
import fetch from 'isomorphic-fetch'

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }

  render() {
    return (
      <div>{this.props.stars}</div>
    )
  }
}

// const Page = ({ stars }) =>
//   <div>
//     Next stars: {stars}
//   </div>

// Page.getInitialProps = async ({ req }) => {
//   const res = await fetch('https://api.github.com/repos/zeit/next.js')
//   const json = await res.json()
//   return { stars: json.stargazers_count }
// }

// export default Page