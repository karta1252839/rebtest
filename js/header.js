Vue.component('header_top_bar', {
  template: `
    <div class="top_bar pc">
		<div class="workframe small">
			<form id="member" class="nowrap_box" name="member" method="post">
				<p><input type="text" placeholder="用戶名(ID)" /></p>
				<p><input type="password" placeholder="密碼" /></p>
				<p><a class="btn login" href="javascript:void(0);" title="登入">登入</a></p>
				<p><a class="btn join" href="javascript:void(0);" title="註冊">註冊</a></p>
				<p><a class="link" href="/" title="公告">公告</a></p>
				<p><a class="link" href="/" title="APP下載">APP下載</a></p>
				<p><a class="link" href="/" title="常見問題">常見問題</a></p>
				<p><a class="link" href="/" title="合作代理">合作代理</a></p>
			</from>
		</div>
	</div>`
});
Vue.component('header_menu', {
  template: `
	<div class="header_menu">
		<div class="workframe small nowrap_box">
			<div id="logo" class="relat_box">
				<a id="menu_btn" class="abso_box mb" href="javascript:void(0);" data-type="1"><span></span><span></span><span></span></a>
				<p><img class="img_contain" src="./image/header/logo.png" /></p>
				<a id="hour24" class="abso_box mb" href="/"><img src="./image/header/img-24hour.png" /></a>
			</div>
			<div id="nav_list" class="nowrap_box pc">
				<a href="" title="真人百家樂"><i></i><font>真人百家樂</font></a>
				<a href="" title="體育博彩"><i></i><font>體育博彩</font></a>
				<a href="" title="棋牌"><i></i><font>棋牌</font></a>
				<a href="" title="電子遊戲"><i></i><font>電子遊戲</font></a>
				<a href="" title="賓果彩票"><i></i><font>賓果彩票</font></a>
				<a href="" title="捕魚王"><i></i><font>捕魚王</font></a>
				<a href="" title="推薦"><i></i><font>推薦</font></a>
				<a href="" title="優惠說明"><i></i><font>優惠說明</font></a>
				<a href="" title="賽事影城"><i></i><font>賽事影城</font></a>
			</div>
			<div id="side_bar" class="fixed_box mb" data-type="1">
				<a id="close_menu" class="abso_box" href="javascript:void(0);"><span></span><span></span></a>
				<div class="list user"><img src="./image/header/icon-user.png" /><p>User123</p></div>
				<div class="list games nowrap_box">
					<a href="/" title="真人娛樂"><i></i><font>真人娛樂</font></a>
					<a href="/" title="體育博彩"><i></i><font>體育博彩</font></a>
					<a href="/" title="棋牌游戲"><i></i><font>棋牌游戲</font></a>
					<a href="/" title="賓果彩票"><i></i><font>賓果彩票</font></a>
					<a href="/" title="電子游戲"><i></i><font>電子游戲</font></a>
					<a href="/" title="捕魚街機"><i></i><font>捕魚街機</font></a>
				</div>
				<div class="list menu">
					<a href="/" title="優惠活動"><i></i>優惠活動</a>
					<a href="/" title="公告"><i></i>公告</a>
					<a href="/" title="常見問題"><i></i>常見問題</a>
					<a href="/" title="維修時間"><i></i>維修時間</a>
					<a href="/" title="APP下載"><i></i>APP下載</a>
				</div>
				<div class="list menu box_2">
					<a href="/" title="存取流程"><i></i>存取流程</a>
					<a href="/" title="玩家評價"><i></i>玩家評價</a>
					<a href="/" title="品牌介紹"><i></i>品牌介紹</a>
					<a href="/" title="推薦好友"><i></i>推薦好友</a>
					<a href="/" title="合營代理"><i></i>合營代理</a>
					<a href="/" title="關於任你博"><i></i>關於任你博</a>
				</div>
				<div class="list menu mamber"><a href="/" title="登出"><i></i>登出</a></div>
			</div>
			<a id="menubg" href="javascript:void(0);" data-type="1"></a>
		</div>
	</div>`
});