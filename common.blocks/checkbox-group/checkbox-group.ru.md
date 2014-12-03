# checkbox-group

Используется для отображения группы однотипных переключателей – [чекбоксов](../checkbox/checkbox.ru.md).

## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#checkboxtype>type</a> | <code>'button'</code>, <code>'line'</code> | <code>BEMJSON</code> | Тип группы чекбоксов. |
| <a href=#checkboxdisabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href=#checkboxfocused>focused</a> | <code>true</code> | <code>BEMJSON</code> | Фокус на блоке. |
| <a href=#checkboxsize>size</a> | <code>'m'</code>, <code>'l'</code>  | <code>BEMJSON</code> | Размер чекбоксов в группе. Используется только для чекбоксов с <a href=#checkboxtheme>модификатором theme в значении islands</a>. |
| <a href=#checkboxtheme>theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href=#checkboxname>name</a> | <code>String</code> | Имя группы чекбоксов. |
| <a href=#checkboxopt>options</a> | <code>Array</code> | Набор значений для каждого чекбокса группы. Каждому <a href="../checkbox/checkbox.ru.md">типу чекбоксов</a> соответствует разный <a href="#checkboxoptset">набор значений</a>. Через поле <code>options</code> каждому чекбоксу группы можно установить модификаторы `disabled` и `checked`.|

## Обзор блока

Блок `checkbox-group` позволяет управлять внешним видом и состоянием вложенных независимых чекбоксов.

### Модификаторы блока

<a name="checkboxtype"></a>

#### Модификатор `type`

Допустимые значения: `'button'`, `'line'`.

Способ использования: `BEMJSON`.

<a name="checkboxtype-button"></a>

##### Кнопочный чекбокс (модификатор `type` в значении `button`)

Модификатор `type` в значении `button` позволяет реализовать блок `checkbox-group` с помощью чекбоксов с типом [button](../checkbox/checkbox.ru.md/#checkboxtype). Все чекбоксы группы в данном случае всегда располагаются в линию.

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```

<a name="checkboxtype-line"></a>

##### Выравнивание (модификатор `type` в значении `line`)

Модификатор `type` в значении `line` применяется к группе чекбоксов для выравнивания их в линию.

Реализован только в теме `islands`.

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'line' },
    name : 'checkbox-line',
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```

<a name="checkboxdisabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор `disabled` в значении `true` отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

Модификатор может быть установлен:

* всей группе чекбоксов

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button', disabled : true },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент', checked : true },
        { val : 3, text : 'Модификатор' }
    ]
}
```

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', disabled : true },
    name : 'checkbox',
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент', checked : true },
        { val : 3, text : 'Модификатор' }
    ]
}
```

* каждому чекбоксу в группе

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'checkbox-line',
    options : [
        { val : 1, text : 'Блок', disabled : true },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-line',
    options : [
        { val : 1, text : 'Блок', disabled : true },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```

<a name="checkboxfocused"></a>

#### Модификатор `focused`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор `focused` в значении `true` отвечает за наличие фокуса на блоке.

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button', focused : true },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент', checked : true },
        { val : 3, text : 'Модификатор' }
    ]
}
```

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', focused : true },
    name : 'checkbox',
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент', checked : true },
        { val : 3, text : 'Модификатор' }
    ]
}
```

<a name="checkboxsize"></a>

#### Модификатор `size`

Допустимые значения для темы `islands`: `'m'`, `'l'`.

Способ использования: `BEMJSON`.

Задает размер всем чекбоксам в группе.

Модификатор `size` используется, только если блоку установлен модификатор <a href="#checkboxtheme">theme</a> в значении `islands`.

**m**

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```

**l**

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'l' },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'l', type : 'button' },
    name : 'checkbox-button',
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```

<a name="checkboxtheme"></a>

#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способ использования: `BEMJSON`.

Модификатор отвечает за стилевое оформление блока.

При выборе модификатора `theme` в значении `islands` необходимо обязательно указывать модификатор <a href="#checkboxsize">size</a>.

Без указания модификатора `theme` отображается нативный вид контрола.

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'checkbox-islands',
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```


```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-islands',
    options : [
        { val : 1, text : 'Блок' },
        { val : 2, text : 'Элемент' },
        { val : 3, text : 'Модификатор' }
    ]
}
```

### Специализированные поля блока

<a name="checkboxname"></a>
#### Поле `name`

Определяет имя группы чекбоксов.

<a name="checkboxopt"></a>

#### Поле `options`

Определяет набор значений для каждого чекбокса группы.

<a name="checkboxoptset"></a>
Каждому <a href="../checkbox/checkbox.ru.md">типу чекбоксов</a> соответствует разный **набор значений**.

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <code>val</code> | <code>String</code> | Значение, возвращаемое чекбоксом, если он выбран. |
| <code>text</code> | <code>String</code> | Текст подписи к чекбоксу. |
| <code>checked</code> | <code>Boolean</code> | Чекбокс отмечен. |
| <code>disabled</code> | <code>Boolean</code> | Неактивное состояние. |
| <code>icon</code> | <code>BEMJSON</code> | Иконка. Формируется блоком <a href="../icon/icon.ru.md">icon</a>. Используется только для группы чекбоксов с <a href=#checkboxtype-button>модификатором type в значении button</a>. |
| <code>title</code> | <code>String</code> | Всплывающая подсказка. Используется только для группы чекбоксов с <a href=#checkboxtype-button>модификатором type в значении button</a>. |

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm' },
    name : 'checkbox-islands',
    options : [
        { val : 1, text : 'Блок', checked : true },
        { val : 2, text : 'Элемент', disabled : true },
        { val : 3, text : 'Модификатор', checked : true, disabled : true },
        { val : 4, text : 'Модификатор' }
    ]
}
```

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-islands',
    options : [
        { val : 1, text : 'Блок', checked : true, title : '' },
        { val : 2, text : 'Элемент', disabled : true, title : 'Already disabled' },
        { val : 3, text : 'Модификатор', checked : true, disabled : true, title : 'Already checked and disabled' }
    ]
}
```

```js
{
    block : 'checkbox-group',
    mods : { theme : 'islands', size : 'm', type : 'button' },
    name : 'checkbox-islands',
    options : [
        {
            val : 1,
            text : 'Twitter',
            checked : true,
            title : 'Подписаться на новости БЭМ',
            icon : {
                block : 'icon',
                mods : { social : 'twitter' }
            },
        },
        {
            val : 2,
            text : 'ВКонтакте',
            disabled : true,
            title : 'Подписаться на новости БЭМ',
            icon : {
                block : 'icon',
                mods : { social : 'vk' }
            },
        }
    ]
}
```
