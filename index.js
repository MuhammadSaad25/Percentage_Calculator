        function checkGrade() {

            let totalMarks = document.querySelector('#inputNum1').value;
            console.log("totalMarks", totalMarks);

            let obtainedMarks = document.querySelector('#inputNum2').value;
            console.log("obtainedMarks", obtainedMarks);

            totalMarks = Number(totalMarks)
            obtainedMarks = Number(obtainedMarks)

            let text = "";
            let result = "";

            if (isNaN(totalMarks)) {
                text = "Please enter a valid Total Marks";
            }
            if (isNaN(obtainedMarks)) {
                text = "Please enter a valid Obtained Marks";
            }

            if (totalMarks < 1) {
                text = "Please enter a positive value for Total Marks";
            }
            if (obtainedMarks < 0) {
                text = "Please enter a positive value for Obtained Marks";
            }

            if (totalMarks < obtainedMarks) {
                text = "Obtained Marks cannot be greater than Total Marks";
            }

            if (text) {
                document.querySelector('#validationText').innerText = text;
                return;
            } else {
                document.querySelector('#validationText').innerText = ""
            }

            let percent = (obtainedMarks / totalMarks) * 100;
            console.log("percent: ", percent);


            if (percent < 60) {
                result = "Fail"

            } else if (percent > 59 && percent < 70) {
                result = "Grade B"

            } else if (percent > 69 && percent < 80) {
                result = "Grade A"

            } else {
                result = "Grade A1"
            }

            // document.querySelector('#result').innerText =  percent + "% - " + result;
            document.querySelector('#result').innerText = `${percent}% - ${result}`;
        }
