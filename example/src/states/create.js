export default {
  id: 'create',
  pop: 1,
  views: [
    {
      component: 'create',
      transition: 'fadeUp',
      position: {
        zIndex: 50,
        backgroundColor: 'red',
        maxWidth: '400px',
      },
    },
  ],
  next: 'category',
};
