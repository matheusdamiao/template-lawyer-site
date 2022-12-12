import React, { useEffect, useState } from "react"
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
import { FooterSection } from "../components/FooterSection"


const BlogIndex = ({ data }) => {

  const queryData = data.allMarkdownRemark.nodes

  const tags = data.allMarkdownRemark.nodes.frontmatter?.hashtags

  const [fullPostsList, setFullPostsList] = useState([])
  const [allTags, setAllTags] = useState([])

  const emptyInput = '';
  const [searchState, setSearchState] = useState({
    postsFiltrados: [],
    query: emptyInput,
  })

   const inputFunction = (e) => {
    const query = e.target.value;
    const postsFiltrados = fullPostsList.filter((post)=>{
      return (
        (post.props.author && post.props.author.toLowerCase().includes(query.toLowerCase()) )||
        post.props.title.toLowerCase().includes(query.toLowerCase()) || 
        (post.props.hashtags && post.props.hashtags.join(',').toLowerCase().includes(query.toLowerCase())) ||
        (post.props.description && post.props.description.toLowerCase().includes(query.toLowerCase()))
      )
    })

  setSearchState({
        query,
        postsFiltrados
      })
   } 


   const getAllPostsInfo = (posts) => {

    const postList = posts.map((post)=>{
      return  <BlogCard
                  title={post.frontmatter.title}
                  link={post.fields.slug}
                  imagem={post.frontmatter.imagem}
                  data={post.frontmatter.date}
                  description={post.frontmatter.description}
                  hashtags={post.frontmatter.hashtags}
                  author={post.frontmatter.author}
                  avatar={post.frontmatter.avatar}
      />
    })

    setFullPostsList(postList)
  }

  const getAllTags = (data) => {

    const tags = Array.from(new Set([data]));
    setAllTags(tags)
  
  } 


  useEffect(()=>{

    getAllPostsInfo(queryData)
    getAllTags(tags)
  
  },[])


  useEffect(()=>{

    console.log(allTags)
    console.log(fullPostsList)

  },[allTags, fullPostsList])



  const { query, postsFiltrados } = searchState;
  const temInput = postsFiltrados && query !== emptyInput;
  const postagens = temInput ? postsFiltrados : fullPostsList



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
          <Input placeholder='pesquisar' type='text' onChange={e=> inputFunction(e)}/>
          {/* <Button>Pesquisar </Button> */}
        </SearchDiv>
      </Hero>
      <Posts>
         {postagens}
      </Posts>
      <FooterSection />
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
        width: 100%;
        max-width: 100px;
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
  color: #A1A1A1;
  opacity: 0.8;
  position: relative;
`

export const Input = styled.input`
  padding: 10px;
  max-width: 450px;
  width: 100%;
  padding-left: 50px;
  border-radius: 9px;
  border: 3px solid #D9D9D9;
  outline: none;
  transition: 0.5s;
  background-color: #D9D9D9;
  font-family: 'Montserrat';
  color: black;

  :focus {
    border: 3px solid rgba(64,86,103,0.5);
  }

  ::placeholder{
  font-family: 'Montserrat';
  color: #A1A1A1;
  }
`

export const Button = styled.button`
  margin-left: 20px;
  padding: 5px 20px;
  border-radius: 9px;
  border: none;
`

export const Posts = styled.div`
  /* width: 100%; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 100px;

  gap: 50px;

  @media screen and (max-width: 500px) {
    padding-left: 20px;
    padding-right: 20px;
  }
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
