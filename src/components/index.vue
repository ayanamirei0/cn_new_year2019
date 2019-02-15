<template>
	<div class="new_year_2019">
		<!-- <h1>{{content}}</h1> -->
		<div class="logo_juren">
			<img
			 src="../assets/img/logo.png"
			 alt=""
			>
		</div>
		<ul class="list_new_year">
			<li
			 class="item"
			 v-for="(item,index) in img_list"
			 :key="index"
			 @click="switchTab(index)"
			>
				<img
				 :class="num == item.id ? '' : 'normal'"
				 :src="num == item.id ? item.img_active : item.img"
				 alt=""
				>
			</li>
		</ul>
		<transition name="slide-fade">
			<div
			 class="xunchun new_year_content"
			 v-show="num === 1"
			>
				<div class="nav_button">
					<img
					 src="../assets/img/page_up.png"
					 @click="pageUp"
					 alt=""
					>
					<img
					 src="../assets/img/page_down.png"
					 @click="pageDown"
					 alt=""
					>
					<img
					 src="../assets/img/close.png"
					 @click="closePage"
					 alt=""
					>
				</div>
				<div class="img_title">
					<img
					 src="../assets/img/second_content_title.png"
					 alt=""
					>
				</div>
				<div class="content_main">
					<p>
						一种传说是：历史上黄帝曾跟蚩尤大战，黄帝在农历正月初一那一天战胜了蚩尤，人们就把这一天定为节日，以纪念黄帝的战绩。
					</p>
					<p>
						另一种传说：我国古代有一种叫做“年”的奇怪的野兽，其生性异常凶残，每年冬春之交，常出来伤害人畜，毁坏田园，闹得人心惶惶。当时，有些比较聪明勇敢的人，想出了巧妙之计：在院子架起木柴堆，大门外摆着桌子，桌上放上猪头、牛头、羊头、狗头和雄黄酒等等。
					</p>
					<p>
						那个叫“年”的怪兽看见猪头、羊头等之后，立即赶来，张开血盆大口，想饱餐一顿。人们看见怪兽来了，马上点燃柴堆，敲起锣鼓，大放鞭炮，顿时火光冲天，锣鼓、鞭炮响声不绝，把怪兽吓得落荒而逃。于是，人们互相祝贺平安，后来人们就把正月初一定为吉祥的日子。
					</p>
				</div>
			</div>
		</transition>
		<transition name="slide-fade">
			<div
			 class="naochun new_year_content"
			 v-show="num === 2"
			>
				<div class="nav_button">
					<img
					 src="../assets/img/page_up.png"
					 @click="pageUp"
					 alt=""
					>
					<img
					 src="../assets/img/page_down.png"
					 @click="pageDown"
					 alt=""
					>
					<img
					 src="../assets/img/close.png"
					 @click="closePage"
					 alt=""
					>
				</div>
				<div class="img_title">
					<img
					 src="../assets/img/third_content_title.png"
					 alt=""
					>
				</div>
				<div class="content_main">
					<div class="naochun_brand">
						<ul class="brand_list">
							<li
							 v-for="(item, index) in naochun_brand"
							 :key="index"
							 @mouseenter="switchBrand(index)"
							>
								<img
								 :src="brand_index == item.id ? item.img_active : item.img"
								 :class="brand_index == item.id ? 'move' : ''"
								 alt=""
								>
							</li>
						</ul>
						<div
						 class="dust text"
						 v-show="brand_index == 0"
						>
							<p>腊月二十四，掸尘扫房子，北方叫扫房，南方叫掸尘。这一天，房前屋后彻底进行打扫，衣被用具洗刷一新，干干净净地迎新春。</p>
							<p>扫尘又称除尘、除残、掸尘、打埃尘等，是中国传统年俗之一。一般在祭灶之后进行。</p>
							<p>民间传说，祭灶之后，百神升天，人间只有一些小神看顾秩序。于是人们相信，在这时搬移物件，打扫都百无禁忌，不用害怕冲撞家中神明。</p>
						</div>
						<div
						 class="couplet text"
						 v-show="brand_index == 1"
						>
							<p>贴春联，是中国民间庆祝春节的第一件事情。</p>
							<p>春联，又叫“春贴”、“门对”、“对联”，它以对仗工整、简洁精巧的文字描绘美好形象，抒发美好愿望，是中国特有的文学形式，是华人们过春节的重要标志。</p>
							<p>每逢春节，无论城市还是农村，家家户户都要精选一幅大红春联贴于门上，为节日增加喜庆气氛。</p>
						</div>
						<div
						 class="year_money text"
						 v-show="brand_index == 2"
						>
							<p>压岁钱在民俗文化中寓意辟邪驱鬼，保佑平安。压岁钱最初的用意是镇恶驱邪。</p>
							<p>因为人们认为小孩容易受鬼祟的侵害，所以用压岁钱压祟驱邪。</p>
							<p>吃完年夜饭后，人人坐在桌旁不许走，等大家都吃完了，由长辈发给晚辈。</p>
						</div>
						<div
						 class="shou_sui text"
						 v-show="brand_index == 3"
						>
							<p>守岁是中国民间在除夕的习俗，又称照虚耗、点岁火、熬年、熬夜等。</p>
							<p>守岁的民俗主要表现为除夕夜灯火通宵不灭，守岁谓之“燃灯照岁”，即大年夜遍燃灯烛，据说如此照过之后，就会使来年家中财富充实。</p>
							<p>守岁亦指在除夕夜一家人团聚，熬夜迎接农历新年的到来。</p>
						</div>
						<div
						 class="dumpling text"
						 v-show="brand_index == 4"
						>
							<p>夜饭有吃饺子的传统，但各地吃饺子的习俗亦不相同，有的地方除夕之夜吃饺子，有的地方初一吃饺子，北方一些山区还有初一到初五每天早上吃饺子的习俗。</p>
							<p>吃饺子是表达人们辞旧迎新之际祈福求吉愿望的特有方式。按照中国古代记时法，晚上11时到第二天凌晨1时为子时。</p>
						</div>
						<div
						 class="banger text"
						 v-show="brand_index == 5"
						>
							<p>相传在远古时候，我们的祖先曾遭受一种叫"年"的野兽的威胁。它捕百兽为食，到了冬天，还会闯入村庄，猎食人和牲畜。</p>
							<p>后来，人们发现，“年”害怕响声，所以发明了烟花。但是今天人们过年放鞭炮是为了喜庆，因为鬼怪被赶跑了，晦气也被赶跑了。</p>
						</div>
					</div>
				</div>
			</div>
		</transition>
		<transition name="slide-fade">
			<div
			 class="huachun new_year_content"
			 v-show="num === 3"
			>
				<div class="nav_button">
					<img
					 src="../assets/img/page_up.png"
					 @click="pageUp"
					 alt=""
					>
					<img
					 src="../assets/img/page_down.png"
					 @click="pageDown"
					 alt=""
					>
					<img
					 src="../assets/img/close.png"
					 @click="closePage"
					 alt=""
					>
				</div>
				<div class="img_title">
					<img
					 src="../assets/img/fourth_content_title.png"
					 alt=""
					>
				</div>
				<div class="content_main">
					<img
					 src="../assets/img/paint_1.png"
					 alt=""
					>
					<img
					 src="../assets/img/paint_2.png"
					 alt=""
					>
					<img
					 src="../assets/img/paint_3.png"
					 alt=""
					>
					<img
					 src="../assets/img/paint_4.png"
					 alt=""
					>
					<img
					 src="../assets/img/paint_5.png"
					 alt=""
					>
					<img
					 src="../assets/img/paint_6.png"
					 alt=""
					>
					<img
					 src="../assets/img/paint_7.png"
					 alt=""
					>
					<img
					 src="../assets/img/paint_8.png"
					 alt=""
					>
					<img
					 src="../assets/img/paint_9.png"
					 alt=""
					>
				</div>
			</div>
		</transition>
		<transition name="slide-fade">
			<div
			 class="jichun new_year_content"
			 v-show="num === 4"
			>
				<div class="nav_button">
					<img
					 src="../assets/img/page_up.png"
					 @click="pageUp"
					 alt=""
					>
					<img
					 src="../assets/img/page_down.png"
					 @click="pageDown"
					 alt=""
					>
					<img
					 src="../assets/img/close.png"
					 @click="closePage"
					 alt=""
					>
				</div>
				<div class="img_title">
					<img
					 src="../assets/img/fifth_content_title.png"
					 alt=""
					>
				</div>
				<div class="content_main">
					<vuescroll :ops="ops">
						<div class="article">
							<img
							 src="../assets/img/title_1.png"
							 alt=""
							>
							<p>我喜欢的节日是热闹无比的春节。在春节中我们可以和家人相见;我们可以拿到长辈们给我们的压岁钱；我们可以和自己的好朋友一起玩耍……</p>
							<div class="outside_link">
								<span>
									<</span>
									 <a
									 target="_blank"
									 href="https://www.juren.com/index.php?m=content&c=index&a=show&catid=90&id=2799"
									>详情</a>
										<span>></span>
							</div>
						</div>
						<div class="article">
							<img
							 src="../assets/img/title_2.png"
							 alt=""
							>
							<p>大年30晚上到了，桌面上有一道道香喷喷的菜，我的口水都快要流出来了。桌上的菜有：酸甜排骨、沙骨汤、糖醋鱼、鸡肉、炸鸡翅、打火锅……</p>
							<div class="outside_link">
								<span>
									<</span>
									 <a
									 target="_blank"
									 href="https://www.juren.com/index.php?m=content&c=index&a=show&catid=90&id=2798"
									>详情</a>
										<span>></span>
							</div>

						</div>
						<div class="article">
							<img
							 src="../assets/img/title_3.png"
							 alt=""
							>
							<p>“当”的一声，一盘饺子放在了我们眼前，乍一想，春节到了。当时是半夜十二点，按照习俗，我们今天只吃两次饭，所以个个都盯住那盘香喷喷……</p>
							<div class="outside_link">
								<span>
									<</span>
									 <a
									 target="_blank"
									 href="https://www.juren.com/index.php?m=content&c=index&a=show&catid=90&id=2797"
									>详情</a>
										<span>></span>
							</div>
						</div>
						<div class="article">
							<img
							 src="../assets/img/title_4.png"
							 alt=""
							>
							<p>在每个崭新的日子里，快乐的呐喊着。不经意间。猛的抬头发现世界变了。从昨日的简单朴素变成了今日的绚丽和热闹。不知何时，那硕大的……</p>
							<div class="outside_link">
								<span>
									<</span>
									 <a
									 target="_blank"
									 href="https://www.juren.com/index.php?m=content&c=index&a=show&catid=90&id=2796"
									>详情</a>
										<span>></span>
							</div>
						</div>
						<div class="article">
							<img
							 src="../assets/img/title_5.png"
							 alt=""
							>
							<p>春节，是一个我国的传统节日，每年过春节时，我们都会收到很多的新年礼物，但是今年的春节却与以往有所不同。以前，我很胆小，过年放鞭炮……</p>
							<div class="outside_link">
								<span>
									<</span>
									 <a
									 target="_blank"
									 href="https://www.juren.com/index.php?m=content&c=index&a=show&catid=126&id=2790"
									>详情</a>
										<span>></span>
							</div>
						</div>
						<div class="article">
							<img
							 src="../assets/img/title_6.png"
							 alt=""
							>
							<p>今年的冬天很暖，像跌入一个软绵绵的梦似的，梦里，是棉花糖稠密而梦幻的甜丝丝的气息。终于，在漫天飞舞的祝福短信下，总算迎来了翘首以盼……</p>
							<div class="outside_link">
								<span>
									<</span>
									 <a
									 target="_blank"
									 href="https://www.juren.com/index.php?m=content&c=index&a=show&catid=126&id=2791"
									>详情</a>
										<span>></span>
							</div>
						</div>
						<div class="article">
							<img
							 src="../assets/img/title_7.png"
							 alt=""
							>
							<p>悠远的钟声，送走了一个难忘的昨天;清脆的爆竹，宣告了一个崭新的纪元。山，在萧条中把春光积淀;水，在冰封下把清波潋滟;生机，就在这继往的凝练……</p>
							<div class="outside_link">
								<span>
									<</span>
									 <a
									 target="_blank"
									 href="https://www.juren.com/index.php?m=content&c=index&a=show&catid=126&id=2792"
									>详情</a>
									<span>></span>
							</div>
						</div>
					</vuescroll>
				</div>
			</div>
		</transition>
		<transition name="slide-fade">
			<div
			 class="hechun new_year_content"
			 v-show="num === 5"
			>
				<div class="nav_button">
					<img
					 src="../assets/img/page_up.png"
					 @click="pageUp"
					 alt=""
					>
					<img
					 src="../assets/img/page_down.png"
					 @click="pageDown"
					 alt=""
					>
					<img
					 src="../assets/img/close.png"
					 @click="closePage"
					 alt=""
					>
				</div>
				<div class="img_title">
					<img
					 src="../assets/img/sixth_content_title.png"
					 alt=""
					>
				</div>
				<div class="content_main">
					<vuescroll :ops="ops">
						<div class="text_frame">
							<img
							 src="../assets/img/txt_frame.png"
							 alt=""
							>
							<p>猪年心情好，祝福先送到，天天没烦恼，幸福身边绕，一颗快乐心，全家平安好，健康要记牢，生活步步高，猪年新春祝你事事好，生活妙，工资高！</p>
						</div>
						<div class="text_frame">
							<img
							 src="../assets/img/txt_frame.png"
							 alt=""
							>
							<p>猪年春节拜年早，乐乐呵呵开心年，平平安安吉祥年，团团圆圆幸福年，红红火火好运年，健健康康如意年，财源滚滚发财年。祝新年快乐，幸福无边！s</p>
						</div>
						<div class="text_frame">
							<img
							 src="../assets/img/txt_frame.png"
							 alt=""
							>
							<p>把时间送给了票子，把梦想送给了房子，把奔波送给了车子，把精力送给了孩子。但无论如何忙碌，新年我一定记得要把祝福送给你：猪年快乐，一生平安！</p>
						</div>
						<div class="text_frame">
							<img
							 src="../assets/img/txt_frame.png"
							 alt=""
							>
							<p>除夕了，来包饺，你一个，我一下；过大年，挂灯笼，红彤彤，吉祥照；猪年了，放鞭炮，啪啪啪，真热闹；初一了，起大早，这拜年，那问好：猪年好！</p>
						</div>

						<div class="text_frame">
							<img
							 src="../assets/img/txt_frame.png"
							 alt=""
							>
							<p>猪年新春到，心情无限妙；快乐把门敲，喜庆身边绕；吉祥跟你跑，幸福对你笑；健康来拥抱，愿你身体好；新的一年，愿你生活美满，幸福逍遥！</p>
						</div>
						<div class="text_frame">
							<img
							 src="../assets/img/txt_frame.png"
							 alt=""
							>
							<p>新年的钟声已经敲响，猪年的喜气开始飘扬，璀璨的烟花绽放希望，富贵的春联承载财气，欢快的颂歌笼罩大地，真挚的祝福已经起航。祝朋友新年福满天，幸福阖家欢！</p>
						</div>
					</vuescroll>

				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import vuescroll from "vuescroll";
import "vuescroll/dist/vuescroll.css";
export default {
	data() {
		return {
			num: "0",
			img_list: [
				{
					id: "0",
					page: "/",
					img: require("../assets/img/00.png"),
					img_active: require("../assets/img/00_selected.png")
				},
				{
					id: "1",
					page: "/src/components/xunchun.vue",
					img: require("../assets/img/01.png"),
					img_active: require("../assets/img/01_selected.png")
				},
				{
					id: "2",
					page: "/src/components/naochun.vue",
					img: require("../assets/img/02.png"),
					img_active: require("../assets/img/02_selected.png")
				},
				{
					id: "3",
					page: "/src/components/huanchun.vue",
					img: require("../assets/img/03.png"),
					img_active: require("../assets/img/03_selected.png")
				},
				{
					id: "4",
					page: "/src/components/jichun.vue",
					img: require("../assets/img/04.png"),
					img_active: require("../assets/img/04_selected.png")
				},
				{
					id: "5",
					page: "/src/components/hechun.vue",
					img: require("../assets/img/05.png"),
					img_active: require("../assets/img/05_selected.png")
				}
			],
			brand_index: "0",
			naochun_brand: [
				{
					id: "0",
					img: require("../assets/img/dust.png"),
					img_active: require("../assets/img/dust_selected.png")
				},
				{
					id: "1",
					img: require("../assets/img/couplet.png"),
					img_active: require("../assets/img/couplet_selected.png")
				},
				{
					id: "2",
					img: require("../assets/img/year_money.png"),
					img_active: require("../assets/img/year_money_selected.png")
				},
				{
					id: "3",
					img: require("../assets/img/shou_sui.png"),
					img_active: require("../assets/img/shou_sui_selected.png")
				},
				{
					id: "4",
					img: require("../assets/img/dumpling.png"),
					img_active: require("../assets/img/dumpling_selected.png")
				},
				{
					id: "5",
					img: require("../assets/img/banger.png"),
					img_active: require("../assets/img/banger_selected.png")
				}
			],
			//关于vuescroll这个ops属性的问题，我知道你看不懂。我也记不住，请移步官方文档。一一对照，谢谢...(https://vuescrolljs.yvescoding.org/zh/guide/configuration.html#vuescroll 看我还告诉你地址，多好)
			ops: {
				vuescroll: {
					mode: "native",
					sizeStrategy: "percent",
					detectResize: true
				},
				scrollPanel: {
					scrollingY: true
				},
				rail: {
					background: "#FDF9F2",
					opacity: 0,
					size: "10px",
					specifyBorderRadius: false,
					keepShow: true
				},
				bar: {
					onlyShowBarOnScroll: false,
					background: "#CF161C",
					size: "10px",
					keepShow: true
				}
			}
		};
	},
	components: {
		vuescroll
	},
	methods: {
		switchTab(index) {
			console.log(index);
			this.num = index;
			document.getElementById("app").className = "theme_" + this.num;
		},
		pageUp() {
			if (this.num == 0) {
				return;
			} else {
				let page = --this.num;
				console.log(this.num, "--");
				document.getElementById("app").className = "theme_" + page;
			}
		},
		pageDown() {
			if (this.num == 5) {
				this.num = 0;
				document.getElementById("app").className = "theme_" + 0;
			} else {
				let page = ++this.num;
				console.log(this.num, "++");
				document.getElementById("app").className = "theme_" + page;
			}
		},
		closePage() {
			this.num = 0;
			document.getElementById("app").className = "theme_" + 0;
		},
		switchBrand(index) {
			console.log(index);
			this.brand_index = index;
		}
	}
};
</script>


<style lang="less" scoped>
@import url("../assets/styles/theme_change.less");
.new_year_2019 {
	background-image: url("../assets/img/bg_first.jpg");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	ul,
	p {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.logo_juren {
		padding: 100px 0 0 24px;
	}
	.list_new_year {
		margin-top: 100px;
		padding: 0;
		.item {
			width: 200px;
			height: 62px;
            border-bottom: 3px solid #edc29c;
			.normal {
				padding: 22px 0 22px 18px;
			}
		}
		li:first-child {
			border: none;
		}
	}
	.new_year_content {
		width: 720px;
		position: absolute;
		top: 6%;
		left: 42%;
		.nav_button {
			position: fixed;
			top: 16%;
			right: 12%;
			img {
				padding-right: 10px;
			}
		}
		.img_title {
			margin: 30px 0 42px 70px;
		}
		.content_main {
			margin-left: 15px;
			p {
				color: #e21205;
				font-size: 26px;
				width: 720px;
				text-indent: 53px;
				line-height: 40px;
			}
		}
	}
	.naochun {
		.naochun_brand {
			.brand_list {
				display: flex;
				flex-wrap: nowrap;
				padding-left: 42px;
				li {
					margin-right: 44px;
					position: relative;
					width: 69px;
					img {
						width: 63px;
					}
				}
				.move {
					position: absolute;
					top: 14%;
					left: 0;
				}
			}
			.text {
				margin-top: 42px;
			}
		}
	}
	.huachun {
		.content_main {
			margin-left: 22px;
			img {
				width: 200px;
				margin: 0 26px 22px 0;
			}
			img:hover {     //鼠标悬停图片变大
				transform: scale(1.2);
				-webkit-transform: scale(1.2); /*Safari 和 Chrome*/
				-moz-transform: scale(1.2); /*Firefox*/
				-ms-transform: scale(1.2); /*IE9*/
				-o-transform: scale(1.2); /*Opera*/
			}
		}
	}
	.jichun {
		.content_main {
			width: 660px;
			height: 450px;
			.article {
				position: relative;
				p {
					width: 610px;
					overflow: hidden;
					margin: 22px 0 30px 0;
					font-size: 22px;
					line-height: 30px;
				}
				.outside_link {
					position: absolute;
					bottom: 0;
					right: 8.5%;
					span {
						font-weight: 600;
						color: #e61205;
						font-size: 26px;
					}
					a {
						color: #e61205;
						font-size: 18px;
						font-weight: 600;
						text-decoration: none;
					}
				}
			}
		}
	}
	.hechun {
		.content_main {
			margin-left: 40px;
			width: 680px;
			height: 510px;
			.text_frame {
				position: relative;
				margin-right: 26px;
				display: inline-block;
				img {
					width: 130px;
				}
				p {
					position: absolute;
					top: 8%;
					left: 0;
					writing-mode: vertical-rl;
					font-size: 16px;
					line-height: 30px;
					text-indent: 0;
					width: 110px;
					height: 410px;
				}
			}
		}
	}
}
</style>

<style lang="less">
.slide-fade-enter-active {
	transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
	opacity: 1;
}
.slide-fade-enter {
	transform: translateX(800px);
}
</style>



