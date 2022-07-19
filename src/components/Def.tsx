import React from 'react'

type MyComponentProps = React.PropsWithChildren<{}>;

function Def({ children, ...other }: MyComponentProps): JSX.Element {
  return (
    <main>
      <div className="App-Div">
        {children}

      </div>


    </main>
  )
}

export default Def 