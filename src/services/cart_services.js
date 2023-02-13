import supabase from './supabase';

async function getCartItemsByUserId(id) {
  try {
    let {data, error} = await supabase
      .from('cart_item')
      .select('*')
      .eq('user_id', id);
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    throw error;
  }
}
async function addCartItem(cartItem) {
  try {
    let {data, error} = await supabase.from('cart_item').insert({
      user_id: cartItem.user_id,
      product_id: cartItem.product_id,
      quantity: cartItem.quantity,
    });
    if (error) {
      throw error;
    }
    return {data, error};
  } catch (error) {
    throw error;
  }
}
async function updateCartItem(cartItem) {
  console.log(cartItem);
  try {
    let {data, error} = await supabase
      .from('cart_item')
      .update({
        quantity: cartItem.quantity,
      })
      .eq('id', cartItem.id);
    if (error) {
      throw error;
    }
    return {data, error};
  } catch (error) {
    throw error;
  }
}
async function removeCartItem(id) {
  try {
    let {data, error} = await supabase.from('cart_item').delete().eq('id', id);
    if (error) {
      throw error;
    }
    return {data, error};
  } catch (error) {
    throw error;
  }
}
async function getCartItemForShow(id) {
  try {
    let {data, error} = await supabase
      .from('cart_item')
      .select('*,product(*)')
      .eq('user_id', id);
    if (error) {
      throw error;
    }
    return data.map(c => {
      return {
        id: c.id,
        title: c.product.name,
        image: c.product.thumbnail,
        bigImage: c.product.thumbnail,
        price: c.product.price,
        weight: c.product.unit,
        cartCount: c.quantity,
        product_id: c.product.id,
      };
    });
  } catch (error) {
    throw error;
  }
}
async function clearCart(userId) {
  try {
    let {data, error} = await supabase
      .from('cart_item')
      .delete()
      .eq('user_id', userId);
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    throw error;
  }
}
export {
  getCartItemsByUserId,
  addCartItem,
  getCartItemForShow,
  clearCart,
  removeCartItem,
  updateCartItem,
};
