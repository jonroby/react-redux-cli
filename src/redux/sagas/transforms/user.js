let query = () => (`
  {
    employee {
      firstName
    }
  }
`);

let transform = data => {
  return {
    data,
    errors: null,
  };
};

export { query, transform };
