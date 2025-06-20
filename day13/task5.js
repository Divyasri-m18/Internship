function bmi(weight,height){
    if (height <= 0 || weight <= 0) {
        return "Invalid input";
    }
    const bmiValue = weight / (height * height);
    return Math.round(bmiValue);
}
console.log(bmi(70,1.75));