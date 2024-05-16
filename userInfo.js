const {modifiedNames, originalNames} = require("./arrayManipulation.js")

const createUser = (modifiedNames, originalNames) => {
    users = []
    for (let i = 0; i < modifiedNames.length; i++) {
        users.push({id: i + 1, name: modifiedNames[i], originalName: originalNames[i]})
    }
    return users
}

console.log(createUser(modifiedNames, originalNames));