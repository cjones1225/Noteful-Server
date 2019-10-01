function makeNotesArray() {
    return [
        {
            id: 1,
            name: 'Note One',
            content: "I'm in Folder One",
            folder_id: 1,
            date_modified: '2019-08-01T16:28:32.615Z'
        },
        {
            id: 2,
            name: 'Note Two',
            content: "I'm in Folder Two",
            folder_id: 2,
            date_modified: '2019-08-02T16:28:32.615Z'
        },
        {
            id: 3,
            name: 'Note Three',
            content: "I'm in Folder Three",
            folder_id: 3,
            date_modified: '2019-08-03T16:28:32.615Z'
        },
        {
            id: 4,
            name: 'Note Four',
            content: "I'm in Folder Four",
            folder_id: 4,
            date_modified: '2019-08-04T16:28:32.615Z'
        }
    ]
}

module.exports = {
    makeNotesArray
}