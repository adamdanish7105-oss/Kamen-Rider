// 1. Define Multi-Dimensional Array studentData
// Format: [Name (String), Credit Hour (Number), Current GPA (Number)]
var studentData = [
    ["Ali Ahmad", 18, 3.75],
    ["Siti Aminah", 21, 3.45],
    ["John Lee", 15, 3.20],
    ["Nur Aisyah", 19, 3.85]
];

// 2. Create function to measure dean list eligibility
function checkDeanList(creditHour, gpa) {
    if (creditHour >= 18 && gpa >= 3.50) {
        return "<span class='eligible'>Eligible for Dean's List</span>";
    } else {
        return "<span class='not-eligible'>Not Eligible</span>";
    }
}

document.write("<div class='output-box'>");
document.write("<h2>Section 03 Result</h2>");

// 3. Create Looping (for loop)
for (var i = 0; i < studentData.length; i++) {

    var name = studentData[i][0];
    var creditHour = studentData[i][1];
    var gpa = studentData[i][2];
    var status = checkDeanList(creditHour, gpa);

    // 4. Print output (inside loop)
    document.write("<div>");
    document.write("<b>Name:</b> " + name + "<br>");
    document.write("<b>Credit Hour:</b> " + creditHour + "<br>");
    document.write("<b>Current GPA:</b> " + gpa + "<br>");
    document.write("<b>Status:</b> " + status + "<br>");
    document.write("<hr style='border-top: 1px dotted #ccc;'>");
    document.write("</div>");
}

document.write("</div>");
