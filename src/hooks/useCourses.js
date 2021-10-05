// Custom hook for course ui
import { useState } from "react";
import { useEffect } from "react";
const useCourses = (option) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const url = `./Course.JSON`
        fetch(url)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return option ? [courses.slice(0, 4)] : [courses];
};

export default useCourses;