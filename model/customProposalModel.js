const mongoose=require('mongoose')
const structure1=new mongoose.Schema(
    {
        fullname:{
            type: String,
            required:true
        }, 
        email:{
            type:String,
            required:true,
            unique:true
        },
        gender:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true

        },
        date:{
            type:Number,
            required:true,
            
        },
        stateOfOrigin:{
            type:String,
            required:true

        },
        BVN:{
            type:Number,
            required:true,
            unique:true
        },
        
        NIN:{
            type:Number,
            required:true,
            unique:true
        },
        photo:{
            type:String,
            required:true,
            unique:true
        }
        ,
        guarantorDetails:{
         guarantorName:{type:String},
         phoneNumber:{type:Number},
         address:{type:String},
         email:{type:String}  
    },
    Product:{
        ProductName:{type:String},
        ProductPrice:{type:String},
        applicationTerm:{type:String},      
        applicationType:{type:String},
        numberOfProducts:{type:Number}
    }
}
)
const proposal= mongoose.model('proposal with existing products',structure1)

module.exports=proposal 