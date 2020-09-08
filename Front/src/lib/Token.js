const Token = () => {
  let Token = 'empty';

  const session = sessionStorage.getItem('token');

  if (session !== null) {
    Token = 'session';
  }

  return Token;
};

export default Token;
