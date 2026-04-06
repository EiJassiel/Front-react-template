import React, { createContext, useState } from 'react'

export const DocumentationContext = createContext()

export function DocumentationProvider({ children }) {
  const [selectedSection, setSelectedSection] = useState('quick-start')
  const [selectedItem, setSelectedItem] = useState('instalacion')

  return (
    <DocumentationContext.Provider
      value={{
        selectedSection,
        setSelectedSection,
        selectedItem,
        setSelectedItem,
      }}
    >
      {children}
    </DocumentationContext.Provider>
  )
}
