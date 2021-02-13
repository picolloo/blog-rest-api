import { Model } from 'objection';

import Author from '../../authors/entities';
import Category from '../../categories/entities';

class Article extends Model {
  static get tableName() {
    return 'articles';
  }

  static get jsonSchema() {
    return {
      type: 'object',

      required: ['title', 'summary', 'content'],
      properties: {
        id: { type: 'integer' },
        title: { type: 'string' },
        summary: { type: 'string' },
        content: { type: 'string' },
      },
    };
  }

  static relationMappings = {
    writtenBy: {
      relation: Model.BelongsToOneRelation,
      modelClass: Author,
      join: {
        from: 'articles.author_id',
        to: 'authors.id',
      },
    },

    belongsTo: {
      relation: Model.BelongsToOneRelation,
      modelClass: Category,
      join: {
        from: 'articles.category_id',
        to: 'categories.id',
      },
    },
  };
}

export default Article;
