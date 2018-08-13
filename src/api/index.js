import { description, version } from '../../package.json';
import { Router } from 'express';

export default () => {
	let api = Router();

	// Default route
	api.get('/', (req, res) => {
		res.json({ description, version });
	});

	return api;
}