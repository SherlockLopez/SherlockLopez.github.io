import { v4 as uuid } from 'uuid';

export default {
    'root': {
        'static': {
            'modules': {
                'buttons.html': uuid(),
            },
            'css': {
                'normalize.css': uuid(),
                'skeleton.css': uuid(),
            },
            'pages': {
                'H5.html': uuid(),
                'Home.html': uuid(),
                'Limited.html': uuid(),
                'Index.html': uuid(),
            }
        }
    }
}