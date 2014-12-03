# textarea

Используется для создания текстовой области.

## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href=#focused>focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Фокус на блоке. |
| <a href=#size>size</a> | <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | Размер текстовой области. Используется только для текстовых областей с модификатором <a href=#theme>theme в значении islands</a>.|
| <a href=#theme>theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href=#name>name</a> | <code>String</code> | Имя текстовой области. |
| <a href=#val>val</a> | <code>String</code> | Содержание текстовой области при первом открытии. |
| <a href=#placeholder>placeholder</a> | <code>String</code> | Подсказка в текстовой области. |
| <a href=#maxLength>maxLength</a> | <code>String</code> | Максимальное количество вводимых символов. |
| <a href=#id>id</a> | <code>String</code> | Уникальный идентификатор текстовой области. |
| <a href=#tab>tabIndex</a> | <code>Number</code> | Последовательность перехода между текстовыми областями при нажатии на <code>Tab</code>. |

## Обзор блока

Блок `textarea` используется для создания текстовой области.

### Модификаторы блока

<a name="disabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор `disabled` в значении `true` отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

```bemjson
{
    block : 'textarea',
    mods : { theme : 'islands', size : 'm', disabled : true },
    placeholder : 'Ваш текст должен быть здесь'
}
```

<a name="focused"></a>

#### Модификатор `focused`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`, выставляется автоматически при установке курсора в текстовое поле.

Модификатор `focused` в значении `true` отвечает за наличие фокуса на блоке.

```bemjson
{
    block : 'textarea',
    mods : { theme : 'islands', size : 'm', focused : true },
    placeholder : 'Ваш текст должен быть здесь'
}
```

<a name="size"></a>

#### Модификатор `size`

Допустимые значения для темы `islands`: `'s'`, `'m'`, `'l'`, `'xl'`.

Способ использования: `BEMJSON`.

Модификатор `size` используется, только если блоку установлен модификатор <a href="#theme">theme</a> в значении `islands`.

**s**

```bemjson
{
    block : 'textarea',
    mods : { theme : 'islands', size: 's' },
    placeholder : 'Размер s'
}
```

**m**

```bemjson
{
    block : 'textarea',
    mods : { theme : 'islands', size: 'm' },
    placeholder : 'Размер m'
}
```

**l**

```bemjson
{
    block : 'textarea',
    mods : { theme : 'islands', size: 'l' },
    placeholder : 'Размер l'
}
```

**xl**

```bemjson
{
    block : 'textarea',
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

```bemjson
{
    block : 'textarea',
    mods : { theme : 'islands', size: 'm', type : 'search' },
    placeholder : 'Ваш текст должен быть здесь'
}
```

### Специализированные поля блока

<a name="name"></a>

#### Поле `name`

Определяет значение поля `name`, отправляемое на сервер. Всегда отправляется в паре со значением поля `val`.

<a name="val"></a>

#### Поле `val`

Определяет содержание текстовой области при первом открытии.

```bemjson
{
    block : 'textarea',
    mods : { theme : 'islands', size: 'm' },
    placeholder : 'Ваш текст должен быть здесь',
    name : 'Обратная связь',
    val : 'Этот текст можно и нужно заменить'
}
```

<a name="placeholder"></a>

#### Поле `placeholder`

Определяет текст подсказки в текстовой области.

```bemjson
{
    block : 'textarea',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Ваш текст должен быть здесь'
}
```

<a name="maxLength"></a>

#### Поле `maxLength`

Определяет максимальное количество вводимых символов.

```bemjson
{
    block : 'textarea',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Ваш текст должен быть здесь',
    maxLength : 200
}
```

<a name="tab"></a>

#### Поле `tabIndex`

Определяет последовательность перехода между текстовыми областями при нажатии на `Tab`.

```bemjson
{
    block : 'textarea',
    mods : { theme : 'islands', size : 'm' },
    placeholder : 'Ваш текст должен быть здесь',
    tabIndex : 1
}
```
