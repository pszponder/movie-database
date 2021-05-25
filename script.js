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

// Display the unsorted list at page startup
createTable(moviesUnsorted);

function createTable(objectList) {
    // Create the opening html text for a table and include the headers
    let table = `
        <table>
            <tr>
                <th><button class='button' id='title'>TITLE</button></th>
                <th><button class='button' id='rank'>RANK</button></th>
                <th><button class='button' id='id'>ID</button></th>
            </tr>`;

    // Iterate over the list of objects
    for (let i = 0; i < objectList.length; i++) {
        table += `
            <tr>
                <td>${objectList[i].title}</td> 
                <td id='center'>${objectList[i].rank}</td>
                <td>${objectList[i].id}</td>
            </tr>`;
    }

    // Concatenate the closing html table tag inside the table variable
    table += '</table>';

    // Add the table to the div element in html
    document.getElementById("movies-list").innerHTML = table;

    // Add Event Listeners to Buttons in HTML to allow user to select the method for sorting the table
    document.getElementById('title').addEventListener('click', function() {
        createTable(sort(moviesUnsorted, 'title'));
        switchSortDirection();
    });

    document.getElementById('rank').addEventListener('click', function() {
        createTable(sort(moviesUnsorted, 'rank'));
        switchSortDirection();
    });

    document.getElementById('id').addEventListener('click', function() {
        createTable(sort(moviesUnsorted, 'id'));
        switchSortDirection();
    });
}

// Determine direction of sort (ascending or descending)
let sortDirection = 'descending';

// Function to switch the sort direction
function switchSortDirection() {
    if (sortDirection === 'descending') {
        sortDirection = 'ascending';
    } else {
        sortDirection = 'descending';
    }
}

// Sort function takes in an array of objects and a property to sort the array with
// property is either 'title', 'rank', or 'id'
function sort(arr, property){

    // Iterate through each object in the array minus the last element
    for (let i = 0; i < arr.length - 1; i++) {

        // Call findMax or findMin function and define Object and Index
        let obj = {};
        let sortedObject = {};
        let sortedObjectIndex = 0;

        // Identify the correct sorted object (min or max) depending on the sortDirection
        if (sortDirection === 'descending') {
            obj = findMax(arr, i, property);
            sortedObject = obj.maxObject;
            sortedObjectIndex = obj.maxIndex;
        } else {
            obj = findMin(arr, i, property);
            sortedObject = obj.minObject;
            sortedObjectIndex = obj.minIndex;
        }

        // Swap the position of the object with the max value with the object at the current index
        arr[sortedObjectIndex] = arr[i];
        arr[i] = sortedObject;
    }
    return arr;
}

// Function to find a max value
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

// Function to find a min value
function findMin(arr, index, property) {
    // Initialize variables
    let obj = arr[index];
    let obj_index = index;

    // Iterate across a sub-array and find the max value
    for (let j = index; j < arr.length; j++) {
        if (arr[j][property] < obj[property]) {
            obj = arr[j];
            obj_index = j;
        }
    }
    return {minObject: obj, minIndex: obj_index};
}