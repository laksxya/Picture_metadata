import AWS from 'aws-sdk';
import express from 'express';
import fs from 'fs';
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-south-1'
});
const readJsonFile = async(filePath) => {
	try {
		const data = await fs.promises.readFile(filePath, "utf-8");
		const jsonData = JSON.parse(data);
		return jsonData;
	} catch (error) {
		throw error;
	}
}

const app= express();
app.use(express.json());
app.get('/pictures',async(req,res)=>{
    try {
        const data = await readJsonFile("./pictures.json")
        const ret = {
        "success": true,
        "data": data
    }
	res.status(200).json(ret);
        
    } catch (error) {
        res.status(500).send("Internal server error")
    }
});
app.post('/pictures', async(req,res) => {
	const body=req.body;

    const params = {
        FunctionName: 'picture_metadata',
        InvocationType: 'RequestResponse',
        Payload: JSON.stringify(body)
    }

    const lambda = new AWS.Lambda();
    const data = await lambda.invoke(params).promise();
    const parsed_data = JSON.parse(data.Payload)
    const lambda_body= JSON.parse(parsed_data.body)
       
    const movies = await readJsonFile("./pictures.json")	
    movies.push(lambda_body)
    await writeJsonFile("./pictures.json", movies)
    const ret= {
        "success": true,
        "data": lambda_body
    }
    res.status(200).json(ret)
});
app.listen(3000,()=>{
    console.log('Server started on port 3000');
});
const writeJsonFile = async (filePath, data) => {
    try {
        const jsonData = JSON.stringify(data, null, 2);
        await fs.promises.writeFile(filePath, jsonData);
    } catch (error) {
        throw error;
    }
}