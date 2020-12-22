import React from "react"
import pic1 from "../image/pictur1.png"
import pic2 from '../image/pictur2.png'
import pic3 from "../image/pictur3.png"
import pic4 from "../image/pictur4.png"
import pic5 from "../image/pictur1.jpg"
import pic6 from "../image/pictur5.png"
import pic7 from "../image/pictur6.png"
import pic8 from "../image/pictur2.jpg"
import pic9 from "../image/pictur7.png"
import pic10 from "../image/pictur9.png"
import pic11 from "../image/pictur8.png"
import pic12 from "../image/pictur10.png"
import pic13 from "../image/pictur1.gif"
const PicturesHtml = () => {
	return (
		<div>
			<p>Добавление изображения происходит в два этапа: вначале готовится графический файл желаемого размера, затем он добавляется на страницу через тег <code>{"<img>"}</code>. Сам HTML предназначен только для того, чтобы отобразить требуемую картинку, при этом никак ее не меняя.</p>
			<p>При подготовке изображений следует учесть несколько моментов.</p>
			<ol>
				<li>	Поскольку веб-страница загружается по сети, существенным фактором выступает объем графического файла, встроенного в документ. Чем он меньше, тем быстрее отобразится изображение.</li>
				<li>	2.	Размер картинки необходимо ограничить по ширине, например, установить не более 800 пикселов. Иначе изображение целиком не поместится в окне браузера, и появятся полосы прокрутки.</li>
			</ol>
			<div>
				<h4 className="title-1">Форматы файлов</h4>
				<p>Широкое распространение для веб-графики получили два формата — GIF и JPEG. Их многофункциональность, универсальность, небольшой объем исходных файлов при достаточном для сайта качестве, сослужили им положительную службу, фактически определив их как стандарт веб-изображений. Есть еще формат PNG, который также поддерживается браузерами при добавлении изображений и существует в двух ипостасях — PNG-8 и PNG-24. Однако популярность PNG сильно уступает признанию форматов GIF и JPEG.</p>
				<h5>Формат GIF</h5>
				<p>GIF (Graphics Interchange Format) — формат графических файлов, широко применяемый при создании сайтов. GIF использует 8-битовый цвет и эффективно сжимает сплошные цветные области, при этом сохраняя детали изображения.</p>
				<h5>Особенности</h5>
				<ul className="content-list-2">
					<li className="container-li-1">	Количество цветов в изображении может быть от 2 до 256, но это могут быть любые цвета из 24-битной палитры.</li>
					<li className="container-li-2">Файл в формате GIF может содержать прозрачные участки. Если используется отличный от белого цвета фон, он будет проглядывать сквозь «дыры» в изображении.</li>
					<li className="container-li-3">Поддерживает покадровую смену изображений, что делает формат популярным для создания баннеров и простой анимации.</li>
					<li className="container-li-4">Использует свободный от потерь метод сжатия</li>
				</ul>
				<h5>Область применения</h5>
				<p>Текст, логотипы, иллюстрации с четкими краями, анимированные рисунки, изображения с прозрачными участками, баннеры.</p>
			</div>
			<div>
				<h4 className="title-2">Формат JPEG</h4>
				<p>
					JPEG (Joint Photographic Experts Group) — популярный формат графических файлов, широко применяемый при создании сайтов и для хранения изображений. JPEG поддерживает 24-битовый цвет и сохраняет яркость и оттенки цветов в фотографиях неизменными. Данный формат называют сжатием с потерями, поскольку алгоритм JPEG выборочно отвергает данные. Метод сжатия может внести искажения в рисунок, особенно содержащий текст, мелкие детали или четкие края. Формат JPEG не поддерживает прозрачность. Когда вы сохраняете фотографию в этом формате, прозрачные пиксели заполняются определенным цветом.
				</p>
				<h5>Особенности</h5>
				<ul className="content-list-2">
					<li className="container-li-1">	Количество цветов в изображении — около 16 миллионов, что вполне достаточно для сохранения фотографического качества изображения.</li>
					<li className="container-li-2">	Основная характеристика формата — качество, позволяющее управлять конечным размером файла.</li>
					<li className="container-li-3">	Поддерживает технологию, так называемый прогрессивный JPEG, в котором версия рисунка с низким разрешением появляется в окне просмотра до полной загрузки самого изображения.</li>
				</ul>
				<h5>Область применения</h5>
				<p>Используется преимущественно для фотографий. Не очень подходит для рисунков содержащих прозрачные участки, мелкие детали или текст.</p>
			</div>
			<div>
				<h4 className="title-3">Формат PNG-8</h4>
				<p>PNG-8 (Portable Network Graphics) — формат по своему действию аналогичен GIF. По заверению разработчиков использует улучшенный формат сжатия данных, но как показывает практика, это не всегда так.</p>
				<h5>Особенности</h5>
				<ul className="content-list-2">
					<li className="container-li-1">	Использует 8-битную палитру (256 цветов) в изображении, за что и получил в своем названии цифру восемь. При этом можно выбирать, сколько цветов будет сохраняться в файле — от 2 до 256.</li>
					<li className="container-li-2">В отличие от GIF, не отображает анимацию ни в каком виде.</li>
				</ul>
				<h5>Область применения</h5>
				<p>Текст, логотипы, иллюстрации с четкими краями.</p>
			</div>
			<div>
				<h4 className="title-4">Формат PNG-24</h4>
				<p>PNG-24 — формат, аналогичный PNG-8, но использующий 24-битную палитру цвета Подобно формату JPEG, сохраняет яркость и оттенки цветов в фотографиях. Подобно GIF и формату PNG-8, сохраняет детали изображения, как, например, в линейных рисунках, логотипах, или иллюстрациях</p>
				<h5>Особенности</h5>
				<ul className="content-list-2">
					<li className="container-li-1">	Использует примерно 16,7 млн. цветов в файле, из-за чего этот формат применяется для полноцветных изображений.	</li>
					<li className="container-li-2">Поддерживает многоуровневую прозрачность, это позволяет создавать плавный переход от прозрачной области изображения к цветной, так называемый градиент</li>
					<li className="container-li-3">•	Из-за того, что используемый алгоритм сжатия сохраняет все цвета и пикселы в изображении неизменными, если сравнивать с другими форматами, то у PNG-24 конечный объем графического файла получается наибольшим.</li>
				</ul>
				<h5> Область применения</h5>
				<p>Фотографии, рисунки, содержащие прозрачные и полупрозрачные участки, рисунки с большим количеством цветов и четкими краями изображений.</p>
			</div>
			<div>
				<h4 className="title-5">Добавление рисунка</h4>
				<p>Для добавления изображения на веб-страницу используется тег <code>{`<img>`}</code>, атрибут<b> src </b>которого определяет адрес графического файла. Общий синтаксис добавления изображения будет следующий.</p>

				<code><p>{'<img src="URL" alt="альтернативный текст">'}</p></code>
				<p>URL (Universal Resource Locator, универсальный указатель ресурсов) представляет собой путь к графическому файлу. Для его указания можно использовать как абсолютный, так и относительный адрес. Далее рассмотрим несколько разных путей к графическому файлу для размещения его на веб-странице. Для примера возьмем файл с рисунком, который называется sample.gif и хранится в папке images корня сайта.</p>
				<ul>
					<li>Если в начале адреса стоит слэш (символ /), это значит, что отсчет идет от корня сайта. Например, адрес сайта — http://baklan.narod.ru, значит, написав путь к изображению как /images/bird.jpg, мы, тем самым говорим серверу, что показать следует файл http://baklan.narod.ru/images/bird.jpg. Учтите, что подобные ссылки со слэшем впереди работают только на веб-сервере, на локальном компьютере они действовать не будут.</li>
					<li>Если перед адресом добавляется упоминание протокола http (http://), то речь идет об абсолютной ссылке. Изображение всегда будет загружаться с указанного адреса в Интернете, даже при сохранении веб-страницы на локальный компьютер.</li>
					<li>Двоеточие со слэшем (../) в начале адреса говорит о том, что и рисунок и веб-страница находятся в разных папках, которые размещены на одном уровне. На рисунке ниже показан файл index.html, в который требуется поместить рисунок pic.gif. Тогда относительный путь к изображению из index.html будет ../images/pic.gif. Возможны случаи хранения файлов, что обращение из одного файла к другому превращается в набор двоеточий, например: ../../../images/pic.gif.</li>
				</ul>
				<center>
					<img src={pic1}></img>
				</center>
				<p>Имя папки в начале пути, без всяких слэшей и двоеточий, сообщает, что и текущий файл и папка с изображением находятся на одном уровне. Как показано на рисунке ниже,относительный путь к рисунку pic.gif из файла index.html будет images/pic.gif.</p>
				<center>
					<img src={pic2} width="500"></img>
				</center>
				<div className="wrap-content">
					<table>
						<tr><td>Код</td><td>Результат</td></tr>
						<tr><td><code><pre>
							{`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>Добавление рисунков</title>
 </head>
 <body>
  <p><img src="http://webimg.ru/themes/cloverfield/images/ref_collage.gif" 
        alt="Это абсолютный адрес размещения изображения"></p>
  <p><img src="/example/images/home.png" 
        alt="Адрес размещения изображения относительно корня сайта"></p>
  <p><img src="images/home.png" 
        alt="Адрес размещения изображения относительно текущего HTML-документа"></p>
 </body>
</html>

`}</pre></code></td><td><img src={pic3} width="500"></img></td></tr>
					</table>
				</div>
				<div>
					<h4 className="title-1">Альтернативный текст</h4>
					<p>Альтернативный текст позволяет получить текстовую информацию о рисунке при отключенном в браузере показе картинок или во время их загрузки. Такой текст появляется раньше самого изображения и дает представление об его содержании. Затем зарезервированное пустое поле заменяется картинкой. </p>
					<div className="wrap-content">
						<table>
							<tr><td>Альтернативный текст до загрузки изображения</td><td>Веб-страница после загрузки изображения.

</td></tr>
							<tr><td><img src={pic4} width="500"></img></td><td><img src={pic5} width="500"></img></td></tr>
						</table>

					</div>
					<p>Вид всплывающей подсказки, а именно, ее цвет, фон, шрифт и др. параметры задаются с помощью настроек операционной системы и не могут быть изменены через HTML-файл.</p>
					<p>Для создания альтернативного текста используется атрибут alt тега {"<img>"}.</p>
					<div className="wrap-content">
						<table>
							<tr><td>Код</td><td>Результат</td></tr>
							<tr><td><code><pre>{`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>Альтернативный текст</title>
 </head>
 <body>
  <p><img src="images/robot.jpg" alt="Девочка и робот" width="300" height="388"></p>
 </body>
</html>

`}</pre></code></td><td><img src={pic6} width="500"></img></td></tr>
						</table>
					</div>
					<p>Учтите, что текст в атрибуте alt обязательно должен быть взят в кавычки, как в данном примере.</p>
					<p>Не все браузеры отображают альтернативный текст в виде всплывающей подсказки. Поэтому для ее создания используйте атрибут title.</p>



					<div className="wrap-content">
						<table>
							<tr><td>Код</td><td>Результат</td></tr>
							<tr><td><code><pre>{`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>Атрибут title </title>
 </head>
 <body>
   <p><a href="index.html"><img src="images/home.png" 
       alt="Вернуться на главную страницу" title="Главная страница"></a></p>
 </body>
</html>


`}</pre></code></td><td><img src={pic7} width="500"></img></td></tr>
						</table>
					</div>
					<p>Как показано в данном примере, значения у атрибутов alt и title может различаться, что позволяет установить определенный текст для разных случаев. Только учтите, что длинный текст будет «обрезаться» и отображается не весь. Но поисковые системы, для которых иной раз и применяют атрибут title и alt, вполне его читают.</p>
				</div>
				<div>
					<h4 className="title-2">Изменение размеров рисунка</h4>
					<p>Для изменения размеров рисунка средствами HTML у тега {"<img>"} предусмотрены атрибуты width (ширина) и height (высота). В качестве значения используются пикселы, при этом аргументы должны совпадать с физическими размерами картинки. Например, на рисунке ниже показано изображение, которое имеет размеры 100х111 пикселов.</p>
					<center>
						<img src={pic8} width="100" height="111"></img>
					</center>
					<div className="wrap-content">
						<table>
							<tr><td>Код</td><td>Результат</td></tr>
							<tr><td><code><pre>{`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>Размеры изображения</title>
 </head>
 <body>
  <p><img src="images/figure.jpg" width="100" height="111" alt="Винни-Пух"></p>
 </body>
</html>


`}</pre></code></td><td><img src={pic9} width="500"></img></td></tr>
						</table>
					</div>
					<p>Если размеры изображения указаны явно, то браузер использует их для того, чтобы отображать соответствующую картинке пустую область в процессе загрузки документа. В противном случае браузер ждет, когда рисунок загрузится полностью, после чего меняет ширину и высоту картинки. При этом может произойти переформатирование текста, поскольку первоначально размер картинки не известен и автоматически он устанавливается небольшим.</p>


					<div className="wrap-content">
						<table>
							<tr><td>Размеры картинки не указаны и она еще не загрузилась.</td><td>Картинка загружена, текст переформатирован.</td></tr>
							<tr><td><img src={pic10} width="500"></img></td><td><img src={pic11} width="500"></img></td></tr>
						</table>
					</div>
					<p>Ширину и высоту изображения можно менять как в меньшую, так и большую сторону. Однако на скорость загрузки рисунка это никак не влияет, поскольку размер файла остается неизменным. Поэтому с осторожностью уменьшайте изображение, т.к. это может вызвать недоумение у читателей, отчего такой маленький рисунок так долго грузится. А вот увеличение размеров приводит к обратному эффекту — размер изображения велик, но файл относительно изображения аналогичного размера загружается быстрее.</p>
				</div>
				<div className="wrap-content">
					<table>
						<tr><td>Код</td><td>Результат</td></tr>
						<tr><td><code><pre>{`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>Увеличение размеров изображения</title>
 </head>
 <body>
  <p><img src="images/figure.jpg" width="200" height="222" alt="Винни-Пух"></p>
 </body>


`}</pre></code></td><td><img src={pic12} width="500"></img></td></tr>
					</table>
				</div>
				<p>Такое изменение размеров называется ресемплированием, при этом алгоритм браузера по своим возможностям уступает графическим редакторам. Поэтому увеличивать таким способом изображения нужно только в особых случаях, а то слишком ухудшается качество картинки. Лучше воспользоваться какой-нибудь графической программой. Исключением являются рисунки, содержащие прямоугольные области. На рисунке ниже приведен файл узора, который занимает 54 байта и имеет исходный размер 8 на 8 пикселов, увеличенных до 150 пикселов.</p>
				<center>
					<img src={pic13} width="150" ></img>
					<p><b>Увеличенное изображение.</b></p>
				</center>
				<p>Браузеры используют два алгоритма для ресемплирования — бикубический (дает сглаженные границы и плавный тоновый диапазон цветов) и по ближайшим точкам (сохраняет первоначальный набор цветов и резкость краев). Последние версии браузеров применяют бикубический алгоритм, а старые браузеры, наоборот, алгоритм по ближайшим точкам.</p>
			</div>
		</div>
	)
}

export default PicturesHtml