import React from 'react'
import Style from './RoundWishBox.module.css'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'

const RoundWishBox = ({ text }) => {
    return (
        <>
        <Helmet>
        <title>{text}</title>
        </Helmet>
        <section>
            <div className={Style['round-wish-box']}>
                <div className={Style['label']}>
                    <h4 className="display-4">{text}</h4>
                </div>
            </div>
        </section>
        </>
    )
}

RoundWishBox.propTypes = {
    text: PropTypes.string
}

RoundWishBox.defaultProps = {
    text: "Happy New Year!!!"
}

export default RoundWishBox;