import express from 'express';
import ThingTodo from '../model/todo';

const router = express.Router();

//app /todo

router.get('/', (req, res) => {
  ThingTodo.find({}, (err, todos) => {
    if(err) res.send(err)
    res.send(todos)
  });
});

//app /todo/add

router.post('/add', (req, res) => {
  const newThingTodo = new ThingTodo(req.body);

  newThingTodo.save((err) => {
    if(err) res.redirect('http://localhost:3000/')
    res.redirect('http://localhost:3000/')
  });
});

//app /todo/:id/update

router.post('/:id/update', (req, res) => {
  ThingTodo.findByIdAndUpdate(req.params.id, req.body, err => {
    if(err) res.send(err)
    res.json({
      "message" : ""
    })
  });
});

//app /todo/:id/delete

router.get('/:id/delete', (req, res) => {
  ThingTodo.findByIdAndRemove(req.params.id, err => {
    if(err) res.send(err)
    res.redirect('http://localhost:3000/')
  });
});

export default router;
