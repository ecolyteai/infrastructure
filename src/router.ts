
import "reflect-metadata";
import parser from 'body-parser';
import env from 'dotenv';
import { Router } from 'express';
import session from 'express-session';
import { validatedEnv } from './constant';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import express from 'express';
const router: Router = Router();
env.config();
router.use(parser.json());
router.use(
  session({
    secret: validatedEnv.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 600000 }
  })
);
router.use(
  cors({
    credentials: true,
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: true,
    optionsSuccessStatus: 200
  })
);

router.use(
  session({
    secret: validatedEnv.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 600000 }
  })
);
router.use(cookieParser());
router.use(express.json());
export default router;
