
	
			(function($){
				$(document).ready(function(){
                    $('.input-part-icon').click(function(){
			
                        $('.inm').show();
                    
                    });
					$('.bar').click(function(){
			
                        $('.menu-2').slideToggle();
                    
                    });
					$('.see-btn').click(function(){
			
                        $('.mid-show').slideToggle();
                    
                    });


					$('.back_to_top').click(function(){
						$('html, body').animate({scrollTop: 0})
					});
					$(window).scroll(function(){
						var scrolltop = $(this).scrollTop();
				
						// if(scrolltop > 400) {
						//     $('.nav-area').addClass('navbar_bg');
						// } else {
						//     $('.nav-area').removeClass('navbar_bg');
						// }
						if (scrolltop > 600) {
							$('.back_to_top').show(500)
						} else {
							$('.back_to_top').hide(500)
						}
					});


					var swiper = new Swiper(".mySwiper", {
        
						pagination: {
						  el: ".swiper-pagination",
						  dynamicBullets: true,
						},
						slidesPerView: 1,
						spaceBetween: 30,
						freeMode: true,
						autoplay: {
							delay: 3500,
							disableOnInteraction: false,
						  },
						navigation: {
							nextEl: ".swiper-button-next",
							prevEl: ".swiper-button-prev",
						  },
					  });
				
				
				});
			})(jQuery)
	
