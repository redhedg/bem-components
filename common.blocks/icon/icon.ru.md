# icon

Используется в качестве графического элемента в других блоках.

## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#social>social</a> | <code>'twitter'</code>, <code>'vk'</code> | <code>BEMJSON</code> | Социальные иконки. |
| <a href=#action>action</a> | <code>'download'</code>, <code>'arrow'</code> | <code>BEMJSON</code> | Иконки действия. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href=#url>url</a> | <code>String</code> | Адрес, по которому подгружается картинка. |

## Обзор блока

Блок `icon` задается через свойство `background`. Поэтому отсутствует возможность использовать резервный вариант отображения при проблемах с применением стилей.

**NB** Чтобы иконка правильно позиционировалась внутри блочного контекста, необходимо прописать родителю свойство `line-height` со значением, равным высоте иконки.

Иконка может быть добавлена через поле `content`:

```js
{
    block : 'icon',
    content : '<svg class="image" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M1 13v2h14v-2h-14zm13-7h-3v-5h-6v5.031l-3-.031 6 6 6-6z"/></svg>'
}
```

### Модификаторы блока

<a name="social"></a>

#### Модификатор `social`

Допустимые значения: `'twitter'`, `'vk'`.

Способ использования: `BEMJSON`.

Модификатор `social` используется для добавления иконок социальных сетей.

```js
{
    block : 'icon',
    mods : { social : 'twitter' }
}
```

```js
{
    block : 'button',
    text : 'Twitter',
    mods : { theme : 'islands', size : 'm' },
    icon :
    {
        block : 'icon',
        mods : { social : 'twitter' }
    }
}
```

<a name="action"></a>

#### Модификатор `action`

Допустимые значения: `'download'`, `'arrow'`.

Способ использования: `BEMJSON`.

Модификатор `action` используется для добавления иконок действия.

```js
{
    block : 'icon',
    mods : { action : 'download' }
}
```

```js
{
    block : 'button',
    text : 'Download',
    mods : { theme : 'islands', size : 'm' },
    icon :
    {
        block : 'icon',
        mods : { action : 'download' }
    }
}
```

### Специализированные поля блока

<a name="url"></a>

#### Поле `url`

Определяет адрес иконки.

```js
{
    block : 'icon',
    url : '../../test.blocks/icon/_action/download.svg'
}
```
