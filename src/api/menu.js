const Menu =  [
  { header: 'Apps' },
  {
    title: 'Dashboard',
    group: 'apps',
    icon: 'dashboard',
    name: 'Dashboard',
  },
  {
    title: 'Media',
    group: 'apps',
    name: 'Media',
    icon: 'perm_media',
  },
  // {
  //   title: 'Widgets',
  //   group: 'widgets',
  //   component: 'widgets',
  //   icon: 'widgets',
  //   items: [
  //     { name: 'dashboard', title: 'Dashboard', component: 'Dashboard' },
  //   ]
  // },  
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;
