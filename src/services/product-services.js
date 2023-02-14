import supabase from './supabase';
import {
  formatCurrency,
  getSupportedCurrencies,
} from 'react-native-format-currency';
async function getAllProduct() {
  try {
    let {data, error} = await supabase.from('product').select('*');
    if (error) {
      throw error;
    }

    const result = data.map(c => {
      const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] =
        formatCurrency({amount: Number(c.price), code: 'VND'});
      return {
        id: c.id,
        title: c.name,
        image: c.thumbnail,
        bigImage: c.thumbnail,
        price: valueFormattedWithSymbol,
        weight: c.unit,
        cartCount: 0,
        isFavourite: false,
        detail: c.description,
        ratingValue: 4.5,
      };
    });
    return result;
  } catch (error) {
    throw error;
  }
}
async function getAllProductByCategoryId(id) {
  try {
    let {data, error} = await supabase
      .from('product')
      .select('*')
      .eq('category_id', id);
    if (error) {
      throw error;
    }

    const result = data.map(c => {
      const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] =
        formatCurrency({amount: Number(c.price), code: 'VND'});
      return {
        id: c.id,
        title: c.name,
        image: c.thumbnail,
        bigImage: c.thumbnail,
        price: valueFormattedWithSymbol,
        weight: c.unit,
        cartCount: 0,
        isFavourite: false,
        detail: c.description,
        ratingValue: 4.5,
      };
    });
    return result;
  } catch (error) {
    throw error;
  }
}

export {getAllProduct, getAllProductByCategoryId};
