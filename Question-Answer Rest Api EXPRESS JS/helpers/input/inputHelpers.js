const bcrypt=require('bcrypt')
const inputHelpers= (email,password)=>{

    return email&&password
}

const comparePassword=(password,hashPassword)=>{

    return bcrypt.compareSync(password,hashPassword)
}

module.exports={inputHelpers,comparePassword}