const { CosmosClient } = require("@azure/cosmos");

module.exports = async function (context, req) {
  const client = new CosmosClient(process.env.COSMOS_DB_CONN_STRING);
  const database = client.database("TasksDB");
  const container = database.container("Tasks");

  const { resources: tasks } = await container.items.readAll().fetchAll();

  context.res = {
    status: 200,
    body: tasks
  };
};

