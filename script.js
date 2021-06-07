const OBJECT = {
    a: 5,
    b: 'translation',
    c: {
        d: 8,
        e: 'library',
        f: {
            g: 48,
            h: 'info',
        }
    },
    i: 'array',
}

const deepClone = originObject => {
    const cloneObject = {}
    for (const i in originObject) {
        if (originObject[i] instanceof Object) {
            cloneObject[i] = deepClone(originObject[i])
            continue
        }
        cloneObject[i] = originObject[i]
    }
    return cloneObject
}

const CLONE = deepClone(OBJECT)
