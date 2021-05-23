// List of movies
// Each item in the list is a js object
/*
    {
        title: "My Movie Title",
        rank: rankNumber,
        id: "id-string"
    },
*/
let moviesUnsorted = [
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

// Sort function takes in an array of objects and a property to sort the array with
// property is either 'title', 'rank', or 'id'
function sort(arr, property){
    for (let i = 0; i < arr.length - 1; i++) {
        let obj = findMax(arr, i, property);
        let maxObject = obj.maxObject;
        let maxIndex = obj.maxIndex;

        // Swap the position of the object with the max value with the object at the current index
        arr[maxIndex] = arr[i];
        arr[i] = maxObject;
    }
    return arr;
  }

// Create a function to find a max value
function findMax(arr, index, property) {
    // Initialize variables
    let obj = arr[index];
    let obj_index = index;

    // Iterate across a sub-array and find the max value
    for (let j = index; j < arr.length; j++) {
        if (arr[j][property] > obj[property]) {
            obj = arr[j];
            obj_index = j;
        }
    }
    return {maxObject: obj, maxIndex: obj_index};
}

createTable(sort(moviesUnsorted, 'rank'));