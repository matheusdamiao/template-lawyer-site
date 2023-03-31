import { graphql } from "gatsby"
import React from "react"
import MenuMobile from "../components/MenuMobile"
import MenuDesktop from "../components/MenuDesktop"
import Media from "react-media"

const Agenda = ({ data }) => {
  const post = data.markdownRemark

  return (
    <>
      <Media query="(max-width: 900px)" render={() => <MenuMobile />} />
      <Media query="(min-width: 900px)" render={() => <MenuDesktop />} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h3>{post.frontmatter.author}</h3>
        <p>{post.frontmatter.description}/</p>
        <small>{post.id}</small>
      </div>
    </>
  )
}

export default Agenda

export const pageQuery = graphql`
  query AgendaQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        author
        description
        avatar
        imagem
        date(formatString: "DD/MM/YYYY")
      }
    }
  }
`
