import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../lib/mongobd';
import { IProduct } from '../../../src/interface';

type Data = 
| { message: string }
| IProduct[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch( req.method ) {

        case 'GET':
            return searchProducts( req, res )

        default:
            return res.status(400).json({
                message: 'Bad request'
            });
    }
}

const searchProducts = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    let { q = '' } = req.query;

    if ( q.length === 0 ) {
        return res.status(400).json({
            message: 'Debe de especificar el query de búsqueda'
        })
    }

    q = q.toString().toLowerCase();


    const { db } = await connectToDatabase();
    const products = await db
      .collection("wearproducts")
      .find({
          $text: { $search: q }
      })
      .select('title image price inStock slug -_id')
      .lean();
    return res.status(200).json( products );
}