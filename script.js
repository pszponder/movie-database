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

// Sort function
function sort(arr){
    for (let i = 0; i < arr.length - 1; i++) {
        // Initialize variables
        let obj = arr[i];
        let obj_index = i;

        // Iterate across a sub-array and find the max rank
        for (let j = i; j < arr.length; j++) {
            if (arr[j].rank > obj.rank) {
                obj = arr[j];
                obj_index = j;
            }
        }
        // Swap the position of the object with the max value with the object at the current index
        arr[obj_index] = arr[i];
        arr[i] = obj;
    }
    return arr;
  }

createTable(sort(moviesUnsorted));

// // Create a function to return a sorted array of objects
// // arr is the array that will be sorted
// // property is the property in the array to sort by (title, rank or id)
// // sortDirection determines if you want to sort acending or descending
// function sort(arr, property, sortDirection) {
//     // Initialize Variables
//     let subArray = [];
//     let value = arr[0].property;
//     // let propIndex = 0;

//     // // Determine correct index for propIndex (default propIndex is setup for title)
//     // switch(property) {
//     //     case 'rank': 
//     //         propIndex = 1;  // rank
//     //         break;
//     //     case 'id':
//     //         propIndex = 2;  // id
//     //         break;
//     //     default: 
//     //         alert('Please enter a property of either "title", "rank" or "id"');
//     // }

//     // Iterate over the list n-1 times
//     for (let i = 0; i < arr.length - 1; i++) {
//         // For each iteration, establish a sub-array (this will be a subarray of objects)
//         subArray = arr.slice(i, arr.length);

//         // Compute the max value of the sub-array object and identify the index
//         // Iterate through each object in the sub-array

//         // Iterate over the objects in subArray
//         for (let j = 0; j < subArray.length; j++) {
//             value[0] = findMax(subArray[j], property);
//             valueIndex[1] = j;
//         }

//         // value = findMax(subArray[j].property);
//         // valueIndex = j;

//         // value = findMax(subArray.property);
//         // valueIndex = findIndex(value);



//         // Swap the max value with the position of the 1st element in the sub-array
//         arr[valueIndex] = arr[i];
//         arr[i] = value;
//     }

// }


// // Create a findMax function which returns the maximum value and index of an array of objects
// function findMax(arr, property) {
//     let max = arr[0].property;
//     console.log(max);
//     let maxIndex = 0;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i].property > max) {
//             max = arr[i].property;
//             maxIndex = i;
//         }
//     }
//     return [max, maxIndex];
// }


// // Create a findMin function which returns the minimum value of an array
// function findMin(arr) {
//     let min = arr[0];
//     let minIndex = 0;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//             minIndex = i;
//         }
//     }
//     return [min, minIndex];
// }


// // TODO: Make sure to input the sorted movies list
// createTable(moviesUnsorted);