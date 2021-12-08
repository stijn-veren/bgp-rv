const github = {
  baseURL: 'https://api.github.com/graphql',
  username: 'stijn-veren',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'bearer ghb_enMbLHTaTFh4HDSsQxLaoSGLguhzYvtn5DdD',
    // where 'ghb_...' - is a Personal access token from
    // Github Settings > Developer settings > Personal access tokens
  },
}

export default github
