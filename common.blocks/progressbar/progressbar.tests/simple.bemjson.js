({
    block : 'page',
    title : 'progressbar',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : {
        block : 'content',
        attrs : { style : 'width: 400px;' },
        content : [
            'theme-simple, size-s: <br><br>',
            {
                block : 'progressbar',
                mods : { theme : 'simple', size : 's', text : true },
                progress : 25
            },
            '<br>theme-simple, size-m: <br><br>',
            {
                block : 'progressbar',
                mods : { theme : 'simple', size : 'm', text : true },
                progress : 88
            },
            '<br>theme-simple, no progress: <br><br>',
            {
                block : 'progressbar',
                mods : { theme : 'simple', size : 's', text : true }
            },
            '<br>theme-simple, no text (77%): <br><br>',
            {
                block : 'progressbar',
                mods : { theme : 'simple', size : 's' },
                progress : 77
            },
            '<br>theme-islands (35%): <br><br>',
            {
                block : 'progressbar',
                mods : { theme : 'islands' },
                progress : 35
            }
        ]
    }
})
