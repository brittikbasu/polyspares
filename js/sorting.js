$(window).load(function(){
	
	var $container = $('.blog_block');

	$container.isotope({
		itemSelector : '.element',
		masonry: {columnWidth: 1}
	});	
	
	//Load More for Portfolio
	jQuery.fn.blog_addon = function(addon_options) {
		//Set Variables
		var addon_el = jQuery(this),
			addon_base = this,
			img_count = addon_options.items.length,
			img_per_load = addon_options.load_count,
			$newEls = '',
			loaded_object = '',
			$container = jQuery('.blog_block');
		
		jQuery('.btn_load_more').click(function(){
			$newEls = '';
			loaded_object = '';									   
			loaded_images = $container.find('.added').size();
			if ((img_count - loaded_images) > img_per_load) {
				now_load = img_per_load;
			} else {
				now_load = img_count - loaded_images;
			}
			
			if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

			if (loaded_images < 1) {
				i_start = 1;
			} else {
				i_start = loaded_images+1;
			}

			if (now_load > 0) {
				if (addon_options.type == 0) {
					/*//1 Column Service Type
					for (i = i_start-1; i < i_start+now_load-1; i++) {
						loaded_object = loaded_object + '<div data-category="'+ addon_options.items[i].category +'" class="'+ addon_options.items[i].category +' element row-fluid added"><div class="filter_img span6"><div class="wrapped_img"><a href="'+ addon_options.items[i].post_zoom +'" class="prettyPhoto" rel="prettyPhoto[portfolio1]"><img src="'+ addon_options.items[i].src +'" alt="" width="570" height="340"></a></div></div><div class="portfolio_dscr span6"><div class="bg_title"><h4><a href="'+ addon_options.items[i].url +'">'+ addon_options.items[i].title +'</a></h4></div>'+ addon_options.items[i].description +'</div></div>';
					}*/
				} else {
					//2-4 Columns Portfolio Type
					for (i = i_start-1; i < i_start+now_load-1; i++) {
						loaded_object = loaded_object + '<div class="element '+ addon_options.items[i].category +'"><div class="blog_item"><div class="blog_img"><img src="'+ addon_options.items[i].src +'" alt="" /></div><div class="blog_description '+ addon_options.items[i].descr_size +'"><a class="title" href="'+ addon_options.items[i].url +'" alt="">'+ addon_options.items[i].title +'</a><div class="blog_info"><span>by: <a href="'+ addon_options.items[i].url +'" alt="">'+ addon_options.items[i].post_by +'</a></span></div><div>'+ addon_options.items[i].content +'</div></div></div></div>';
					}
				}
				
				$newEls = jQuery(loaded_object);
				$container.isotope('insert', $newEls, function() {
					$container.isotope('reLayout');
				});
			}
		});
	}	

});





