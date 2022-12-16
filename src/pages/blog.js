import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Media from "react-media"
import MenuMobile from "../components/MenuMobile"
import MenuDesktop from "../components/MenuDesktop"
import styled from "styled-components"
import heroBg from "../images/hero-blog.svg"
import { Search } from "@styled-icons/evil/Search"
import { BlogCard } from "../components/BlogCard.jsx"
import { FooterSection } from "../components/FooterSection"

const BlogIndex = ({ data, location }) => {
  const queryData = data.allMarkdownRemark.nodes

  const [fullPostsList, setFullPostsList] = useState([])
  const [allTags, setAllTags] = useState([])
  const [allTitles, setAllTitles] = useState([])

  const emptyInput = ""
  const [searchState, setSearchState] = useState({
    postsFiltrados: [],
    query: emptyInput,
  })

  const inputFunction = e => {
    const query = e.target.value
    const postsFiltrados = fullPostsList.filter(post => {
      return (
        (post.props.author &&
          post.props.author.toLowerCase().includes(query.toLowerCase())) ||
        post.props.title.toLowerCase().includes(query.toLowerCase()) ||
        (post.props.hashtags &&
          post.props.hashtags
            .join(",")
            .toLowerCase()
            .includes(query.toLowerCase())) ||
        (post.props.description &&
          post.props.description.toLowerCase().includes(query.toLowerCase()))
      )
    })

    setSearchState({
      query,
      postsFiltrados,
    })
  }

  const getAllPostsInfo = posts => {
    const postList = posts.map(post => {
      return (
        <BlogCard
          title={post.frontmatter.title}
          link={post.fields.slug}
          imagem={post.frontmatter.imagem}
          date={post.frontmatter.date}
          description={post.frontmatter.description}
          hashtags={post.frontmatter.hashtags}
          author={post.frontmatter.author}
          avatar={post.frontmatter.avatar}
        />
      )
    })

    setFullPostsList(postList)
  }

  const getAllTags = data => {
    let hashtags = []
    for (let i = 0; i < data.length; i++) {
      hashtags.push(data[i].frontmatter.hashtags)
    }

    if (hashtags.length > 0) {
      let outroArray = []
      hashtags.map(array => array.map(tag => outroArray.push(tag)))
      console.log(outroArray)

      setAllTags(outroArray)
    }
  }

  const getAllTitles = data => {
    let titles = []
    for (let i = 0; i < data.length; i++) {
      titles.push(data[i].frontmatter.title)
    }

    setAllTitles(titles)
  }

  useEffect(() => {
    getAllPostsInfo(queryData)
    getAllTags(queryData)
    getAllTitles(queryData)
  }, [])

  useEffect(() => {
    console.log(allTitles)
    console.log(allTags)
    console.log(fullPostsList)
  }, [allTitles, allTags, fullPostsList])

  const { query, postsFiltrados } = searchState
  const temInput = postsFiltrados && query !== emptyInput
  const postagens = temInput ? postsFiltrados : fullPostsList

  return (
    <>
      <Media
        query="(max-width: 900px)"
        render={() => <MenuMobile location={location} />}
      />
      <Media
        query="(min-width: 900px)"
        render={() => <MenuDesktop location={location} />}
      />

      <Wrapper>
        <BreadCrumb>
          <a href="/">Home </a>
          <small> &gt; </small>
          <p> Blog </p>
        </BreadCrumb>
        <Hero>
          <Title>Conheça nosso blog</Title>
          <Stroke />
          <SubTitle>Aprenda mais sobre seus direitos</SubTitle>
          <SearchDiv>
            <SearchIcon />
            <Input
              placeholder="pesquisar"
              type="text"
              onChange={e => inputFunction(e)}
            />
          </SearchDiv>
        </Hero>
        <Posts>{postagens}</Posts>
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
  ;<>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    <Seo title="All posts" />
  </>
}

export const Wrapper = styled.div`
  background-color: #0a0c1a;
  min-height: 100vh;
  width: 100%;
`

export const BreadCrumb = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 100px;
  left: 50px;
  z-index: 999;
  gap: 10px;
  font-family: "Montserrat";

  a {
    color: #2f3245;
    font-size: 12px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    font-weight: 600;

    :hover {
      text-decoration: underline;
    }
  }

  small {
    font-size: 16px;
    color: #2f3245;
    font-weight: 600;
  }

  p {
    color: #2f3245;
    font-size: 12px;
    text-decoration: underline;
    font-weight: 600;
  }
`

export const Hero = styled.div`
  background-image: url(${heroBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0px -50px;
  background-color: #ffffff;
  width: 100%;
  height: 450px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  color: white;
  position: relative;

  @media screen and (max-width: 1400px) {
    background-position: 0px 0px;
  }
`
const Title = styled.h1`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 45px;
  line-height: auto;
  text-align: left;
  letter-spacing: -0.5px;
  margin: 0;
  color: #00041c;
  max-width: 70%;
  padding-left: 90px;

  @media screen and (max-width: 760px) {
    font-size: 40px;
    line-height: 50px;
    max-width: 90%;
    padding-left: 50px;
    padding-top: 100px;
  }
`

const SubTitle = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 200;
  font-size: 25px;
  line-height: 37px;
  letter-spacing: -0.218294px;
  color: #00041c;
  padding-left: 90px;
  margin-top: 20px;

  @media screen and (max-width: 760px) {
    font-size: 20px;
    padding-left: 50px;
  }
`

export const Stroke = styled.span`
  border: 2px solid #3d2b21;
  width: 300px;
  margin-top: 20px;
  margin-left: 95px;

  @media screen and (max-width: 760px) {
    font-size: 12px;
    background-color: #2f3245;
    margin-left: 45px;
  }
`

export const SearchDiv = styled.div`
  position: absolute;
  bottom: -10px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`

export const SearchIcon = styled(Search)`
  max-width: 30px;
  left: 40px;
  color: #a1a1a1;
  opacity: 0.8;
  position: relative;
`

export const Input = styled.input`
  padding: 10px;
  max-width: 450px;
  width: 100%;
  padding-left: 50px;
  border-radius: 9px;
  border: 3px solid #d9d9d9;
  outline: none;
  transition: 0.5s;
  background-color: #d9d9d9;
  font-family: "Montserrat";
  color: black;

  :focus {
    border: 3px solid rgba(64, 86, 103, 0.5);
  }

  ::placeholder {
    font-family: "Montserrat";
    color: #a1a1a1;
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
          date(formatString: "DD/MM/YYYY")
          author
          avatar
        }
      }
    }
  }
`
