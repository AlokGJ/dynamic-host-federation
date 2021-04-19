import React, { lazy, Suspense } from 'react';
import useInjectScript from './helpers/useInjectScript';
import resolveModule from './helpers/resolveModule';
const DynamicComponent = (props) => {
    const { scriptReady, scriptFailed } = useInjectScript({
      url: props.system && props.system.url,
    });
  
    if (!props.system) {
      return <h2>Not system specified</h2>;
    }
  
    if (!scriptReady) {
      return <h2>Loading dynamic script: {props.system.url}</h2>;
    }
  
    if (scriptFailed) {
      return <h2>Failed to load dynamic script: {props.system.url}</h2>;
    }
  
    const Component = lazy(
        resolveModule(props.system.scope, props.system.module)
    );
  
    return (
      <Suspense fallback="Loading System">
        <Component />
      </Suspense>
    );
}

export default DynamicComponent;
