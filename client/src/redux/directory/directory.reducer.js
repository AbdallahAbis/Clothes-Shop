const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://bit.ly/3akbQ0I",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "jackets",
      imageUrl: "https://bit.ly/2wimNS2",
      id: 2,
      linkUrl: "shop/jackets"
    },
    {
      title: "sneakers",
      imageUrl: "https://bit.ly/2vDAavH",
      id: 3,
      linkUrl: "shop/sneakers"
    },
    {
      title: "women",
      imageUrl: "https://bit.ly/2xY1yoX",
      size: "large",
      id: 4,
      linkUrl: "shop/women"
    },
    {
      title: "men",
      imageUrl: "https://bit.ly/3943j0N",
      size: "large",
      id: 5,
      linkUrl: "shop/men"
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
