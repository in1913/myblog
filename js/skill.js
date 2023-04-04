var barskill1 = new ProgressBar.Line(skill1, {
  strokeWidth: 5,
  easing: 'easeInOut',
  duration: 2000,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 5,
  svgStyle: {width: '100%', height: '100%'},
  text: {
      style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#FFF',
      position: 'absolute',
      left: '50%',
      bottom: '22%',
      padding: 0,
      margin: 0,
      transform: 'translateX(-50%)',
      whiteSpace: 'nowrap'
      },
      autoStyleContainer: false
  },
  from: {color: '#EDEDED'},
  to: {color: '#FF5A5A'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
    bar.setText('HTML,CSS (' + Math.round(bar.value() * 100) + '%)');
  }
  });

var barskill2 = new ProgressBar.Line(skill2, {
  strokeWidth: 5,
  easing: 'easeInOut',
  duration: 2000,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 5,
  svgStyle: {width: '100%', height: '100%'},
  text: {
      style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#FFF',
      position: 'absolute',
      left: '50%',
      bottom: '22%',
      padding: 0,
      margin: 0,
      transform: 'translateX(-50%)',
      whiteSpace: 'nowrap'
      },
      autoStyleContainer: false
  },
  from: {color: '#EDEDED'},
  to: {color: '#84B017'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
    bar.setText('JAVASCRIPT (' + Math.round(bar.value() * 100) + '%)');
  }
  });
  
var barskill3 = new ProgressBar.Line(skill3, {
  strokeWidth: 5,
  easing: 'easeInOut',
  duration: 2000,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 5,
  svgStyle: {width: '100%', height: '100%'},
  text: {
      style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#FFF',
      position: 'absolute',
      left: '50%',
      bottom: '22%',
      padding: 0,
      margin: 0,
      transform: 'translateX(-50%)',
      whiteSpace: 'nowrap'
      },
      autoStyleContainer: false
  },
  from: {color: '#EDEDED'},
  to: {color: '#FF9801'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
    bar.setText('JAVA (' + Math.round(bar.value() * 100) + '%)');
  }
  });
var barskill4 = new ProgressBar.Line(skill4, {
  strokeWidth: 5,
  easing: 'easeInOut',
  duration: 2000,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 5,
  svgStyle: {width: '100%', height: '100%'},
  text: {
      style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#FFF',
      position: 'absolute',
      left: '50%',
      bottom: '22%',
      padding: 0,
      margin: 0,
      transform: 'translateX(-50%)',
      whiteSpace: 'nowrap'
      },
      autoStyleContainer: false
  },
  from: {color: '#EDEDED'},
  to: {color: '#004A94'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
    bar.setText('PYTHON (' + Math.round(bar.value() * 100) + '%)');
  }
  });
  var barskill5 = new ProgressBar.Line(skill5, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 5,
    svgStyle: {width: '100%', height: '100%'},
    text: {
        style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#FFF',
        position: 'absolute',
        left: '50%',
      bottom: '22%',
        padding: 0,
        margin: 0,
        transform: 'translateX(-50%)',
        whiteSpace: 'nowrap'
        },
        autoStyleContainer: false
    },
    from: {color: '#EDEDED'},
    to: {color: '#5B5C6C'},
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
      bar.setText('REACT (' + Math.round(bar.value() * 100) + '%)');
    }
    });
    var barskill6 = new ProgressBar.Line(skill6, {
      strokeWidth: 5,
      easing: 'easeInOut',
      duration: 2000,
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 5,
      svgStyle: {width: '100%', height: '100%'},
      text: {
          style: {
          // Text color.
          // Default: same as stroke color (options.color)
          color: '#FFF',
          position: 'absolute',
          left: '50%',
        bottom: '22%',
          padding: 0,
          margin: 0,
          transform: 'translateX(-50%)',
          whiteSpace: 'nowrap',
          },
          autoStyleContainer: false
      },
      from: {color: '#EDEDED'},
      to: {color: '#2496ED'},
      step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
        bar.setText('MYSQL (' + Math.round(bar.value() * 100) + '%)');
      }
      });


$(window).on("scroll", function(){
  if($(window).scrollTop() >= home.offsetHeight + about.offsetHeight * 0.5 && $(window).scrollTop() <= home.offsetHeight + about.offsetHeight + skills.offsetHeight){
    $("#file").html("~/Skills");
    barskill1.animate(0.8);
    barskill2.animate(0.87);
    barskill3.animate(0.60);
    barskill4.animate(0.90);
    barskill5.animate(0.55);
    barskill6.animate(0.80);
    }else{
    barskill1.animate(0);
    barskill2.animate(0);
    barskill3.animate(0);
    barskill4.animate(0);
    barskill5.animate(0);
    barskill6.animate(0);
      // $("svg").remove();
      // $(".progressbar-text").remove();
    }
});
