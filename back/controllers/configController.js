'use strict'

var config = require('../models/config');

const actualiza_config_admin = async function(req,res){
    if(req.user){
        if(req.user.role == 'admin'){

            await config.create({

                categorias: [],
                titulo: 'Createx',
                logo: 'logo.png',
                serie: 0001,
                correlativo: 000001,




            })


            
    
        }else{
            res.status(500).send({message: 'NoAccess'});


        }


        }else{
            res.status(500).send({message: 'NoAccess'});
           

        }           



module.exports = {

    actualiza_config_admin,

   


}

}