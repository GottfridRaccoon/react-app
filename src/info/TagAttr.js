import React from 'react'
import Navbar from "../navigation/Navbar"
import Palitr from "../image/palitr.jpg"
import Color from "../image/color1.png"
import img1 from "../image/img1.png"
import img2 from "../image/img2.png"
import absolute from "../image/address.png"

const TagAttr = () => {

	return (
		<div>
			<Navbar />
			<div className="content-container">
				<h2 className="content-title">Значения атрибутов тегов</h2>
				<p>Атрибуты тегов расширяют возможности самих тегов и позволяют гибко управлять различными настройками отображения элементов веб-страницы. Общее количество атрибутов достаточно велико, но их значения, как правило, можно сгруппировать по разным типам, например, задающих цвет, размер, адрес и др. Далее рассмотрим основные типы значений. </p>
				<div>
					<h4 className="title-1">Цвет</h4>
					<p>В HTML цвет задается одним из двух путей: с помощью шестнадцатеричного кода и по названию некоторых цветов. Преимущественно используется способ, основанный на шестнадцатеричной системе исчисления, как наиболее универсальный. </p>
					<h5>Шестнадцатеричные цвета</h5>
					<p>Для задания цветов в HTML используются числа в шестнадцатеричном коде. Шестнадцатеричная система, в отличие от десятичной системы, базируется, как следует из ее названия, на числе 16. Цифры будут следующие: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F. Числа от 10 до 15 заменены латинскими буквами. В таблице приведено соответствие десятичных и шестнадцатеричных чисел.</p>
					<div className="wrap-content">
						<table className="table-1">
							<tr><td>Десятичные </td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6 </td><td>7 </td><td>8 </td><td>9 </td><td>10 </td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td></tr>
							<tr><td>Шестнадцатеричные</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6 </td><td>7 </td><td>8 </td><td>9 </td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td> </tr>
						</table>
						<p>Числа больше 15 в шестнадцатеричной системе образуются объединением двух чисел в одно. Например, числу 255 в десятичной системе соответствует число FF в шестнадцатеричной. </p>
						<table className="table-1">
							<tr>
								<td>Десятичные </td><td>16</td><td>17</td>
								<td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td>
								<td>24</td><td>25 </td><td>26</td><td>27</td><td>28</td>
							</tr>
							<tr>
								<td>Шестнадцатеричные</td><td>10 </td><td>11</td><td>12</td><td>13</td><td>14</td>
								<td>15</td><td>16 </td><td>17 </td><td>18 </td><td>19 </td><td>1A</td><td>1B</td>
								<td>1C</td>
							</tr>
						</table>
					</div>
					<p>Чтобы не возникало путаницы в определении системы счисления, перед шестнадцатеричным числом ставится символ решетки #, например #aa69cc. При этом регистр значения не имеет, поэтому допустимо писать #F0F0F0 или #f0f0f0</p>
					<p>Типичный цвет, используемый в HTML, выглядит следующим образом. </p>
					<code><pre>{"<body bgcolor='#fa8e47'> "}</pre></code>
					<p>Здесь цвет фона веб-страницы задан как #FA8E47. Символ решетки # перед числом означает, что оно шестнадцатеричное. Первые две цифры (FA) определяют красную составляющую цвета, цифры с третьей по четвертую (8E) — зеленую, а последние две цифры (47) — синюю. В итоге получится такой цвет. </p>
					<p><b style={{ backgroundColor: "red", padding: "2px", color: "white" }}>FA</b> +<b style={{ backgroundColor: "green", padding: "2px", color: "white" }}> 8E</b> +<b style={{ backgroundColor: "blue", padding: "2px", color: "white" }}> 47</b > = <b style={{ backgroundColor: "#FA8E47", padding: "2px", color: "white" }}>FA8E47 </b></p>
					<p>Каждый из трех цветов — красный, зеленый и синий — может принимать значения от 00 до FF, что в итоге образует 256 оттенков. Таким образом, общее количество цветов может быть 256х256х256 = 16.777.216 комбинаций. Цветовая модель, основанная на красной, зеленой и синей составляющей получила название <i>RGB</i> (red, green, blue; красный, зеленый, синий). Эта модель аддитивная (от add — складывать), при которой сложение всех трех компонент образует белый цвет. </p>
					<p>Чтобы легче ориентироваться в шестнадцатеричных цветах, примите во внимание некоторые правила. </p>
					<ul>
						<li> Если значения компонент цвета одинаковы (например: #D6D6D6), то получится серый оттенок. Чем больше число, тем светлее цвет, значения при этом меняются от #000000 (черный) до #FFFFFF (белый).</li>
						<li> Ярко-красный цвет образуется, если красный компонент сделать максимальным (FF), а остальные компоненты обнулить. Цвет со значением #FF0000 самый красный из возможных красных оттенков. Аналогично обстоит с зеленым цветом (#00FF00) и синим (#0000FF).</li>
						<li> Желтый цвет (#FFFF00) получается смешением красного с зеленым. Это хорошо видно на цветовом круге (рис. 6.1), где представлены основные цвета (красный, зеленый, синий) и комплементарные или дополнительные. К ним относятся желтый, голубой и фиолетовый (еще называемым пурпурным). Вообще, любой цвет можно получить смешением близлежащих к нему цветов. Так, голубой (#00FFFF) получается за счет объединения синего и зеленого цвета. </li>
					</ul>
					<p>Цвета по шестнадцатеричным значениям не обязательно подбирать эмпирическим путем. Для этой цели подойдет графический редактор, умеющий работать с разными цветовыми моделями, например, Adobe Photoshop. Далее показано окно для выбора цвета в этой программе, линией обведено полученное шестнадцатеричное значение текущего цвета. Его можно скопировать и вставить к себе в код. </p>

					<div className="image-center" ><img src={Palitr} alt=" палитра" ></img></div>
				</div>
				<div>
					<h4 className="title-2">Веб-цвета. </h4>
					<p>Если установить качество цветопередачи монитора в 8 бит (256 цветов), то один и тот же цвет может показываться в разных браузерах по-своему. Это связано со способом отображения графики, когда браузер работает со своей собственной палитрой и не может показать цвет, который у него в палитре отсутствует. В этом случае цвет заменяется сочетанием пикселов других, близких к нему, цветов, имитирующих заданный. Чтобы цвет оставался неизменным в разных браузерах, ввели палитру так называемых веб-цветов. Веб-цветами называются такие цвета, для каждой составляющей которых — красной, зеленой и синей — устанавливается одно из шести значений — 0 (00), 51 (33), 102 (66), 153 (99), 204 (CC), 255 (FF). В скобках указано шестнадцатеричное значение данной компоненты. Общее количество цветов из всех возможных сочетаний дает 6х6х6 — 216 цветов. Пример веб-цвета — #33FF66</p>
					<p>Основная особенность веб-цвета заключается в том, что он показывается одинаково во всех браузерах. В данный момент актуальность веб-цветов весьма мала из-за повышения качества мониторов и расширения их возможностей. </p>
				</div>
				<div>
					<h4 className="title-3">Цвета по названию</h4>
					<p>Чтобы не запоминать совокупность цифр, вместо них можно использовать имена широко используемых цветов. В таблице приведены имена популярных названий цветов.</p>
					<div className="wrap-content">

						<table className="table-1">
							<tr><td>Имя цвета</td><td>Цвет</td><td>Описание </td><td>Шестнадцатеричное значение </td></tr>
							<tr><td>black</td><td style={{ backgroundColor: "black" }}></td><td>Черный </td><td>#000000 </td></tr>
							<tr><td>blue</td><td style={{ backgroundColor: "blue" }}></td><td>Синий </td><td>#0000FF</td></tr>
							<tr><td>fuchsia</td><td style={{ backgroundColor: "fuchsia" }}></td><td>Светло-фиолетовый</td><td>#FF00FF </td></tr>
							<tr><td>gray </td><td style={{ backgroundColor: "gray " }}></td><td>Темно-Серый </td><td>#808080 </td></tr>
							<tr><td>green </td><td style={{ backgroundColor: "green " }}></td><td>Зеленый </td><td>#008000 </td></tr>
							<tr><td>lime </td><td style={{ backgroundColor: "lime " }}></td><td>Cветло-Зеленый </td><td>#00FF00  </td></tr>
							<tr><td>maroon </td><td style={{ backgroundColor: "maroon " }}></td><td>Темно-красный</td><td>#800000 </td></tr>
							<tr><td>navy  </td><td style={{ backgroundColor: "navy  " }}></td><td>Темно-синий</td><td>#000080 </td></tr>
							<tr><td>olive  </td><td style={{ backgroundColor: "olive  " }}></td><td>Оливковый</td><td>#808000  </td></tr>
							<tr><td>purple  </td><td style={{ backgroundColor: "purple  " }}></td><td>Пурпурный</td><td>#800080  </td></tr>
							<tr><td>red   </td><td style={{ backgroundColor: "red   " }}></td><td>Красный</td><td>#FF0000 </td></tr>
							<tr><td>silver  </td><td style={{ backgroundColor: "silver   " }}></td><td>Светло-серый</td><td>#C0C0C0   </td></tr>
							<tr><td>teal   </td><td style={{ backgroundColor: "teal  " }}></td><td> Сине-зеленый</td><td>#008080  </td></tr>
							<tr><td>white   </td><td style={{ backgroundColor: "white   " }}></td><td>Белый</td><td>#FFFFFF </td></tr>
							<tr><td>yellow  </td><td style={{ backgroundColor: "yellow   " }}></td><td>Желтый</td><td>#FFFF00  </td></tr>


						</table>

					</div>
					<p>Не имеет значения, каким способом вы задаете цвет — по его имени или с помощью шестнадцатеричных чисел. По своему действию эти способы равны. В примере показано, как установить цвет фона и текста веб-страницы.</p>
					<div className="wrap-content">
						<table>
							<tr><td>Пример. Цвет фона и текста</td><td>Результат</td></tr>
							<tr><td><code><pre>{`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
 <head>
  <title>Цвета</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
 </head>
 <body bgcolor="teal" text="#ffffff">
  <p>Пример текста</p>
 </body>
</html>
`}</pre></code></td><td><img src={Color} style={{ width: "500px" }} alt="цвет"></img> </td></tr>
						</table>
						<p>В данном примере цвет фона задается с помощью атрибута <b>bgcolor</b> тега {'<body>'}, а цвет текста через атрибут text. Для разнообразия значение у атрибута text установлено в виде шестнадцатеричного числа, а у <b>bgcolor</b> с помощью зарезервированного ключевого слова <i>teal</i>.</p>

					</div>
				</div>
				<div>
					<h4 className="title-4">Размер</h4>
					<p>
						В HTML размеры элементов или расстояния между ними задаются в пикселах или процентах. Пиксел — это элементарная точка на экране монитора, является относительной единицей измерения, ее величина зависит от установленного экранного разрешения и размера монитора. Возьмем, к примеру, популярное разрешение монитора 1024х768 пикселов. Картинка с такими же размерами будет занимать всю область экрана. Увеличив разрешение монитора до 1280х1024, мы, тем самым, уменьшим размеры изображения на экране.
					</p>
					<p>При использовании пикселов в качестве значений пишется только число без указания единиц, например:<b>width="380"</b> . В примере приведено добавление изображения с заданными размерами.

</p>

					<div className="wrap-content">

						<table>
							<tr><td>Код</td><td>Результат</td></tr>
							<tr><td><code><pre>{`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
 <head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8">
  <title>Изображение</title>
 </head>
 <body>
  <p><img src="images/figure.jpg" alt="Винни-Пух в гостях у Кролика"
  width="100" height="111" hspace="4" vspace="4" border="2"></p>
 </body>
</html>
`}</pre></code></td><td><img src={img1} style={{ width: "500px" }} alt="Картинка"></img></td></tr>
						</table>
					</div>


					<p>В данном примере рисунок имеет ширину 100 пикселов (<b>width="100"</b>), высоту 111 пикселов (<b>height="111"</b>), горизонтальный и вертикальный отступ по 4 пиксела (<b>hspace</b> и <b>vspace</b>) и толщину границы вокруг картинки 2 пиксела (<b>border="2"</b>).</p>
					<p>Процентная запись удачно дополняет пикселы, поскольку позволяет привязаться к размерам определенного элемента, к примеру, окна браузера. Так, если задать у картинки ширину 100%, то рисунок будет заполнять все свободное пространство окна по ширине. Браузер понимает, что речь идет о процентах, если после числа добавляется символ %, например:<b>width="40%"</b> .</p>
					<p>Размеры допустимо задавать только в целых числах. Это правило относится как к пикселам, так и процентам.</p>
					<p>Учтите, что размер в процентах вычисляется от размеров родительского элемента, иными словами, контейнера, внутри которого располагается элемент. Если родитель явно не задан, тогда за отсчет принимается окно браузера. В примере приведен код веб-страницы, в котором ширина элементов задается в процентах.</p>

					<div className="wrap-content">

						<table>
							<tr><td>Код</td><td>Результат</td></tr>
							<tr><td><code><pre>{`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
 <head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8">
  <title>Изображение</title>
 </head>
 <body>
  <p><img src="images/figure.jpg" alt="Винни-Пух в гостях у Кролика" width="100%"></p>
 </body>
</html>

`}</pre></code></td><td><img src={img2} style={{ width: "500px" }} alt="картинка"></img></td></tr>
						</table>


					</div>
					<p>В данном примере ширина картинки задана как 100%, при этом высота изображения явно не задается, поскольку она вычисляется автоматически. Вид страницы при таких размерах картинки показан на рисунке выше.</p>
					<p>Обратите внимание, что в изображении появляются заметные искажения, это связано с увеличением картинки вопреки ее исходным размерам.</p>

					<p>Как вы понимаете, ширина окна принимается за 100%, но ее легко превысить, причем ненароком. В частности, стоит только добавить в примере к тегу <code>{"<img> "}</code>отступы по горизонтали (<b>hspace="10"</b>) и ширина изображения станет 100%+20. Это в свою очередь приведет к появлению горизонтальной полосы прокрутки. Учитывайте этот нюанс при установке размеров элементов.</p>
				</div>
				<div>
					<h4 className="title-5">Адрес</h4>
					<p>Адресом называется путь к документу, например, к графическому файлу. Адрес необходим в тех случаях, когда делается ссылка на веб-страницу или загружается определенный файл. Например, в теге <code>{'<img>'}</code> адрес используется в качестве значения атрибута <b>src</b>, он задает путь к файлу с изображением.</p>
					<p>Синонимом адреса выступает URL (Universal Resource Locator, универсальный указатель ресурсов), различают абсолютные и относительные адреса.</p>
					<h5>Абсолютные адреса</h5>
					<p>Подобные адреса работают везде и всюду независимо от имени сайта или веб-страницы, где задан URL, и начинаются всегда с указания протокола передачи данных. Для веб-страниц это обычно HTTP (HyperText Transfer Protocol, протокол передачи гипертекста), соответственно, абсолютные адреса начинаются с ключевого слова <b>http://</b>. В примере ниже приведена ссылка, в которой применяется абсолютный адрес.</p>
					<div className="wrap-content">
						<tr><td>Код</td><td>Пример</td></tr>
						<tr><td>

							<code><pre>{`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
 <head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8">
  <title>Ссылка</title>
 </head>
 <body>
  <p><a href="http://htmlbook.ru/html/body">Описание тега BODY</a></p>
 </body>
</html>
`}</pre></code></td><td><img src={absolute} style={{ width: "500px" }} alt="absaddr"></img></td></tr>
					</div>
					<p>В данном примере текстовая ссылка ведет на сайт htmlbook.ru и указывает на веб-страницу с именем body.html, которая располагается в каталоге html.
					Абсолютные адреса применяются в первую очередь для указания на другой сетевой ресурс и достаточно редко используются в рамках одного сайта.
</p>
					<h5>Относительные адреса</h5>
					<p>Относительные адреса указываются от корня сайта или текущего документа. Например, код <code>{'<img src="pic.gif"> '}</code>означает загрузить графический файл с именем pic.gif, который располагается в той же папке, что и сама веб-страница. Далее рассмотрим несколько примеров таких адресов.</p>
					<p><code>/</code></p>
					<p>Адрес указывает обычно на файл index.html, который находится в корне сайта. Если файл index.html отсутствует, браузер, как правило, показывает список файлов, находящихся в данном каталоге. Имя файла не обязательно должно быть index.html, этот параметр меняется через настройки веб-сервера — так называется программа, которая анализирует приходящие от браузера запросы и передает ему документы, показываемые пользователю.</p>
					<p><code>/images/pic.gif</code></p>
					<p>Слэш (символ /) перед адресом говорит о том, что адресация начинается от корня сайта. Ссылка ведет на рисунок pic.gif, который находится в папке images. А та в свою очередь размещена в корне сайта.</p>
					<p><code>../help/me.html</code></p>
					<p>Две точки перед именем указывают браузеру перейти на уровень выше в списке каталогов сайта и там «поискать» в папке help файл me.html.</p>
					<p><code>manual/info.html</code></p>
					<p>Если перед именем папки нет никаких дополнительных символов, вроде точек или слэша, то папка размещена внутри текущего каталога, а уже в ней располагается файл info.html.</p>
					<p>Адреса относительно корня сайта вроде /demo/ работают только под управлением веб-сервера и на локальном компьютере не применимы.</p>
					<p>В примере ниже приведены ссылки, в которых используются относительные адреса.</p>
					<p><code><pre>{`
	<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
	<html>
	 <head>
	   <meta http-equiv="content-type" content="text/html; charset=utf-8">
	   <title>Ссылки</title>
	 </head>
	 <body>
	   <p><a href="images/xxx.jpg">Посмотрите на мою фотографию!</a></p>
	   <p><a href="tip.html">Как сделать такое же фото?</a></p>
	 </body>
	</html>
	
	`}</pre></code></p>

					<a className="link-1">Пример отображения такой страницы</a>
					<p>Иногда можно встретить в адресе ссылки путь в виде <b>./file/doc.html</b>. Точка со слэшем означает, что отсчет ведется от текущей папки. Подобная запись избыточна и ее можно сократить до <b>file/doc.html</b>.</p>
				</div>
			</div>
		</div >
	)
}
export default TagAttr