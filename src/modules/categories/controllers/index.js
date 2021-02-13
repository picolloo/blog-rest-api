import { CreateCategoryService } from '../services';
import CategoriesRepository from '../repositories';

async function create(request, response) {
  const { name } = request.body;
  const category = await CreateCategoryService.execute(name);
  return response.status(201).json(category);
}

async function index(request, response) {
  const categories = await CategoriesRepository.findAll();
  return response.json(categories);
}

async function show(request, response) {
  const { id } = request.params;
  const category = await CategoriesRepository.findById(id);

  if (!category) {
    throw { statusCode: 404, message: `Category: ${id} not found.` };
  }

  return response.json(category);
}

async function remove(request, response) {
  const { id } = request.params;
  const category = await CategoriesRepository.deleteById(id);

  if (!category) {
    throw { statusCode: 404, message: `Category: ${id} not found.` };
  }

  return response.json(category);
}

export default {
  create,
  index,
  show,
  remove,
};
