import supabase from './supabase';

async function addOrderItem(orderItem) {
  try {
    console.log(orderItem);
    let {data, error} = await supabase.from('order_item').insert({
      order_id: orderItem.order_id,
      product_id: orderItem.product_id,
      quantity: orderItem.quantity,
      price: orderItem.price,
    });
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    throw error;
  }
}
export {addOrderItem};
