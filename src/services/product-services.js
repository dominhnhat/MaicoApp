import supabase from './supabase';

async function getAllProduct() {
  try {
    let {data, error} = await supabase.from('product').select('*');
    if (error) {
      throw error;
    }

    const result = data.map(c => {
      return {
        id: c.id,
        title: c.name,
        image: c.thumbnail,
        bigImage: c.thumbnail,
        price: c.price,
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
      return {
        id: c.id,
        title: c.name,
        image: c.thumbnail,
        bigImage: c.thumbnail,
        price: c.price,
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
