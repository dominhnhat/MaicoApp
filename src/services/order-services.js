import supabase from './supabase';
import {Animated} from 'react-native';

async function getAllOrderByUserId(id) {
  try {
    let {data, error} = await supabase
      .from('order')
      .select(
        '*,order_item(*),status(*),order_status_log(*,status(status,level))',
      )
      .eq('user_id', id)
      .order('created_at', {ascending: false});
    if (error) {
      throw error;
    }
    const result = data.map(c => {
      return {
        id: c.id,
        orderNo: `Đơn hàng #${c.id}`,
        dateTime: dateTimeFormat(c.created_at),
        items: c.order_item.length,
        total: sumOrderValue(c.order_item),
        isOrderDelivered: c.status.name === 'Giao thành công' ? true : false,
        order_status_log: c.order_status_log,
        spinValue: new Animated.Value(0)
      };
    });
    console.log(result)
    return result;
  } catch (error) {
    throw error;
  }
}

function dateTimeFormat(created_at) {
//   return `Đơn đặt lúc ${created_at.getHours()}:${created_at.getMinutes()} ngày ${created_at.getDate()}/${created_at.getMonth()}/${created_at.getFullYear()}`;
  return `Đơn đặt lúc nào đó`;
}
function sumOrderValue(orderItems) {
  let result = 0;
  orderItems.forEach(c => {
    result += c.price;
  });
  return result;
}

export {getAllOrderByUserId};
