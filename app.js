const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Title of note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

// list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        // console.log('Listing notes.');
        notes.listNotes();
    }
})

// read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title: {
            describe:'Title of notes',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title);
    }
})

yargs.parse();