// pages/api/users.ts

import { NextApiRequest, NextApiResponse } from 'next';
import createDbConnection from '../../src/db'; // Adjust the path accordingly

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { method } = req;

  try {
    const connection = await createDbConnection();

    if (method === 'GET') {
      // Fetch users from the database
      const [rows] = await connection.execute('SELECT Name from students');
      console.log(rows)
      res.status(200).json({ users: rows });
    }
    await connection.end(); // Close the database connection
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;
