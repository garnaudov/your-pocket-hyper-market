const INITIAL_STATE = {
  sections: [
    {
      title: 'билла',
      imageUrl: 'https://source.unsplash.com/6Xb0-zJM_lU',
      id: 1,
      linkUrl: 'shop/billa'
    },
    {
      title: 'лидл',
      imageUrl: 'https://source.unsplash.com/SsKf1L6rWJk',
      id: 2,
      linkUrl: 'shop/lidl'
    },
    {
      title: 'т-маркет',
      imageUrl: 'https://source.unsplash.com/J83LcLGsy_4',
      id: 3,
      linkUrl: 'shop/tmarket'
    },
    {
      title: 'фантастико',
      imageUrl: 'https://source.unsplash.com/X_xyvXnN1wg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/fantastiko'
    },
    {
      title: 'кауфланд',
      imageUrl: 'https://source.unsplash.com/__bJag69atg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/kaufland'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
