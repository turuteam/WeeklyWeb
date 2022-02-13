import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getArticles = async () => {
  const query = gql`
    query MyQuery {
      articlesConnection {
        edges {
          node {
            createdAt
            slug
            title
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
        featuredImage {
          url
        }
        author {
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          html
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
            orderBy: createdAt_ASC
            last: 6
        ){
            title
            featuredImage{
                url
            }
            createdAt
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
        createdAt
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query, { slug, categories })
  return result.articles
}

export const getAdjacentArticles = async (createdAt, slug) => {
  const query = gql`
    query GetAdjacentArticles($createdAt: DateTime!, $slug: String!) {
      next: articles(
        first: 1
        orderBy: createdAt_ASC
        where: { slug_not: $slug, AND: { createdAt_gte: $createdAt } }
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
      previous: articles(
        first: 1
        orderBy: createdAt_DESC
        where: { slug_not: $slug, AND: { createdAt_lte: $createdAt } }
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug, createdAt })

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
            createdAt
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
        createdAt
      }
    }   
  `

  const result = await request(graphqlAPI, query)

  return result.articles
}
