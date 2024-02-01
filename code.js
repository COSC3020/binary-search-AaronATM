function binarySearch(list, element) {
    var mid = Math.floor(list.length / 2);
    if (list.length == 0)
    {
        return -1;
    }

    if (list[mid] === element)
    {
        if (list.length > 1)
        {
            return 0;
        }
        
        return mid;
    }

    if (list[mid] > element)
    {
        return binarySearch(list.slice(0, mid), element);
    }

    if (list[mid] < element)
    {
        return binarySearch(list.slice(mid + 1), element);
    }

    return -1;
}
