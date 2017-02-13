var mySwiper = new Swiper('.swiper-container', {
	direction: 'vertical',
	height: window.innerHeight,
	//	prevButton:'.swiper-button-prev',
	//	nextButton:'.swiper-button-next',
	onReachEnd: function(swiper) {
		$('.train-line').addClass('transRight');
		$('.arrowing').hide();
	},
	onReachBeginning: function(swiper) {
		$('.arrowing').show();
	},
	onSlideChangeEnd: function(swiper) {
		$('.coverBox').hide();
	},
});

$(document).ready(function() {
	$('.swiper-slide').height($(window).height());
});

//第二页
$('.house2-1,.shopping').click(function() {
	$('.coverBox2').show();
	$('.popup-show').css({
		'background-image': 'url(img/popup2-1.png)'
	}).show();
});
$('.house2-2').click(function() {
	$('.coverBox2').show();
	$('.popup-show').css({
		'background-image': 'url(img/popup2-2.png)'
	}).show();
});
$('.house2-3,.market').click(function() {
	$('.coverBox2').show();
	$('.popup-show').css({
		'background-image': 'url(img/popup2-3.png)'
	}).show();
});
//第三页
$('.house3-1').click(function() {
	$('.coverBox3').show();
	$('.popup-show').css({
		'background-image': 'url(img/popup3-1.png)'
	}).show();
});
$('.house3-2,.office').click(function() {
	$('.coverBox3').show();
	$('.popup-show').css({
		'background-image': 'url(img/popup3-2.png)'
	}).show();
});
$('.house3-3').click(function() {
	$('.coverBox3').show();
	$('.popup-show').css({
		'background-image': 'url(img/popup3-3.png)'
	}).show();
});
//第四页
$('.house4-1,.shop').click(function() {
	$('.coverBox4').show();
	$('.popup-show').css({
		'background-image': 'url(img/popup4-1.png)'
	}).show();
});
$('.house4-2').click(function() {
	$('.coverBox4').show();
	$('.popup-show').css({
		'background-image': 'url(img/popup4-2.png)'
	}).show();
});
$('.house4-3,.square').click(function() {
	$('.coverBox4').show();
	$('.popup-show').css({
		'background-image': 'url(img/popup4-3.png)'
	}).show();
});
//第五页
$('.house5-1,.furniture').click(function() {
	$('.coverBox5').show();
	$('.popup-show').css({
		'background-image': 'url(img/popup5-1.png)'
	}).show();
});
$('.house5-2,.lion').click(function() {
	$('.coverBox5').show();
	$('.popup-show').css({
		'background-image': 'url(img/popup5-2.png)'
	}).show();
});
$('.house5-3,.electrical').click(function() {
	$('.coverBox5').show();
	$('.popup-show').css({
		'background-image': 'url(img/popup5-3.png)'
	}).show();
});
//第二到五关闭弹窗
$('.popup-show').click(function() {
	$('.coverBox').hide();
});
//第六页
$('.floor1').click(function() {
	$('.coverBox6').show();
	$('.popup').css({
		'background-image': 'url(img/popup1.png)'
	}).show();
});
$('.floor2').click(function() {
	$('.coverBox6').show();
	$('.popup').css({
		'background-image': 'url(img/popup2.png)'
	}).show();
});
$('.floor3').click(function() {
	$('.coverBox6').show();
	$('.popup').css({
		'background-image': 'url(img/popup3.png)'
	}).show();
});
$('.floor4').click(function() {
	$('.coverBox6').show();
	$('.popup').css({
		'background-image': 'url(img/popup4.png)'
	}).show();
});
$('.floor5').click(function() {
	$('.coverBox6').show();
	$('.popup').css({
		'background-image': 'url(img/popup5.png)'
	}).show();
});
$('.floor6').click(function() {
	$('.coverBox6').show();
	$('.popup').css({
		'background-image': 'url(img/popup6.png)'
	}).show();
});

$('.close').click(function() {
	$('.coverBox6').hide();
});
$('.yue').click(function() {
	$('.coverBox7').show();
});
$('.coverBox7').click(function() {
	$(this).hide();
});