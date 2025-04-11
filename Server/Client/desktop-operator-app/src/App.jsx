import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [newData, setNewData] = useState( {
    isActorVisible: false,
    screenSize: 0,
    toneDifference: 0,
    screenPosition: { x: 0, y: 0 },
    distance: 0,
    speed: 0,
    screenTime: 0,
    lastAppearanceTime: 0,
    objectName: '',
    objectAttentionEstimation: '0%',
    gameTime: {
      hours: 0,
      minutes: 0,
      seconds: 0,
      frames: 0,
      subframe: 0,
      bDropFrameFormat: false
    }
  },
  )

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080')

    socket.onmessage = ({ data }) => {
      console.log('Message from the server: ', data)
      const tmp = JSON.parse(data)
      setNewData(tmp)
    }

    return () => socket.close()
  }, [])

  return (
    <div className="App" >
      <table style={{ textAlign: 'right', borderCollapse: 'collapse' }}>
        <tbody>
          <tr><th>IsActorVisible</th><td>{String(newData.isActorVisible)}</td></tr>
          <tr><th>ScreenSize</th><td>{newData.screenSize}</td></tr>
          <tr><th>ToneDifference</th><td>{newData.toneDifference}</td></tr>
          <tr><th>ScreenPosition</th><td>X: {newData.screenPosition.x}, Y: {newData.screenPosition.y}</td></tr>
          <tr><th>Distance</th><td>{newData.distance}</td></tr>
          <tr><th>Speed</th><td>{newData.speed}</td></tr>
          <tr><th>ScreenTime</th><td>{newData.screenTime}</td></tr>
          <tr><th>LastAppearanceTime</th><td>{newData.lastAppearanceTime}</td></tr>
          <tr><th>ObjectName</th><td>{newData.objectName}</td></tr>
          <tr><th>AttentionEstimation</th><td>{newData.objectAttentionEstimation}</td></tr>
          <tr>
            <th>GameTime</th>
            <td>
              {newData.gameTime.hours}h {newData.gameTime.minutes}m {newData.gameTime.seconds}s<br />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
