(function(){
	

	
	$(function(){
		
		//����
		$('#J_Nav li').hover(
			function(){
				$(this).addClass('hover');
			},function(){
				$(this).removeClass('hover');
			}
		);
		
		//�ٲ���
		$('#J_Pool').masonry({
			itemSelector: '.item'
		});
		$('.item-link').hover(
			function(){
				$('h2, p',this).addClass('link-color');
			},function(){
				$('h2, p',this).removeClass('link-color');
			}
		);
		
		//Ư���ӵ���
		$('#J_Fly_nav a').hover(
			function(){
				$(this).next().andSelf().addClass('c-bdt');
			},function(){
				$(this).next().andSelf().removeClass('c-bdt');
			}
		);
		
	});
	
})();