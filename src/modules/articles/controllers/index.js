import ArticlesRepository from '../repositories';

async function create(request, response) {
  const { title, summary, content, category_id, author_id } = request.body;
  const article = await ArticlesRepository.create(
    title,
    summary,
    content,
    category_id,
    author_id,
  );
  return response.status(201).json(article);
}

async function index(request, response) {
  const { slug } = request.query;

  if (slug) {
    const articles = await ArticlesRepository.findByCategorySlug(slug);
    return response.json(articles);
  }

  const articles = await ArticlesRepository.findAll();
  return response.json(articles);
}

async function show(request, response) {
  const { id } = request.params;
  const articles = await ArticlesRepository.findById(id);

  if (!articles) {
    throw { statusCode: 404, message: `Articles: ${id} not found.` };
  }

  return response.json(articles);
}

async function update(request, response) {
  const { id } = request.params;
  const patchParams = request.body;
  const articles = await ArticlesRepository.findById(id);

  if (!articles) {
    throw { statusCode: 404, message: `Articles: ${id} not found.` };
  }

  const updatedArticle = await ArticlesRepository.update(id, patchParams);
  return response.json(updatedArticle);
}

async function remove(request, response) {
  const { id } = request.params;
  const articles = await ArticlesRepository.deleteById(id);

  if (!articles) {
    throw { statusCode: 404, message: `Articles: ${id} not found.` };
  }

  return response.json(articles);
}

export default {
  create,
  index,
  show,
  update,
  remove,
};
