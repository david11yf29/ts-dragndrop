// Code goes here!
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  
  constructor() {
    this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;
    console.log('TemplateElement', this.templateElement);

    const importNode = document.importNode(this.templateElement.content, true)
    console.log('ImportNode', importNode);

    this.element = importNode.firstElementChild as HTMLFormElement;
    console.log('FirstElement for importNode', this.element);
    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const prjInput = new ProjectInput();

