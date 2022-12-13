import React, { useState } from "react"
import styled from 'styled-components'
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Media from "react-media"
import MenuMobile from "../components/MenuMobile"
import MenuDesktop from "../components/MenuDesktop"
import { BlogCard } from "../components/BlogCard"
import { FooterSection } from "../components/FooterSection"
import {LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle'
import {FacebookCircle} from '@styled-icons/boxicons-logos/FacebookCircle'
import {TwitterWithCircle} from '@styled-icons/entypo-social/TwitterWithCircle'
import { AddLink } from '@styled-icons/material/AddLink'


 const WrapperPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0A0C1A;
  color: white;
  padding-bottom: 100px;


  a{
    text-decoration: none;
   
  }
  
`

 const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

`
 const Title = styled.h1`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 60px;
  width: 80%;
  text-align: center;
  margin-bottom: 50px;
  
`
 const Date = styled.small`
color: #A3A3A3;
`

const PostImg = styled.img`

`
 const PostInfo = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  padding-bottom: 40px;
`
 const Info = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`
const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

`
 const Avatar = styled.img`
    max-height: 80px;

`
 const Name = styled.p`
    margin: 0;
    font-family: 'Montserrat';
    font-size: 15px;

    @media screen and (max-width: 500px) {
        font-size: 12px;
    }
`
 const Bio = styled.p`
   font-family: 'Montserrat';
    color: #A3A3A3;
    font-size: 12px;
    margin: 0;
`
const Tags = styled.div`
  display: flex;
  gap: 15px;
  color: black;
  align-items: center;
`

 const Tag = styled.p`
   font-family: 'Montserrat';
  background-color: rgb(25, 40, 133);
  padding: 4px 15px;
  color: white;
  font-size: 12px;
  border-radius: 9px;
`
 const PostBody = styled.p`
    padding-top: 50px;
    width: 55%;
    margin: 0 auto;
    font-size: 20px;
    line-height: 170%;
    font-weight: 300;
    font-family: 'Montserrat';
`

 const OtherPosts = styled.div`
    padding-top: 100px;
    display: flex;
    width: 100%;
    gap: 100px;
    justify-content: center;
`

const Line = styled.span`
  margin-top: 80px;
  width: 400px;
  border: 2px solid white;
`

 const OldPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  a {
    color: white;
  }
`

 const NextPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;

  a {
    color: white;
  }
`

 const SharePost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`
const ShareTitle = styled.h3`
font-family: 'Montserrat';
  font-size: 14px;
  font-weight: 400;
`

 const Links = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    a{
      color: rgb(26, 26, 255);
    }


    ul {
      width: 100%;
      margin: 0;
      padding: 0;
      display: flex;
    }

    
`

 const LinkedinIcon = styled(LinkedinWithCircle)`
 width: 50px;
 transition: 0.2s;

:hover {
  color: white;
}
`

 const FacebookIcon = styled(FacebookCircle)`
  width: 55px;
  transition: 0.2s;

:hover {
  color: white;
}
`
 const TwitterIcon = styled(TwitterWithCircle)`
  width: 50px;
  transition: 0.2s;

:hover {
  color: white;
}
`

 const LinkIcon = styled(AddLink)`
  width: 50px;
  color: rgb(26, 26, 255);
  
  transition: 0.2s;

  :hover {
    color: white;
  }

`

 const CopyLink = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
    font-family: 'Montserrat';
  font-size: 10px;
  cursor: pointer;
  color: rgb(26, 26, 255);
  transition: 0.2s;
  max-height: 55px;

  :hover {
    color: white;
  }
`




const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {

  const [copyStatus, setCopyStatus] = useState('Copiar link')


  const copyLink = () => {
      if(copyStatus === 'Copiado!') {
        setCopyStatus('Copiar link')
        navigator.clipboard.writeText('');
        return
      }
        navigator.clipboard.writeText(`${site.siteMetadata.siteUrl + post.fields.slug}`)
        setCopyStatus('Copiado!')

  }
  
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
          {post.frontmatter.hashtags?.map((tag)=>{
            return <Tag>{tag}</Tag>
          })}
        </Tags>
      </PostInfo>

      <PostImg src={post.frontmatter.imagem} alt=''/>
      <PostBody dangerouslySetInnerHTML={{ __html: post.html }} />

      <SharePost>
           <ShareTitle> Compartilhe este artigo</ShareTitle>
           <Links>
              <ul>
                <a rel='noopener noreferrer' href={'https://www.linkedin.com/shareArticle?url=' + site.siteMetadata.siteUrl + post.fields.slug} target='_blank' ><LinkedinIcon /></a>
              </ul>
              <ul>
                <a rel='noopener noreferrer' href={'https://www.facebook.com/sharer/sharer.php?u=' + site.siteMetadata.siteUrl + post.fields.slug} target='_blank' ><FacebookIcon /></a>
              </ul>
              <ul>
                <a rel='noopener noreferrer' href={'https://www.twitter.com/share?url=' + site.siteMetadata.siteUrl + post.fields.slug} target='_blank' ><TwitterIcon /></a>
              </ul>
              <ul>
                <CopyLink onClick={()=> copyLink()}> <LinkIcon /> {copyStatus}  </CopyLink>
              </ul>
              
          </Links>
      </SharePost>
      <Line/>
      <OtherPosts>
        



        {previous && 
               <OldPost>
               <a href={previous?.fields.slug} alt=''>Artigo anterior </a>
              <BlogCard
              title={previous?.frontmatter.title}
              link={previous?.fields.slug}
              imagem={previous?.frontmatter.imagem}
              data={previous?.frontmatter.date}
              description={previous?.frontmatter.description}
              hashtags={previous?.frontmatter.hashtags}
              author={previous?.frontmatter.author}
              avatar={previous?.frontmatter.avatar}
              />
             </OldPost>  
         } 

         
        {next &&

              <NextPost>

                <a href={next.fields.slug} alt=''> Próximo artigo </a>
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
              
              </NextPost>
              
        
        } 

      </OtherPosts>
    </WrapperPost>
    <FooterSection />
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
      siteUrl
    }
  }

  markdownRemark(id: { eq: $id }) { 
    id
    excerpt(pruneLength: 160)
    html
    fields {
      slug
    }
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
