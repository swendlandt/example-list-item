import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import StandardListItem from "@ui5/webcomponents/dist/StandardListItem.js";

// Template
import ExampleListItemTemplate from "./generated/templates/ExampleListItemTemplate.lit";

@customElement({
	tag: "example-list-item",
	renderer: litRender,
	template: ExampleListItemTemplate,
	dependencies: [StandardListItem],
})
class ExampleListItem extends StandardListItem {

	@property()
	text!: string;
}

ExampleListItem.define();

export default ExampleListItem;
