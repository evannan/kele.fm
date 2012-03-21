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
		var $pool = $('#J_Pool');
		
		$pool.masonry({
			itemSelector: '.item',
			columnWidth: 225,
		});
		
		$pool.delegate('.item-link', 'hover', function(){
			$('h2, p',this).toggleClass('link-color');
		});
		
		$('#J_Check_more').click(function(e){
			e.preventDefault();
			
			$.get('ajax-items.html', function(data){
				
				var $data = $(data);
				console.log($data);
				$data.imagesLoaded(function(){
					$pool.append($data).masonry('appended', $data);
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