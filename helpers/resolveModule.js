const resolveModule = (scope, module) => 
    () =>
        window[scope].get(`./${module}`)
            .then((factory) => {
                const Module = factory();
                return Module;
            })
            .catch((error) => {
                console.error(error);
            });

export default resolveModule;