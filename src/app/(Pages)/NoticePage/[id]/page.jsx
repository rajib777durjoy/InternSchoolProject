import DynamicNoticepage from "@/Component/DynamicNoticePage/DynamicNoticepage";



const page = ({params}) => {
    const {id}=params;
    console.log(id)
    return (
        <div>
            <DynamicNoticepage id={id}></DynamicNoticepage>
        </div>
    );
};

export default page;