export default (name: string) => {
  return `${process.env.SERVER_URL}/public/${name}`;
};
