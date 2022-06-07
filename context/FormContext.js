import { createContext, useContext, useState, useMemo } from 'react';

const FormContext = createContext({ name: '', setName: () => { } });

export function useFormContext() {
    return useContext(FormContext)
}

export const FormProvider = function ({ children }) {
    const [name, setName] = useState('');

    const value = useMemo(() => ({ name, setName }), [name]);

    return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}