import * as React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Media from "react-media"
import MenuMobile from "../components/MenuMobile"
import MenuDesktop from "../components/MenuDesktop"
import styled from 'styled-components'
import heroBg from '../images/hero-blog.svg'
import {Search} from '@styled-icons/evil/Search'
import {BlogCard} from '../components/BlogCard.jsx'


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title
  const posts = data.allMarkdownRemark.nodes
  return (
    <>
    <Media query="(max-width: 900px)" render={() => <MenuMobile />} />

    <Media query="(min-width: 900px)" render={() => <MenuDesktop />} />
    
    <Wrapper>
      <Hero>
        <Title>BLOG</Title>
        <SubTitle>leia os artigos do nosso blog</SubTitle>
        <Stroke/>
        <SearchDiv >
          <SearchIcon/>
          <Input type='text' />
          <Button>Pesquisar </Button>
        </SearchDiv>
      </Hero>
      <Posts>
        {posts.map((post) => {
          return  <BlogCard 
                    title={post.frontmatter.title}
                    imagem={post.frontmatter.imagem}
                    date={post.frontmatter.date}
                    author={post.frontmatter.author} 
                    avatar={post.frontmatter.avatar}
                    hashtags={post.frontmatter.hashtags} 
                    link={post.fields.slug}
                    description={post.frontmatter.description}
                  />
        })}
      </Posts>
    </Wrapper>



    </>


  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => {
  <>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    <Seo title="All posts" />
 </>
}



export const Wrapper = styled.div`
  background-color: #0A0C1A;
  min-height: 100vh;
  width: 100%;
`

export const Hero = styled.div`
    background-image: url(${heroBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0px -80px;
    width: 100%;
    height: 450px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    color: white;
    position: relative;
`
export const Title = styled.h2`
  margin: 0;
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 60px;
  padding-left: 50px;

`
export const SubTitle = styled.h3`
  margin: 0;
  font-family: 'Montserrat';
  font-weight: 200;
  font-size: 30px;
  padding-left: 50px;
  margin-top: 10px;

`
export const Stroke = styled.span`
    border: 2px solid #B29786;
    width: 300px;
    margin-top: 10px;
    margin-left: 50px;

    
    @media screen and (max-width: 760px){
        font-size: 12px;
        margin-right: 20px;
        border: 2px solid #634636;
    }
`

export const SearchDiv = styled.div`
    position: absolute;
    bottom: -10px;
    width: 100%;
    display: flex;
    justify-content: center;
  
`

export const SearchIcon = styled(Search)`
  max-width: 30px;
  left: 40px;
  color: black;
  opacity: 0.8;
  position: relative;
`

export const Input = styled.input`
  padding: 10px;
  max-width: 450px;
  width: 100%;
  padding-left: 50px;
  border-radius: 9px;
  border: none;
`

export const Button = styled.button`

`

export const Posts = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  gap: 20px;
`








export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          imagem
          description
          hashtags
          date (formatString: "DD/MM/YYYY")
          author
          avatar
        }
      }
    }
  }
`
