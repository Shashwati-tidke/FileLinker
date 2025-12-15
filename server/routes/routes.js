import express from 'express';
import { uploadImage } from '../controller/image-controller.js';
import { getImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js';
const router = express.Router();

router.post('/upload', upload.single("file"), uploadImage);

router.get("/files/:fileId", getImage);

export default router;

