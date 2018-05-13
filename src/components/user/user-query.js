let query = () => (`
  {
    employee {
      firstName
    }
  }
`);

let transform = t  => t;

export { query, transform };


