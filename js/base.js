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
			itemSelector: '.item',
			columnWidth: 225,
			//isAnimated: !Modernizr.csstransitions
		});
		
		$('.item-link').hover(
			function(){
				$('h2, p',this).addClass('link-color');
			},function(){
				$('h2, p',this).removeClass('link-color');
			}
		);
		
		$('#J_Check_more').click(function(e){
			e.preventDefault();
			
			$.get('ajax-items.html', function(data){
				
				var $data = $(data);
				console.log($data);
				$data.imagesLoaded(function(){
					$('#J_Pool').append($data).masonry('appended', $data);
				});
				
				
			});
			
		});
		
		
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