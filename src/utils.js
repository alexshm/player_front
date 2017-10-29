

export function flattenObject(ob) {
        var toReturn = {};

        for (var i in ob) {
            if (!ob.hasOwnProperty(i)) continue;

            if ((typeof ob[i]) == 'object') {
                var flatObject = flattenObject(ob[i]);
                for (var x in flatObject) {
                    if (!flatObject.hasOwnProperty(x)) continue;

                    toReturn[i + '.' + x] = flatObject[x];
                }
            } else {
                toReturn[i] = ob[i];
            }
        }
        return toReturn;
}

export function changeObjectState(keyThatNeedToChange, value, copy,beforeValue) {
    for (let key in copy) {
        if (copy.hasOwnProperty(key)) {
            if (key === keyThatNeedToChange && copy[key] === beforeValue) {
                copy[key] = value;
                break;
            }
            else if (typeof copy[key] === 'object') {
                changeObjectState(keyThatNeedToChange,value,copy[key],beforeValue);
            }
        }

    }
}