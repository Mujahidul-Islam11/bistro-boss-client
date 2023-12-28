/* eslint-disable react/prop-types */


const SectionTitle = ({heading, subTitle}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-6">
            <h3 className="text-xl text-amber-500 uppercase">---{heading}---</h3>
            <h3 className="text-3xl border-y-4 py-4 uppercase font-bold">{subTitle}</h3>
        </div>
    );
};

export default SectionTitle;