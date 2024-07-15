var num1 = parseInt(prompt("Enter the first number"));
            var num2 = parseInt(prompt("Enter the second number"));
            var num3 = parseInt(prompt("Enter the third number"));
            var num4 = parseInt(prompt("Enter the fourth number"));
            var num5 = parseInt(prompt("Enter the fifth number"));

            var largest = num1;

            if (num2 > largest) {
                largest = num2;
            }
            if (num3 > largest) {
                largest = num3;
            }
            if (num4 > largest) {
                largest = num4;
            }
            if (num5 > largest) {
                largest = num5;
            }

            alert("The largest number is " + largest);