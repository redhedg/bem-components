# checkbox

Используется для управления параметром выбора с двумя состояниями – «включено» и «выключено».

## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#checkboxtype>type</a> | <code>'button'</code> | <code>BEMJSON</code> | Тип кнопки. |
| <a href=#checkboxchecked>checked</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Выбор чекбокса. |
| <a href=#checkboxdisabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href=#checkboxfocused>focused</a> | <code>true</code> | <code>BEMJSON</code> | Фокус на блоке. |
| <a href=#checkboxsize>size</a> | <code>'m'</code>, <code>'l'</code>  | <code>BEMJSON</code> | Размер чекбокса. Используется только для чекбоксов с <a href=#checkboxtheme>модификатором theme в значении islands</a>. |
| <a href=#checkboxtheme>theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href=#checkboxname>name</a> | <code>String</code> | Имя чекбокса. |
| <a href=#checkboxval>val</a> | <code>String</code> | Значение, возвращаемое чекбоксом, если он выбран. |
| <a href=#checkboxtext>text</a> | <code>String</code> | Текст подписи к чекбоксу. |
| <a href=#checkboxicon>icon</a> | <code>BEMJSON</code> | Иконка. Формируется блоком <a href="../icon/icon.ru.md">icon</a>. Используется только для чекбокса с <a href=#checkboxtype>модификатором type в значении button</a>. |
| <a href=#checkboxtitle>title</a> | <code>String</code> | Всплывающая подсказка. Используется только для чекбокса с <a href=#checkboxtype>модификатором type в значении button</a>. |

## Обзор блока

Атрибут `autocomplete` принудительно переведен в состояние `off` для обеспечения корректной работы блока.

### Модификаторы блока

<a name="checkboxtype"></a>

#### Модификатор `type`

Допустимое значение: `'button'`.

Способ использования: `BEMJSON`.

Модификатор `type` в значении `button` используется для изменения внешнего вида блока на кнопочный. В таком случае выбор чекбокса происходит нажатием на [кнопку](../button/button.ru.md).

```js
{
    block : 'checkbox',
    text : 'Конфеты',
    name: 'button',
    val: '1',
    mods : { theme : 'islands', size : 'm', type : 'button' }
}
```

<a name="checkboxchecked"></a>

#### Модификатор `checked`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор `checked` в значении `true` используется для выбора чекбокса.

```js
{
    block : 'checkbox',
    text : 'Конфеты',
    name: 'name1',
    val : 1,
    mods : { theme : 'islands', size : 'm', checked : true }
}
```

```js
{
    block : 'checkbox',
    text : 'Конфеты',
    name: 'name2',
    val : 2,
    mods : { theme : 'islands', size : 'm', type : 'button', checked : true }
}
```

<a name="checkboxdisabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор `disabled` в значении `true` отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

```js
{
    block : 'checkbox',
    text : 'Конфеты закончились',
    name: 'name1',
    val : 1,
    mods : { theme : 'islands', size : 'm', disabled : true }
}
```

```js
{
    block : 'checkbox',
    text : 'Конфеты закончились',
    name: 'name2',
    val : 2,
    mods : { theme : 'islands', size : 'm', type : 'button', disabled : true }
}
```

<a name="checkboxfocused"></a>

#### Модификатор `focused`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор `focused` в значении `true` отвечает за наличие фокуса на блоке.

```javascript
{
    block : 'button',
    text : 'В фокусе',
    mods : { theme : 'islands', size : 'm', focused : true }
}
```

<a name="checkboxsize"></a>

#### Модификатор `size`

Допустимые значения для темы `islands`: `'m'`, `'l'`.

Способ использования: `BEMJSON`.

Задает размер шрифта и отступов, либо размер кнопки.

Модификатор `size` используется, только если блоку установлен модификатор <a href="#checkboxtheme">theme</a> в значении `islands`.

**m**

```js
{
    block : 'checkbox',
    text : 'Размер m',
    name: 'name1',
    val: '1',
    mods : { theme : 'islands', size : 'm' }
}
```

```js
{
    block : 'checkbox',
    text : 'Размер m',
    name: 'name1',
    val: '1',
    mods : { theme : 'islands', size : 'm', type : 'button' }
}
```

**l**

```js
{
    block : 'checkbox',
    text : 'Размер l',
    name: 'name2',
    val: '2',
    mods : { theme : 'islands', size : 'l' }
}
```

```js
{
    block : 'checkbox',
    text : 'Размер m',
    name: 'name1',
    val: '1',
    mods : { theme : 'islands', size : 'l', type : 'button' }
}
```

<a name="checkboxtheme"></a>
#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способ использования: `BEMJSON`.

Модификатор `theme` отвечает за стилевое оформление блока.

При выборе модификатора `theme` в значении `islands` необходимо обязательно указывать модификатор <a href="#checkboxsize">size</a>.

Без указания модификатора `theme` отображается нативный вид контрола.

```js
{
    block : 'checkbox',
    text : 'Тема islands',
    name: 'islands',
    val: '3',
    mods : { theme : 'islands', size : 'm' }
}
```

### Специализированные поля блока

<a name="checkboxname"></a>
#### Поле `name`

Имя чекбокса. Используется для идентификации обработчиком формы. Определяет значение поля `name`, отправляемое на сервер. Всегда отправляется в паре со значением поля `val`, чтобы клиентская или серверная программа могла однозначно установить, какой пункт выбрал пользователь.

<a name="checkboxval"></a>

#### Поле `val`

Определяет значение поля `val`, отправляемое на сервер. Всегда отправляется в паре со значением поля `name`, чтобы клиентская или серверная программа могла однозначно установить, какой пункт выбрал пользователь.

<a name="checkboxtext"></a>
#### Поле `text`

Определяет текст подписи к чекбоксу.

<a name="checkboxicon"></a>
#### Поле `icon`

Определяет иконку, которая отображается с помощью блока `icon`.

Используется только для чекбокса с <a href=#checkboxtype>модификатором type в значении button</a>.

```js
{
    block : 'checkbox',
    text : 'Поделиться',
    name: 'name1',
    val : 1,
    icon : {
        block : 'icon',
        mods : { social : 'twitter' }
    },
    mods : { theme : 'islands', size : 'm', type : 'button', checked : true }
}
```

<a name="checkboxtitle"></a>
#### Поле `title`

Определяет содержание всплывающей подсказки. Вид такой подсказки зависит от браузера, настроек операционной системы и не может быть изменен с помощью HTML-кода или стилей.

Используется только для чекбокса с <a href=#checkboxtype>модификатором type в значении button</a>.

```js
{
    block : 'checkbox',
    text : 'Поделиться',
    name: 'name1',
    val : 1,
    mods : { theme : 'islands', size : 'm', type : 'button', checked : true },
    icon : {
        block : 'icon',
        mods : { social : 'twitter' }
    },
    title : 'Кнопка выбора социальной сети'
}
```
