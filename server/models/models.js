const pg = require('pg');
pg.defaults.poolSize = 100;

const PG_URI = 'postgres://opkmyovf:jlzeGeCdKnUTuAX0p15MbMj7v1LqFpFg@rajje.db.elephantsql.com:5432/opkmyovf';

const pool = new pg.Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};

// const { Pool } = require('pg');

// const PG_URI = 'postgres://opkmyovf:jlzeGeCdKnUTuAX0p15MbMj7v1LqFpFg@rajje.db.elephantsql.com:5432/opkmyovf';

// const pool = new Pool({
//   connectionString: PG_URI,
// });

// module.exports = {
//   query: (text, params, callback) => {
//     console.log('executed query', text);
//     return pool.query(text, params, callback);
//   },
// };
