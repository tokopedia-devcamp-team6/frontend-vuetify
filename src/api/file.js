const getFileMenu = [
  { 
    icon: 'photo',
    title: 'Images',
    to: { path: '/media', query: { type: 'image' }}
  },
  { 
    icon: 'videocam',
    title: 'Video',
    to: { path: '/media', query: { type: 'video' }}
  },
  { 
    icon: 'volume_down',
    title: 'Audio',
    to: { path: '/media', query: { type: 'audio' }}
  },
  { 
    icon: 'insert_drive_file',
    title: 'Document',
    to: { path: '/media', query: { type: 'doc' }}
  },

];
const Items =  [

  {
    'uuid': '5d333a3d-9140-4b8c-9ae3-9a8a96f0309e',
    'fileName': 'Beras Supper - 10kg',
    'fileType': 'image/svg+xml',
    'path': 'http://pakrice.pk/wp-content/uploads/2015/12/Non-basmati-Rice-1-600x400.jpg',
    'fullPath': 'http://pakrice.pk/wp-content/uploads/2015/12/Non-basmati-Rice-1-600x400.jpg',
    'ext': '.svg',
    'dir': 'static',
    'ctime': '2018-03-14T09:21:32.017Z',
    'size': 538
  },
  {
    'uuid': '5d333a3d-9140-4b8c-9ae3-9a8a96f0309e',
    'fileName': 'Beras Super Ayamana',
    'fileType': 'image/svg+xml',
    'path': 'https://soleh.net/wp-content/uploads/2008/09/beras.jpg',
    'fullPath': 'https://soleh.net/wp-content/uploads/2008/09/beras.jpg',
    'ext': '.svg',
    'dir': 'static',
    'ctime': '2018-03-14T09:21:32.017Z',
    'size': 538
  },

  {
    'uuid': '5d333a3d-9140-4b8c-9ae3-9a8a96f0309e',
    'fileName': 'Beras Supper - 10kg',
    'fileType': 'image/svg+xml',
    'path': 'http://pakrice.pk/wp-content/uploads/2015/12/Non-basmati-Rice-1-600x400.jpg',
    'fullPath': 'http://pakrice.pk/wp-content/uploads/2015/12/Non-basmati-Rice-1-600x400.jpg',
    'ext': '.svg',
    'dir': 'static',
    'ctime': '2018-03-14T09:21:32.017Z',
    'size': 538
  },
  {
    'uuid': '5d333a3d-9140-4b8c-9ae3-9a8a96f0309e',
    'fileName': 'Beras Super Ayamana',
    'fileType': 'image/svg+xml',
    'path': 'https://soleh.net/wp-content/uploads/2008/09/beras.jpg',
    'fullPath': 'https://soleh.net/wp-content/uploads/2008/09/beras.jpg',
    'ext': '.svg',
    'dir': 'static',
    'ctime': '2018-03-14T09:21:32.017Z',
    'size': 538
  }
];

const getFile = (limit) => {
  return (limit) ? Items.slice(0, limit) : Items;
};

export {
  getFileMenu,
  getFile
};