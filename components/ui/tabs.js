import React, { createContext, useContext, useState } from "react";

const TabsContext = createContext(null);

/**
 * Minimal Tabs implementation compatible with `@/components/ui/tabs`
 * Supports controlled (`value` / `onValueChange`) and uncontrolled (`defaultValue`) usage.
 */
export function Tabs({ value: controlledValue, defaultValue, onValueChange, className = "", children, ...props }) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? null);
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const setValue = (next) => {
    if (onValueChange) {
      onValueChange(next);
    }
    if (controlledValue === undefined) {
      setInternalValue(next);
    }
  };

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabsList({ className = "", children, ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export function TabsTrigger({ value, className = "", children, ...props }) {
  const ctx = useContext(TabsContext);
  if (!ctx) {
    throw new Error("TabsTrigger must be used within <Tabs>");
  }
  const isActive = ctx.value === value;

  return (
    <button
      type="button"
      data-state={isActive ? "active" : "inactive"}
      onClick={() => ctx.setValue(value)}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, className = "", children, ...props }) {
  const ctx = useContext(TabsContext);
  if (!ctx) {
    throw new Error("TabsContent must be used within <Tabs>");
  }

  if (ctx.value !== value) {
    return null;
  }

  return (
    <div
      data-state="active"
      className={className}
      {...props}
    >
      {children}
    </div>
  );
}

export default Tabs;
