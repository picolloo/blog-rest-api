import knex from 'knex';
import { Model } from 'objection';

import { ENV } from '../../config';
import knexConfig from '../../../knexfile';

const dbInstance = knex(knexConfig[ENV]);

Model.knex(dbInstance);

export default dbInstance;
