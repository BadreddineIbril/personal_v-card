import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='not-found page'>
      <div className="error-content">
        <h1>Looks like you got lost</h1>
        <div className="subtitle">
          <p>Uh-oh! It seems like you've taken a detour into the unknown. Don't worry, we'll help guide you back to familiar territory.</p>
        </div>
        <img src={require('../../assets/images/404.gif')} alt="404" />
        <div className="action">
          <Link to={'/'}>
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
            Lead Me Home
          </Link>
        </div>
      </div>
    </div>
  )
}
