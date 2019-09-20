import express from 'express';
import eventsGetAll from '../middleware/api/eventsGetAll';

const router = express.Router();

router.get('/', (request, response) => {
    response.json({success: true});
});

// TODO
// - Add GET for all data /events - return data + 200
router.get('/events', eventsGetAll);
//router.get('/events/:id', dataGetById);

// - Add POST to add new data /events - return 201
// - Add GET for single data element /events/:id -200 / 404
// - Add PUT to update single data element /events/:id - 200/204 (no content)/4040
// - Add DELETE to delete single data element /events/:id - 200/404
// - Add authentication - basic auth - 'auth' -> 'key:' (no password) + base64 encoded - 401 if failed

export default router;
