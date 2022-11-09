import waves from '../img/waves.svg'
import woods from '../img/woods.svg'

function Map() {

    const names = [
      {
        id: 1,
        firstImg: waves,
        title: 'This img is so beautiful',
        address: 'London ...'
      },
      {
        id: 2,
        firstImg: woods,
        title: '2131aaa',
        address: 'Forest ...'
      }
    ]
  
    return (
      <div className="App">
  
        {
          names.map((name) => (
            <>
              <img alt={name.id} src={name.firstImg}/>
              <p key={name.id}>{name.title}</p>
              <p key={name.id}>{name.address}</p>
            </>
          ))
        }
        </div>
    )
}

export default Map