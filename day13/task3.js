function LifeInWeeks(age){
    const maxAge=90;
    const yearsLeft=maxAge-age;
    const days=yearsLeft*365;
    const weeks=yearsLeft*52;
    const months=yearsLeft*12;
    console.log(`You have ${days} days, ${weeks} weeks, and ${months} months left`);

}

LifeInWeeks(19);