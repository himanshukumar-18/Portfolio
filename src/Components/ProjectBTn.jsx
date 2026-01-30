const ProjectBTn = ({ links }) => {
    return (
        <>
            <a
                href={links}
                target="_blank"
                className="linkBtn outline-1 px-[30px] py-[10px] rounded-[5px] text-[#ffffff] text-[.9rem] hover:outline-[#f9004d] hover:bg-[#f9004d] duration-200 uppercase"
            >
                Live Preview
            </a>
        </>
    );
};

export default ProjectBTn;
