
import { useEffect, useState } from "react";
const useInstructor = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        const url = `./Instructor.JSON`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, []);
    return [instructors];
};

export default useInstructor;