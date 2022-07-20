const router = require('express').Router()
const db = require('../src/models')
const { todo_list } = db
const { Op } = require('sequelize');


// Find all todo items 

router.get("/", async (req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any; }; }; })=>{
    try{
        const foundTodDos = await todo_list.findAll({
            order:[['todo_id', 'ASC']]
        });
        res.status(200).json(foundTodDos);
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    
    }

});

// Find one

router.get("/:todo_id", async (req: { params: { todo_id: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any; }; }; }): Promise<void> => {
    try {
        const foundSimilarTodos = await todo_list.findOne({
            order: [ [ 'todo_id', 'ASC' ] ],
            where: {
                todo_id: req.params.todo_id 
            }
        })
        res.status(200).json(foundSimilarTodos)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})
//Create todo
router.post("/", async (req: { body: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; data: any; }): void; new(): any; }; }; }): Promise<void> => {
    try { 
        const createTodo = await todo_list.create(req.body)
        res.status(200).json({
            message: 'Record added to table todo_list.todo',
            data: createTodo
        })

    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
//Update Todo  
router.put("/:todo_id", async (req: { body: any; params: { todo_id: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): void; new(): any; }; }; }): Promise<void> => {
    try{
        
        let todo = req.body 
        const updateTodo = await todo_list.update(req.body, {
            where: { 
                todo_id: req.params.todo_id
            }
        })
  
        
        res.status(200).json(`Succefully updated ${updateTodo} todos`)

    } catch (err) { 
        console.log(err)
        res.status(500).json(err)
    }
})
//Delete todo
router.delete('/:todo_id', async (req: { params: { todo_id: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }): Promise<void> => {
    try {
        const deletetoDo = await todo_list.destroy({
            where: {
                todo_id: req.params.todo_id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletetoDo} todo(s)`
        })
    } catch(err) {
        console.log(`There was a renderig error ${err}`)
        res.status(500).json(err)
    }
})

//Delete all todos


module.exports = router
