import { Sequelize } from "sequelize";
import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import helmet from "helmet";
import compression from "compression";
import dotenv from 'dotenv';
import connexion from "./config/connexion.js";


connexion.sync({alter:true});
const app = express()

