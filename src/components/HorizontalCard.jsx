import PropTypes from 'prop-types';

export default function HorizontalCard({ content }) {

    return (
        <div className="flex gap-[38px] items-center">
            <div className="w-[55px] h-[40px]"><img src={content.icon} /></div>
            <div className="max-w-[223px] flex flex-col gap-[10px]">
                <p className="font-bold text-[20px]">{content.title}</p>
                <p className="font-extralight text-[14px]">{content.text}</p>
            </div>
        </div>
    )
}

HorizontalCard.propTypes = {
    content: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired
};