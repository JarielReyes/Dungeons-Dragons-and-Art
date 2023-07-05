// https://interactive-image.readthedocs.io/en/latest/index.html 

var items = [
    {
      sticky: true,
      type: "text",
      title: "The Blooming Capital",
      description: "<b>Hyogo Kozuki</b> - Leader of the Blooming Capital and tactical expert.<br><b>Yamo Kozuki</b> - Fighter and brother to Hyogo. Acts as his protector.<br><b>Aoi Kaminari</b> - From a family that used to rule the current territory.<br><br><b>Taverns</b><br><b>The Drunken Ronin</b> - Soldiers tavern where the alcohol always flows. Sand pits where fights are held.<br><b>Dhuinsen</b> - Wine for those with a finer taste. Gambling with capped losses.<br><b>Zen Dragon</b> - A frequent spot for local priest. Has games for its participants to enjoy.",
      position: {
        left: 780,
        top: 670
      }
    },
    {
      sticky: true,
      type: "text",
      title: "Mangi",
      description: "Has an allegiance with the Kozuki territory",
      position: {
        left: 845,
        top: 465
      }
    },
    {
      sticky: true,
      type: "text",
      title: "Mori",
      description: "Little has been heard from this region",
      position: {
        left: 620,
        top: 400
      }
    },
  ];

  var options = {
    allowHtml: true,
    shareBox: false
  };
  
  $(document).ready(function() {
    $("#map").interactiveImage(items, options);
  });