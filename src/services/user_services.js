import supabase from './supabase';
async function getAllUsers() {
  try {
    let {data, error} = await supabase.from('user').select('*');
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    throw error;
  }
}

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
async function addUser(user) {
  const {data, error} = await supabase
    .from('user')
    .insert([{phone: user.phone}]);
  if (error) {
    throw error;
  }
  const result = {data: data, error: error};
  return result;
}
async function updateUser(user) {
  const {data, error} = await supabase
    .from('user')
    .update({
      name: user.name,
      email: user.email,
      phone: user.phone,
      avatar: user.avatar,
    })
    .eq('id', user.id);
}
async function loginWithOtp(phone) {
  let {user, error} = await supabase.auth.signInWithOtp({
    phone: phone,
  });
  if (error) {
    throw error;
  }
  const result = {data: user, error: error};
  return result;
}
async function verifyOtp(phone, otp) {
  let {session, error} = await supabase.auth.verifyOtp({
    phone: phone,
    token: otp,
    type: 'sms',
  });
  if (error) {
    throw error;
  }
  const result = {session: session, error: error};
  return result;
}
export {
  getAllUsers,
  getUserByPhone,
  addUser,
  updateUser,
  loginWithOtp,
  verifyOtp,
};
