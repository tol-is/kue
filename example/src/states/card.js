export default {
  id: 'card',
  pop: 1,
  views: [
    {
      component: 'card',
      transition: 'fadeUp',
      position: {
        zIndex: 50,
        backgroundColor: 'red',
        maxWidth: '400px',
      },
    },
  ],
  next: 'journey',
};
