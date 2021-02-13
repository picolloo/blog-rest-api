import slugify from 'slugify';
import { Model } from 'objection';

class Category extends Model {
  static get tableName() {
    return 'categories';
  }

  static get jsonSchema() {
    return {
      type: 'object',

      required: ['name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        slug: { type: 'string' },
      },
    };
  }

  async $beforeInsert(queryContext) {
    await super.$beforeInsert(queryContext);
    this.slug = slugify(this.name);
  }
}

export default Category;
