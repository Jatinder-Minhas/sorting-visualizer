export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSort(array, animations);
    return animations;
  }

function bubbleSort(array, animations) 
{ 
    var i, j, temp
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length - i - 1; j++) {

            animations.push([j, j+1]);
            animations.push([j, j+1]);
            if ( array[j] > array[j+1]) {
                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp

                animations.push([j, array[j], j+1, array[j+1]]);
            }
            else
                animations.push([j, array[j], j+1, array[j+1]]);
        }
    }
}