// src/db.ts

import { createConnection, Connection } from 'mysql2/promise';

const createDbConnection = async (): Promise<Connection> => {
  const connection: Connection = await createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Shivankar@123',
    database: 'college',
  });

  return connection;
};

export default createDbConnection;
