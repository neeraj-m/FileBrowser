export default (files, { text }) => {
    console.log(files);
    console.log(text);
    return files.filter(file => {
        const textMatch =
            file.title.toLowerCase().includes(text.toLowerCase());

        return textMatch;
    }).sort((book1, book2) => {
        if (sortBy === 'title') {
            return book1.title.localeCompare(book2.title);
        } else if (sortBy === 'published') {
            return book1.published < book2.published ? -1 : 1;
        }
    });
}

// export default function (files, { term }) => {
//     console.log('searched search.js for: ' + term);
// //     return "files";
// }

// export default function (term) {
//     console.log('searched for: ' + term);
// }


// export default (files, { term }) => {
//     console.log('searched for: ' + term);
//     return "files";
// }

