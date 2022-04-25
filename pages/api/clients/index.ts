import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../lib/mongobd';
import { Client } from '../../../src/interface';

type Data = 
| { message: string }
| Client[]



export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch( req.method ) {
        case 'GET':
            return getClients( req, res )

        default:
            return res.status(400).json({
                message: 'Bad request'
            })
    }
}

const getClients = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { db } = await connectToDatabase();
    const clients = await db
      .collection("clients")
      .find()
      .toArray();


    return res.status(200).json( clients );

}