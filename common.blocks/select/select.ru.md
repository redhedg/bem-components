# select

Используется для создания раскрывающегося списка с возможностью одиночного или множественного выбора.

## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#mode>mode</a> | <code>'check'</code>, <code>'radio'</code>, <code>'radio-check'</code> | <code>BEMJSON</code> | Тип раскрывающегося списка. |
| <a href=#width>width</a> | <code>'available'</code> | <code>BEMJSON</code> | Ширина кнопки раскрывающегося списка. |
| <a href=#focused>focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Фокус на блоке. |
| <a href=#theme>theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href=#name>name</a> | <code>String</code> | Имя раскрывающегося списка. |
| <a href=#text>text</a> | <code>String</code> | Значение, которое отображается в кнопке раскрывающегося списка, в случае, если ни один из пунктов выбран. Используется только для кнопки с <a href="#mode-check">модификатором type в значении check</a> или <a href="#mode-radiocheck">в значении radio-check</a>. |
| <a href=#options>options</a> | <code>Array</code> | Массив пунктов списка с возможностью группировки. |
| <a href=#textmaxwidth>textMaxWidth</a> | <code>Number</code> | Максимальная ширина кнопки раскрывающегося списка. |
| <a href=#optionsmaxheight>optionsMaxHeight</a> | <code>Number</code> | Максимальная высота выпадающего списка. |
| <a href=#id>id</a> | <code>String</code> | Уникальный идентификатор раскрывающегося списка. |

## Обзор блока

Реализация блока `select` основана на блоках:
* [popup](../popup/popup.ru.md)
* [menu](../menu/menu.ru.md)

Блок визуально представлен кнопкой и выпадающим списком с элементами меню.

### Модификаторы блока

<a name="mode"></a>
#### Модификатор `mode`

Допустимые значения: `'check`, `'radio'`, `'radio-check'`.

Способ использования: `BEMJSON`.

Обязательный модификатор.

<a name="mode-check"></a>
##### Список с множественным выбором (модификатор `mode` в значении `check`)

Модификатор `mode` в значении `check` позволяет выбрать произвольное количество пунктов в раскрывающемся списке.

```bemjson
{
    block : 'select',
    mods : { mode : 'check', theme : 'islands', size : 'm' },
    name : 'select1',
    text : 'Программа конференции',
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс', checked : true },
        { val : 3, text : 'Круглый стол', checked : true }
    ]
}
```


<a name="mode-radio"></a>
##### Список с меню-переключателем (модификатор `mode` в значении `radio`)

Модификатор `mode` в значении `radio` позволяет создать раскрывающийся список, в котором обязательно выбран только один пункт.

Для такого типа раскрывающегося списка текст в кнопке устанавливается в зависимости от выбранного пункта. Если пункт не выбран, то по умолчанию выбирается первое значение из списка.

```bemjson
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'm' },
    name : 'select2',
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс', checked : true },
        { val : 3, text : 'Круглый стол' }
    ]
}
```

<a name="mode-radiocheck"></a>
##### Список с одиночным выбором (модификатор `mode` в значении `radio-check`)

Модификатор `mode` в значении `radio-check` так же как и <a href="#mode-radio">модификатор mode в значении radio</a> позволяет выбрать только один пункт из выпадающего списка. Принципиальное отличие в том, что в значении `radio-check` есть возможность оставить список без выбранных пунктов.

```bemjson
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'islands', size : 'm' },
    name : 'select3',
    text : '—',
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс', checked : true },
        { val : 3, text : 'Круглый стол' }
    ]
}
```

<a name="width"></a>
#### Модификатор `width`

Допустимое значение: `'available'`.

Способ использования: `BEMJSON`.

Модификатор `width` в значении `available` растягивает кнопку раскрывающегося списка на максимально допустимую ширину.

```bemjson
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'islands', size : 'm', width : 'available' },
    name : 'select4',
    text : '—',
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс наоборот: вы пишете БЭМ-проект, а мы подсказываем' },
        { val : 3, text : 'Круглый стол', checked : true }
    ]
}
```

<a name="focused"></a>

#### Модификатор `focused`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`, выставляется автоматически при нажатии на кнопку.

Модификатор `focused` отвечает за наличие фокуса на блоке.

```js
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'islands', size : 'm', focused : true },
    name : 'select4',
    text : '—',
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс' },
        { val : 3, text : 'Круглый стол' }
    ]
}
```

<a name="theme"></a>
#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способ использования: `BEMJSON`.

Модификатор отвечает за стилевое оформление блока.

Без указания модификатора `theme` отображается нативный вид контрола `button` и простой список пунктов.

```bemjson
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'm' },
    name : 'select1',
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс', checked : true },
        { val : 3, text : 'Круглый стол' }
    ]
}
```

### Специализированные поля блока

<a name="name"></a>

#### Поле `name`

Определяет имя выпадающего списка.

<a name="text"></a>
#### Поле `text`

Определяет значение раскрывающегося списка в случае, если ни один из пунктов не отмечен. Используется только для кнопки с <a href="#mode-check">модификатором type в значении check</a> или <a href="#mode-radiocheck">в значении radio-check</a>.


```bemjson
{
    block : 'select',
    mods : { mode : 'radio-check', theme : 'islands', size : 'm' },
    name : 'select3',
    text : '—',
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс' },
        { val : 3, text : 'Круглый стол' }
    ]
}
```

```bemjson
{
    block : 'select',
    mods : { mode : 'check', theme : 'islands', size : 'm' },
    name : 'select1',
    text : '—',
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс' },
        { val : 3, text : 'Круглый стол' }
    ]
}
```

<a name="options"></a>
#### Поле `options`

Определяет массив объектов (пунктов списка) либо групп с опциональным названием.

Задает набор значений для каждого пункта.

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <code>val</code> | <code>String</code> | Значение, которое будет отправлено на сервер при выборе пункта. Обязательное поле. |
| <code>text</code> | <code>String</code> | Название пункта в списке. |
| <code>checked</code> | <code>Boolean</code> | Пункт выбран. |
| <code>title</code> | <code>String</code> | Название группы пунктов. |
| <code>checkedText</code> | <code>String</code> | Текст, отображаемый вместо названия пункта в кнопке раскрывающегося списка. Задается только для списков с возможностью <a href="#mode-check">множественного выбора</a>. |
| <code>disabled</code> | <code>Boolean</code> | Неактивное состояние отдельного пункта. |
| <code>icon</code> | <code>BEMJSON</code> | Иконка. Формируется блоком <a href="../icon/icon.ru.md">icon</a>. |

```bemjson
{
    block : 'select',
    mods : { mode : 'check', theme : 'islands', size : 'm' },
    name : 'select5',
    text : 'Подписаться на новости',
    options : [
        {
            val : 1,
            text : 'Twitter',
            checkedText : 'tw',
            icon : { block : 'icon', mods : { social : 'twitter' } }
        },
        {
            val : 2,
            text : 'VKontakte',
            checkedText : 'vk',
            icon : { block : 'icon', mods : { social : 'vk' } },
            checked : true
        }
    ]
}
```

Раскрывающийся список с реализованной группировкой пунктов:

```bemjson
{
    block : 'select',
    mods : { mode : 'check', theme : 'islands', size : 'm' },
    name : 'select5',
    text : 'Программа конференции',
    options : [
        {
            group : [
                { val : 1, text : 'Доклад №1' },
                { val : 2, text : 'Доклад №2', checked : true },
                { val : 3, text : 'Доклад №3' },
            ],
            title : 'Теория'
        },
        {
            group : [
                { val : 4, text : 'Мастер-класс №1' },
                { val : 4, text : 'Мастер-класс №2' }
            ],
            title : 'Практика'
        }
    ]
}
```

<a name="textmaxwidth"></a>
#### Поле `textMaxWidth`

Определяет максимальную ширину кнопки раскрывающегося списка. Ширина его при этом определяется самым широким текстом пункта или корректируется с помощью стилей.

```bemjson
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'm' },
    name : 'select1',
    textMaxWidth : 100,
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс' },
        { val : 3, text : 'Круглый стол' }
    ]
}
```

<a name="optionsmaxheight"></a>

#### Поле `optionsMaxHeight`

Определяет максимальную высоту раскрывающегося списка. Если все пункты списка не вмещаются, появляется прокрутка.

Если значение не указано, высота раскрывающегося списка по умолчанию будет вычисляться в зависимости от количества пунктов.

```bemjson
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'm' },
    name : 'select1',
    textMaxWidth : 100,
    optionsMaxHeight : 100,
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс' },
        { val : 3, text : 'Круглый стол' }
    ]
}
```

<a name="id"></a>
#### Поле `id`

Определяет уникальный идентификатор раскрывающегося списка.

```bemjson
{
    block : 'select',
    mods : { mode : 'radio', theme : 'islands', size : 'm' },
    name : 'select1',
    id : 1,
    options : [
        { val : 1, text : 'Доклад' },
        { val : 2, text : 'Мастер-класс' },
        { val : 3, text : 'Круглый стол' }
    ]
}
```
