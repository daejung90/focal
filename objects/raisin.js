const raisinAlarm = function(cookie) {
    // loop through the array
    //if statement ( if the string === raisin)
    //if statement is true then retunr 'Raisin alert!'
  
    for (const icon of cookie) {
      if (icon === "🍇") {
        return "Raisin alert!";
      }
    }
    return "All good!";
  };
  
  console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
  console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
  console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
  
  // const raisinAlarmArray = function(cookies) {
  //   //for through the first array
  //   //loop through in it array
  //   const alertArray = [];
    
  //   for (let i = 0; i < cookies.length - 1; i++) {
  //     for (let j = 0; j < cookies[i].length - 1; j++) {
  //       if (cookies[i][j] === "🍇") {
  //         alertArray.push("Raisin alert!");
  //       }
  //     }
  //   }
  //   alertArray.push("All good!");
  
  //   return alertArray;
  // };
  
  // console.log(
  //   raisinAlarmArray([
  //     ["🍫", "🍫", "🍇", "🍫"],
  //     ["🍫", "🍇", "🍫", "🍫", "🍇"],
  //     ["🍫", "🍫", "🍫"],
  //   ])
  // );