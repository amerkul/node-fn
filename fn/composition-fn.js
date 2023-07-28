const getFullName = person => person.firstName + " " + person.lastName

const getUniqueWords = words => {
    return Array.from(new Set(words.match(/\b(\w+)\b/g).map(word => word.toLowerCase())))
}

const sortByAlphabet = uniqueWords => {
    return uniqueWords.sort()
}

const filterUniqueWords = text => { 
    if (typeof(text) !== "string") {
        throw Error("Invalid text")
    }
    return sortByAlphabet(getUniqueWords(text))
}

const concatGrades = students => students.map(s => s.grades).flat()

const getAverage = grades => grades.reduce((a, b) => a + b, 0) / grades.length

const getAverageGrade = students => { 
    if (typeof(students) !== "object" || !Array.isArray(students)) {
        throw Error("Invalid products")
    }
    return getAverage(concatGrades(students))
}

export {getFullName, filterUniqueWords, getAverageGrade}