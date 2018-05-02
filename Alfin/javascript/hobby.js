jQuery(function($){ //on document.ready

			$('#info').overlaycontent({ //initialize overlay on single DIV with id="info"
				speed:500, //duration of animation in milliseconds
				dir:'up' //supports 'up', 'down', 'left', or 'right'
			})

			$('div.imagecontainers').overlaycontent({ //initialize overlay on DIVs with class="imagecontainers"
				speed:300,
				dir:'right',
				opacity:0.8 //opacity: 0 to 1
			})
			
			$('div.imagecontainers1').overlaycontent({ //initialize overlay on DIVs with class="imagecontainers"
				speed:300,
				dir:'up',
				opacity:0.8 //opacity: 0 to 1
			})
			
			$('div.imagecontainers2').overlaycontent({ //initialize overlay on DIVs with class="imagecontainers"
				speed:300,
				dir:'left',
				opacity:0.8 //opacity: 0 to 1
			})

		})