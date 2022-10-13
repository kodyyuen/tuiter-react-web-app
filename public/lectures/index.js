const a = 123;
const b = 234;
const c = a + b;
console.log(c)
document.write('<h2>JavaScript</h2>')

const passingGrade = 65;
const grades = [98, 87, 76, 65, 54, 43, 32, 21]
// document.write(`grades = ${grades}<br>`)
// const passingGrades = grades.filter(
//     function(grade, index) {
//         console.log(index, grade)
//         if (grade >= passingGrade) {
//             return true;
//         }
//         return false;
//     }
// )
// document.write(`passingGrades = ${passingGrades}<br>`)

document.write(`grades = ${grades}<br>`)
const passingGrades = grades.filter(
    (grade) =>
        grade >= passingGrade
)
document.write(`passingGrades = ${passingGrades}<br>`)

// const squares = grades.map(grade => grade * grade)

const squares = grades.map((grade) => { return grade * grade })
document.write(`squares = ${squares}<br>`)

const seventySix = grades.find(
    (grade) => grade === 76
)
document.write(`seventySix = ${seventySix}<br>`)

const seventySixIndex = grades.findIndex(
    (grade) => grade === 76
)
document.write(`seventySix = ${seventySixIndex}<br>`)

// const gradesStrings = grades.map(
//     (grade) => `Grade = ${grade}`
// )
// document.write(`gradesStrings = ${gradesStrings}<br>`)
const gradesStrings = grades.map(
    (grade) => (`<li>${grade}</li>`)
).join('')

document.write(`gradesStrings = ${gradesStrings}<br>`)

function add() {
    const xVal = parseInt(xDom.value)
    const yVal = parseInt(yDom.value)
    zDom.value = xVal + yVal
}

const subtract = () => {
    const xVal = parseInt(xDom.value)
    const yVal = parseInt(yDom.value)
    zDom.value = xVal - yVal
}

const xDom = document.getElementById('X')
const yDom = document.getElementById('Y')
const zDom = document.getElementById('Z')

document.write('<h2>JSON (JavaScript Object Notation)</h2>')

const user = {
    username: 'alice',
    passowrd: 'alice123',
    fName: 'Alice',
    lName: 'Wonderland'
};

const age = 23
const firstName = 'Alice'
const alice = {
    username: 'alice',
    passowrd: 'alice123',
    fName: firstName,
    lName: 'Wonderland',
    age: age,
    favoriteBooks: [
        'Dune', 'LOTR', 'Enders Game'
    ],
    dob: new Date()
};
document.write(`username: ${alice.username}<br>`)
document.write(`fName: ${alice.fName}<br>`)

const bob = {
    username: 'bob',
    fName: 'Bob'
}

const users = {
    alice, bob
}

document.write(`fName: ${users[1].fName}<br>`)

document.write(`
    <ul>
        ${users.map(
    (user) => ( `<li>${user.username}</li>` ).join('')
    )
    }
    </ul>
`)