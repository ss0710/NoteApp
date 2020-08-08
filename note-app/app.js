const chalk = require('chalk')
const yargs = require('yargs')
const { demandOption } = require('yargs')
const notes = require('./note.js')


console.log('running')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        },
        body: {
            describe : 'body of note',
            demandOption : true,
            type : 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title , argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
         title:{
             describe:'note title to be removed',
             demandOption:true,
             type:'string'
         }    
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function(){
        notes.listNotes(on)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note')
    }
})


yargs.parse()














// const fs = require('fs')

// fs.writeFileSync('note.txt','Hello world this is sudheer singh')

// fs.appendFileSync('note.txt','this is added by appendFileSync method')