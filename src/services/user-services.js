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
    .insert([{phone: user.phone, email: user.email}]);
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
async function loginWithOtp(mail) {
  let {user, error} = await supabase.auth.signInWithOtp({
    email: mail,
  });
  if (error) {
    throw error;
  }
  const result = {data: user, error: error};
  return result;
}
async function verifyOtp(phone, otp, isSignedUp) {
  let {session, error} = await supabase.auth.verifyOtp({
    email: phone,
    token: otp,
    type: isSignedUp ? 'magiclink' : 'signup',
  });
  if (error) {
    throw error;
  }
  const result = {session: session, error: error};
  return result;
}
async function getUserId() {
  return 23;
}
export {
  getAllUsers,
  getUserByPhone,
  addUser,
  updateUser,
  loginWithOtp,
  verifyOtp,
  getUserId,
};
