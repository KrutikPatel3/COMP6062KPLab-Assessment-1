const myFullName = 'Krutik Patel';
const myStudentNumber = 1163465;

console.log(`${myFullName} - ${myStudentNumber}`);

const headerContent = document.querySelector('h1');
headerContent.innerHTML = `${myFullName} ${myStudentNumber}`;
headerContent.classList.add('headingPrimary');
