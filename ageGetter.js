function getAge(userDateRecevied) {
    var userDate = userDateRecevied;
    var myDate = new Date(userDate);
    var currentDate = new Date();
    var age = 0;
    age = currentDate.getFullYear() - myDate.getFullYear();
    if (
      currentDate.getMonth() < myDate.getMonth() ||
      (currentDate.getMonth() == myDate.getMonth() &&
        currentDate.getDate() < myDate.getDate())
    ) {
      age--;
    }
    return age;
  }