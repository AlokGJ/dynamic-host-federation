import React, { lazy, Suspense } from 'react';
import useInjectScript from './helpers/useInjectScript';
import resolveModule from './helpers/resolveModule';
const DynamicComponent = (props) => {
    const { scriptReady, scriptFailed } = useInjectScript({
      url: props.config && props.config.url,
    });
  
    if (!props.config) {
      return <h2>No Config specified</h2>;
    }
  
    if (!scriptReady) {
      return <h2>Loading dynamic script: {props.config.url}</h2>;
    }
  
    if (scriptFailed) {
      return <h2>Failed to load dynamic script: {props.config.url}</h2>;
    }
  
    const Component = lazy(
        resolveModule(props.config.scope, props.config.module)
    );
  
    return (
      <Suspense fallback="Loading System">
        <Component />
      </Suspense>
    );
}

export default DynamicComponent;
