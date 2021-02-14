import ArticlesRepository from '../repositories';

async function execute(articleId, isAuthenticated = false) {
  const article = await ArticlesRepository.findById(articleId);

  if (!article) {
    throw { statusCode: 404, message: `Articles: ${articleId} not found.` };
  }

  if (!isAuthenticated) {
    delete article.content;
  }

  return article;
}

export default {
  execute,
};
