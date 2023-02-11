import supabase from './supabase';

async function getAllCategory() {
  try {
    let {data, error} = await supabase.from('category').select('*');
    if (error) {
      throw error;
    }
    
    const result = data.map(c => {
      return {
        id: c.id,
        primaryTitle: c.name,
        primaryColor: c.color,
        secondaryTitle: c.sub_name,
        secondaryColor: c.color + '90', 
        iconURI: c.icon,
        bgURI: c.background,
      };
    });
    return result;
  } catch (error) {
    throw error;
  }
}

export {getAllCategory}
