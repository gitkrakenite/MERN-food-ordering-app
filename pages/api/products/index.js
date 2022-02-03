import dbConnect from "../../../util/mongo"; //we need our db connection
import Product from "../../../models/Product";  //we need our models

//We are now creating endpoints

export default async function handler(req, res) {

    const { method, cookies } = req;
    const token = cookies.token


    //const { method } = req;
    dbConnect();


    if (method === "GET") {
        try {

            const products = await Product.find(); //all products. You can filter them if you want
            res.status(200).json(products);

        } catch (err) {
            res.status(500).json(err)
        }
    }




    if (method === "POST") {

        if (!token || token !== process.env.token) {
            return res.status(401).json("Not authorized")
        }

        try {


            const product = await Product.create(req.body);
            res.status(200).json(product);


        } catch (err) {
            res.status(500).json(err);
        }

    }


}