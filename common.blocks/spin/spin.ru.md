# spin

Используется для индикации выполнения какого-либо процесса.

## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значение | Способ использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#spinvisible>visible</a> | <code>true</code> | <code>BEMJSON</code> | Активация прелоадера. |
| <a href=#spintheme>theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |
| <a href=#spinsize>size</a> | <code>'xs'</code>, <code>'s'</code>, <code>'m'</code>, <code>'l'</code>, <code>'xl'</code> | <code>BEMJSON</code> | Размер прелоадера. Используется только для прелоадеров с <a href="#spintheme">модификатором theme в значении islands</a>. |

## Обзор блока

### Модификаторы блока

<a name="spinvisible"></a>

#### Модификатор `visible`

Допустимое значение: `true`.

Способ использования: `BEMJSON`.

Модификатор `visible` в значении `true` делает прелоадер видимым.

```js
{
    block : 'spin',
    mods : { theme : 'islands', size : 'm', visible : true }
}
```

<a name="spintheme"></a>
#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способ использования: `BEMJSON`.

Обязательный модификатор, так как у блока отсутствует нативное состояние контрола. Модификатор отвечает за стилевое оформление блока.

При выборе модификатора `theme` в значении `islands` необходимо обязательно указывать модификатор <a href="#spinsize">size</a>.

<a name="spinsize"></a>

#### Модификатор `size`

Допустимые значения для темы `islands`: `'xs'`, `'s'`, `'m'`, `'l'`, `'xl'`.

Способ использования: `BEMJSON`.

Модификатор `size` используется, только если блоку установлен модификатор <a href="#spintheme">theme</a> в значении `islands`.

Задает размер прелоадера.

```js
{
    block : 'spin',
    mods : { theme : 'islands', size : 'xs', visible : true }
}
```

```js
{
    block : 'spin',
    mods : { theme : 'islands', size : 's', visible : true }
}
```

```js
{
    block : 'spin',
    mods : { theme : 'islands', size : 'm', visible : true }
}
```


```js
{
    block : 'spin',
    mods : { theme : 'islands', size : 'l', visible : true }
}
```

```js
{
    block : 'spin',
    mods : { theme : 'islands', size : 'xl', visible : true }
}
```
