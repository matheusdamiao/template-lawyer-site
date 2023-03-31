import React from "react"
import styled from "styled-components"
import Heading from "./Heading"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper"
import { createGlobalStyle } from "styled-components"
import { useStaticQuery } from "gatsby"
import { graphql } from "gatsby"
import { BlogCard } from "./BlogCard"

export const Wrapper = styled.div`
  background-color: #0a0c1a;
  padding-top: 100px;
  padding-bottom: 150px;
  height: 100%;
  width: 100%;
`

export const GlobalStyle = createGlobalStyle`
 body {




.swiper {
  width: 75%;
  display: flex;
  justify-content: center;
}

.swiper-wrapper {
height: 600px;
display: flex;
width: 100%;

@media screen and (max-width: 800px){
    padding-left: 50px;
    padding-right: 50px;
    gap: 0px;
    
}
}   

.swiper-slide{
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    
}

.swiper-pagination{
    width: 100px;
    
}

.swiper-pagination-bullet {
    background-color: white;
    width: 20px;
    height: 20px;
}


}
`

export const Slider = styled.div`
  width: 100%;
  height: 100%;
`

export const SwiperSlideStyled = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Div = styled.div`
  padding-left: 200px;
  margin-bottom: 80px;

  @media screen and (max-width: 800px) {
    padding-left: 40px;
  }
`

export const BlogSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "blog" } } }
        limit: 3
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        nodes {
          id
          frontmatter {
            author
            avatar
            description
            title
            hashtags
            date(formatString: "dddd DD MMMM YYYY", locale: "pt-BR")
            imagem
          }
          fields {
            slug
          }
        }
      }
    }
  `)

  const blogPosts = data.allMarkdownRemark.nodes
  const [post1, post2, post3] = blogPosts

  const link1 = post1.fields.slug
  const title1 = post1.frontmatter.title
  const imagem1 = post1.frontmatter.imagem
  const description1 = post1.frontmatter.description
  const hashtags1 = post1.frontmatter.hashtags
  const author1 = post1.frontmatter.author
  const avatar1 = post1.frontmatter.avatar
  const date1 = post1.frontmatter.date

  return (
    <Wrapper>
      <GlobalStyle />
      <Div>
        <Heading
          isWhite={true}
          isCenter={false}
          h1="Leia sobre seus direitos no nosso blog"
          h3="artigos"
          h2="Somos referência em advocacia tributária e trabalhista"
        />
      </Div>

      <Slider>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          // autoplay={{ delay: 2000, disableOnInteraction: false }}
          // loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            1000: { slidesPerView: 2.5 },
            900: { slidesPerView: 2 },
            500: { slidesPerView: 1 },
          }}
        >
          <SwiperSlideStyled>
            <BlogCard
              title={title1}
              imagem={imagem1}
              date={date1}
              author={author1}
              avatar={avatar1}
              hashtags={hashtags1}
              link={link1}
              description={description1}
            />
          </SwiperSlideStyled>

          <SwiperSlideStyled>
            <BlogCard
              title={post2.frontmatter.title}
              imagem={post2.frontmatter.imagem}
              date={post2.frontmatter.date}
              author={post2.frontmatter.author}
              avatar={post2.frontmatter.avatar}
              hashtags={post2.frontmatter.hashtags}
              link={post2.fields.slug}
              description={post2.frontmatter.description}
            />
          </SwiperSlideStyled>

          <SwiperSlideStyled>
            <BlogCard
              title={post3.frontmatter.title}
              imagem={post3.frontmatter.imagem}
              date={post3.frontmatter.date}
              author={post3.frontmatter.author}
              avatar={post3.frontmatter.avatar}
              hashtags={post3.frontmatter.hashtags}
              link={post3.fields.slug}
              description={post3.frontmatter.description}
            />
          </SwiperSlideStyled>
        </Swiper>
      </Slider>
    </Wrapper>
  )
}
