


	$(function(){
	///////////////// Disappear onlick focus border	/////////////////
	$("a").focus(function(){	
		$(this).blur();
		});
	});
	///////////////// Onclick Functions Setup	/////////////////
	$(function(){
		$('a.goMenu').click(function(){
			var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
			$body.animate({
				scrollTop: $('#menu').offset().top
			}, 1000, 'easeOutBounce');

			return false;
		});
	});
	$(function(){
		$('a.goAbout').click(function(){
			var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
			$body.animate({
				scrollTop: $('#about').offset().top
			}, 1000, 'easeOutBounce');

			return false;
		});
	});
	
	$(function(){
		$('a.goDesign').click(function(){
			var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
			$body.animate({
				scrollTop: $('#design').offset().top
			}, 1000, 'easeOutBounce');

			return false;
		});
	});
	
	$(function(){
		$('a.goArt').click(function(){
			var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
			$body.animate({
				scrollTop: $('#art').offset().top
			}, 1000, 'easeOutBounce');

			return false;
		});
	});


