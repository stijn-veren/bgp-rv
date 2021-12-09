const githubQuery = {
  query: `
    {
      viewer {
        name
      }
      search(
        query: "user:stijn-veren sort:updated-desc",
        type: REPOSITORY,
        first: 20
      ) {
        nodes {
          ... on Repository {
            name
            description
            id
            url
            viewerSubscription
          }
        }
      }
    }
  `,
}

export default githubQuery
