# menu

Используется для создания различных типов меню, а также для реализации блока [select](../select/select.ru.md).

Для своей реализации использует блок [menu-item](../menu-item/menu-item.ru.md).

## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | --------------------- | -------- |
| <a href=#mode>mode</a> | <code>'radio'</code>, <code>'radio-check'</code>, <code>'check'</code> | <code>BEMJSON</code> | Тип меню. |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href=#focused>focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Фокус на блоке. |
| <a href=#size>size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code>  | <code>BEMJSON</code> | Размер блока. |
| <a href=#theme>theme</a> | <code>'simple'</code>, <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |

### Элементы блока

| Элемент | Способы использования | Описание |
| --------| --------------------- | -------- |
| <a href=#group>group</a> | <code>BEMJSON</code> | Визуальная группировка пунктов меню. |


## Обзор блока

Блок предоставляет возможность изменять внешний вид меню и управлять поведением вложенных независимых блоков – [пунктов меню](../menu-item/menu-item.ru.md)).

### Модификаторы блока

<a name="mode"></a>
#### Модификатор `mode`

Допустимые значения: `'check`, `'radio'`, `'radio-check'`.

Способ использования: `BEMJSON`.

Доступны следующие типы блока `menu`:

* простой список ([модификатор mode не установлен](#mode-none));
* меню с множественным выбором ([модификатор mode в значении check](#mode-check));
* меню-переключатель ([модификатор mode в значении radio](#mode-radio));
* меню с одиночным выбором ([модификатор mode в значении radio-check](#mode-radiocheck)).

<a name="mode-none"></a>
##### Простой список (модификатор `mode` не установлен)

Без указания модификатора `mode` создается простой список без возможности выбрать пункт.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Море'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Горы'
        }
    ]
}
```

<a name="mode-check"></a>
##### Меню с множественным выбором (модификатор `mode` в значении `check`)

Модификатор `mode` в значении `check` позволяет выбрать произвольное количество пунктов меню.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'check' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отдых в горах'
        },
        {
            block : 'menu-item',
            mods : { checked : true },
            val : 2,
            content : 'Отдых на море'
        }
    ]
}
```

<a name="mode-radio"></a>
##### Меню-переключатель (модификатор `mode` в значении `radio`)

Модификатор `mode` в значении `radio` позволяет создать меню, в котором обязательно выбран только один пункт.

Для такого типа меню текст в кнопке устанавливается в зависимости от выбранного пункта. Если пункт не выбран, то по умолчанию выбирается первое значение из списка.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отдых в горах'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Отдых на море'
        }
    ]
}
```

<a name="mode-radiocheck"></a>
##### Меню с одиночным выбором (модификатор `mode` в значении `radio-check`)

Модификатор `mode` в значении `radio-check`, так же как и <a href="#mode-radio">модификатор mode в значении radio</a>, позволяет выбрать только один пункт меню. Принципиальное отличие в том, что в значении `radio-check` есть возможность оставить меню без выбранных пунктов.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio-check' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отдых в горах'
        },
        {
            block : 'menu-item',
            mods : { checked : true },
            val : 2,
            content : 'Отдых на море'
        }
    ]
}
```

<a name="disabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор `disabled` в значении `true` отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

Если блоку `menu` устанавливается модификатор `disabled`, то все вложенные в него блоки `menu-item` также становятся неактивными.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio-check', disabled : true },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отдых в горах'
        },
        {
            block : 'menu-item',
            mods : { checked : true },
            val : 2,
            content : 'Отдых на море'
        }
    ]
}
```

Модификатор `disabled` в значении `true` может быть выставлен отдельным пунктам меню:

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio-check' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отдых в горах',
            mods : { disabled : true }
        },
        {
            block : 'menu-item',
            mods : { checked : true },
            val : 2,
            content : 'Отдых на море'
        }
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
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio-check', focused : true },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отдых в горах'
        },
        {
            block : 'menu-item',
            mods : { checked : true },
            val : 2,
            content : 'Отдых на море'
        }
    ]
}
```

<a name="size"></a>
#### Модификатор `size`

Допустимые значения: `'s'`, `'m'`, `'l'`, `'xl'`.

Способ использования: `BEMJSON`.

Задает размер шрифта и отступы.

Модификатор `size` используется, только если блоку установлен модификатор <a href="#theme">theme</a> в значении `islands`.

**s**

```js
{
    block : 'menu',
    mods : { theme : 'islands', mode : 'check', size : 's' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отдых в горах'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Отдых на море'
        }
    ]
}
```

**m**

```js
{
    block : 'menu',
    mods : { theme : 'islands', mode : 'check', size : 'm' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отдых в горах'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Отдых на море'
        }
    ]
}
```
**l**

```js
{
    block : 'menu',
    mods : { theme : 'islands', mode : 'check', size : 'l' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отдых в горах'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Отдых на море'
        }
    ]
}
```

**xl**

```js
{
    block : 'menu',
    mods : { theme : 'islands', mode : 'check', size : 'xl' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отдых в горах'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Отдых на море'
        }
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
    block : 'menu',
    mods : { theme : 'islands', mode : 'check', size : 'm' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отдых в горах'
        },
        {
            block : 'menu-item',
            val : 2,
            content : 'Отдых на море'
        }
    ]
}
```

### Элементы блока
<a name="group"></a>

#### Элемент `group`

Элемент `group` служит для визуальной группировки пунктов меню. Не влияет на общую логику выбора пунктов.

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Отпуск на работе'
        },
        {
            elem : 'group',
            content : [
                {
                    block : 'menu-item',
                    mods : { checked : true },
                    val : 2,
                    content : 'Отпуск в горах'
                },
                {
                    block : 'menu-item',
                    val : 3,
                    content : 'Отпуск на море'
                }
            ]
        },
        {
            block : 'menu-item',
            val : 4,
            content : 'Отпуск на диване'
        }
    ]
}
```

Специализированное поле `title` определяет заголовок группы пунктов:

```js
{
    block : 'menu',
    mods : { theme : 'islands', size : 'm', mode : 'radio' },
    content : [
        {
            block : 'menu-item',
            val : 1,
            content : 'Работа'
        },
        {
            elem : 'group',
            title : 'Активный отдых',
            content : [
                {
                    block : 'menu-item',
                    mods : { checked : true },
                    val : 2,
                    content : 'В горах'
                },
                {
                    block : 'menu-item',
                    val : 3,
                    content : 'На море'
                }
            ]
        }
    ]
}
```
