# Dynamic Host Federation

## Installation
```npm i -S dynamic-host-federation```

## Usage
```javascript
import React from 'react';
import { DynamicComponent } from 'dynamic-host-federation';

const DummyComponent = (props) => (
    <DynamicComponent config={{
            url: 'http(s)://<cdn-url>/remoteEntry.js'
            scope: '<module_scope>',
            module: '<module_name>'
        }}
    />
);
```