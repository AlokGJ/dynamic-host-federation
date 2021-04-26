const resolveModule = (scope, module) => 
    () =>
        window[scope].get(`./${module}`)
            .then((factory) => factory())
            .catch((error) => {
                console.error(error);
            });

export default resolveModule;