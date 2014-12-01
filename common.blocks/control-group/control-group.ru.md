# control-group

Используется как обертка для **визуальной** группировки других блоков. Группируемые блоки помещаются в поле `content` BEMJSON-декларации.

**Ограничения:** текущая реализация блока позволяет группировать только те блоки, которым установлен модификатор `theme` в значении `islands`.

## Варианты использования

Блок позволяет визуально группировать следующие блоки:

* [input](../input/input.ru.md)

```js
{
    block : 'control-group',
    content : [
        {
            block : 'input',
            mods : { theme : 'islands', size : 'm', type : 'search' },
            placeholder : 'Имя'
        },
        {
            block : 'input',
            mods : { theme : 'islands', size : 'm', type : 'search' },
            placeholder : 'Фамилия'
        },
        {
            block : 'input',
            mods : { theme : 'islands', size : 'm', type : 'search' },
            placeholder : 'Электронный адрес'
        }
    ]
}
```

* [button](../button/button.ru.md)

```js
{
    block : 'control-group',
    content : [
        {
            block : 'button',
            mods : { theme : 'islands', size : 'm' },
            text : 'Просмотреть корзину'
        },
        {
            block : 'button',
            mods : { theme : 'islands', size : 'm' },
            text : 'История покупок'
        },
        {
            block : 'button',
            mods : { theme : 'islands', size : 'm' },
            text : 'Проверить бонусный счет'
        }
    ]
}
```

```js
{
    block : 'control-group',
    content : [
        {
            block : 'input',
            mods : { theme : 'islands', size : 'm', type : 'search' },
            placeholder : 'Введите запрос'
        },
        {
            block : 'button',
            mods : { theme : 'islands', size : 'm' },
            text : 'Поиск'
        }
    ]
}
```

* [select](../select/select.ru.md)

```js
{
    block : 'control-group',
    content : [
        {
            block : 'input',
            mods : { theme : 'islands', size : 'm' },
            placeholder : 'Цена от'
        },
        {
            block : 'input',
            mods : { theme : 'islands', size : 'm' },
            placeholder : 'до '
        },
        {
            block : 'select',
            mods : { mode : 'radio', theme : 'islands', size : 'm' },
            options : [
                { val : 'usd', text : '$', checked : true },
                { val : 'euro', text : '€' }
            ]
        }
    ]
}
```

* [dropdown](../dropdown/dropdown.ru.md) (с модификатором `switcher` в значении `button`)

```js
{
    block : 'control-group',
    content : [
        {
            block : 'button',
            mods : { view : 'action', theme : 'islands', size : 'm' },
            text : 'Купить сейчас!'
        },
        {
            block : 'dropdown',
            mods : { switcher : 'button', theme : 'islands', size : 'm' },
            switcher : 'Действующие скидки',
            popup : 'Воспользуйтесь нашим специальным предложением: «50% скидка на доставку каждого пятого груза».'
        }
    ]
}
```

* [checkbox](../checkbox/checkbox.ru.md) (с модификатором `type` в значении `button`)

```js
{
    block : 'control-group',
    content : [
        {
            block : 'checkbox',
            text : 'Телевизоры',
            name: 'tv',
            val: '1',
            mods : { theme : 'islands', size : 'm', type : 'button' }
        },
        {
            block : 'checkbox',
            text : 'Фотокамеры',
            name: 'photo',
            val: '1',
            mods : { theme : 'islands', size : 'm', type : 'button' }
        },
        {
            block : 'checkbox',
            text : 'Электронные книги',
            name: 'book',
            val: '1',
            mods : { theme : 'islands', size : 'm', type : 'button' }
        }
    ]
}
```

* [radio](../radio/radio.ru.md) (с модификатором `type` в значении `button`)

```js
{
    block : 'control-group',
    content : [
        {
            block : 'radio',
            mods : { theme : 'islands', size : 'm', type : 'button' },
            name : 'radio-islands',
            text : 'Электроника'
        },
        {
            block : 'radio',
            mods : { theme : 'islands', size : 'm', type : 'button' },
            name : 'radio-islands',
            text : 'Бытовая техника'
        },
        {
            block : 'radio',
            mods : { theme : 'islands', size : 'm', type : 'button' },
            name : 'radio-islands',
            text : 'Одежда и обувь'
        }
    ]
}
```
