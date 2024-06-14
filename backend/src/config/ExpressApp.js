import dotenv from "dotenv";
import todoRoutes from "../routes/todoRoutes.js";
import express from "express";
import cors from 'cors';
import morgan from "morgan";

export default async (app) => {
  // Load environment variables
  dotenv.config({ path: "./.env.development" });

  // Body parser, reading data from body into req.body
  app.use(
    express.json({
      limit: "20kb",
    })
  );

  // Enable All CORS Requests
  app.use(cors())

  // logger middleware
  app.use(morgan('tiny'));

  app.use("/api/todos", todoRoutes);

  // If no Routes match
  app.use("*", (req, res) => {
    res.status(404).json({
      message: `Can't find ${req.originalUrl} this route`,
    });
  });

  // Global error handler
  app.use((err, req, res, next) => {
    err.status = err.status || "fail";
    err.statusCode = err.statusCode || 500;
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
  });
  return app;
};
