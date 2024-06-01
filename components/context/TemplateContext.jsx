'use client'
import { createContext, useContext, useState } from "react";

const TemplateContext = createContext();

export const useTemplate = () => useContext(TemplateContext);

export const TemplateProvider = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useState("WeeklyTemplates");

  return (
    <TemplateContext.Provider value={{ selectedTemplate, setSelectedTemplate }}>
      {children}
    </TemplateContext.Provider>
  );
};
