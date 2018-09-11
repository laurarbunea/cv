import { querySelectArray } from '../utils';

const TRIGGER_ACTIVE_CLASS = 'tabs__btn--active';
const HIDE_CONTENT_CLASS = 'tabs__content--hidden';

const KEYCODE = {
    RIGHT: 39,
    LEFT: 37,
};

const showActiveContent = (triggerEl, tabContent) => {
    triggerEl.classList.add(TRIGGER_ACTIVE_CLASS);
    triggerEl.setAttribute('aria-expanded', true);
    tabContent.classList.remove(HIDE_CONTENT_CLASS);
};

class Tabs {

    constructor(tabGroup) {
        this.tabs = tabGroup;
        this.tabTriggers = querySelectArray('[data-tab-trigger]', this.tabs);
        this.tabContents = querySelectArray('[data-tab-content]', this.tabs);

        this.onClick = this.onClick.bind(this);
        this.onKeydown = this.onKeydown.bind(this);
        this.addAriaAttributes = this.addAriaAttributes.bind(this);
        this.resetActiveStates = this.resetActiveStates.bind(this);

        this.addAriaAttributes();

        this.tabTriggers.forEach((trigger) => {
            trigger.addEventListener('click', this.onClick);
            trigger.addEventListener('keydown', this.onKeydown);
        });

        let activeTrigger = this.tabTriggers[0];
        let activeContents = this.tabContents[0];

        // Not ideal if there are duplicated ids on one page. Will open both blocks of content from the one hash
        // This is an edge case and an adequate solution since we don't have unique ids.
        if (window.location.hash) {
            const locationHashEl = this.tabs.querySelector(window.location.hash);
            const locationHashTrigger = this.tabs.querySelector(`[href='${window.location.hash}']`);

            if (locationHashEl) {
                activeTrigger = locationHashTrigger;
                activeContents = locationHashEl;
            }
        }

        this.resetActiveStates();
        showActiveContent(activeTrigger, activeContents);
    }

    onClick(event) {
        const trigger = event.target.closest('[data-tab-trigger]');
        const href = trigger.getAttribute('href');
        event.preventDefault();
        event.stopPropagation();

        history.replaceState({}, '', href);

        this.tabTriggers.filter(t => t !== trigger)
            .forEach(t => t.classList.remove(TRIGGER_ACTIVE_CLASS));

        if (!trigger.classList.contains(TRIGGER_ACTIVE_CLASS)) {
            const tabContentItem = this.tabs.querySelector(href);
            this.resetActiveStates();
            showActiveContent(trigger, tabContentItem);
        }
    }

    onKeydown(event) {
        switch (event.keyCode) {
        case KEYCODE.RIGHT:
            this.handleArrowKeyPress(event.target.nextElementSibling);
            break;
        case KEYCODE.LEFT:
            this.handleArrowKeyPress(event.target.previousElementSibling);
            break;
        default:
            break;
        }
    }

    handleArrowKeyPress(sibling) {
        // Function receives a read only sibling node so need to grab matching
        // element from stored triggers in order to handle display toggling
        this.tabTriggers.forEach((trigger) => {
            if (trigger === sibling) {
                const href = trigger.getAttribute('href');
                this.resetActiveStates();
                showActiveContent(trigger, this.tabs.querySelector(href));
                trigger.focus();
            }
        });
    }

    addAriaAttributes() {
        this.tabTriggers.forEach((trigger) => {
            const href = trigger.getAttribute('href');
            const controlId = href.replace('#', '');
            trigger.setAttribute('role', 'tab');
            trigger.setAttribute('aria-controls', controlId);

            if (trigger.classList.contains(TRIGGER_ACTIVE_CLASS)) {
                const tabContentItem = this.tabs.querySelector(href);
                showActiveContent(trigger, tabContentItem);
            } else {
                trigger.setAttribute('aria-expanded', false);
            }
        });

        this.tabContents.forEach((content) => {
            content.setAttribute('role', 'tabpanel');
        });
    }

    resetActiveStates() {
        this.tabTriggers.forEach((trigger) => {
            trigger.classList.remove(TRIGGER_ACTIVE_CLASS);
            trigger.setAttribute('aria-expanded', false);
        });

        this.tabContents.forEach((content) => {
            content.classList.add(HIDE_CONTENT_CLASS);
        });
    }
}


const tabs = {
    init() {
        const tabGroups = querySelectArray('[data-tabs]');

        return tabGroups.map(tabGroup => new Tabs(tabGroup));
    },
};


export default tabs;
