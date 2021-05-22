// List of movies
// Each item in the list is a js object
/*
    {
        title: "My Movie Title",
        rank: rankNumber,
        id: "id-string"
    },
*/
let movies = [
    {
        title: "Fight Club",
        rank: 10,
        id: "tt0137523"
    },
    {
        title: "The Shawshank Redemption",
        rank: 1,
        id: "tt0111161"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        rank: 9,
        id: "tt0167260"
    },
    {
        title: "The Godfather",
        rank: 2,
        id: "tt0068646"
    },
    {
        title: "The Good, the Bad and the Ugly",
        rank: 5,
        id: "tt0060196"
    },
    {
        title: "The Godfather: Part II",
        rank: 3,
        id: "tt0071562"
    },
    {
        title: "The Dark Knight",
        rank: 6,
        id: "tt0468569"
    },
    {
        title: "Pulp Fiction",
        rank: 4,
        id: "tt0110912"
    },
    {
        title: "Schindler's List",
        rank: 8,
        id: "tt0108052"
    },
    {
        title: "12 Angry Men",
        rank: 7,
        id: "tt0050083"
    }
];

function createTable(objectList) {
    // Create the opening html text for a table and include the headers
    let table = `
        <table>
            <tr>
                <th>Title</th>
                <th>Rank</th>
                <th>ID</th>
            </tr>`;

    // Iterate over the list of objects
    for (let i = 0; i < objectList.length; i++) {
        table += `
            <tr>
                <td>${objectList[i].title}</td>
                <td>${objectList[i].rank}</td>
                <td>${objectList[i].id}</td>
            </tr>`;
    }

    // Concatenate the closing html table tag inside the table variable
    table += '</table>';

    // Add the table to the div element in html
    document.getElementById("movies-list").innerHTML = table;
}

createTable(movies);