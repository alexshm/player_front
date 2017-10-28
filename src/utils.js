

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

export function getPath(obj, key, value, path) {

    if(typeof obj !== 'object') {
        return;
    }

    for(var k in obj) {
        if(obj.hasOwnProperty(k)) {
            //console.log(k);
            var t = path;
            var v = obj[k];
            if(!path) {
                path = k;
            }
            else {
                path = path + '.' + k;
            }
            if(v === value) {
                if(key === k) {
                    return path;
                }
                else {
                    path = t;
                }
            }
            else if(typeof v !== 'object'){
                path = t;
            }
            var res = getPath(v, key, value, path);
            if(res) {
                return res;
            }
        }
    }

}