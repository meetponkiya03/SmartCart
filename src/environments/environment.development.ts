export const environment = {
  baseUrl: 'http://localhost:1337/',

  login: 'api/auth/local',
  register: 'api/auth/local/register',
  profile:
    'api/users/me?populate[0]=user_addresses&populate[1]=user_addresses.city',
  updateProfile: 'api/users/',

  createAddress: 'api/user-addresses',

  product:
    'api/products?pagination[page]=1&pagination[pageSize]=10&populate[category][fields][0]=category_name&populate[product_image][fields][1]=url&populate[wish_lists][fields][2]=id&filters[product_name][$containsi][0]=',

  
  fetchCart: 'api/carts?fields=%2A&populate=%2A',
  addCart: 'api/carts',

  addOrder: 'api/orders',
  fetchOrder: 'api/orders?fields=%2A&populate=%2A',
};
