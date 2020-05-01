# PatternFly Element | Documentation element
Encapsulate documentation content, which may be loaded dynamically from an API

## Usage
Describe how best to use this web component along with best practices.

```html
<pfe-documentation>
    <!-- Default slot -->
    <h2>This is pfe-documentation</h2>
    
</pfe-documentation>
```

### Accessibility
Explain how this component meets accessibility standards.

## Slots

- `namedSlot`: Describe each available slot and best practices around what markup it can contain.

## Attributes

- `pfe-loaded`: Describe this attribute and what function is serves.
- `pfe-endpoint`: Describe this attribute and what function is serves.
- `pfe-css`: Describe this attribute and what function is serves.

## Events
Describe any events that are accessible external to the web component. There is no need to describe all the internal-only functions.

### pfe-documentation:change

### pfe-documentation:loaded


## Dependencies
Describe any dependent elements or libraries here too.

## Dev

    `npm start`

## Test

    `npm run test`

## Build

    `npm run build`

## Demo

From the PFElements root directory, run:

    `npm run demo`

## Code style

Documentation (and all PFElements) use [Prettier][prettier] to auto-format JS and JSON. The style rules get applied when you commit a change. If you choose to, you can [integrate your editor][prettier-ed] with Prettier to have the style rules applied on every save.

[prettier]: https://github.com/prettier/prettier/
[prettier-ed]: https://prettier.io/docs/en/editors.html
[web-component-tester]: https://github.com/Polymer/web-component-tester
