import React from "react"
import styled from 'styled-components'
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Media from "react-media"
import MenuMobile from "../components/MenuMobile"
import MenuDesktop from "../components/MenuDesktop"
import { BlogCard } from "../components/BlogCard"



export const WrapperPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0A0C1A;
  color: white;
  padding-bottom: 100px;
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

`
export const Title = styled.h1`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 60px;
  width: 80%;
  text-align: center;
  margin-bottom: 50px;
  
`
export const Date = styled.small`
color: #A3A3A3;
`

export const PostImg = styled.img`

`
export const PostInfo = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  padding-bottom: 40px;
`
export const Info = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`
export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

`
export const Avatar = styled.img`
    max-height: 80px;

`
export const Name = styled.p`
    margin: 0;
    font-family: 'Montserrat';
    font-size: 15px;

    @media screen and (max-width: 500px) {
        font-size: 12px;
    }
`
export const Bio = styled.p`
   font-family: 'Montserrat';
    color: #A3A3A3;
    font-size: 12px;
    margin: 0;
`
export const Tags = styled.p`
`
export const PostBody = styled.p`
    padding-top: 50px;
    width: 55%;
    margin: 0 auto;
    font-size: 20px;
    line-height: 170%;
    font-weight: 300;
    font-family: 'Montserrat';
`

export const OtherPosts = styled.div`
    padding-top: 100px;
    display: flex;
    width: 100%;
    gap: 100px;
    justify-content: center;
`

export const Line = styled.span`
  margin-top: 80px;
  width: 400px;
  border: 2px solid white;
`

export const OldPost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  

`

export const NextPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;



`


const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  
  return (
   <>
    <Media query="(max-width: 900px)" render={() => <MenuMobile />} />
    <Media query="(min-width: 900px)" render={() => <MenuDesktop />} />

    <WrapperPost>
      <Heading>
        <Title>{post.frontmatter.title}</Title>
        <Date>{post.frontmatter.date}</Date>
      </Heading>

      <PostInfo>
        <Author>
          <Avatar src={post.frontmatter.avatar} alt=''/>
          <Info>
            <Name>{post.frontmatter.author}</Name>
            <Bio>Advogado</Bio> 
          </Info>
        </Author>
        <Tags>
          {post.frontmatter.hashtags}
        </Tags>
      </PostInfo>

      <PostImg src={post.frontmatter.imagem} alt=''/>
      <PostBody dangerouslySetInnerHTML={{ __html: post.html }} />

      <Line/>
      <OtherPosts>
        
        {next && 
        <OldPost>
          <a href={next.fields.slug} alt=''>Artigo anterior</a>
          <BlogCard
          title={next.frontmatter.title}
          link={next.fields.slug}
          imagem={next.frontmatter.imagem}
          data={next.frontmatter.date}
          description={next.frontmatter.description}
          hashtags={next.frontmatter.hashtags}
          author={next.frontmatter.author}
          avatar={next.frontmatter.avatar}
          />
        </OldPost>  
        }

        {previous && 
          <NextPost>
            <a href={previous.fields.slug} alt=''>Próximo artigo</a>
            <BlogCard
            title={previous.frontmatter.title}
            link={previous.fields.slug}
            imagem={previous.frontmatter.imagem}
            data={previous.frontmatter.date}
            description={previous.frontmatter.description}
            hashtags={previous.frontmatter.hashtags}
            author={previous.frontmatter.author}
            avatar={previous.frontmatter.avatar}
            />
          </NextPost>
        } 

      </OtherPosts>
    </WrapperPost>

   </>

  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
query BlogPost(
  $id: String!
  $previousPostId: String
  $nextPostId: String
) {
  site {
    siteMetadata {
      title
    }
  }

  markdownRemark(id: { eq: $id }) { 
    id
    excerpt(pruneLength: 160)
    html
    frontmatter {
      title
      date(formatString: "DD/MM/YYYY")
      description
      hashtags
      imagem
      author
      avatar
    }
  }

    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        imagem
        hashtags
        author
        avatar
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        imagem
        hashtags
        author
        avatar

      }
    }
  }
`
