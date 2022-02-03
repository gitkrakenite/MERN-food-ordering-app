import dbConnect from "../../../util/mongo"; //we need our db connection
import Product from "../../../models/Product";  //we need our models

//We are now creating endpoints

export default async function handler(req, res) {


    const {

        method,
        query: { id },
        cookies

    } = req;


    const token = cookies.token


    dbConnect();


    if (method === "GET") {
        try {

            const product = await Product.findById(id); //Finding products by ID.
            res.status(200).json(product);

        } catch (err) {
            res.status(500).json(err)
        }
    }




    if (method === "PUT") {  //to update Pizza


        if (!token || token !== process.env.token) {
            return res.status(401).json("Not authorized")
        }

        try {


            const product = await Product.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json(product);


        } catch (err) {
            res.status(500).json(err);
        }

    }





    if (method === "DELETE") {  //to delete Pizza

        if (!token || token !== process.env.token) {
            return res.status(401).json("Not authorized")
        }

        try {


            await Product.findByIdAndDelete(id);
            res.status(200).json("Product removed successfully");


        } catch (err) {
            res.status(500).json(err);
        }

    }


}