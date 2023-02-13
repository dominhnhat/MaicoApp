import supabase from './supabase';
async function addOrderLog(logItem) {
  try {
    console.log(logItem);
    let {data, error} = await supabase.from('order_status_log').insert({
      order_id: logItem.order_id,
    });
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    throw error;
  }
}
export {addOrderLog};
