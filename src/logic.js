function findSecondLargest(arr) {
    if (arr.length < 2) {
        return null;
    }

    let largest = arr[0];
    let secondLargest = null; // Initialize secondLargest to null

    for (let i = 1; i < arr.length; i++) {
        let num = arr[i];

        if (num > largest) {
            secondLargest = largest; // Update secondLargest
            largest = num; // Update largest
        } else if (num > secondLargest && num < largest) {
            secondLargest = num; // Update secondLargest
        }
    }

    return secondLargest;
}

const numbers = [6, 13, 22, 18, 0, 3, 45, 57, 5, 12];
const secondLargest = findSecondLargest(numbers);
console.log('Second largest integer:', secondLargest);
