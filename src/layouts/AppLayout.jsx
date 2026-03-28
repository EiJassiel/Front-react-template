function AppLayout({ children }) {
  return (
    <>
      {children}
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default AppLayout
