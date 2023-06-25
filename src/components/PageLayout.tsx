import React from 'react'

interface PageLayoutProps {
  children: any;
  className?: any;
}

const PageLayout = ({children, className=""}: PageLayoutProps) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark ${className}`}>
      {children}
    </div>
  )
}

export default PageLayout