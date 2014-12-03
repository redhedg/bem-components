# radio-group

Используется для отображения группы однотипных переключателей, реализованных блоком [radio](../radio/radio.ru.md). Блок позволяет пользователю выбрать только один пункт из предопределенного списка.

## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#type>type</a> | <code>'button'</code>, <code>'line'</code> | <code>BEMJSON</code> | Тип группы радиопереключателей. |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href=#focused>focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Фокус на блоке. |
| <a href=#size>size</a> | <code>'m'</code>, <code>'l'</code>  | <code>BEMJSON</code> | Размер радиопереключателей в группе. Используется только для радиопереключателей с <a href=#theme>модификатором theme в значении islands</a>. |
| <a href=#theme>theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href=#name>name</a> | <code>String</code> | Имя группы радиопереключателей. |
| <a href=#opt>options</a> | <code>Array</code> | Набор значений для каждого радиопереключателя группы. Каждому <a href="../..radio/radio.ru.md#type">типу радиопереключателя</a> соответствует разный <a href="#optset">набор значений</a>. Через поле <code>options</code> каждому радиопереключателю группы можно установить модификаторы `disabled` и `checked`.|

## Обзор блока

Блок `radio-group` позволяет управлять внешним видом и состоянием вложенных независимых радиопереключателей.

### Модификаторы блока

<a name="type"></a>

#### Модификатор `type`

Допустимые значения: `'button'`, `'line'`.

Способ использования: `BEMJSON`.

<a name="type-button"></a>

##### Кнопочный радиопереключатель (модификатор `type` в значении `button`)

Модификатор `type` в значении `button` позволяет реализовать блок `radio-group` с помощью радиопереключателей с типом [button](../radio/radio.ru.md#type). Все радиопереключатели группы в данном случае всегда располагаются в линию.

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-button',
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол' },
        { val : 3, text : 'Гандбол' }
    ]
}
```

<a name="type-line"></a>

##### Выравнивание (модификатор `type` в значении `line`)

Модификатор `type` в значении `line` применяется к группе радиопереключателей для выравнивания их в линию.

Реализован только в теме `islands`.

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'line' },
    name : 'radio-line',
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол' },
        { val : 3, text : 'Гандбол' }
    ]
}
```

<a name="disabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор `disabled` в значении `true` отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

Модификатор может быть установлен:

* всей группе радиопереключателей

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button', disabled : true },
    name : 'radio-button',
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол', checked : true },
        { val : 3, text : 'Гандбол' }
    ]
}
```

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', disabled : true },
    name : 'radio',
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол', checked : true },
        { val : 3, text : 'Гандбол' }
    ]
}
```

* каждому радиопереключателю в группе

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-line',
    options : [
        { val : 1, text : 'Футбол', disabled : true },
        { val : 2, text : 'Баскетбол', checked : true },
        { val : 3, text : 'Гандбол' }
    ]
}
```

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-line',
    options : [
        { val : 1, text : 'Футбол', disabled : true },
        { val : 2, text : 'Баскетбол', checked : true },
        { val : 3, text : 'Гандбол' }
    ]
}
```

<a name="focused"></a>

#### Модификатор `focused`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор `focused` в значении `true` отвечает за наличие фокуса на блоке.

```javascript
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button', focused : true },
    name : 'radio-button',
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол', checked : true },
        { val : 3, text : 'Гандбол' }
    ]
}
```

```javascript
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', focused : true },
    name : 'radio',
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол', checked : true },
        { val : 3, text : 'Гандбол' }
    ]
}
```

<a name="size"></a>

#### Модификатор `size`

Допустимые значения для темы `islands`: `'m'`, `'l'`.

Способ использования: `BEMJSON`.

Задает размер всем радиопереключателям в группе.

Модификатор `size` используется, только если блоку установлен модификатор <a href="#theme">theme</a> в значении `islands`.

**m**

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-button',
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол', checked : true },
        { val : 3, text : 'Гандбол' }
    ]
}
```

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-button',
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол', checked : true },
        { val : 3, text : 'Гандбол' }
    ]
}
```

**l**

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'l' },
    name : 'radio-button',
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол', checked : true },
        { val : 3, text : 'Гандбол' }
    ]
}
```

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'l', type : 'button' },
    name : 'radio-button',
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол', checked : true },
        { val : 3, text : 'Гандбол' }
    ]
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
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-islands',
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол', checked : true },
        { val : 3, text : 'Гандбол' }
    ]
}
```


```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол', checked : true },
        { val : 3, text : 'Гандбол' }
    ]
}
```

### Специализированные поля блока

<a name="name"></a>
#### Поле `name`

Определяет имя группы радиопереключателей.

<a name="opt"></a>

#### Поле `options`

Определяет набор значений для каждого радиопереключателя группы.

<a name="optset"></a>
Каждому <a href="../radio/radio.ru.md">типу радиопереключателей</a> соответствует разный **набор значений**.

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <code>val</code> | <code>String</code> | Значение, возвращаемое радиопереключателем, если он выбран. |
| <code>text</code> | <code>String</code> | Текст подписи к радиопереключателю. |
| <code>checked</code> | <code>Boolean</code> | Радиопереключатель отмечен. |
| <code>disabled</code> | <code>Boolean</code> | Неактивное состояние. |
| <code>icon</code> | <code>BEMJSON</code> | Иконка. Формируется блоком <a href="../icon/icon.ru.md">icon</a>. Используется только для группы радиопереключателей с <a href=#type>модификатором type в значении button</a>. |
| <code>title</code> | <code>String</code> | Всплывающая подсказка. Используется только для группы радиопереключателей с <a href=#type>модификатором type в значении button</a>. |

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'radio-islands',
    options : [
        { val : 1, text : 'Футбол' },
        { val : 2, text : 'Баскетбол', checked : true },
        { val : 3, text : 'Гандбол', disabled : true }
    ]
}
```

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    options : [
        { val : 1, text : 'Футбол', title : 'Просмотр турнирной таблицы и состава команд.' },
        { val : 2, text : 'Баскетбол', disabled : true, title : 'Просмотр турнирной таблицы и состава команд.' },
        { val : 3, text : 'Гандбол', checked : true, disabled : true, title : 'Просмотр турнирной таблицы и состава команд.' }
    ]
}
```

```js
{
    block : 'radio-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'radio-islands',
    options : [
        {
            val : 1,
            text : 'Новости по футболу',
            checked : true,
            title : 'Подписаться на новости в группе',
            icon : {
                block : 'icon',
                mods : { social : 'twitter' }
            },
        },
        {
            val : 2,
            text : 'Новости по гандболу',
            disabled : true,
            title : 'Подписаться на новости в группе',
            icon : {
                block : 'icon',
                mods : { social : 'twitter' }
            }
        }
    ]
}
```
