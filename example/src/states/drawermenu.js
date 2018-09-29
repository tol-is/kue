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
  hotspots: [
    {
      title: 'hey',
      message: 'side menu info',
      left: '15%',
      top: '40%',
      to: 'browse',
    },
  ],
  next: 'create',
};
