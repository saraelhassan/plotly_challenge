d3.json("samples.json")
  .then(sample_data => {
    console.log(sample_data)



    var Svalues = sample_data.samples[0].sample_values;
    console.log(Svalues)

    var otu_ids = sample_data.samples[0].otu_ids;
    console.log(otu_ids)

    var otu_labels = sample_data.samples[0].otu_labels;
    console.log(otu_labels)


    //retreiving only the top 10 otu samples
    var SamValues = Svalues.slice(0, 10).reverse();
    console.log(SamValues)

    var SIDS = otu_ids.slice(0, 10).reverse();
    console.log(SIDS)

    var SLABELS = otu_labels.slice(0, 10).reverse();
    console.log(SLABELS)

    // Trace1 for the samples_data
    var trace1 = {
      x: Svalues,
      y: SIDS.map((otu_id) => `OTU_ID ${otu_id}`),
      text: otu_labels,
      marker: {
        color: 'blue',
        size: 100
      },
      type: "bar",
      orientation: "h",
    };

    // data
    var data = [trace1];
    // Apply the layout
    var layout = {
      title: "bellybuttons utos",
      yaxis: {
        tickmode: "linear",
      },
      margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 30
      }
    };

    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("bar", data, layout);

    // bubble plot

    var trace2 = {
      x: sample_data.samples[0].otu_ids.slice(0, 10).reverse(),
      y: sample_data.samples[0].sample_values.slice(0, 10).reverse(),
      text: sample_data.samples[0].otu_labels.slice(0, 10).reverse(),
      mode: "markers",

      marker: {
        size: sample_data.samples[0].sample_values.slice(0, 10).reverse(),
        color: sample_data.samples[0].otu_ids.slice(0, 10).reverse(),
        colorscale: "Earth"


      }
    };
    //Data2
    var data2 = [trace2];


    //layout2

    var layout2 = {

      title: 'Marker Size',
      showlegend: false,
      /*  height: 600,
       width: 600, */
      margin: { t: 30 },
      hovermode: "closest"
    };


    Plotly.newPlot("bubble", data2, layout2);




  });

// render data 
function init() {
  var id_dropdown = d3.select("#selDataset");
  //read the data
  d3.json("samples.json").then((sample_data) => {
    console.log(sample_data)

    // get id data to dropdown menu
    sample_data.names.forEach(function (name) {
      id_dropdown.append("option").text(name).property("value");
    });

    // display data and plots
    getPlots(sample_data.names[0]);
    getDemoInfo(sample_data.names[0]);
  });



}

init();




