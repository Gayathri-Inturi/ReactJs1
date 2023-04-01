import React, { useState } from 'react';

function TabComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleTabClick(0)} className={activeTab === 0 ? 'active' : ''}>
          Tab 1
        </button>
        <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>
          Tab 2
        </button>
        <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''}>
          Tab 3
        </button>
      </div>
      <div>
        <div style={{ display: activeTab === 0 ? 'block' : 'none' }}>
          Panel 1
        </div>
        <div style={{ display: activeTab === 1 ? 'block' : 'none' }}>
          Panel 2
        </div>
        <div style={{ display: activeTab === 2 ? 'block' : 'none' }}>
          Panel 3
        </div>
      </div>
    </div>
  );
}

export default TabComponent;

