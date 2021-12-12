import { GraphQLClient, gql }  from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const token = process.env.AUTH_TOKEN;


export default async function comments(req, res) {
  
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: { connect: {slug: $slug } }}) {id}
    }
  `
  try {
    
    const result = await graphQLClient.request(query, req.body)
  
    return res.status(200).send(result);
  } catch (error) {
    console.log(error)
    return res.status(500).send(error)
  }
}
