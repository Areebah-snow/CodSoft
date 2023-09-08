// To connect with your mongoDB database
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()
 
mongoose.connect(process.env.dbURL, {
	dbName: 'myblogs',
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
}).then(console.log('Connected to MongoDB'))
.catch(err=> console.log(err))

// Schema for users of app

const blogSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    }
},
    {timestamps:true}
);

const Blog = mongoose.model('blogs', blogSchema);
Blog.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

	resp.send("App is Working");
	// You can check backend is working or not by
	// entering http://loacalhost:5000
	
	// If you see App is working means
	// backend working properly
});

app.post("/create", async (req, resp) => {
	try {
		const blog = new Blog(req.body);
		let result = await blog.save();
		result = result.toObject();
		if (result) {
			delete result.password;
			resp.send(req.body);
			console.log(result);
		} else {
			console.log("Blog exists");
		}

	} catch (e) {
		resp.send("Something Went Wrong");
	}
});
app.listen(5000);



 