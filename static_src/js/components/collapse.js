import { querySelectArray } from '../utils';

const ACTIVE_CLASS = 'collapse--in';
const ACTIVE_CLASS_EXIT = 'collapse--exit';

export default {
    init() {
        this.triggers = querySelectArray('[data-collapse-trigger]');

        if (this.triggers.length > 0) {
            this.triggers.forEach((trigger) => {
                trigger.addEventListener('click', this.handleClick.bind(this, trigger));
            });

            if (location.hash !== '#' && !location.hash.match(/^#+$/) && location.hash) {
                const el = document.querySelector(location.hash);

                if (el) {
                    el.classList.add(ACTIVE_CLASS);
                    this.toggleAriaStates(true, el);
                }

                if (location.hash === '#__debug__') {
                    this.triggers.forEach((trigger) => {
                        const href = trigger.getAttribute('href');
                        this.openContent(document.querySelector(href));
                    });
                }
            }
        }
    },

    handleTransition(container) {
        container.classList.add(ACTIVE_CLASS_EXIT);

        const onEndTransition = () => {
            container.removeEventListener('animationend', onEndTransition);
            container.classList.remove(ACTIVE_CLASS_EXIT);
        };

        container.addEventListener('animationend', onEndTransition);
    },

    openContent(item) {
        item.classList.add(ACTIVE_CLASS);
        this.toggleAriaStates(true, item);
    },

    closeContent(item) {
        this.toggleAriaStates(false, item);
        item.classList.add(ACTIVE_CLASS_EXIT);
        item.classList.remove(ACTIVE_CLASS);

        this.handleTransition(item);
    },

    handleClick(trigger, e) {
        const href = trigger.getAttribute('href');
        const container = document.querySelector(href);

        e.preventDefault();

        if ('history' in window) {
            history.replaceState({}, '', href);
        }

        if (container.classList.contains(ACTIVE_CLASS)) {
            this.closeContent(container);
        } else {
            this.openContent(container);
        }
    },

    toggleAriaStates(active, item) {
        const content = item.querySelector('[data-collapse-content]');
        const trigger = item.querySelector('[data-collapse-trigger]');
        const slug = item.id.replace('href-', '');

        if (content) {
            trigger.setAttribute('aria-controls', `control-${slug}`);
            content.setAttribute('aria-labelledby', `label-${slug}`);

            trigger.setAttribute('aria-expanded', active);
            content.setAttribute('aria-hidden', !active);
        }
    },
};
