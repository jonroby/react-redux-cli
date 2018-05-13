const query = query => () => {
  return fetch('http://localhost:9002/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  })
  .then(function(response) {
    return response.json();
  })
}

const mutation = () => {};

export default { query, mutation };
