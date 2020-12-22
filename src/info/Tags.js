import React from 'react'

import tags from '../image/tags.png'
import result from "../image/res.png"
import result2 from "../image/res2.png"
const Tags = () => {
    return (
        <div>
          

            <div >
                
                <p>Чтобы браузер при отображении документа понимал, что имеет дело не с простым текстом,
                а с элементом форматирования и применяются теги.
                  Общий синтаксис написания тегов следующий. </p>
                <p>Пример тега:</p>
                <code>{"<title>Lorem ipsum</title>"}</code>
                <p>Как видно из данного примера, теги бывают двух типов — одиночные и парные
                (контейнеры). Одиночный тег используется самостоятельно, а парный может включать
                внутри себя другие теги или текст. У тегов допустимы различные атрибуты,
                которые разделяются между собой пробелом. Впрочем, есть теги без всяких дополнительных атрибутов.
                Условно атрибуты можно подразделить на обязательные,
                        они непременно должны присутствовать, и необязательные, их добавление зависит от цели применения тега.</p>
                <div className="wrap-content">
                    <table>
                        <tr><td> <p>Пример кода:</p></td> <td><p>Отображение кода на странице: </p></td></tr>
                        <tr> <td>  <pre> <code>


                            &lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; <br></br>
                        &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;<br></br>

                        &lt;html&gt;<br></br>

                        &lt;head&gt;<br></br>

                        &lt;meta http-equiv=&quot;content-type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;<br></br>

                        &lt;title&gt;Lorem ipsum&lt;/title&gt;<br></br>

                        &lt;/head&gt;<br></br>

                        &lt;body&gt;<br></br>

                        &lt;p&gt;Lorem ipsum dolor sit amet consectetuer cursus pede pellentesque<br></br>

                        vitae pretium. Tristique mus at elit lobortis libero Sed vestibulum ut<br></br>

                        eleifend habitasse. Quis Nam Mauris adipiscing Integer ligula dictum<br></br>

                        sed at enim urna. Et scelerisque id et nibh dui tincidunt Curabitur faucibus<br></br>

                        elit massa. Tincidunt et gravida Phasellus eget parturient faucibus tellus<br></br>

                        at justo sollicitudin. Mi nulla ut adipiscing.&lt;/p&gt;<br></br>

                        &lt;/body&gt;<br></br>

                        &lt;/html&gt;<br></br>
                        </code></pre>
                        </td>

                            <td>
                                <p> Lorem ipsum dolor sit amet consectetuer cursus pede pellentesque vitae pretium. Tristique mus at elit lobortis libero Sed vestibulum ut eleifend habitasse. Quis Nam Mauris adipiscing Integer ligula dictum sed at enim urna. Et scelerisque id et nibh dui tincidunt Curabitur faucibus elit massa. Tincidunt et gravida Phasellus eget parturient faucibus tellus at justo sollicitudin. Mi nulla ut adipiscing. </p>
                            </td>
                        </tr>
                    </table>
                </div>
                <p>В данном примере используется одиночный тег &lt;meta&gt;, а парных тегов сразу несколько: &lt;html&gt;, &lt;head&gt;, &lt;title&gt;, &lt;body&gt; и &lt;p&gt;.</p>

                <div>
                    <h4 className="title-1">Парные теги</h4>
                    <p>Парные теги, называемые по-другому контейнеры, состоят из двух частей — открывающий
                    и закрывающий тег. Открывающий тег обозначается как и одиночный — &lt;тег&gt;,
                    а в закрывающем используется слэш — &lt;/тег&gt;. Допускается вкладывать
                      в контейнер другие теги, однако следует соблюдать их порядок. </p>
                    <img src={tags} className="images" alt="тэги"></img>
                    <p>Не все контейнеры требуют обязательно закрывающего тега, иногда его можно и опустить. Тем не менее, закрывайте все требуемые теги, так вы приучитесь сводить к нулю возможные ошибки.</p>
                </div>
                <div>
                    <h4 className="title-2">Правила применения тегов</h4>
                    <p>Для тегов любого типа действуют определенные правила их использования. Причем, некоторые правила обязательны для выполнения, а другие являются рекомендациями, т.е. их можно выполнять, а можно и нет.</p>
                    <h5>Атрибуты тегов и кавычки </h5>
                    <p>Согласно спецификации HTML все значения атрибутов тегов следует указывать в двойных ("пример") или одинарных кавычках ('пример'). Отсутствие кавычек не приведет к ошибкам, браузеры во многих случаях достаточно корректно обрабатывают код и без кавычек, за исключением текста, содержащего пробелы. </p>
                    <div className="wrap-content">
                        <table>
                            <tr><td>Код</td> <td>Результат</td></tr>
                            <tr><td>  <code>
                                &lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt; <br></br>

&lt;html&gt;<br></br>

&lt;head&gt;<br></br>

&lt;meta http-equiv="content-type" content="text/html; charset=utf-8"&gt;<br></br>

&lt;title&gt;Кавычки в атрибуте alt&lt;/title&gt;<br></br>

&lt;/head&gt;<br></br>


&lt;body&gt;<br></br>


&lt;p&gt;&lt;img src="images/arena.png" alt="Вид заголовка" width="400" height="101"&gt;&lt;/p&gt;<br></br>


&lt;p&gt;&lt;img src="images/arena.png" alt=Вид заголовка width="400" height="101"&gt;&lt;/p&gt;<br></br>


&lt;/body&gt;<br></br>


&lt;/html&gt; <br></br>

                            </code></td><td><img src={result} width="500px" alt="картинка"></img></td></tr>
                        </table>
                    </div>
                    <p>В данном примере строка 8 написана правильно, со всеми кавычками, а в строке 9 у атрибута alt кавычки отсутствуют. Из-за этого браузер в качестве значения alt возьмет только первое слово («Вид»), а слово «заголовка» будет воспринято как ошибочное значение. Поэтому всегда приучайтесь указывать значения атрибутов тегов в кавычках.</p>
                    <h5>Теги можно писать как прописными, так и строчными символами</h5>
                    <p>Любые теги, а также их атрибуты нечувствительны к регистру, поэтому вы вольны выбирать сами, как писать — &lt;BR&gt;, &lt;Br&gt; или &lt;br&gt;. В любом случае рекомендуется придерживаться выбранной формы записи на протяжении всех страниц сайта. Заметим также, что текст, полностью набранный прописными символами, читается хуже, чем текст со строчными символами или смешанный. </p>
                    <h5>Переносы строк </h5>
                    <p>Внутри тега между его атрибутами допустимо ставить перенос строк.</p>
                    <div className='wrap-content'>

                        <table>
                            <tr><td>Пример кода</td><td>Отображение кода</td></tr>
                            <tr>
                                <td>
                                    &lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt;<br></br>

                            &lt;html&gt;<br></br>

                            &lt;head&gt;<br></br>

                            &lt;meta http-equiv="content-type" content="text/html; charset=utf-8"&gt;<br></br>

                            &lt;title&gt;Кавычки в атрибуте alt&lt;/title&gt;<br></br>

                            &lt;/head&gt;<br></br>

                            &lt;body&gt;<br></br>

                            &lt;p&gt;&lt;img src="images/arena.png" alt="Вид заголовка в IE" width="400" height="101"&gt;&lt;/p&gt;

                            &lt;p&gt;&lt;img src="images/arena.png"

alt="Вид заголовка в браузере IE"

width="400"

height="101"&gt;&lt;/p&gt;<br></br>

&lt;/body&gt;<br></br>

&lt;/html&gt;<br></br>
                                </td>
                                <td>
                                    <img src={result2} width="500px" alt="картинка"></img>
                                </td>
                            </tr>


                        </table>

                    </div>
                    <p>В данном примере первый тег &lt;img&gt; набран в одну строку, включая все его атрибуты, а второй тег &lt;img&gt; разбит на несколько строк.

Хотя ошибки при переносе текста в подобном случае и не возникнет, рекомендуем писать теги в одну строку, иначе ухудшается восприятие кода и его становится сложнее править.</p>

                    <h5>Неизвестные теги и атрибуты</h5>
                    <p>Если какой-либо тег или его атрибут был написан неверно, то браузер проигнорирует подобный тег и будет отображать текст так, словно тега и не было. Опять же, следует избегать неизвестных тегов, поскольку код HTML не пройдет валидацию.</p>
                    <h5>Порядок тегов</h5>
                    <p>Существует определенная иерархия вложенности тегов. Например, тег &lt;title&gt; должен находиться внутри контейнера &lt;head&gt;  и нигде иначе. Чтобы не возникло ошибки, следите за тем, чтобы теги располагались в коде правильно.

Если теги между собой равноценны в иерархии связи, то их последовательность не имеет значения. Так, можно поменять местами теги&lt;title&gt; и&lt;meta&gt;, на конечном результате это никак не скажется</p>
                </div>
            </div>
        </div>
    )
}
export default Tags