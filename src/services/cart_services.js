import supabase from './supabase';
import {
  formatCurrency,
  getSupportedCurrencies,
} from 'react-native-format-currency';
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

    return {
      data: data.map(c => {
        const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] =
          formatCurrency({amount: Number(c.product.price), code: 'VND'});
        return {
          id: c.id,
          title: c.product.name,
          image: c.product.thumbnail,
          bigImage: c.product.thumbnail,
          priceString: valueFormattedWithSymbol,
          price: c.product.price,
          weight: c.product.unit,
          cartCount: c.quantity,
          product_id: c.product.id,
        };
      }),
      total: sumCartValue(data),
    };
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
function sumCartValue(cartItems) {
  let result = 0;
  cartItems.forEach(c => {
    result += c.product.price;
  });
  const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] =
    formatCurrency({amount: Number(result), code: 'VND'});
  return valueFormattedWithSymbol;
}
export {
  getCartItemsByUserId,
  addCartItem,
  getCartItemForShow,
  clearCart,
  removeCartItem,
  updateCartItem,
};
