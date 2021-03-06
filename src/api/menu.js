const Menu =  [
  {
    title: 'Beranda',
    group: 'apps',
    icon: 'home',
    name: 'Media',
  },
  {
    title: 'Kategori',
    group: 'kategori',
    component: 'widgets',
    icon: 'shopping_basket',
    items: [
      { name: 'product/perikanan', title: 'Perikanan', component: 'product/perikanan' },
      { name: 'product/peternakan', title: 'Pertenakan', component: 'product/peternakan' },
      { name: 'product/pertanian', title: 'Pertanian', component: 'product/pertanian' },
    ]
  },
  { divider: true },
  { header: 'Lainnya' },
  // {
  //   title: 'Login sebagai Penjual',
  //   group: 'apps',
  //   icon: 'lock',
  //   name: 'Login',
  // },
  {
    title: 'Hubungi Kami',
    group: 'lainnya',
    name: 'hubungi-kami',
    icon: 'call',
  },
  {
    title: 'Tentang',
    group: 'lainnya',
    name: 'tentang-kami',
    icon: 'live_help',
  },
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
