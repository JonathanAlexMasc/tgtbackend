module.exports = ({ env }) => ({
  url: env('https://tgtbackend-1892941aed2f.herokuapp.com'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
