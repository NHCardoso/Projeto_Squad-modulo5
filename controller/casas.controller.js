const pool = require('../database/index')
const casasController = {
    getALL: async (req, res) =>{
        try{
            const [rows, fields] = await 
            pool.query("select * from casas")
            res.json({ data: rows })
        }catch(error){
            console.log(error)
        }
    },
    getById: async (req, res) => {
        try{
            const {id} = req.params
            const [rows, fields] = await 
            pool.query("select * from casas where id = ?",[id])
            res.json({ data: rows })
        }catch(error){
                console.log(error)
        }
    },
    create: async (req, res) => { 
        try{
            const {localidade, preco, vendedor, comissao} = req.body
            const sql = "insert into casas (localidade, preco, vendedor, comissao) values (?,?,?,?)"
            const [rows, field] = await 
            pool.query(sql, [localidade, preco, vendedor, comissao])
            res.json({ data: rows })
        }catch(error){
            console.log(error)
        }
    },
    update: async (req, res) => { 
        try{
            const {localidade, preco, vendedor, comissao} = req.body
            const {id} = req.params
            const sql = "update casas set localidade=?, preco=?, vendedor=?, comissao=? where id = ?"
            const [rows, field] = await 
            pool.query(sql, [localidade, preco, vendedor,comissao, id])
            res.json({ data: rows })
        }catch(error){
            console.log(error)
            res.json({ status: "error" })
        }

     },
     delete: async (req, res) => { 
        try{
                const {id} = req.params
                const sql = "delete from casas where id = ?"
                const [rows, field] = await 
                pool.query(sql, [id])
                res.json({ data: rows })
        }catch(error){
            console.log(error)
            res.json({ status: "error" })
        }

      }

}

module.exports = casasController