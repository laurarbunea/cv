import quicktube from 'quicktube';

import { tabFocus, initFeatureDetection, initFlexboxSupport } from './utils';
import  collapse  from './components/collapse';
import  tabsController  from './components/tabs';

const IS_IE11 = !window.ActiveXObject && 'ActiveXObject' in window;

const site = {
    /**
     * Initialises the site's modules.
     * Each module defines its own init function, this is just the glue.
     */
    init() {
        initFeatureDetection();
        initFlexboxSupport();
        tabFocus();
        collapse.init();
        tabsController.init();
        quicktube.init();

        if (IS_IE11) {
            document.documentElement.className = `${document.documentElement.className} ie11`;
        }
    },
};

site.init();
