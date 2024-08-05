import React from 'react';

interface MainContentProps {
  fullWidth?: boolean;  // Optional boolean to determine if the content should be full width
  children: React.ReactNode;
}

const MainContent = ({ fullWidth = false, children }: MainContentProps) => {
    const paddingClass = fullWidth ? 'px-0' : 'px-8';  // Conditional class based on the fullWidth prop
    return (
        <main className={`pb-10 ${paddingClass} min-h-screen bg-gray-100`}>
            <div className={`${ !fullWidth && "container mx-auto" } `}>
                {children}
            </div>
        </main>
    );
};

export default MainContent;
