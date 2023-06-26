$(window).load(function () {
  var c = document.getElementById('canvas');
  c.style.background = "#c51d68e3";
  let going = "down"
  var ctx = c.getContext('2d');
  var RADIUS = 300;
  var num_sections = 8; //set this for number of divisions
  function drawCircle(x, y, r, pos) {
    ctx.beginPath();
    ctx.strokeStyle = '#fff';
    ctx.arc(x, y, r, 1.5 * Math.PI, pos * Math.PI);
    ctx.stroke();
  }
  function drawAngledLine(x, y, length, angle) {
    var radians = (angle / 180) * Math.PI;
    var endX = x + length * Math.cos(radians);
    var endY = y - length * Math.sin(radians);
    ctx.beginPath();
    ctx.strokeStyle = '#fff';
    ctx.moveTo(x, y);
    ctx.lineTo(endX, endY); ctx.closePath();

    ctx.stroke();
  }
  //draw circle outline

  //loop the number of sections to draw each
  for (i = 1; i <= num_sections; i++) {
    drawAngledLine(380, 380, RADIUS, i * (360 / num_sections));
  }

  let contentBox = document.querySelector('.circle-content-wrapper')



  // contentBox.addEventListener('scroll', function () {
  //   let scrollPos = contentBox.scrollTop
  //   let totalHeight = contentBox.scrollHeight
  //   drawCircle(380, 380, RADIUS, ((scrollPos * 2) / totalHeight) - 0.05293831957260806);
  //   // if (going == 'down') {
  //   // } else {
  //   //   drawCircle(380, 380, RADIUS, (1 - (scrollPos / totalHeight)));
  //   // }
  // })

  contentBox.addEventListener('scroll', function () {
    let scrollPos = contentBox.scrollTop;
    let totalHeight = contentBox.scrollHeight;

    // Clear the canvas
    ctx.clearRect(0, 0, c.width, c.height);

    if (scrollPos > 0) {
      // Draw circle
      let circleY = scrollPos + (c.height / 2);
      drawCircle(380, 380, RADIUS, ((scrollPos * 2) / totalHeight) - 0.05293831957260806);
    }
  });

 

});

// Center: arc(100, 75, 50, 0 * Math.PI, 1.5 * Math.PI)
// Start angle: arc(100, 75, 50, 0, 1.5 * Math.PI)
// End angle: arc(100, 75, 50, 0 * Math.PI, 1.5 * Math.PI)
// context.arc(this.xpos, this.ypos, this.radius, 1.5 * Math.PI, 1 * Math.PI);