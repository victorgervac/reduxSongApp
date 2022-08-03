import PropTypes from 'prop-types'

const ButtonLoader = ({ title }) => {
  return (
    <div id="loader-button" className='flex justify-center'>
      <div className='flex p-4 disabled:opacity-75 bg-blue-500 leading-5 rounded-full font-semibold'>
        <button disabled type="submit" className='ml-0'
        // className='p-3 disabled:opacity-75 bg-blue-500 leading-5 rounded-full font-semibold mt-6 pr-10'
        >
          {title}
        </button>
        <span className="disabled:opacity-75 pl-3 pt-2">
          <span className="snippet" data-title=".dot-stretching">
            <div className="stage">
              <div className="dot-stretching"></div>
            </div>
          </span>
        </span>
      </div>
    </div>
  )
}

ButtonLoader.propTypes = {
  title: PropTypes.string.isRequired,
}
export default ButtonLoader

