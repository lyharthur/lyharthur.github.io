// 當圖片載入後才執行
$(window).load(function(){
	// 先取得先關區塊及圖片的寬高
	// 並設定每張圖片的邊距
	var $block = $('#Gallery'), 
		$li = $block.find('li'), 
		$img = $li.find('img'),
		_width = $img.width(), 
		_height = $img.height(), 
		_margin = 10;
 
	// 把每一個 li 橫向排列好
	$li.each(function(i) {
		var $this = $(this), 
			_left = i * (_width + _margin);
 
		// 先把排列後的位置記錄在 .data('position') 中
		$this.css('left', _left).data('position', {
			left: _left,
			top: parseInt($this.css('top'), 10) || 0
		});
	})
});