import supabase from './supabase';

async function getAllStatus() {
  try {
    let {data, error} = await supabase.from('apartment').select('*');
    if (error) {
      throw error;
    }

    const result = data.map(c => {
      return {
        name: c.status,
        level: c.level
      };
    });
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}
 

export {getAllStatus};
