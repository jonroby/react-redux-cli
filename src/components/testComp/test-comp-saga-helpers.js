let query = () => (`
  {
    employee {
      firstName
    }
  }
`);

let transform = data => {
  return {
    response: [],
    error: null,
  };
};

export { query, transform };
