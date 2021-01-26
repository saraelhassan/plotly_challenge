d3.json("samples.json")
  .then(data => {
    var id940 = data.samples[0]
    console.log(id940.sample_values)

    //testing on one when working loop through whole array
    console.log(id940.sample_values)

    var svalues = id940.sample_values



  })
