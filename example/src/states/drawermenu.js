export default {
  id: 'drawermenu',
  reset: false,
  views: [
    {
      component: 'drawermenu',
      transition: 'drawerLeft',
      position: {
        width: '100%',
        maxWidth: '200px',
        left: '0',
      },
    },
  ],
  next: 'create',
};
