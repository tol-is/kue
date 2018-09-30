export default pathname => pathname.split('\\')
  .pop()
  .split('/')
  .pop()
  .split('.')[0];
