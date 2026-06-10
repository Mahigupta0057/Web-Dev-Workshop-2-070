function calculateResult() {
  let subjectCount = document.getElementById("subjectCount").value;
  subjectCount = parseInt(subjectCount);

  if (isNaN(subjectCount) || subjectCount <= 0) {
    alert("Please enter a valid number of subjects.");
    return;
  }

  let totalMarks = 0;
  for (let i = 1; i <= subjectCount; i++) {
    let mark = prompt("Enter marks for subject " + i + ":");
    mark = parseFloat(mark);

    if (isNaN(mark) || mark < 0) {
      alert("Invalid input for subject " + i);
      return;
    }
    totalMarks += mark;
  }

  let average = totalMarks / subjectCount;
  let resultText = "Total Marks: " + totalMarks + "<br>" +
                   "Average Marks: " + average.toFixed(2);

  document.getElementById("resultBox").innerHTML = resultText;
}