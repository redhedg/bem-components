# input

Используется для создания различных типов текстовых полей.

## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#type>type</a> | <code>'password'</code>, <code>'search'</code> | <code>BEMJSON</code> | Тип текстового поля. |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href=#focused>focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Фокус на блоке. |
| <a href=#size>size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | Размер текстового поля. Используется только с модификатором <a href=#theme>theme в значении islands</a>.|
| <a href=#theme>theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href=#name>name</a> | <code>String</code> | Имя текстового поля. |
| <a href=#val>val</a> | <code>String</code> | Значение, отправляемое на сервер. |
| <a href=#placeholder>placeholder</a> | <code>String</code> | Подсказка в текстовом поле. |
| <a href=#maxLength>maxLength</a> | <code>String</code> | Максимальное количество вводимых символов. Используется только для <a href="#inputfield">полей ввода</a>. |
| <a href=#autocomplete>autocomplete</a> | <code>Boolean</code> | Браузерное автозаполнение в текстовом поле. |
| <a href=#id>id</a> | <code>String</code> | Уникальный идентификатор текстового поля. |
| <a href=#tab>tabIndex</a> | <code>Number</code> | Последовательность перехода между текстовыми полями при нажатии на <code>Tab</code>. |

## Обзор блока

Блок `input` служит для создания различных типов текстовых полей.

### Модификаторы блока

<a name="type"></a>
#### Модификатор `type`

Допустимые значения: `'password'`, `'search'`.

Способ использования: `BEMJSON`.

Модификатор `type` используется для изменения типа текстового поля.

<a name="inputfield"></a>
Если модификатор `theme` не указан, блок `input` по умолчанию становится простым полем ввода:

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Введите ваше имя'
}
```

##### Поле с паролем (модификатор `type` в значении `password`)

Модификатор `type` в значении `password` используется для создания поля для ввода пароля.

```js
{
    block : 'input',
    mods : { theme : 'islands', size: 'm', type : 'password' },
    placeholder : 'Введите ваш пароль'
}
```

##### Поле для поиска (модификатор `type` в значении `search`)

Модификатор `type` в значении `search` используется для создания поля для поиска данных.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm', type : 'search' },
    placeholder : 'Введите ваш запрос'
}
```

<a name="disabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор `disabled` в значении `true` отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm', disabled : true },
    placeholder : 'Введите ваше имя'
}
```

<a name="focused"></a>

#### Модификатор `focused`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`, выставляется автоматически при установке курсора в текстовое поле.

Модификатор `focused` в значении `true` отвечает за наличие фокуса на блоке.

```javascript
{
    block : 'input',
    mods : { theme : 'islands', size : 'm', focused : true },
    placeholder : 'Введите ваше имя'
}
```

<a name="size"></a>

#### Модификатор `size`

Допустимые значения для темы `islands`: `'s'`, `'m'`, `'l'`, `'xl'`.

Способ использования: `BEMJSON`.

Модификатор `size` используется, только если блоку установлен модификатор <a href="#theme">theme</a> в значении `islands`.

Задает размер всем типам текстовых полей.

**s**

```js
{
    block : 'input',
    mods : { theme : 'islands', size: 's' },
    placeholder : 'Размер s'
}
```

**m**

```js
{
    block : 'input',
    mods : { theme : 'islands', size: 'm' },
    placeholder : 'Размер m'
}
```

**l**

```js
{
    block : 'input',
    mods : { theme : 'islands', size: 'l' },
    placeholder : 'Размер l'
}
```

**xl**

```js
{
    block : 'input',
    mods : { theme : 'islands', size: 'xl' },
    placeholder : 'Размер xl'
}
```

<a name="theme"></a>

#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способ использования: `BEMJSON`.

Модификатор `theme` отвечает за стилевое оформление блока.

При выборе модификатора `theme` в значении `islands` необходимо обязательно указывать модификатор <a href="#size">size</a>.

Без указания модификатора `theme` отображается нативный вид контрола.

```js
{
    block : 'input',
    mods : { theme : 'islands', size: 'm', type : 'search' },
    placeholder : 'Введите ваш запрос'
}
```

### Специализированные поля блока

<a name="name"></a>

#### Поле `name`

Определяет значение поля `name`, отправляемое на сервер. Всегда отправляется в паре со значением поля `val`.

<a name="val"></a>

#### Поле `val`

Определяет значение поля `val`, отправляемое на сервер. Всегда отправляется в паре со значением поля `name`.

```js
{
    block : 'input',
    mods : { theme : 'islands', size: 'm', type : 'search' },
    placeholder : 'Введите ваш запрос',
    name : 'Статистика',
    val : 1
}
```

<a name="placeholder"></a>

#### Поле `placeholder`

Определяет текст подсказки в текстовом поле.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Введите ваше имя'
}
```

<a name="maxLength"></a>

#### Поле `maxLength`

Определяет максимальное количество вводимых символов. Используется только для <a href="#input">полей ввода</a>.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Введите ваше имя',
    maxLength : 20
}
```

<a name="autocomplete"></a>

#### Поле `autocomplete`

Отвечает за включение / выключение автозаполнения текстового поля в браузере.

<a name="id"></a>
#### Поле `id`

Определяет уникальный идентификатор кнопки.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Введите ваше имя',
    id : 'name'
}
```

<a name="tab"></a>

#### Поле `tabIndex`

Определяет последовательность перехода между текстовыми полями при нажатии на `Tab`.

```js
{
    block : 'input',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Введите ваше имя',
    tabIndex : 1
}
```
