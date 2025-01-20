import { createContext, useState } from 'react';

type SelectedTab = 'all' | 'liked';

interface TabContextProps {
  selectedTab: SelectedTab;
  setSelectedTab: React.Dispatch<React.SetStateAction<SelectedTab>>;
}

const TabContext = createContext<TabContextProps | undefined>(undefined);

export const TabProvider = ({ children }: React.PropsWithChildren) => {
  const [selectedTab, setSelectedTab] = useState<SelectedTab>('all');

  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </TabContext.Provider>
  );
};

export default TabContext;
