import supabase from './supabase';
import {Animated} from 'react-native';

async function getAddressesByUserId(id) {
  try {
    let {data, error} = await supabase
      .from('user_address')
      .select('*')
      .eq('user_id', id);
    if (error) {
      throw error;
    }
    const result = data.map(c => {
      return {
        id: c.id,
        isDefault: c.is_default,
        name: c.receiver,
        street: c.street,
        city: c.city,
        ward: c.ward,
        apartment: c.apartment_name,
        apartment_number: c.apartment_number,
        phone: c.contact,
        isActive: false,

        spinValue: new Animated.Value(0),
      };
    });
    return result;
  } catch (error) {
    throw error;
  }
}
async function updateAddress(address) {
  try {
    const response = await supabase
      .from('user_address')
      .update([
        {
          receiver: address.receiver,
          city: address.city,
          ward: address.ward,
          street: address.street,
          apartment_number: address.apartment_number,
          apartment_name: address.apartment_name,
          contact: address.contact,
          is_default: address.isDefault,
        },
      ])
      .eq('id', address.id);
    return response;
  } catch (err) {
    throw err;
  }
}
async function addAddress(address) {
  try {
    const response = await supabase.from('user_address').insert([
      {
        user_id: address.user_id,
        receiver: address.receiver,
        city: address.city,
        ward: address.ward,
        street: address.street,
        apartment_number: address.apartment_number,
        apartment_name: address.apartment_name,
        contact: address.contact,
        is_default: address.is_default,
      },
    ]);
    return {response};
  } catch (err) {
    throw err;
  }
}
export {getAddressesByUserId, updateAddress, addAddress};
