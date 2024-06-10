import PropTypes from 'prop-types';


export default function SmallCard({ content }) {

    return (
        <div className="size-[140px] border-white border-2 rounded-2xl flex flex-col gap-[21px] items-center justify-center text-center">
            <img className="size-[20px]" src={content.icon} />
            <div>
                <p className="font-bold text-[14px]">{content.title}</p>
                <p className="font-light text-[14px]">{content.text}</p>
            </div>

        </div>
    )
}

SmallCard.propTypes = {
    content: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired
};