export function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    heapSort(array, animations);
    return animations;
}

function swap(array, i, j, animations) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    // record Aimations
    animations.push([i, j]);
    animations.push([i, j]);
    animations.push([i, array[i], j, array[j]]);
}

function heapSort(array, animations) {
    var size = array.length;

    //Build max heap
    for(var i = size/2 - 1; i >= 0; i--) {
        heapify(array, size, i, animations);
    }

    //Heap Sort 
    for(var i = size - 1; i >= 0; i--) {

        swap(array, 0, i, animations);

        //Heapify root element
        heapify(array, i, 0, animations)
    }
}

function heapify(array, size, i, animations) {
    var largest = i;
    var left = 2 * i + 1;
    var right = 2 * i + 2;

    if (left < size && array[left] > array[largest])
        largest = left;
  
    if (right < size && array[right] > array[largest])
        largest = right;
  
      // Swap and continue heapifying if root is not largest
      if (largest != i) {

        swap(array, i, largest, animations);

        heapify(array, size, largest, animations);
      }
}