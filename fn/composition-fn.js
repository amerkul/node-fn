const getFullName = person => person.firstName + " " + person.lastName

const getUniqueWords = words => {
    return Array.from(new Set(words.split(" ").map(word => word.toLowerCase())))
}

const sortByAlphabet = uniqueWords => {
    return uniqueWords.sort()
}

const filterUniqueWords = text => sortByAlphabet(getUniqueWords(text))

const concatGrades = students => students.map(s => s.grades).flat()

const getAverage = grades => grades.reduce((a, b) => a + b, 0) / grades.length

const getAverageGrade = students => getAverage(concatGrades(students))

export {getFullName, filterUniqueWords, getAverageGrade}