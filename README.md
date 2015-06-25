# Google Analytics jQuery Plugin #



A jQuery plugin that add google analytics event send on DOM object. 

In order to use this plugin , shound download jQuery and add to your page first.


## Get Started

Should get google analytics tracking code first, like:


	<script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  	  ga('create', 'UA-xxxxxxxx-x', 'auto');
	     
	</script>
if you want to track pageview that you have to add this line after `ga('create')`

	ga('send', 'pageview');

## Usage

### 1. Add data attribute on tag

	<span class="ga" data-ga-event="click" data-ga-category="button" data-ga-action="click" data-ga-label="track button">track</span>
	
Attribute           | Description   | Default
:-------------: | :----------- | :-----------
`data-ga-event`         | jQuery EventListener         | click
`data-ga-category`         | event category        | button
`data-ga-action`         | event action        | click
`data-ga-label`         | event name or label        | none

### 2. Run code through jQuery object

	$(".ga").gaEvent();

## Others...

You can also use original ga code like:

	ga('send', 'event', '_category_', '_action_', '_label_');