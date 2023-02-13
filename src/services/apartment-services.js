import supabase from './supabase';

async function getAllApartment() {
  try {
    let {data, error} = await supabase.from('apartment').select('*');
    if (error) {
      throw error;
    }

    // const result = data.map(c => {
    //   return {
    //     name: c.status,
    //     level: c.level
    //   };
    // });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
 

export {getAllApartment};
