<?php

return [

    'transformers' => [
        'baseImageURL' => '',
        'inlineCSS' => [
            'enabled' => true,
            'styleToAttribute' => [
                'background-color' => 'bgcolor',
                'background-image' => 'background',
                'text-align' => 'align',
                'vertical-align' => 'valign',
            ],
            'applySizeAttribute' => [
                'width' => ['TABLE', 'TD', 'TH', 'IMG', 'VIDEO'],
                'height' => ['TABLE', 'TD', 'TH', 'IMG', 'VIDEO'],
            ],
            'excludedProperties' => [],
        ],
        'cleanup' => [
            'removeUnusedCss' => [
                'enabled' => true,
                'whitelist' => [
                    ".External*",
                    ".ReadMsgBody",
                    ".yshortcuts",
                    ".Mso*",
                    "#outlook",
                ],
                'removeHTMLComments' => [
                    'enabled' => false,
                    'preserve' => ['if', 'endif', 'mso', 'ie'],
                ],
                'uglifyClassNames' => false,
            ],
            'keepOnlyAttributeSizes' => [
                'width' => ['TABLE', 'TD', 'TH', 'IMG', 'VIDEO'],
                'height' => ['TABLE', 'TD', 'TH', 'IMG', 'VIDEO'],
            ],
            'preferBgColorAttribute' => true,
        ],
        'prettify' => true,
        'minify' => [
            'minifyCSS' => false,
            'maxLineLength' => false,
            'preserveLineBreaks' => false,
            'collapseWhitespace' => false,
            'conservativeCollapse' => false,
        ],
        'sixHex' => true,
        'altText' => true,
    ],

    'plaintext' => false,

    'baseUrl' => '',
    'production' => true,
    'build' => [
        'source' => 'source',
        'destination' => 'dist',
    ],
];
