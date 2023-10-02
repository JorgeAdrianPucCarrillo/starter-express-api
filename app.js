import express from "express"
import dotenv from "dotenv"
import helmet from "helmet"
import bodyParser from "body-parser"
import cors from "cors"

import connectDB from "./config/mongodb.js"
import listRoutes from "./src/routes/app/list.js"
import nftRoutes from "./src/routes/app/nft.js"
import userRoutes from "./src/routes/app/user.js"
import walletRoutes from "./src/routes/app/wallets.js"

import clientDashboardRoutes from "./src/routes/dashboard/client.js"
import nftDashboardRoutes from "./src/routes/dashboard/nft.js"
import userDashboardRoutes from "./src/routes/dashboard/user.js"

import filesRoutes from "./src/routes/files.js"

import indexRouter from './src/routes/index.js';

dotenv.config()
connectDB()

const PORT = process.env.PORT || 8080
const app = express()

const corsOptions = {
	origin: "*",
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	preflightContinue: false,
	optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


// APP ROUTES

app.use('/v1', indexRouter);
//app.use("/api/list", listRoutes)
//app.use("/api/nft", nftRoutes)
//app.use("/api/user", userRoutes)
//app.use("/api/wallet", walletRoutes)

// DASHBOARD ROUTES
//app.use("/api/dashboard/client", clientDashboardRoutes)
//app.use("/api/dashboard/nft", nftDashboardRoutes)
//app.use("/api/dashboard/user", userDashboardRoutes)


// FILES ROUTES
app.use("/api/files", filesRoutes) 

app.get("/", (req, res, next) => {
	res.status(200).json({
		ok: true,
		message: "Hello"
	})
})

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT} 🚀`)
})