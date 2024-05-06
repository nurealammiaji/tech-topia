import './SectionHeading.css';

const SectionHeading = ({ heading }) => {
    return (
        <div className='section-heading'>
            <h3 className='heading'>{heading}</h3>
        </div>
    );
};

export default SectionHeading;