import './tip.styles.scss';

const Tip = ({ text }) => {
  return (
    <div className="tip-container">
      <span className='tip-text'>{text}</span>
    </div>
  )
}

export default Tip;