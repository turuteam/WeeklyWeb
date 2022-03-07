import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getArticles = async () => {
  const query = gql`
    query MyQuery {
      articlesConnection(orderBy: updatedAt_DESC) {
        edges {
          node {
            updatedAt
            slug
            title
            isInterview
            categories {
              name
              slug
            }
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            featuredImage {
              url
            }
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)
  return result.articlesConnection.edges
}

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `

  const result = await request(graphqlAPI, query)
  return result.categories
}

export const getArticleDetails = async (slug) => {
  const query = gql`
    query GetArticleDetails($slug: String!) {
      article(where: { slug: $slug }) {
        title
        isInterview
        featuredImage {
          url
        }
        seo {
          metaTitle
          metaDescription
          ogImage {
            url
          }
        }
        author {
          name
          bio
          photo {
            url
          }
        }
        updatedAt
        slug
        content {
          raw
          json
          references {
            __typename
            ... on TwitterEmbed {
              id
              embedId
            }
          }
        }
        categories {
          name
          slug
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug })
  return result.article
}

export const getRecentArticles = async () => {
  const query = gql`
    query GetArticleDetails(){
        articles(
            orderBy: updatedAt_ASC
            last: 6
        ){
            title
            featuredImage{
                url
            }
            updatedAt
            slug
        }
    }
    `

  const result = await request(graphqlAPI, query)
  return result.articles
}

export const getSimilarArticles = async (categories, slug) => {
  const query = gql`
    query GetArticlesDetails($slug: String!, $categories: [String!]) {
      articles(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        updatedAt
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query, { slug, categories })
  return result.articles
}

export const getAdjacentArticles = async (updatedAt, slug) => {
  const query = gql`
    query GetAdjacentArticles($updatedAt: DateTime!, $slug: String!) {
      next: articles(
        first: 1
        orderBy: updatedAt_ASC
        where: { slug_not: $slug, AND: { updatedAt_gte: $updatedAt } }
      ) {
        title
        featuredImage {
          url
        }
        updatedAt
        slug
      }
      previous: articles(
        first: 1
        orderBy: updatedAt_DESC
        where: { slug_not: $slug, AND: { updatedAt_lte: $updatedAt } }
      ) {
        title
        featuredImage {
          url
        }
        updatedAt
        slug
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug, updatedAt })

  return { next: result.next[0], previous: result.previous[0] }
}

export const getCategoryArticle = async (slug) => {
  const query = gql`
    query GetCategoryArticle($slug: String!) {
      articlesConnection(where: { categories_some: { slug: $slug } }) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            updatedAt
            slug
            title
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug })

  return result.articlesConnection.edges
}

export const getFeaturedArticles = async () => {
  const query = gql`
    query GetCategoryArticle() {
      articles(where: {featured: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        updatedAt
      }
    }   
  `

  const result = await request(graphqlAPI, query)

  return result.articles
}
