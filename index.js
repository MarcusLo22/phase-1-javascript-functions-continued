// code your solution here
function saturdayFun(activity) {
    if (!activity) {
      return "This Saturday, I want to roller-skate!";
    } else {
      return `This Saturday, I want to ${activity}!`;
    }
  }

  function mondayWork(work) {
    if (!work) {
      return "This Monday, I will go to the office.";
    } else {
      return `This Monday, I will ${work}.`;
    }
  }

  function wrapAdjective(highlight) {
    return function(adjective) {
      return `You are ${highlight}${adjective}${highlight}!`;
    };
  }