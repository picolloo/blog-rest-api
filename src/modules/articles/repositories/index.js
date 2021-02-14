import Article from '../entities';

async function create(title, summary, content, category_id, author_id) {
  return await Article.query().insert({
    title,
    summary,
    content,
    category_id,
    author_id,
  });
}

async function findAll() {
  return await Article.query()
    .join('authors', 'authors.id', 'articles.author_id')
    .join('categories', 'categories.id', 'articles.category_id')
    .select('articles.*', 'authors.name', 'authors.picture', 'categories.name');
}

async function findById(id) {
  return await Article.query()
    .findById(id)
    .join('authors', 'authors.id', 'articles.author_id')
    .join('categories', 'categories.id', 'articles.category_id')
    .select('articles.*', 'authors.name', 'authors.picture', 'categories.name');
}

async function findByCategorySlug(slug) {
  return await Article.query()
    .where('categories.slug', slug)
    .join('authors', 'authors.id', 'articles.author_id')
    .join('categories', 'categories.id', 'articles.category_id')
    .select('articles.*', 'authors.name', 'authors.picture', 'categories.name');
}

async function deleteById(id) {
  return await Article.query().deleteById(id);
}

async function update(id, patchParams) {
  return await Article.query().patchAndFetchById(id, patchParams);
}

export default {
  create,
  findAll,
  findById,
  findByCategorySlug,
  deleteById,
  update,
};
