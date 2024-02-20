import express from 'express';
import { getAllBlogs, getBlog, createBlog, updateBlog, deleteBlog, getBlogById } from '../controllers/BlogController.js';
const router = express.Router();

router.get('/', getAllBlogs);
router.get('/:id', getBlog);
router.post('/', createBlog);
router.put('/:id', getBlogById, updateBlog); // Agregar getBlogById antes de updateBlog
router.delete('/:id', deleteBlog);

export default router;