const fs = require('fs')
const chalk = require('chalk')

const getNotes = function (){

}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note){
        return note.title === title
    })

    if( duplicateNotes.length === 0)
    {
        notes.push({
            title : title,
            body : body
        })
        
        saveNotes(notes)
        console.log('note added successfuly')
    }else{
        console.log('title already exist')
    }   
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
}

const listNotes = () => {
    var x=1
    const notes = loadNotes()

    console.log(chalk.inverse('Your Notes'))

    notes.forEach((note) => {
         console.log(x + ') ' +note.title)
         console.log(note.body)
         x++;
    })


}

const removeNote = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (notes){
        return notes.title !== title
    })

    if(notes.length > notesToKeep.length)
    {
        console.log(chalk.green.inverse('note successfuly removed'))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('note not found'))
    }

    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}