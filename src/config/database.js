module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'secret',
  database: 'teste-dominando-nodejs',
  define: {
    timestamps: true, // cria duas colunas: created_at e updated_at
    underscored: true, // troca o camelCase para snake_case
    underscoredAll: true,
  },
};
