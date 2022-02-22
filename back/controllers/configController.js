

var config = require('../models/config');
var fs = require('fs');

const obtener_config_admin = async function(req, res){

    if(req.user){
        if(req.user.role == 'admin'){

            let reg = await config.findById({_id: "621432457722a180c82546b8"});

            res.status(200).send({data: reg});

            
            
    
        }else{
            res.status(500).send({message: 'NoAccess'});


        }


        }else{
            res.status(500).send({message: 'NoAccess'});
           

        }           

    }





const actualiza_config_admin = async function(req, res){

    if(req.user){
        if(req.user.role == 'admin'){

            let data = req.body;

            if(req.files){
            console.log('si hay img')
            
            var img_path = req.files.logo.path;
            var name = img_path.split('\\');
            var logo_name = name[2];
            let reg = await config.findByIdAndUpdate({_id:"621432457722a180c82546b8"},{
                categorias: data.categorias,
                titulo: data.titulo,
                serie: data.serie,
                logo: logo_name,
                correlativo: data.correlativo

            });

            fs.stat('./uploads/configuraciones/'+reg.logo, function(err){

                if(!err){
                    fs.unlink('./uploads/configuraciones/'+reg.logo, (err)=>{
                        if(err) throw err;
                        
                        {


                        }

                    }
                    );


                }

        
        
            })
    
            res.status(200).send({data: reg})


            }else{

                console.log('no hay img')
               
                let reg = await config.findByIdAndUpdate({_id:"621432457722a180c82546b8"},{

                    categorias: data.categorias,
                    titulo: data.titulo,
                    serie: data.serie,
                    correlativo: data.correlativo
    
                });
            
                res.status(200).send({data: reg})
            }

            
            
            
    
        }else{
            res.status(500).send({message: 'NoAccess'});


        }


        }else{
            res.status(500).send({message: 'NoAccess'});
           

        }           
}




module.exports = {

    actualiza_config_admin,
    obtener_config_admin

    

}

