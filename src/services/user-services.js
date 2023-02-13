import supabase from './supabase';

async function getUserByPhone(phone) {
  try {
    let {data, error} = await supabase
      .from('user')
      .select('*')
      .eq('phone', phone);
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    throw error;
  }
}

async function getUserId() {
  return 23;
}

export {getUserByPhone, getUserId};
