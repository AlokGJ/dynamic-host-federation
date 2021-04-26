# Dynamic Host Federation

## Installation
```npm i -S dynamic-host-federation```

## Usage
```javascript
import React from 'react';
import { Loader } from 'semantic-ui-react';
import { ErrorBoundary } from 'components';
import { DynamicComponent } from 'dynamic-host-federation';

const DummyComponent = (props) => (
    <ErrorBoundary>
        <DynamicComponent
            config={{
                url: 'http(s)://<cdn-url>/remoteEntry.js',
                scope: '<module_scope>',
                module: '<module_name>'
            }}
            lazyFallback={<Loader>Loading Dynamic Component(Micro-Frontend)</Loader>}
        />
    </ErrorBoundary>
);
```