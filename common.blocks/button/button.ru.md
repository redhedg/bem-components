# button

Используется для создания различных типов кнопок.

## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#buttontype>type</a> | <code>'link'</code>, <code>'submit'</code> | <code>BEMJSON</code> | Типы кнопок.|
| <a href=#buttonview>view</a> | <code>'action'</code>, <code>'pseudo'</code> | <code>BEMJSON</code> | Визуальное выделение кнопки.|
| <a href=#buttontoggle>togglable</a> | <code>'check'</code>, <code>'radio'</code> | <code>BEMJSON</code> | Типы переключателей.|
| <a href=#buttonpressed>pressed</a> | <code>true</code> | Автоматически | Действие «нажатие на кнопку». |
| <a href=#buttondisabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href=#buttonfocused>focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Фокус на блоке. |
| <a href=#buttonsize>size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | Размер кнопки. Используется только для кнопок с <a href=#buttonthemes>модификатором theme в значении islands</a>.|
| <a href=#buttonthemes>theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href=#buttonname>name</a> | <code>String</code> | Значение, отправляемое на сервер. Не используется, если выбран тип кнопки с <a href="#link-button">модификатором type в значении link</a>. |
| <a href=#buttonval>val</a> | <code>String</code> | Значение, отправляемое на сервер. Не используется, если выбран тип кнопки с <a href="#link-button">модификатором type в значении link</a>. |
| <a href=#buttontext>text</a> | <code>String</code>| Текст кнопки. |
| <a href=#buttonurl>url</a> | <code>String</code>| Адрес ссылки. Используется только для кнопки с <a href="#link-button">модификатором type в значении link</a>. |
| <a href=#buttonicon>icon</a> | <code>BEMJSON</code> | Иконка на кнопке. Формируется блоком <a href="../icon/icon.ru.md">icon</a>. |
| <a href=#buttontitle>title</a> | <code>String</code> | Всплывающая подсказка. |
| <a href=#buttonid>id</a> | <code>BEMJSON</code> | Уникальный идентификатор кнопки. |
| <a href=#buttontab>tabIndex</a> | <code>Number</code> | Последовательность перехода между кнопками при нажатии на <code>Tab</code>. |

## Обзор блока

Блок `button` предоставляет возможность изменять размер, состояние, содержимое и внешний вид кнопок.

### Модификаторы блока

<a name="buttontype"></a>

#### Модификатор `type`

Допустимые значения: `'link'`, `'submit'`.

Способ использования: `BEMJSON`.

<a name="link-button"></a>

##### Кнопка-ссылка (модификатор `type` в значении `link`)

Модификатор `type` в значении `link` используется для изменения поведения кнопки: при нажатии на кнопку осуществляется переход по адресу, указанному в поле <a href="#buttonurl">url</a>.

```js
{
    block : 'button',
    url : 'https://bem.info/',
    text : 'Попробуй БЭМ',
    mods : { theme : 'islands', size : 'm', type : 'link' }
}
```

##### Кнопка отправки формы (модификатор `type` в значении `submit`)

Модификатор `type` в значении `submit` используется для создания кнопки, обеспечивающей отправку данных на сервер. Кнопка такого типа всегда должна располагаться в форме.

```js
{
    block : 'button',
    text : 'Я отправляю данные',
    mods : { theme : 'islands', size : 'm', type : 'submit' }
}
```

<a name="buttonview"></a>

#### Модификатор `view`

Допустимые значения: `'action'`, `'pseudo'`.

Способ использования: `BEMJSON`.

##### Кнопка действия (модификатор `view` в значении `action`)

Модификатор `view` в значении `action` используется для визуального выделения кнопки на странице.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', view : 'action' },
    text : 'Купить сейчас!'
}
```

##### Псевдокнопка (модификатор `view` в значении `pseudo`)

Модификатор `view` в значении `pseudo` используется для визуального выделения блока на странице, когда не нужно акцентировать внимание на кнопке.

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', view : 'pseudo' },
    text : 'У меня прозрачный фон'
}
```

```js
{
    block : 'button',
    mods : { theme : 'islands', size : 'm', view : 'pseudo', disabled : true },
    text : 'У меня нет границ'
}
```

<a name="buttontoggle"></a>

#### Модификатор `togglable`

Допустимые значения: `'check'`, `'radio'`.

Способ использования: `BEMJSON`.

Модификатор `togglable` используется для реализации «залипания» кнопки. Определяет поведение нажатой кнопки.

##### Кнопка-переключатель (модификатор `togglable` в значении `check`)

Первое нажатие на кнопку вдавливает ее, второе – приводит в первоначальное состояние.

```js
{
    block : 'button',
    text : 'Я нажата',
    mods : { theme : 'islands', size : 'm', togglable : 'check' }
}
```

##### Радиокнопка (модификатор `togglable` в значении `radio`)

Нажатие на кнопку вдавливает ее, и она не может быть приведена в первоначальное состояние. Используется в составе [радиогруппы](../radio-group/radio-group.ru.md).

```js
{
    block : 'button',
    text : 'Я «залипла» :)',
    mods : { theme : 'islands', size : 'm', togglable : 'radio' }
}
```

Пример использования в радиогруппе:

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-button',
    options : [
        { val : 1, text : 'Первый' },
        { val : 2, text : 'Второй', checked : true },
        { val : 3, text : 'Третий' }
    ]
}
```

<a name="buttonpressed"></a>

#### Модификатор `pressed`

Допустимое значение: `true`.

Способ использования: выставляется автоматически при нажатии на кнопку.

Модификатор `pressed` в значении `true` определяет действие «нажатие на кнопку». Используется для кнопок с модификатором <a href="#buttontoggle">togglable</a>.

<a name="buttondisabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор `disabled` в значении `true` отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

```js
{
    block : 'button',
    text : 'Неактивна',
    mods : { theme : 'islands', size : 'm', disabled : true }
}
```

<a name="buttonfocused"></a>

#### Модификатор `focused`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`, выставляется автоматически при нажатии на кнопку.

Модификатор `focused` в значении `true` отвечает за наличие фокуса на блоке.

```javascript
{
    block : 'button',
    text : 'В фокусе',
    mods : { theme : 'islands', size : 'm', focused : true }
}
```

<a name="buttonsize"></a>

#### Модификатор `size`

Допустимые значения для темы `islands`: `'s'`, `'m'`, `'l'`, `'xl'`.

Способ использования: `BEMJSON`.

Модификатор `size` используется, только если блоку установлен модификатор <a href="#buttonthemes">theme</a> в значении `islands`.

Задает размер всем типам кнопок.

**s**

```js
{
    block : 'button',
    text : 'Размер s',
    mods : { theme : 'islands', size : 's' }
}
```

**m**

```js
{
    block : 'button',
    text : 'Размер m',
    mods : { theme : 'islands', size : 'm' }
}
```

**l**

```js
{
    block : 'button',
    text : 'Размер l',
    mods : { theme : 'islands', size : 'l' }
}
```

**xl**

```js
{
    block : 'button',
    text : 'Размер xl',
    mods : { theme : 'islands', size : 'xl' }
}
```

<a name="buttonthemes"></a>

#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способ использования: `BEMJSON`.

Модификатор отвечает за стилевое оформление блока.

При выборе модификатора `theme` в значении `islands` необходимо обязательно указывать модификатор <a href="#buttonsize">size</a>.

Без указания модификатора `theme` отображается нативный вид контрола.

```js
{
    block : 'button',
    text : 'Тема islands',
    mods : { theme : 'islands', size : 'm' }
}
```

### Специализированные поля блока

<a name="buttonname"></a>

#### Поле `name`

Определяет значение поля `name`, отправляемое на сервер. Всегда отправляется в паре со значением поля `val`.

Не используется, если выбран тип кнопки с  <a href="#link-button">модификатором type в значении link</a>.

<a name="buttonval"></a>

#### Поле `val`

Определяет значение поля `val`, отправляемое на сервер. Всегда отправляется в паре со значением поля `name`.

Не используется, если выбран тип кнопки с  <a href="#link-button">модификатором type в значении link</a>.

```js
{
    block : 'button',
    text : 'Проверить результат',
    name : 'Тест №1',
    val : 'Пройден успешно',
    mods : { theme : 'islands', size : 'm', type : 'submit' }
}
```

<a name="buttontext"></a>

#### Поле `text`

Определяет текст, который отображается на кнопке.

<a name="buttonurl"></a>

#### Поле `url`

Определяет адрес, по которому осуществляется переход при нажатии на кнопку с <a href="#link-button">модификатором type в значении link</a>.

Не используется с другими типами кнопок.

<a name="buttonicon"></a>

#### Поле `icon`

Определяет иконку, которая отображается на кнопке. Иконка задается с помощью блока [icon](../icon/icon.ru.md).

```js
{
    block : 'button',
    text : 'Twitter',
    mods : { theme : 'islands', size : 'm' },
    icon : {
        block : 'icon',
        mods : { social : 'twitter' }
    }
}
```

<a name="buttontitle"></a>

#### Поле `title`

Определяет содержание всплывающей подсказки. Вид такой подсказки зависит от браузера, настроек операционной системы и не может быть изменен с помощью HTML-кода или стилей.

```js
{
    block : 'button',
    text : 'Проверить результат',
    name : 'Тест №1',
    val : 'Пройден успешно',
    title : 'Кнопка отправки результатов теста'
    mods : { theme : 'islands', size : 'm', type : 'submit' }
}
```

<a name="buttonid"></a>

#### Поле `id`

Определяет уникальный идентификатор кнопки.

```js
{
    block : 'button',
    text : 'Проверить результат',
    name : 'Тест №1',
    val : 'Пройден успешно',
    id : 1,
    mods : { theme : 'islands', size : 'm', type : 'submit' }
}
```

<a name="buttontab"></a>

#### Поле `tabIndex`

Определяет последовательность перехода между кнопками при нажатии на `Tab`.
