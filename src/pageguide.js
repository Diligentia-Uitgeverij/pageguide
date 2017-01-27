function PageGuide(guidesLink) {
  'use strict';

  var self = this;
  var _isShowing = false;
  var _index = 0;
  var _data;
  var _currentGuide;
  var _canvas;
  var _ctx;
  var _guide;
  var _guideTarget;
  var _stageWidth;
  var _stageHeight;
  var _spacing = 8;

  function init() {
    if (
      typeof _data[document.title] === 'undefined' && 
      typeof _data[$('meta[name="pageguide"]').attr('content')] === 'undefined'
    ) {
      return false;
    }

    createButton();
    createCanvas();
    createGuide();
    initEvents();

    self.updateCanvas();
  }

  function createCanvas() {
    $('body').append('<canvas id="pageguide-mask"></canvas>');
    _canvas = $('#pageguide-mask');
    _ctx = document.getElementById('pageguide-mask').getContext('2d');
  };
  function createGuide() {
    $('body').append('<article id="pageguide"><section class="header"><h1><span id="pageguide-title">pageguide-title</span><small id="pageguide-counter">1/5</small></h1></section><section class="body" id="pageguide-content"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa itaque quidem corporis sapiente, laboriosam quaerat soluta quas iure illum, hic accusantium provident reiciendis distinctio libero ut fugit alias vero neque.Explicabo perferendis voluptas excepturi ab veniam adipisci! Harum quos est itaque magnam doloribus ad modi quam alias recusandae id facere fugit repellendus sapiente nam ducimus iure vitae officia minus, dolorem?</p></section><section class="action"><div class="pageguide-btn-group"><div class="pageguide-btn" id="pageguide-btn-previous">&laquo;</div><div class="pageguide-btn" id="pageguide-btn-next">&raquo;</div></div><div class="pageguide-btn" id="pageguide-btn-close">&times;</div></section></article>');
    _guide = $('#pageguide');
  };
  function createButton() {
    $('body').append('<div class="pageguide-btn" id="pageguide-start" data-title="help">?</div>');
  };
  function drawCanvas() {
    _ctx.clearRect(0, 0, _stageWidth, _stageHeight);
    _ctx.fillStyle = 'rgba(0,0,0,0.5)';
    _ctx.fillRect(0, 0, _stageWidth, _stageHeight);

    if (typeof _guideTarget === 'undefined') {
      return false;
    }

    _ctx.clearRect(
      _guideTarget.offset().left -5, 
      _guideTarget.offset().top - 5,
      _guideTarget.outerWidth() + 10,
      _guideTarget.outerHeight() + 10
    );
  }
  function updateGuide() {
    $('#pageguide-title').empty().append(_currentGuide[_index]['title']);
    $('#pageguide-counter').empty().append( (_index +1) + '/'+ _currentGuide.length );
    $('#pageguide-content').empty().append(_currentGuide[_index]['content']);

    var top = 0,
        left = 0,
        scrollTop = 0,
        position = _currentGuide[_index]['position'];
    
    switch (position) {
      case 'top-left': 
        top = _guideTarget.offset().top - _guide.outerHeight() - (_spacing * 3);
        left = _guideTarget.offset().left;
        scrollTop = top - (_spacing * 2);
        break;
      case 'top-right': 
        top = _guideTarget.offset().top - _guide.outerHeight() - (_spacing * 3);
        left = (_guideTarget.offset().left + _guideTarget.outerWidth()) - _guide.outerWidth();
        scrollTop = top - (_spacing * 2);
        break;
      case 'bottom':
        top = _guideTarget.offset().top + _guideTarget.outerHeight() + (_spacing * 3);
        left = _guideTarget.offset().left - (_guide.outerWidth() / 2) + (_guideTarget.outerWidth() / 2);
        scrollTop = _guideTarget.offset().top - (_spacing * 2);
        break;
      case 'bottom-left':
        top = _guideTarget.offset().top + _guideTarget.outerHeight() + (_spacing * 3);
        left = _guideTarget.offset().left;
        scrollTop = _guideTarget.offset().top - (_spacing * 2);
        break;
      case 'bottom-right':
        top = _guideTarget.offset().top + _guideTarget.outerHeight() + (_spacing * 3);
        left = (_guideTarget.offset().left + _guideTarget.outerWidth()) - _guide.outerWidth();
        scrollTop = _guideTarget.offset().top - (_spacing * 2);
        break;
      case 'left': 
        top = _guideTarget.offset().top + (_guideTarget.outerHeight() / 2) - (_guide.outerHeight() / 2);
        left = _guideTarget.offset().left - _guide.outerWidth() -  (_spacing * 3);
        scrollTop = top - (_spacing * 2);
        break;
      case 'left-top': 
        top = _guideTarget.offset().top + (_guideTarget.outerHeight() / 2) - (_spacing * 2);
        left = _guideTarget.offset().left - _guide.outerWidth() -  (_spacing * 3);
        scrollTop = top - (_spacing * 2);
        break;
      case 'left-bottom': 
        top = _guideTarget.offset().top - _guide.outerHeight() + (_spacing * 2) + (_guideTarget.outerHeight() / 2);
        left = _guideTarget.offset().left - _guide.outerWidth() - (_spacing * 3);
        scrollTop = top - (_spacing * 2);
        break;
      case 'right': 
        top = _guideTarget.offset().top + (_guideTarget.outerHeight() / 2) - (_guide.outerHeight() / 2);
        left = _guideTarget.offset().left + _guideTarget.outerWidth() + (_spacing * 3);
        scrollTop = top - (_spacing * 2);
        break;
      case 'right-top': 
        top = _guideTarget.offset().top + (_guideTarget.outerHeight() / 2) - (_spacing * 2);
        left = _guideTarget.offset().left + _guideTarget.outerWidth() + (_spacing * 3);
        scrollTop = top - (_spacing * 2);
        break;
      case 'right-bottom': 
        top = _guideTarget.offset().top - _guide.outerHeight() + (_spacing * 2) + (_guideTarget.outerHeight() / 2);
        left = _guideTarget.offset().left + _guideTarget.outerWidth() + (_spacing * 3);
        scrollTop = top - (_spacing * 2);
        break;
      default: 
        top = _guideTarget.offset().top - _guide.outerHeight() - (_spacing * 3);
        left = _guideTarget.offset().left - (_guide.outerWidth() / 2) + (_guideTarget.outerWidth() / 2);
        scrollTop = top - (_spacing * 2);
        position = 'top';
    }
    _guide.css({ top: top + 'px', left: left + 'px' });
    _guide.removeClass();
    _guide.addClass(position);


    $('html,body').animate({ scrollTop: scrollTop }, 250, 'easeOutQuad');
  }

  function initEvents() {
    $('#pageguide-start').click(function() { self.start(); });
    _canvas.click(function() { self.end(); });
    $('#pageguide-btn-previous').click(function() { self.previous(); });
    $('#pageguide-btn-next').click(function() { self.next(); });
    $('#pageguide-btn-close').click(function() { self.end(); });
    $( window ).resize(function() { self.updateCanvas(); })
    $( window ).keyup(function(evt) {
      if (_isShowing) {
      switch (evt.key) {
        case 'ArrowRight': 
          self.next();
          return false;
          break;
        case 'ArrowLeft': 
          self.previous();
          return false;
          break;
        case 'Escape': 
          self.end();
          return false;
          break;
                     }  
    }
    })
  };

  this.updateCanvas = function() {
    _stageWidth = $( document ).width();
    _stageHeight = $( document ).height();

    _canvas.attr('width', _stageWidth);
    _canvas.attr('height', _stageHeight);

    drawCanvas();
  };
  this.start = function() {
    var key;
    if (typeof _data[document.title] !== 'undefined') {
      key = document.title
    } else if (typeof _data[$('meta[name="pageguide"]').attr('content')] !== 'undefined') {
      key = $('meta[name="pageguide"]').attr('content');
    } else {
      throw error('Can\'t find a pageguide to display.')
    }
    _currentGuide = _data[key].filter(function(target) {
      return $('#' +target.id).length > 0;
    });

    _index = -1;
    findNextTarget();

    updateGuide();
    drawCanvas();

    _guide.fadeIn();
    _canvas.fadeIn();
    _isShowing = true;
  };
  this.next = function() {
    findNextTarget();
    updateGuide();
    drawCanvas();
  };
  this.previous = function() {
    findPreviousTarget();
    updateGuide();
    drawCanvas();
  };
  this.end = function() {
    _guide.fadeOut();
    _canvas.fadeOut();
    _isShowing = false;
  };

  function findNextTarget() {
    _index ++;
    if (_index === _currentGuide.length) {
      _index = 0;
    }

    _guideTarget = $('#' + _currentGuide[_index]['id']);
    if (_guideTarget.length === 0) {
      return findNextTarget()  
    }

    return _currentGuide;
  }
  function findPreviousTarget() {
    _index --;
    if (_index === -1) {
      _index = _currentGuide.length - 1;
    }

    _guideTarget = $('#' + _currentGuide[_index]['id']);
    if (_guideTarget.length === 0) {
      return findPreviousTarget()  
    }

    return _currentGuide;
  }



  (function() {
    if (typeof guidesLink === 'string') {
      $.ajax({ url: guidesLink })
        .done(function(data) {
          _data = data;
          init();
        });
    } else {
      _data = guidesLink;
      init();
    }
  })()
}