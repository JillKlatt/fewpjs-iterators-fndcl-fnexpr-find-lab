
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ] 

  function superbowlWin(array) {
      let solution = array.find(record => record.result === "W")
      return !!solution ? solution.year : undefined
      //array[result].find(function(e) { return e === "W"})

  }