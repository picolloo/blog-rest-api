import Category from '../entities';

async function create(name) {
  return await Category.query().insert({
    name,
  });
}

async function findAll() {
  return await Category.query();
}

async function findById(id) {
  return await Category.query().findById(id);
}

async function findByName(name) {
  return await Category.query().findOne({ name });
}

async function deleteById(id) {
  return await Category.query().deleteById(id);
}

export default {
  create,
  findAll,
  findById,
  findByName,
  deleteById,
};
