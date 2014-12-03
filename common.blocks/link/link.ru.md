# link

Блок `link` используется для создания различных типов ссылок.

## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#pseudo>pseudo</a> | <code>true</code> | <code>BEMJSON</code> | Тип ссылки. |
| <a href=#disabled>disabled</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Неактивное состояние. |
| <a href=#focused>focused</a> | <code>true</code> | <code>BEMJSON</code>, <code>JS</code> | Фокус на блоке. |
| <a href=#theme>theme</a> | <code>islands</code> | <code>BEMJSON</code> | Стилевое оформление. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href="#url">url</a> | <code>String</code> | Адрес ссылки. |
| <a href="#title">title</a> | <code>String</code> | Текст всплывающей подсказки. |
| <a href="#target">target</a> | <code>String</code> | Поведение ссылки. |
| <a href="#tabIndex">tabIndex</a> | <code>Number</code> | Последовательность перехода между кнопками при нажатии на <code>Tab</code>. |

## Обзор блока

Блок `link` предоставляет возможность изменять состояние ссылок, их внешний вид и поведение.

### Модификаторы блока

<a name="pseudo"></a>

#### Модификатор `pseudo`

Допустимое значение: `true`.

Способ использования: `BEMJSON`.

Тип ссылки, при котором поведение блока изменяется: при клике на ссылку происходит вызов какого-либо сценария. Переход на новую страницу не осуществляется.

```javascript
{
    block : 'link',
    mods : { theme : 'islands', pseudo : true },
    content : 'Показать ответ'
}
```

<a name="disabled"></a>

#### Модификатор `disabled`

Допустимое значение: `true`.

Способы использования: `BEMJSON`, `JS`.

Модификатор `disabled` в значении `true` отвечает за неактивное состояние, при котором блок виден, но недоступен для действий пользователя.

```js
{
    block : 'link',
    mods : { theme : 'islands', disabled : true },
    url : 'https://bem.info/',
    content : 'bem.info'
}
```

<a name="focused"></a>

#### Модификатор `focused`

Допустимое значение: `true`

Способы использования: `BEMJSON`, `JS`, выставляется автоматически при нажатии на ссылку.

Модификатор `focused` в значении `true` отвечает за наличие фокуса на блоке.

```javascript
{
    block : 'link',
    mods : { theme : 'islands', focused : true },
    url : 'https://bem.info/',
    content : 'bem.info'
}
```

<a name="theme"></a>

#### Модификатор `theme`

Допустимое значение: `islands`.

Способ использования: `BEMJSON`.

Модификатор `theme` отвечает за стилевое оформление блока.

Без указания модификатора `theme` отображается нативный вид контрола.

```js
{
    block : 'link',
    mods : { theme : 'islands' },
    url : 'https://bem.info/',
    content : 'bem.info'
}
```

### Специализированные поля блока

<a name="url"></a>

#### Поле `url`

Определяет адрес, по которому осуществляется переход при нажатии на ссылку.

<a name="title"></a>

#### Поле `title`

Определяет содержание всплывающей подсказки. Вид такой подсказки зависит от браузера, настроек операционной системы и не может быть изменен с помощью HTML-кода или стилей.

```js
{
    block : 'link',
    mods : { theme : 'islands', pseudo : true },
    title : 'Нажмите на ссылку для получения ответа.'
    content : 'Показать ответ'
}
```

<a name="target"></a>

#### Поле `target`

Определяет поведение ссылки.

```js
{
    block : 'link',
    mods : { theme : 'islands' },
    url : 'https://bem.info/',
    content : 'bem.info',
    target : 'blank'
}
```

<a name="tabIndex"></a>

#### Поле `tabIndex`

Определяет последовательность перехода между ссылками при нажатии на `Tab`.

```js
{
    block : 'link',
    mods : { theme : 'islands' },
    url : 'https://bem.info/',
    content : 'bem.info',
    tabIndex : 1
}
```
