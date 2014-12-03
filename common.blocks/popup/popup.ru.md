# popup

Используется для блоков, всплывающих поверх остальных слоев страницы.

## Краткая информация

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| <a href=#target>target</a> | <code>'anchor'</code>, <code>'position'</code> | <code>BEMJSON</code> | Точка открытия всплывающего окна. |
| <a href=#visible>visible</a> | <code>true</code> | <code>JS</code> | Видимость всплывающего окна. |
| <a href=#autoclosable>autoclosable</a> | <code>true</code>| <code>BEMJSON</code> | Скрытие всплывающего окна. |
| <a href=#theme>theme</a> | <code>'islands'</code> | <code>BEMJSON</code> | Стилевое оформление. |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href=#directions>directions</a> | <code>Array</code> | Расположение (в порядке приоритета) относительно точки открытия. Используется только для всплывающих окон с модификатором <a href="#popuptarget">target</a>. |
| <a href=#mainOffset>mainOffset</a> | <code>Number</code> | Смещение всплывающего окна относительно основного направления. Используется только для всплывающих окон с модификатором <a href="#popuptarget">target</a>. |
| <a href=#secondaryOffset>secondaryOffset</a> | <code>Number</code>| Смещение всплывающего окна относительно второстепенного направления. Используется только для всплывающих окон с модификатором <a href="#popuptarget">target</a>. |
| <a href=#viewportOffset>viewportOffset</a> | <code>Number</code>| Минимально допустимое смещение всплывающего окна от края окна браузера. Используется только для всплывающих окон с модификатором <a href="#popuptarget">target</a>. |
| <a href=#zIndexGroupLevel>zIndexGroupLevel</a> | <code>Number</code> | Уровень слоя для открывающихся всплывающих окон. Использует блок <a href="../z-index-group/z-index-group.ru.md">z-index-group</a>.|

## Обзор блока

Блок `popup` используется для создания всплывающих блоков поверх остальных слоев страницы. Позволяет изменять их состояние, поведение и внешний вид.

### Модификаторы блока

<a name="target"></a>

#### Модификатор `target`

Допустимые значения: `'anchor'`, `'position'`.

Способ использования: `BEMJSON`.

Модификатор `target` определяет точку открытия всплывающего окна.

<a name="target-anchor"></a>

##### Якорь (модификатор `target` в значении `anchor`)

Модификатор `target` в значении `anchor` позволяет использовать в качестве точки открытия всплывающего окна блок или элемент.

Поддерживает вложенную структуру нескольких одновременно открытых всплывающих окон. Это означает, что из одного всплывающего окна может быть вызвано другое и так далее. При этом при закрытии всплывающего окна все его дочерние окна тоже закрываются.

Для осмысленного применения необходимо использовать метод [setAnchor](http://ru.bem.info/libs/bem-components/v2/desktop/popup/jsdoc/).

##### Координаты (модификатор `target` в значении `position`)

Модификатор `target` в значении `position` позволяет задавать точку открытия всплывающего окна координатами.

Для осмысленного применения необходимо использовать метод [setPosition](http://ru.bem.info/libs/bem-components/v2/desktop/popup/jsdoc/).

<a name="visible"></a>

#### Модификатор `visible`

Допустимое значение: `true`.

Способы использования: `JS`, выставляется автоматически при открытии всплывающего окна.

Модификатор `visible` в значении `true` отвечает за видимость всплывающего окна на странице. Когда окно скрыто, модификатор отсутствует.

<a name="autoclosable"></a>

#### Модификатор `autoclosable`

Допустимое значениt: `true`.

Способ использования: `BEMJSON`.

Модификатор `autoclosable` скрывает блок по клику вне зоны всплывающего окна или по нажатию кнопки `Escape`.

```javascript
{
    block : 'popup',
    mods : { theme : 'islands', autoclosable : true },
    content : ''
}
```

<a name="theme"></a>

#### Модификатор `theme`

Допустимое значение: `'islands'`.

Способ использования: `BEMJSON`.

Модификатор `theme` отвечает за стилевое оформление блока.

Без указания модификатора `theme` отображается нативный вид контрола.

```javascript
{
    block : 'popup',
    mods : { theme : 'islands' },
    content : 'Содержимое всплывающего окна'
}
```

### Специализированные поля блока

<a name="directions"></a>

#### Поле `directions`

Определяет расположение всплывающих окон относительно точки открытия.

Используется только для всплывающих окон с модификатором <a href="#target">target</a>.

<a name="directions-type"></a>
Расположение блока определяется автоматически, исходя из массива допустимых направлений (в порядке приоритета) и положения родителя на странице. У всех допустимых направлений есть основной и второстепенный параметры. Например, для направления `bottom-left` `bottom` является основным параметром, а `left` — второстепенным.

По умолчанию используется следующий массив допустимых направлений:

* bottom-left
* bottom-center
* bottom-right
* top-left
* top-center
* top-right
* right-top
* right-center
* right-bottom
* left-top
* left-center
* left-bottom

Для управления расположением всплывающего окна, укажите массив необходимых направлений открытия. Пользовательский массив нужно передать в качестве JS-параметра с ключом `directions`. При этом из значений массива будет выбрано наиболее подходящее, исходя из положения родителя на странице.

Например, если требуется, чтобы всплывающее окно раскрывалось над родителем:

```javascript
{
    block : 'popup',
    mods : { autoclosable : true, theme: 'islands' },
    directions : ['top-left', 'top-center', 'top-right'],
    content : 'Содержимое всплывающего окна'
}
```

Или если необходимо разместить всплывающее окно справа по центру:

```javascript
{
    block : 'popup',
    mods : { autoclosable : true, theme: 'islands' },
    directions : ['right-center'],
    content : 'Содержимое всплывающего окна'
}
```
<a name="mainOffset"></a>

#### Поле `mainOffset`

Определяет смещение всплывающего окна относительно <a href="#directions-type">основного</a> направления.

Используется только для всплывающего окна с модификатором <a href="#target">target</a>.

```javascript
{
    block : 'popup',
    mods : { autoclosable : true, theme: 'islands' },
    directions : ['right-center'],
    mainOffset : 100,
    content : 'Содержимое всплывающего окна'
}
```

<a name="secondaryOffset"></a>

#### Поле `secondaryOffset`

Определяет смещение всплывающего окна относительно <a href="#directions-type">второстепенного</a> направления.

Используется только для всплывающего окна с модификатором <a href="#target">target</a>.

```javascript
{
    block : 'popup',
    mods : { autoclosable : true, theme: 'islands' },
    directions : ['right-center'],
    secondaryOffset : 100,
    content : 'Содержимое всплывающего окна'
}
```

<a name="viewportOffset"></a>

#### Поле `viewportOffset`

Определяет минимально допустимое смещение всплывающего окна от края окна браузера.

Используется только для всплывающих окон с модификатором <a href="#target">target</a>.

```javascript
{
    block : 'popup',
    mods : { autoclosable : true, theme: 'islands' },
    directions : ['right-center'],
    viewportOffset : 100,
    content : 'Содержимое всплывающего окна'
}
```

<a name="zIndexGroupLevel"></a>

#### Поле `zIndexGroupLevel`

Определяет уровень слоя для каждого всплывающего окна.

Использует блок <a href="../z-index-group/z-index-group.ru.md">z-index-group</a>.
