import CategoriesRepository from '../repositories';

const execute = async name => {
  const categoryExists = await CategoriesRepository.findByName(name);

  if (categoryExists) {
    throw { statusCode: 400, message: 'Category already registered' };
  }

  const category = await CategoriesRepository.create(name);

  return category;
};

export default {
  execute,
};
