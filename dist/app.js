"use strict";
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        console.log('TemplateElement', this.templateElement);
        const importNode = document.importNode(this.templateElement.content, true);
        console.log('ImportNode', importNode);
        this.element = importNode.firstElementChild;
        console.log('FirstElement for importNode', this.element);
        this.attach();
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
const prjInput = new ProjectInput();
//# sourceMappingURL=app.js.map