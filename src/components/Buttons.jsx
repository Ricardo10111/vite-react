export default function Buttons() {
    const buttons = [
      'Get Started',
      'Why Vite?',
      'View on GitHub',
      '🎉 ViteConf 23!'
    ]
  
    return (
      <div id='buttons-list'>
        {buttons.map((button) => {
          return (
            <p key={`button-${button}`} className='button'>
              {button}
            </p>
          )
        })}
      </div>
    )
  }