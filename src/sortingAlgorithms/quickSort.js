export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quickSort(array, 0, array.length - 1, animations);
    return animations;
}


function swap(array, i, j, animations) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    animations.push([i, j]);
    animations.push([i, j]);
    animations.push([i, array[i], j, array[j]]);
}
 
/* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
   array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */
function partition(array, low, high, animations) {
 
    // pivot
    let pivot = array[high];
 
    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    let i = (low - 1);
 
    for (let j = low; j <= high - 1; j++) {
 
        // If current element is smaller
        // than the pivot
        if (array[j] < pivot) {
 
            // Increment index of
            // smaller element
            i++;
            swap(array, i, j, animations);
        }
    }

    swap(array, i + 1, high, animations);

    return (i + 1);
}
 
/* The main function that implements QuickSort
          arr[] --> Array to be sorted,
          low --> Starting index,
          high --> Ending index
 */
function quickSort(array, low, high, animations) {
    if (low < high) {
 
        // pi is partitioning index, arr[p]
        // is now at right place
        let pi = partition(array, low, high, animations);
 
        // Separately sort elements before
        // partition and after partition
        quickSort(array, low, pi - 1, animations);
        quickSort(array, pi + 1, high, animations);
    }
}